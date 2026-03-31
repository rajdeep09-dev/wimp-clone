export default function WholesalePage() {
  return (
    <div className="section pt-32 pb-24">
      <div className="inner max-w-4xl text-center mb-16">
        <h1 className="text-[4rem] md:text-[8rem] font-bold mb-6">Wholesale</h1>
        <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto">
          Want to serve Wimp at your cafe, office, or studio? We'd love to help you bring great decaf to your people.
        </p>
      </div>

      <div className="inner grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8 text-left">
          <div className="bg-[var(--color-bg-accent)] p-8 rounded-[2rem]">
            <h3 className="text-2xl font-bold mb-4 italic">Relationally Minded</h3>
            <p className="opacity-80">We don't just ship boxes. We want to know you, your business, and how we can support you. We're in this for the long haul.</p>
          </div>
          <div className="bg-[var(--color-bg-accent)] p-8 rounded-[2rem]">
            <h3 className="text-2xl font-bold mb-4 italic">Freshly Roasted</h3>
            <p className="opacity-80">All our wholesale orders are roasted to order and shipped fresh, ensuring your customers get the best experience possible.</p>
          </div>
          <div className="bg-[var(--color-bg-accent)] p-8 rounded-[2rem]">
            <h3 className="text-2xl font-bold mb-4 italic">Flexible Options</h3>
            <p className="opacity-80">From single bags to recurring bulk orders, we have options that fit businesses of all sizes.</p>
          </div>
        </div>

        <div className="bg-[var(--color-serious)] text-white p-8 md:p-12 rounded-[2rem]">
          <h2 className="text-3xl font-bold mb-8">Inquiry Form</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold uppercase tracking-wider opacity-60">Business Name</label>
              <input type="text" className="input w-full px-5 py-4 bg-white/10 border border-white/20 rounded-[0.6875rem] text-white outline-none focus:border-white" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold uppercase tracking-wider opacity-60">Contact Person</label>
              <input type="text" className="input w-full px-5 py-4 bg-white/10 border border-white/20 rounded-[0.6875rem] text-white outline-none focus:border-white" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold uppercase tracking-wider opacity-60">Email</label>
              <input type="email" className="input w-full px-5 py-4 bg-white/10 border border-white/20 rounded-[0.6875rem] text-white outline-none focus:border-white" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold uppercase tracking-wider opacity-60">What are you looking for?</label>
              <textarea rows={4} className="input w-full px-5 py-4 bg-white/10 border border-white/20 rounded-[0.6875rem] text-white outline-none focus:border-white resize-none"></textarea>
            </div>
            <button type="submit" className="btn w-full py-5 bg-[var(--color-accent)] border-none text-white hover:bg-white hover:text-black transition-all">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}
