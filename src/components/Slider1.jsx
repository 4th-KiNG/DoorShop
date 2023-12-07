import { fon1, fon2, fon3, fon4 } from '../assets';

function Slider1() {
    return(
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={fon1} alt="Первый слайд"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={fon1} alt="Второй слайд"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={fon3} alt="Третий слайд"/>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={fon4} alt="Третий слайд"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    )
}

export default Slider1;