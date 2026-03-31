import Link from 'next/link';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = [
    {
      title: 'Coltrane',
      eyebrow: 'Cult Classic',
      roast: 'Medium Roast',
      image: 'https://www.wimpdecaf.com/cdn/shop/files/coltrane-7_0eea5d32-e260-44bf-a8e8-578d17d30eca_640x640@2x.png?v=1738010992',
      bgColor: '#ff5c00',
      strength: 3,
      href: '/products/coltrane'
    },
    {
      title: 'Kahlo',
      eyebrow: 'Cult Classic',
      roast: 'Dark Roast',
      image: 'https://www.wimpdecaf.com/cdn/shop/files/kahlo-7_07928c86-00eb-45dd-82e0-96b299b60048_640x640@2x.png?v=1738011035',
      bgColor: '#ab99d0',
      strength: 4,
      href: '/products/kahlo'
    },
    {
      title: 'Bekele',
      eyebrow: 'Limited Edition',
      roast: 'Light Roast',
      image: 'https://www.wimpdecaf.com/cdn/shop/files/01-05-Bekele_00_640x640@2x.png?v=1767624107',
      bgColor: '#f9f4ed',
      strength: 2,
      href: '/products/bekele'
    }
  ];

  return (
    <div className="flex flex-col gap-20">
      <Hero />

      {/* Product Section */}
      <section className="section bg-[var(--color-bg)]" id="choice">
        <div className="inner">
          <div className="text-center mb-16">
            <h2 className="text-[4rem] md:text-[8rem] font-bold mb-4">Clean. Great. Decaf.</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80">
              Premium beans. Roasted with care. Decaf'd by nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Decaf Section */}
      <section className="section bg-[var(--c-decaf)] text-white py-24 md:py-40" id="whydecaf">
        <div className="inner text-center">
          <h2 className="text-[4rem] md:text-[10rem] font-bold mb-12 leading-none uppercase">Why <br /> Decaf?</h2>
          <div className="max-w-4xl mx-auto space-y-8 text-xl md:text-3xl leading-relaxed">
            <p>
              Most coffee brands treat decaf like an afterthought. A necessary evil. A wimpy alternative.
            </p>
            <p className="font-bold italic">
              We think that's major boring shit.
            </p>
            <p>
              We believe decaf drinkers are the most passionate coffee lovers. We drink it for the taste, not the fix. It's time we had coffee that lives up to our standards.
            </p>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="section py-24">
        <div className="inner text-center">
          <div className="bg-[var(--c-yellow)] p-12 md:p-24 rounded-[3rem] transform -rotate-1">
            <h2 className="text-[3rem] md:text-[6rem] font-bold mb-8 uppercase leading-tight">Ready to join <br /> the revolution?</h2>
            <Link href="/products/wimp-variety-pack" className="btn text-xl px-10 py-6">Get the Variety Pack</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
