import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PartnershipHero() {
  return (
    <section className="bg-gradient-to-b from-yellow-600 to-yellow-700 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Partnership</h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Partners are friends of Anora Global Family (both members and non-members) who are committed to sowing
          financially on a regular basis to help move forward the vision of AGF.
        </p>

        <div className="bg-black/100 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 border border-white/40">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">A MESSAGE FROM OUR VISIONEER</h2>
          <p className="leading-relaxed mb-6">
            Thank you for choosing to share in our vision of not only helping people know about God but to experience Him personally. I believe that as you become a Partner, and give your Partnership seed consistently, you will
            experience a divine increase in every area of your life, Amen- 2 Corinthians 9:7-8.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600">
              <Link href="#give">A Partner? [Give Now]</Link>
            </Button> */}
            <Button asChild size="lg" variant="outline" className="bg-white text-yellow-600 hover:bg-yellow-500">
              <Link href="#form">New Partner? [Fill The Form Below]</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
