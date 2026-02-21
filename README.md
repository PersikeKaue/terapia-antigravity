# Terapia Antigravity — Digital Ecosystem

Ecossistema digital completo para uma terapeuta holística: **Landing Page de vendas** + **App SaaS** com área do cliente, entrega de conteúdo e preparação para automações.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Estilização | Tailwind CSS v3 + Shadcn/UI |
| ORM | Prisma ORM |
| Banco | PostgreSQL 16 |
| Auth | NextAuth.js v5 |
| Cache/Filas | Redis 7 |
| Proxy | Traefik v3 |

---

## 🚀 Início Rápido (com Docker)

### Pré-requisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e rodando

### 1. Configurar variáveis de ambiente
```bash
cp .env.example .env.local
# Edite .env.local com suas chaves
```

### 2. Subir o stack completo
```bash
docker compose up -d
```

### 3. Rodar as migrations do banco
```bash
docker compose exec app npx prisma migrate dev --name init
```

### 4. Popular banco com dados de demonstração
```bash
docker compose exec app npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/seed.ts
```

### 5. Acessar
| URL | Descrição |
|---|---|
| http://localhost | Landing Page |
| http://localhost/login | Login (área do cliente) |
| http://localhost/dashboard | Dashboard (requer login) |
| http://localhost:8080 | Traefik Dashboard |

---

## 🛠️ Desenvolvimento Local (sem Docker)

### Pré-requisitos
- Node.js 20+
- PostgreSQL rodando localmente

### Instalação
```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
ts-node prisma/seed.ts
npm run dev
```
Acesse: http://localhost:3000

---

## 📁 Estrutura

```
src/
├── app/
│   ├── (marketing)/          ← Landing Page (/)
│   │   ├── layout.tsx        — Navbar + Footer
│   │   └── page.tsx          — Todas as seções
│   ├── (dashboard)/          ← Área do Cliente (/dashboard)
│   │   ├── layout.tsx        — Sidebar + auth check
│   │   └── dashboard/
│   │       ├── page.tsx      — Mesas adquiridas
│   │       └── mesa/[slug]/  — Detalhe: vídeo + PDFs
│   ├── login/                — Página de login
│   └── api/
│       ├── auth/[...nextauth] — NextAuth handler
│       └── webhooks/payment   — Postback de pagamento
├── components/
│   ├── landing/              — Hero, About, Pricing...
│   ├── dashboard/            — VideoPlayer
│   └── ui/                   — Button, Card, Badge
└── lib/
    ├── prisma.ts             — Singleton Prisma Client
    └── utils.ts              — cn, formatPrice, etc.
prisma/
├── schema.prisma             — Modelos do banco
└── seed.ts                   — Dados de demonstração
```

---

## 🔗 Integrações Futuras

### Webhook de Pagamento
O endpoint `POST /api/webhooks/payment` já está estruturado para receber postback de:
- **Hotmart** — configurar `HOTMART_WEBHOOK_SECRET`
- **Kiwify** — configurar `KIWIFY_WEBHOOK_SECRET`
- **Stripe** — configurar `STRIPE_WEBHOOK_SECRET`

### Automações (Evolution API + Typebot)
Os comentários `// TODO` no arquivo `src/app/api/webhooks/payment/route.ts` mostram exatamente onde integrar:
1. **Evolution API** → envio de credenciais via WhatsApp após compra
2. **Typebot** → fluxo de onboarding automatizado

---

## 🎨 Paleta de Cores

| Cor | HSL | Uso |
|---|---|---|
| Sage Green | `hsl(150, 20%, 48%)` | Primária, nav, ícones |
| Dourado | `hsl(43, 65%, 65%)` | CTAs, destaques |
| Marfim | `hsl(40, 50%, 97%)` | Backgrounds |
| Sage escuro | `hsl(158, 28%, 22%)` | Footer, texto |

---

## 📊 Banco de Dados

```
Users ←── Accounts (OAuth)
  └─── Purchases ─── Products ─── Materials
```

Conta demo após seed: `cliente@example.com` (login via Magic Link)
