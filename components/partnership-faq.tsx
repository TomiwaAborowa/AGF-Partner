import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who are Partners?",
    answer:
      "Partners are friends of Anora Global Family (both members and non-members) who are committed to sowing financially on a regular basis to help move forward the vision of AGF.",
  },
  {
    question: "How can I become a Partner?",
    answer:
      "You can become a Partner by following the simple steps below:\n1. Click here to fill the Partnership form OR visit the Information stand during our church services to pick up a physical form.\n2. Complete and submit the form.\n3. Start giving your Partnership Seed immediately or via any of the other methods available.",
  },
  // {
  //   question: "Can I decide how my Partnership Seed is used?",
  //   answer:
  //     "You can choose your preferred focus area(s) such as Church Facility, Welfare, Conferences/Special Programmes, Publicity, etc. as indicated in the Partnership form.",
  // },
  {
    question: "How often can I give my Partnership Seed?",
    answer:
      "You can give your seed as often as is most convenient for you. You can decide to give Weekly, Monthly, Quarterly, Annually or One Time. Just indicate your preference when you fill the Partnership form.",
  },
  {
    question: "How much can I give as my Partnership seed?",
    answer: "You can give as the Lord blesses you.",
  },
  {
    question: "How can I give my Partnership seed?",
    answer:
      "You can give your seed through any of the methods listed below:\n1. Click on Give your Partnership seed and you will be redirected to our safe and secure payment link, where you can complete the process of giving your seed.\n2. Do a bank transfer to Anora Global Family, First Bank, 2032100143.",
  },
]

export function PartnershipFAQ() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-600">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base whitespace-pre-line leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
