function Hero() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reliable IT Solutions for Your Business
            </h1>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
              Streamline your operations and unlock new opportunities with our
              comprehensive IT services.
            </p>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
