import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(message?: string): string {
  const phone = "919903588155";
  const encodedMessage = encodeURIComponent(
    message || "Hello Dr. Vinita Khemani, I would like to book an appointment."
  );
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function getCallLink(): string {
  return "tel:+919903588155";
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
