import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="ftr mt-20" id="footer">
      <div className="ftr__inner bg-[var(--color-bg-accent)] m-[3px] rounded-[2rem] p-10 md:p-20">
        <div className="inner mb-12">
          <div className="ftr-meta max-w-[48rem] mx-auto text-center mb-12">
            <h2 className="h2 text-5xl md:text-8xl mb-8 leading-tight">
              <span className="block text-[var(--color-accent)]">New decafs</span>
              <span className="block">in your inbox.</span>
            </h2>
            <div className="mb-8 max-w-[30rem] mx-auto">
              <form className="email-form flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  className="input flex-1 px-5 py-4 border border-[var(--color-line)] rounded-[0.6875rem] outline-none focus:border-[var(--color-titles)] transition-colors"
                  placeholder="Email address"
                  required
                />
                <button type="submit" className="btn">Try it</button>
              </form>
            </div>
            <p className="max-w-[36rem] mx-auto text-lg leading-relaxed text-[var(--color-text)] opacity-80">
              Let's be honest. Email is usually the tool of brands to blather on about themselves — major boring shit. Let’s do this different. We do everything relationally. If it’s not working for you — tell us, we like the feedback.
            </p>
          </div>
          
          <div className="ftr-nav max-w-[48rem] mx-auto text-center">
            <div className="mb-12">
              <hr className="divider h-[3px] bg-[var(--color-titles)] rounded-full opacity-10" />
            </div>

            <ul className="ftr-nav__links flex flex-wrap justify-center gap-6 mb-12">
              <li className="text-sm uppercase font-semibold tracking-wider">
                <Link href="/products/wimp-gift-card" className="hover:text-[var(--color-accent)] transition-colors">Gift Cards</Link>
              </li>
              <li className="text-sm uppercase font-semibold tracking-wider">
                <Link href="/wholesale" className="hover:text-[var(--color-accent)] transition-colors">Wholesale</Link>
              </li>
              <li className="text-sm uppercase font-semibold tracking-wider">
                <Link href="/faq#shipping" className="hover:text-[var(--color-accent)] transition-colors">Shipping Info</Link>
              </li>
              <li className="text-sm uppercase font-semibold tracking-wider">
                <Link href="/faq#returns" className="hover:text-[var(--color-accent)] transition-colors">Returns & Refunds</Link>
              </li>
              <li className="text-sm uppercase font-semibold tracking-wider">
                <Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact Us</Link>
              </li>
            </ul>

            <div className="ftr-nav__socials flex justify-center gap-6">
              {/* Social Icons would go here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
