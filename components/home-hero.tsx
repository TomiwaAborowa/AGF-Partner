export function HomeHero() {
  return (
    <section className="relative py-12 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-balance leading-tight">
            Welcome to Anora Global Family
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A ministry dedicated to spreading the gospel of Jesus Christ and transforming lives through faith, hope, and
            love.
          </p>
        </div>
      </div>
    </section>
  )
}
