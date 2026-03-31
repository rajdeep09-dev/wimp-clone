import Link from 'next/link';

const Hero = () => {
  return (
    <section className="hero relative py-12 md:py-24" id="hero">
      <div className="inner relative z-10 text-center">
        <div className="hero__img-container relative w-full aspect-video rounded-[2rem] overflow-hidden bg-[#835143] mb-12">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/b007bb26cf6e4425b4586734feff3d52.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero__content relative">
          <div className="hero__packs flex justify-center items-center gap-4 md:gap-8 mb-12">
            {/* Pack 1 */}
            <div className="w-1/3 max-w-[300px] transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://www.wimpdecaf.com/cdn/shop/files/coltrane-7_0eea5d32-e260-44bf-a8e8-578d17d30eca_640x640@2x.png?v=1738010992"
                alt="Coltrane Pack"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            {/* Pack 2 */}
            <div className="w-1/3 max-w-[300px] transform -translate-y-8 md:-translate-y-16 hover:scale-105 transition-transform duration-500">
              <img
                src="https://www.wimpdecaf.com/cdn/shop/files/kahlo-7_07928c86-00eb-45dd-82e0-96b299b60048_640x640@2x.png?v=1738011035"
                alt="Kahlo Pack"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            {/* Pack 3 */}
            <div className="w-1/3 max-w-[300px] transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://www.wimpdecaf.com/cdn/shop/files/01-05-Bekele_00_640x640@2x.png?v=1767624107"
                alt="Bekele Pack"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="hero__text mb-8">
            <h1 className="text-[6rem] md:text-[15.5rem] leading-[0.84] tracking-[-0.015em] font-bold mb-8 uppercase">
              Rethink <br /> Decaf
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-80">
              The underdog of coffee is coming to play with the big kids. No pitchforks, just better coffee.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products/wimp-variety-pack" className="btn">Shop Variety Pack</Link>
              <Link href="/products/coltrane" className="btn bg-transparent border-2 border-[var(--color-titles)] text-[var(--color-titles)] hover:bg-[var(--color-titles)] hover:text-white">Shop Coltrane</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
