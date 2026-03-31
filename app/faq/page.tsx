export default function FAQPage() {
  const faqs = [
    {
      category: "Ordering & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, Apple Pay and other secure payment options."
        },
        {
          q: "Can I modify my order after placing it?",
          a: "If you need to make changes, email us at friends@wimpdecaf.com as soon as possible. If your order hasn’t shipped yet, we’ll do our best to update it."
        }
      ]
    },
    {
      category: "Shipping",
      questions: [
        {
          q: "When will my order ship?",
          a: "Orders usually ship within 1-2 business days. If you order on a weekend or holiday, we’ll ship it out the next business day."
        },
        {
          q: "What should I do if my order hasn't arrived?",
          a: "If your order hasn't arrived within the estimated time frame, please first check the tracking information provided. If you need further assistance, contact our customer service team at friends@wimpdecaf.com."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What should I do if my order is delayed or lost?",
          a: "Check your tracking information first. If it looks like something went wrong, reach out to us at friends@wimpdecaf.com, and we’ll make it right."
        },
        {
          q: "What should I do if I receive a damaged or incorrect item?",
          a: "If your order arrives damaged or incorrect, please contact us immediately at friends@wimpdecaf.com with your order number and a description of the issue."
        }
      ]
    }
  ];

  return (
    <div className="section pt-32 pb-24">
      <div className="inner max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-[4rem] md:text-[8rem] font-bold mb-6">Questions?</h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto">
            Got questions? You can ask about existential crises, US tax code, and DIY plumbing, but we’re only qualified to answer about decaf.
          </p>
        </div>

        <div className="space-y-16">
          {faqs.map((group, idx) => (
            <div key={idx}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 border-b-2 border-black/10 pb-4">{group.category}</h2>
              <div className="space-y-4">
                {group.questions.map((item, qIdx) => (
                  <details key={qIdx} className="group border-2 border-black/5 rounded-2xl p-6 bg-white hover:border-[var(--color-accent)] transition-colors">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-xl md:text-2xl font-bold">{item.q}</span>
                      <span className="text-[var(--color-accent)] text-3xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="mt-4 text-lg opacity-80 leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
