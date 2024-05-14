import Header from "@/components/Header/Header";
import '../../globals.css'
import '../../../../public/fonts/lato.css'
import Footer from "@/components/Footer/Footer";
import Indoors from "@/components/Catalog/Indoors/Indoors";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить межкомнатные двери в Краснодаре"
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