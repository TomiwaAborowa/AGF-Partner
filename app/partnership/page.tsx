import { PartnershipHero } from "@/components/partnership-hero"
import { PartnershipForm } from "@/components/partnership-form"
import { BankDetails } from "@/components/bank-details"
import { PartnershipFAQ } from "@/components/partnership-faq"
import { SiteHeader } from "@/components/site-header"

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PartnershipHero />
      <PartnershipForm />
      <BankDetails />
      <PartnershipFAQ />
    </div>
  )
}
