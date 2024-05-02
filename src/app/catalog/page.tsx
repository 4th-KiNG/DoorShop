import Header from "@/components/Header/Header";
import '../globals.css'
import '../../../public/fonts/lato.css'
import Catalog from "@/components/Catalog/Catalog";
import Footer from "@/components/Footer/Footer";
const CatalogPage = () => {
    return (
        <div>
            <Header></Header>
            <Catalog></Catalog>
            <Footer></Footer>
        </div>
    );
}
 
export default CatalogPage;