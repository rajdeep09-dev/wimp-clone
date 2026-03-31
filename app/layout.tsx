import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Wimp Decaf Coffee Company',
  description: 'Welcome to Wimp, a very chill revolution. No pitchforks or storming the castle — just decaf, the underdog of coffee, coming to play with the big kids.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Placeholder for Adobe Typekit or similar font links */}
        <link rel="stylesheet" href="https://use.typekit.net/hft2pqz.css" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
