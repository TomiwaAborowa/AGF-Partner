export function HomeHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-balance leading-tight">
              Welcome to Anora Global Family
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
             We are a Family of LOVE, LIGHT, CONSCIOUSNESS, and RIGHTEOUS LIVING.
            </p>
            
          </div>

          <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
            <img
              src="/woman.jpg"
              alt="Ministry community gathering in worship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
