import { PrismaClient, PurchaseStatus, MaterialType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("🌿 Seeding database...");

    // Create a demo therapist user
    const therapist = await prisma.user.upsert({
        where: { email: "terapeuta@terapiaantigravity.com.br" },
        update: {},
        create: {
            name: "Ana Clara Holística",
            email: "terapeuta@terapiaantigravity.com.br",
            phone: "+5511999999999",
        },
    });

    // Create a demo client user
    const client = await prisma.user.upsert({
        where: { email: "cliente@example.com" },
        update: {},
        create: {
            name: "Maria Silva",
            email: "cliente@example.com",
            phone: "+5511888888888",
        },
    });

    // Create products (mesas radiônicas)
    const mesaAbundancia = await prisma.product.upsert({
        where: { slug: "mesa-radionica-abundancia" },
        update: {},
        create: {
            name: "Mesa Radiônica da Abundância",
            slug: "mesa-radionica-abundancia",
            description:
                "Uma poderosa mesa radiônica para atrair prosperidade, abundância financeira e novas oportunidades para sua vida. Trabalha os campos energéticos relacionados ao fluxo de riqueza e gratidão.",
            shortDesc: "Prosperidade e fluxo de riqueza",
            price: 197.0,
            imageUrl: "/images/mesa-abundancia.jpg",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 1,
        },
    });

    const mesaAmor = await prisma.product.upsert({
        where: { slug: "mesa-radionica-amor" },
        update: {},
        create: {
            name: "Mesa Radiônica do Amor e Cura",
            slug: "mesa-radionica-amor",
            description:
                "Mesa voltada para cura emocional, fortalecimento de vínculos afetivos e abertura do coração para o amor verdadeiro. Ideal para quem busca se reconectar consigo mesmo.",
            shortDesc: "Cura emocional e vínculos afetivos",
            price: 247.0,
            imageUrl: "/images/mesa-amor.jpg",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 2,
        },
    });

    const mesaProtecao = await prisma.product.upsert({
        where: { slug: "mesa-radionica-protecao" },
        update: {},
        create: {
            name: "Mesa Radiônica de Proteção",
            slug: "mesa-radionica-protecao",
            description:
                "Mesa radiônica para criar escudo energético e proteção contra energias negativas. Fortalece o campo áurico e traz equilíbrio e segurança energética.",
            shortDesc: "Escudo energético e equilíbrio",
            price: 197.0,
            imageUrl: "/images/mesa-protecao.jpg",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            order: 3,
        },
    });

    // Add materials to Mesa da Abundância
    await prisma.material.createMany({
        skipDuplicates: true,
        data: [
            {
                productId: mesaAbundancia.id,
                name: "Manual de Ativação da Mesa.pdf",
                fileUrl: "/downloads/manual-ativacao-abundancia.pdf",
                fileType: MaterialType.PDF,
                sizeBytes: 2048000,
                order: 1,
            },
            {
                productId: mesaAbundancia.id,
                name: "Protocolo de Uso Diário.pdf",
                fileUrl: "/downloads/protocolo-diario-abundancia.pdf",
                fileType: MaterialType.PDF,
                sizeBytes: 1024000,
                order: 2,
            },
            {
                productId: mesaAbundancia.id,
                name: "Meditação Guiada de Ativação.pdf",
                fileUrl: "/downloads/meditacao-abundancia.pdf",
                fileType: MaterialType.PDF,
                sizeBytes: 512000,
                order: 3,
            },
        ],
    });

    // Add materials to Mesa do Amor
    await prisma.material.createMany({
        skipDuplicates: true,
        data: [
            {
                productId: mesaAmor.id,
                name: "Manual Completo - Mesa do Amor.pdf",
                fileUrl: "/downloads/manual-amor.pdf",
                fileType: MaterialType.PDF,
                sizeBytes: 3072000,
                order: 1,
            },
            {
                productId: mesaAmor.id,
                name: "Afirmações e Decretos.pdf",
                fileUrl: "/downloads/afirmacoes-amor.pdf",
                fileType: MaterialType.PDF,
                sizeBytes: 768000,
                order: 2,
            },
        ],
    });

    // Create a demo purchase (client has access to Mesa da Abundância)
    await prisma.purchase.upsert({
        where: { gatewayPaymentId: "DEMO-PURCHASE-001" },
        update: {},
        create: {
            userId: client.id,
            productId: mesaAbundancia.id,
            gatewayPaymentId: "DEMO-PURCHASE-001",
            gatewayName: "demo",
            status: PurchaseStatus.PAID,
            amount: 197.0,
            paidAt: new Date(),
        },
    });

    console.log("✅ Seed complete!");
    console.log(`   👤 Demo client: cliente@example.com`);
    console.log(`   🌿 Products created: 3 mesas radiônicas`);
    console.log(`   📦 Purchase: Maria Silva → Mesa da Abundância`);
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
