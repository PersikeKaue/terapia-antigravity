import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PurchaseStatus } from "@prisma/client";

/**
 * POST /api/webhooks/payment
 *
 * Recebe postback de gateways de pagamento (Hotmart, Kiwify, Stripe, etc.)
 * e libera o acesso do cliente ao produto.
 *
 * Passos do fluxo:
 * 1. Verificar assinatura do webhook (HMAC/token) para segurança
 * 2. Normalizar o payload do gateway para campos internos
 * 3. Criar ou atualizar a Purchase no banco de dados
 * 4. [TODO: Evolution API] Enviar link de acesso via WhatsApp
 * 5. [TODO: Typebot] Iniciar fluxo de onboarding automatizado
 */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // ── STEP 1: Verificar assinatura ──────────────────────────────────────────
        // TODO: implementar verificação de assinatura HMAC por gateway
        // Exemplo Hotmart: hotmart-hottok header
        // Exemplo Kiwify: x-kiwify-token header
        // Exemplo Stripe: stripe-signature header (usando stripe.webhooks.constructEvent)
        //
        // const signature = req.headers.get("hotmart-hottok");
        // if (signature !== process.env.HOTMART_WEBHOOK_SECRET) {
        //   return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
        // }

        // ── STEP 2: Normalizar payload ────────────────────────────────────────────
        // Cada gateway tem estrutura diferente — adapte conforme necessário
        const {
            event,           // Ex: "PURCHASE_COMPLETE" | "payment.success"
            email,           // E-mail do comprador
            name,            // Nome do comprador
            phone,           // Telefone (para WhatsApp)
            productSlug,     // Ex: "mesa-radionica-abundancia"
            gatewayPaymentId, // ID único da transação no gateway
            gatewayName,     // "hotmart" | "kiwify" | "stripe"
            amount,          // Valor pago em centavos (ou decimal)
        } = normalizePayload(body);

        // Ignorar eventos que não são de pagamento confirmado
        if (!isPaidEvent(event, gatewayName)) {
            return NextResponse.json(
                { message: "Event ignored", event },
                { status: 200 }
            );
        }

        // ── STEP 3: Criar/atualizar no banco ──────────────────────────────────────
        // Upsert user (cria se não existir)
        const user = await prisma.user.upsert({
            where: { email },
            update: { name: name || undefined, phone: phone || undefined },
            create: { email, name, phone },
        });

        // Buscar produto
        const product = await prisma.product.findUnique({
            where: { slug: productSlug },
        });

        if (!product) {
            console.error(`[Webhook] Product not found: ${productSlug}`);
            return NextResponse.json(
                { error: "Product not found", slug: productSlug },
                { status: 404 }
            );
        }

        // Upsert purchase
        await prisma.purchase.upsert({
            where: { gatewayPaymentId },
            update: { status: PurchaseStatus.PAID, paidAt: new Date() },
            create: {
                userId: user.id,
                productId: product.id,
                gatewayPaymentId,
                gatewayName,
                status: PurchaseStatus.PAID,
                amount: amount ? amount / 100 : product.price,
                paidAt: new Date(),
            },
        });

        // ── STEP 4: [TODO] Evolution API — Enviar credenciais via WhatsApp ────────
        //
        // const appUrl = process.env.NEXT_PUBLIC_APP_URL;
        // const loginUrl = `${appUrl}/login`;
        // const message =
        //   `🌿 *Parabéns, ${name}!* Seu acesso à *${product.name}* foi liberado!\n\n` +
        //   `Acesse sua área de cliente em:\n${loginUrl}\n\n` +
        //   `Use o e-mail *${email}* para fazer login via Link Mágico.\n\n` +
        //   `Qualquer dúvida, estamos aqui! 💚`;
        //
        // await fetch(`${process.env.EVOLUTION_API_URL}/message/sendText/${process.env.EVOLUTION_INSTANCE_NAME}`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "apikey": process.env.EVOLUTION_API_KEY!,
        //   },
        //   body: JSON.stringify({
        //     number: phone.replace(/\D/g, ""), // Apenas dígitos
        //     text: message,
        //   }),
        // });

        // ── STEP 5: [TODO] Typebot — Iniciar fluxo de onboarding ─────────────────
        //
        // await fetch(`${process.env.TYPEBOT_API_URL}/api/v1/sendMessage`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": `Bearer ${process.env.TYPEBOT_API_KEY}`,
        //   },
        //   body: JSON.stringify({
        //     startParams: {
        //       typebot: "onboarding-mesa-radionica",
        //       prefilledVariables: { email, name, productName: product.name, loginUrl },
        //     },
        //   }),
        // });

        console.log(`[Webhook] ✅ Purchase confirmed: ${email} → ${product.name}`);

        return NextResponse.json(
            { success: true, message: "Access granted" },
            { status: 200 }
        );
    } catch (error) {
        console.error("[Webhook] Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function normalizePayload(body: Record<string, unknown>) {
    // Generic normalization — extend per gateway
    // Hotmart shape example:
    if (body?.data && typeof body.data === "object") {
        const data = body.data as Record<string, unknown>;
        const buyer = (data?.buyer as Record<string, unknown>) ?? {};
        const purchase = (data?.purchase as Record<string, unknown>) ?? {};
        const product = (data?.product as Record<string, unknown>) ?? {};

        return {
            event: body.event as string,
            email: buyer.email as string,
            name: buyer.name as string,
            phone: buyer.checkout_phone as string,
            productSlug: (product.ucode ?? product.name ?? "").toString().toLowerCase().replace(/\s+/g, "-"),
            gatewayPaymentId: (purchase.transaction as string) ?? "",
            gatewayName: "hotmart",
            amount: (purchase.original_offer_price as { value: number })?.value ?? 0,
        };
    }

    // Fallback — direct payload (for testing / Stripe)
    return {
        event: body.event as string ?? "payment.success",
        email: body.email as string ?? "",
        name: body.name as string ?? "",
        phone: body.phone as string ?? "",
        productSlug: body.productSlug as string ?? "",
        gatewayPaymentId: body.gatewayPaymentId as string ?? `manual-${Date.now()}`,
        gatewayName: body.gatewayName as string ?? "manual",
        amount: body.amount as number ?? 0,
    };
}

function isPaidEvent(event: string, gatewayName: string): boolean {
    const paidEvents: Record<string, string[]> = {
        hotmart: ["PURCHASE_COMPLETE", "PURCHASE_APPROVED"],
        kiwify: ["order.approved", "order.completed"],
        stripe: ["checkout.session.completed", "payment_intent.succeeded"],
        manual: ["payment.success"],
    };
    const allowedEvents = paidEvents[gatewayName] ?? paidEvents.manual;
    return allowedEvents.includes(event);
}
