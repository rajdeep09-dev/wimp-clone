import Link from 'next/link';

interface ProductCardProps {
  title: string;
  eyebrow: string;
  roast: string;
  image: string;
  bgColor: string;
  strength: number;
  href: string;
}

const ProductCard = ({ title, eyebrow, roast, image, bgColor, strength, href }: ProductCardProps) => {
  return (
    <div className="product-card text-center flex flex-col items-center">
      <div 
        className="product-card__squircle relative w-full aspect-square rounded-[2rem] overflow-hidden mb-8"
        style={{ backgroundColor: bgColor }}
      >
        <div className="product-card__img p-8 w-full h-full flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain drop-shadow-xl transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      
      <div className="product-card__hdr mb-4">
        <span className="block text-sm uppercase tracking-wider font-semibold opacity-60 mb-2">{eyebrow}</span>
        <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>
        <p className="text-sm font-medium">{roast}</p>
      </div>

      <div className="product__strength mb-6 flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Light</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className={`w-2 h-4 rounded-full ${i <= strength ? 'bg-[var(--color-serious)]' : 'bg-[var(--color-serious)] opacity-10'}`}
            />
          ))}
        </div>
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Dark</span>
      </div>

      <Link href={href} className="btn btn--sm text-xs px-6 py-3">View Product</Link>
    </div>
  );
};

export default ProductCard;
