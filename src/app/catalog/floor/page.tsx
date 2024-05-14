import Header from "@/components/Header/Header";
import '../../globals.css'
import '../../../../public/fonts/lato.css'
import Footer from "@/components/Footer/Footer";
import Floor from "@/components/Catalog/Floor/Floor";
import { Suspense } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Купить напольное покрытие в Краснодаре"
}

const FloorPage = () => {
    return (
        <div>
            <Header></Header>
            <Suspense>
                <Floor></Floor>
            </Suspense>
            <Footer></Footer>
        </div>
    );
}
 
export default FloorPage;