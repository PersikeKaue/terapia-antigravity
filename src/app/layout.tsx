import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Persike Terapias Holísticas | Mesa Radiônica com Silvana Persike",
        template: "%s | Persike Terapias Holísticas",
    },
    description:
        "Transforme sua frequência com a Mesa Radiônica de Silvana Persike. Limpeza energética profunda, cura quântica e portal exclusivo do paciente. +20 anos de experiência.",
    keywords: [
        "mesa radiônica",
        "terapia holística",
        "Silvana Persike",
        "cura quântica",
        "alinhamento de chakras",
        "reiki",
        "florais",
        "radiestesia",
    ],
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: process.env.NEXT_PUBLIC_APP_URL,
        siteName: "Persike Terapias Holísticas",
        title: "Persike Terapias Holísticas | Mesa Radiônica com Silvana Persike",
        description:
            "Transforme sua frequência e desbloqueie seus caminhos com o poder da Mesa Radiônica.",
    },
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3002"
    ),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
