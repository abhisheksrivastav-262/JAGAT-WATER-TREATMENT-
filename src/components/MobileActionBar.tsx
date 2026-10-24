import Link from "next/link";
import { FileText, Mail, MessageCircle, Phone } from "lucide-react";
import { business } from "@/config/business";
import { defaultEnquiryMessage, enquiryHref } from "@/lib/enquiry";

export function MobileActionBar() {
  const phone = business.phones[0];
  const isWhatsApp = business.whatsapp.enabled;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-line bg-white/95 shadow-[0_-8px_30px_-20px_rgba(8,43,73,0.5)] backdrop-blur-md md:hidden">
      <div className="safe-bottom grid grid-cols-3">
        <a
          href={phone.href}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-[0.66rem] font-semibold text-brand-navy transition active:bg-brand-mist"
        >
          <Phone className="h-[18px] w-[18px] text-brand-blue" aria-hidden="true" />
          Call now
        </a>
        <a
          href={enquiryHref(defaultEnquiryMessage, "Website enquiry")}
          {...(isWhatsApp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="flex flex-col items-center justify-center gap-1 border-x border-brand-line py-2.5 text-[0.66rem] font-semibold text-brand-navy transition active:bg-brand-mist"
        >
          {isWhatsApp ? (
            <MessageCircle className="h-[18px] w-[18px] text-brand-green" aria-hidden="true" />
          ) : (
            <Mail className="h-[18px] w-[18px] text-brand-green" aria-hidden="true" />
          )}
          {isWhatsApp ? "WhatsApp" : "Email"}
        </a>
        <Link
          href="/request-quote"
          className="flex flex-col items-center justify-center gap-1 bg-brand-blue py-2.5 text-[0.66rem] font-semibold text-white transition active:bg-[#064a8f]"
        >
          <FileText className="h-[18px] w-[18px]" aria-hidden="true" />
          Get quote
        </Link>
      </div>
    </div>
  );
}
