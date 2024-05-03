import Header from "@/components/Header/Header";
import '../../globals.css'
import '../../../../public/fonts/lato.css'
import Footer from "@/components/Footer/Footer";
import Furniture from "@/components/Catalog/Furniture/Furniture";
import { Suspense } from 'react'

const FurniturePage = () => {
    return (
        <div>
            <Header></Header>
            <Suspense>
                <Furniture></Furniture>
            </Suspense>
            <Footer></Footer>
        </div>
    );
}
 
export default FurniturePage;