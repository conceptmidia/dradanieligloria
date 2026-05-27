import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Dra. Danieli Gloria | Clínica Estética',
  description: 'Clínica de Estética de Alta Tecnologia e Beleza Natural',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-stone-900 bg-stone-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
