import { Card, CardContent } from "@/components/ui/card"

const bankAccounts = [
  {
    number: "0656890371",
    bank: "Guaranty Trust Bank",
    name: "ANORA MEDIA (NGN)",
  },
  {
    number: "5074846196",
    bank: "Zenith Bank",
    name: "Peters Sunday Emmanuel (USD)",
  },
]

export function BankDetails() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-600">Bank Account Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {bankAccounts.map((account) => (
            <Card key={account.number} className="border-2 border-yellow-100">
              <CardContent className="pt-6">
                <p className="text-2xl font-bold text-yellow-600 mb-2">{account.number}</p>
                <p className="text-sm text-muted-foreground">{account.bank}</p>
                <p className="font-semibold mt-2">{account.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
