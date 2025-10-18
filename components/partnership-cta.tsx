import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PartnershipCTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-balance">Partner With Us in Ministry</h2>

          <p className="text-base md:text-lg text-primary-foreground/90 text-pretty">
            Join us in spreading the Gospel and transforming lives. Your partnership enables us to reach more souls and
            make a lasting impact for the Kingdom of God.
          </p>

          <Button asChild size="lg" variant="secondary" className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-white">
            <Link href="/partnership">
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
