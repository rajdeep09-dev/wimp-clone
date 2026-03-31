import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    {
      title: "Decaf brewing guide, from simple to nerdy.",
      date: "August 11, 2025",
      image: "https://www.wimpdecaf.com/cdn/shop/articles/98a81b34377413.571e9b194bc8c_640x640@2x.gif?v=1754936142",
      href: "/blogs/wimp/decaf-brewing-guide"
    },
    {
      title: "Are Wimp decaf coffee beans organic?",
      date: "August 3, 2025",
      image: "https://www.wimpdecaf.com/cdn/shop/articles/CleanShot_2025-08-04_at_10.07.17_640x640@2x.gif?v=1754323785",
      href: "/blogs/wimp/organic-beans"
    },
    {
      title: "You Might Be Taking It All Too Seriously. I Know I Was.",
      date: "July 21, 2025",
      image: "https://www.wimpdecaf.com/cdn/shop/articles/SleepyTheTouristGIFbyHBOMax-ezgif.com-optimize_47f61b46-5306-4f25-804e-10323e4b01db_640x640@2x.gif?v=1753143600",
      href: "/blogs/wimp/taking-it-seriously"
    }
  ];

  return (
    <div className="section pt-32 pb-24">
      <div className="inner">
        <div className="breadcrumbs text-sm mb-12 opacity-60 flex gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="font-bold">Wimp Blog</span>
        </div>

        <div className="mb-20">
          <h1 className="text-[4rem] md:text-[8rem] font-bold mb-12">The Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article, idx) => (
              <Link href={article.href} key={idx} className="group flex flex-col h-full">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-[var(--color-bg-accent)] mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm opacity-60 uppercase tracking-widest font-bold">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
