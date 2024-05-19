import Header from "@/components/Header/Header";
import '../../globals.css'
import '../../../../public/fonts/lato.css'
import Footer from "@/components/Footer/Footer";
import Indoors from "@/components/Catalog/Indoors/Indoors";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить межкомнатные двери в Краснодаре",
    description: "Межкомнатные двери купить в Краснодаре. Широкий выбор высококачественных межкомнатных дверей для любого интерьера. Доступные цены. Наша продукция отличается надежностью, стильным дизайном и разнообразием отделки. Гарантируем доступные цены и высокое качество каждого изделия. Вы получаете не только функциональность и безопасность, но и эстетическое удовольствие от прекрасного дизайна. Выберите качественные двери прямо сейчас.",
  icons: {
    icon: ['/icon.ico']
  },
  keywords: ["межкомнатные двери", "купить межкомнатные двери", "межкомнатные двери цена", "межкомнатные двери краснодар", "двери межкомнатные ростов", "дверные двери межкомнатные",
  "раздвижные межкомнатные двери", "межкомнатные двери", "дверь межкомнатная с коробкой", "межкомнатные двери каталог", "белые межкомнатные двери"],
}

const IndoorsPage = () => {
    return (
        <div>
            <Header></Header>
            <Indoors></Indoors>
            <Footer></Footer>
        </div>
    );
}
 
export default IndoorsPage;