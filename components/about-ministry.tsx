export function AboutMinistry() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src="/man.jpg"
              alt="Pastor teaching and leading ministry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-2xl order-1 md:order-2">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-balance">About Our Ministry</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                
Anora Global Family (AGF) is a kingdom movement birthed by the Spirit of God for such a time as this — a movement centered on practical Christianity, spiritual consciousness, and reconciliation with God.

In a generation filled with distractions and religious formality, AGF stands as a beacon of divine truth and transformation, helping people not only to know about God but to experience Him personally.

We are a family passionate about revealing the reality of the Holy Spirit’s presence in everyday life. Our calling is to help men and women walk in the consciousness of God’s Spirit, live righteously, and express His love in practical, life-changing ways.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Through spirit-inspired teachings, mentorship, media outreaches, and community engagements, Anora Global Family is raising a generation of believers who live purposefully and represent Christ boldly in every sphere of influence — family, education, media, governance, and culture.

Over time, countless testimonies have emerged — hearts healed, minds renewed, destinies restored, and lives transformed by the living Word and power of the Holy Spirit. Truly, Anora Global Family is not just a ministry; it is a home of transformation, empowerment, and divine encounter.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
