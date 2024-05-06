import Header from "@/components/Header/Header";
import '../globals.css'
import '../../../public/fonts/lato.css'

import Footer from "@/components/Footer/Footer";
const CatalogPage = () => {
    return (
        <div>
            <p className="hide-text">В нашем интернет-магазине представлен широкий выбор входных и межкомнатных дверей в Краснодаре. Мы предлагаем качественные и надежные модели от ведущих производителей по доступным ценам. У нас вы найдете разнообразные стили и дизайны, чтобы подобрать идеальную дверь для вашего дома. Наша команда экспертов всегда готова помочь вам с выбором и ответить на все ваши вопросы. Заказывайте двери у нас и получайте отличное качество и отличное обслуживание. Доставка по Краснодару и краю.</p>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}
 
export default CatalogPage;