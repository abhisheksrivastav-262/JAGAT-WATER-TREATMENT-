import { business } from "@/config/business";

export function whatsappHref(message: string) {
  const number = business.whatsapp.number.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref(subject: string, message: string) {
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

export const defaultEnquiryMessage = [
  "Hello JAGAT WATER TREATMENT,",
  "",
  "I would like to enquire about your water treatment solutions.",
  "",
  "Name:",
  "Phone:",
  "Product / service of interest:",
  "Location:",
].join("\n");

export function enquiryHref(message = defaultEnquiryMessage, subject = "Website enquiry") {
  return business.whatsapp.enabled
    ? whatsappHref(message)
    : mailtoHref(subject, message);
}

export function enquiryChannelLabel() {
  return business.whatsapp.enabled ? "WhatsApp" : "email";
}

export function enquiryChannelShort() {
  return business.whatsapp.enabled ? "WhatsApp" : "Email";
}

export type EnquiryField = {
  name: string;
  label: string;
  value?: string;
  required?: boolean;
};

export function buildEnquiryMessage(
  heading: string,
  fields: EnquiryField[],
  extra?: { message?: string },
) {
  const lines = [
    "Hello JAGAT WATER TREATMENT,",
    "",
    heading,
    "",
  ];

  for (const field of fields) {
    const value = (field.value ?? "").trim();
    if (!value) continue;
    lines.push(`${field.label}: ${value}`);
  }

  if (extra?.message?.trim()) {
    lines.push("", "Additional details:", extra.message.trim());
  }

  lines.push("", `Sent from the ${business.name} website.`);
  return lines.join("\n");
}
