import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format a price in BRL currency
 */
export function formatPrice(price: number | string | null | undefined): string {
    if (price == null) return "R$ 0,00";
    const num = typeof price === "string" ? parseFloat(price) : price;
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(num);
}

/**
 * Format file size in human-readable form
 */
export function formatFileSize(bytes: number | null | undefined): string {
    if (!bytes) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
}

/**
 * Truncate a string to a max length with ellipsis
 */
export function truncate(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
}
