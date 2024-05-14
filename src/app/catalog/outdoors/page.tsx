import Outdoors from "@/components/Catalog/Outdoors/Outdoors";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import '../../globals.css'
import '../../../../public/fonts/lato.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить входные двери в Краснодаре"
}


const OutdoorsPage = () => {
    return (
        <div>
            <Header></Header>
            <Outdoors></Outdoors>
            <Footer></Footer>
        </div>
    );
}
 
export default OutdoorsPage;