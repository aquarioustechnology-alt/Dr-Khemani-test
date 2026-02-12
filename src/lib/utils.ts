import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const PHONE_NUMBER = "+91-9903588155";

export function getWhatsAppLink(message?: string) {
  const cleanPhone = PHONE_NUMBER.replace(/[^0-9]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${cleanPhone}${text}`;
}

export function getCallLink() {
  const cleanPhone = PHONE_NUMBER.replace(/[^0-9+]/g, "");
  return `tel:${cleanPhone}`;
}

export function calculateExperience(startYear: number = 2003) {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

export function calculateSurgeries(baseCount: number = 583, startMonth: number = 0, startYear: number = 2024) {
  const currentDate = new Date();
  const monthsPassed = (currentDate.getFullYear() - startYear) * 12 + (currentDate.getMonth() - startMonth);
  return baseCount + Math.max(0, monthsPassed);
}

export function calculateDeliveries(baseCount: number = 2348, startMonth: number = 0, startYear: number = 2024) {
  const currentDate = new Date();
  const monthsPassed = (currentDate.getFullYear() - startYear) * 12 + (currentDate.getMonth() - startMonth);
  return baseCount + Math.max(0, monthsPassed * 5);
}
