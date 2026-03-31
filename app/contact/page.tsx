export default function ContactPage() {
  return (
    <div className="section pt-32 pb-24">
      <div className="inner max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-[4rem] md:text-[8rem] font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-80">
            Have a question, some feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-[var(--color-bg-accent)] p-8 md:p-12 rounded-[2rem]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold uppercase tracking-wider opacity-60">Name</label>
                <input type="text" className="input w-full px-5 py-4 border border-[var(--color-line)] rounded-[0.6875rem] outline-none focus:border-[var(--color-titles)]" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold uppercase tracking-wider opacity-60">Email</label>
                <input type="email" className="input w-full px-5 py-4 border border-[var(--color-line)] rounded-[0.6875rem] outline-none focus:border-[var(--color-titles)]" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold uppercase tracking-wider opacity-60">Message</label>
              <textarea rows={6} className="input w-full px-5 py-4 border border-[var(--color-line)] rounded-[0.6875rem] outline-none focus:border-[var(--color-titles)] resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="btn w-full py-5 text-lg">Send Message</button>
          </form>
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-lg">Prefer email? Reach us at:</p>
          <a href="mailto:friends@wimpdecaf.com" className="text-2xl md:text-4xl font-bold text-[var(--color-accent)] hover:underline transition-all">friends@wimpdecaf.com</a>
        </div>
      </div>
    </div>
  );
}
