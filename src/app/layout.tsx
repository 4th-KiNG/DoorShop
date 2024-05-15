import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
export const metadata: Metadata = {
  title: "ДВЕРИ•ВАРИАНТ Купить входные и межкомнатные двери в Краснодаре",
  description: "Купить входные и межкомнатные двери по выгодным ценам в интернет-магазине в Краснодаре. Широкий ассортимент дверей разных стилей и цветов. Двери из натурального дерева, металла, пластика и комбинированные. Высокое качество и надежность. Удобный интерфейс сайта и простой процесс заказа. Доставка по Краснодару и Краснодарскому краю.",
  icons: {
    icon: ['/icon.ico']
  },
  keywords: ['двери', "межкомнатные двери", 'купить двери', 'входные двери', 'хорошие двери', 'двери качество', 'двери хорошего качества',
  'металлические двери','установка дверей','двери цена','левая дверь','купить межкомнатные двери','двери входные металлические','стеклянная дверь',
  'двери официальные','купить двери','купить межкомнатные двери','купить входную дверь','купить металлическую дверь','дверь входная металлическая купить',
  'купить дверь бу','дверь лев купить','купить дверь левую','купить двери недорого','купить двери +в краснодаре','купить входную дверь в краснодаре',
  'купить межкомнатные двери в краснодаре','купить металлические двери в краснодаре','двери краснодар купить недорого','купить дверь входную металлическую +в краснодаре',
  'купить дверь бу краснодар','авито краснодар купить двери','двери краснодар купить цены','куплю дверь б +у краснодар','входные двери краснодар купить недорого','купить пластиковую дверь краснодар','где купить двери краснодар'],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <p className="hide-text">Купить входные и межкомнатные двери по выгодным ценам в интернет-магазине. Широкий ассортимент дверей разных стилей и цветов. Двери из натурального дерева, металла, пластика и комбинированные. Высокое качество и надежность. Удобный интерфейс сайта и простой процесс заказа. Доставка по Краснодару и Краснодарскому краю.</p>
        {children}
      </body>
    </html>
  );
}
