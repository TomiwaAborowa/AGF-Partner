export function MissionVision() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 font-bold text-xl">
              1
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building a platform that empowers every individual to uncover, develop, and express their God-given purpose and talent - inspiring them to become shining light in their communities and the world.
            </p>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-500 font-bold text-xl">
              2
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To transform lives by bridging the gap between people and God through creative media, the living word, and prayer - establishing a lasting consciousness of the Holy Spirit in every generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
