import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Холодильные камеры под ключ | PROFHOLOD - Производство и монтаж",
  description: "Проектирование, производство и монтаж холодильных камер любой сложности. Гарантия 3 года. Собственное производство. Доставка по всей России. ✓ 500+ проектов ✓ От 7 дней",
  keywords: "холодильные камеры, морозильные камеры, камеры шоковой заморозки, производство холодильных камер, монтаж холодильных камер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
