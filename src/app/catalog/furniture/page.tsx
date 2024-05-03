import Header from "@/components/Header/Header";
import '../../globals.css'
import '../../../../public/fonts/lato.css'
import Footer from "@/components/Footer/Footer";
import Furniture from "@/components/Catalog/Furniture/Furniture";

const FurniturePage = () => {
    return (
        <div>
            <Header></Header>
            <Furniture></Furniture>
            <Footer></Footer>
        </div>
    );
}
 
export default FurniturePage;