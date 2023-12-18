import './Catalog.css'
import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import CardList from '../components/CardList'
import CardListFur from '../components/CardListFur';
import d1 from '../catalog/indoor/1.jpg'
import { d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d2, d20, d21, d22, d23, d24, d26, d25, d27, d28, d29, d3, d30, d31, d32, d33, d34, d35, d36, d37, d38, d39, d4, d40, d41, d5, d6, d7, d8, d9, o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17, o18, o19, o20, o21, o22, o23, o24, o25, o26, o27, o28, o29, o30, o31, o32, o33, o34, o35, o36, o37, o38, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, l1, l2, l3, l4, l5, l6, l7, l8, } from '../catalog';
import {lr1, lr2, lr3, lr4, lr5, lr6, lr7, lr8, kt1, kt2, kt3, kt4, kt5, kt6, kt7, hl1, hl2, hl3, hl4, hl5} from '../catalog'
import { Element, scroller } from 'react-scroll';



const Catalog = () => {
    const params = useParams()
    const location = useLocation();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const scrollToElement = queryParams.get('scrollToElement');
        if (scrollToElement){
            scroller.scrollTo(scrollToElement, {
                duration: 500,
                smooth: true,
            })
        }
    }, [location.search])
    const outdoors =[
        {id: 100,img: o1,price: 0},
        {id: 101,img: o2,price: 0},
        {id: 102,img: o3,price: 0},
        {id: 103,img: o4,price: 0},
        {id: 104,img: o5,price: 0},
        {id: 105,img: o6,price: 0},
        {id: 106,img: o7,price: 0},
        {id: 107,img: o8,price: 0},
        {id: 108,img: o9,price: 0},
        {id: 109,img: o10,price: 0},
        {id: 110,img: o11, price: 0},
        {id:110, img: o12, price:0}, 
        {id:111, img: o13, price:1500}, 
        {id:112, img: o14, price:0}, 
        {id:113, img: o15, price:0}, 
        {id:114, img: o16, price:0}, 
        {id:115, img: o17, price:0}, 
        {id:116, img: o18, price:0}, 
        {id:117, img: o19, price:0}, 
        {id:118, img: o20, price:0}, 
        {id:119, img: o21, price:0}, 
        {id:120, img: o22, price:0}, 
        {id:121, img: o23, price:0}, 
        {id:122, img: o24, price:0},
        {id:123, img: o25, price:0},
        {id:124, img: o26, price:0},
        {id:125, img: o27, price:0},
        {id:126, img: o28, price:0},
        {id:127, img: o29, price:0},
        {id:128, img: o30, price:0},
        {id:129, img: o31, price:0},
        {id:130, img: o32, price:0},
        {id:131, img: o33, price:0},
        {id:132, img: o34, price:0},
        {id:133, img: o35, price:0},
        {id:134, img: o36, price:0},
        {id:135, img: o37, price:0},
        {id:136, img: o38, price:0}
    ]
    const indoors = [
        {id: 200,img: d1,price: 0},
        {id: 201,img: d2,price: 0},
        {id: 202,img: d3,price: 0},
        {id: 203,img: d4,price: 0},
        {id: 204,img: d5,price: 0},
        {id: 205,img: d6,price: 0},
        {id: 206,img: d7,price: 0},
        {id: 207,img: d8,price: 0},
        {id: 208,img: d9,price: 0},
        {id: 209,img: d10,price: 0},
        {id: 210,img: d11, price: 0},
        {id:210, img: d12, price:0}, 
        {id:211, img: d13, price:1500}, 
        {id:212, img: d14, price:0}, 
        {id:213, img: d15, price:0}, 
        {id:214, img: d16, price:0}, 
        {id:215, img: d17, price:0}, 
        {id:216, img: d18, price:0}, 
        {id:217, img: d19, price:0}, 
        {id:218, img: d20, price:0}, 
        {id:219, img: d21, price:0}, 
        {id:220, img: d22, price:0}, 
        {id:221, img: d23, price:0}, 
        {id:222, img: d24, price:0},
        {id:223, img: d25, price:0},
        {id:224, img: d26, price:0},
        {id:225, img: d27, price:0},
        {id:226, img: d28, price:0},
        {id:227, img: d29, price:0},
        {id:228, img: d30, price:0},
        {id:229, img: d31, price:0},
        {id:230, img: d32, price:0},
        {id:231, img: d33, price:0},
        {id:232, img: d34, price:0},
        {id:233, img: d35, price:0},
        {id:234, img: d36, price:0},
        {id:235, img: d37, price:0},
        {id:236, img: d38, price:0},
        {id:237, img: d39, price:0},
        {id:238, img: d40, price:0},
        {id:239, img: d41, price:0},
    ];
    const handles = [
        {id: 300,img: h1,price: 0},
        {id: 301,img: h2,price: 0},
        {id: 302,img: h3,price: 0},
        {id: 303,img: h4,price: 0},
        {id: 304,img: h5,price: 0},
        {id: 305,img: h6,price: 0},
        {id: 306,img: h7,price: 0},
        {id: 307,img: h8,price: 0},
        {id: 308,img: h9,price: 0},
        {id: 309,img: h10,price: 0},
        {id: 310,img: h11, price: 0},
        {id:310, img: h12, price:0}, 
        {id:311, img: h13, price:1500}, 
        {id:312, img: h14, price:0}, 
        {id:313, img: h15, price:0}, 
        {id:314, img: h16, price:0}, 
        {id:315, img: h17, price:0}, 
        {id:316, img: h18, price:0}, 
    ]
    const locks = [
        {id: 400,img: k1,price: 0},
        {id: 401,img: k2,price: 0},
        {id: 402,img: k3,price: 0},
        {id: 403,img: k4,price: 0},
        {id: 404,img: k5,price: 0},
        {id: 405,img: k6,price: 0},
        {id: 406,img: k7,price: 0},
        {id: 407,img: k8,price: 0},
        {id: 408,img: k9,price: 0},
        {id: 409,img: k10,price: 0},
    ]
    const loops = [
        {id: 500,img: l1,price: 0},
        {id: 501,img: l2,price: 0},
        {id: 502,img: l3,price: 0},
        {id: 503,img: l4,price: 0},
        {id: 504,img: l5,price: 0},
        {id: 505,img: l6,price: 0},
        {id: 506,img: l7,price: 0},
        {id: 507,img: l8,price: 0},
    ]
    const livingroom = [
        {id: 600,img: lr1,price: 0},
        {id: 601,img: lr2,price: 0},
        {id: 602,img: lr3,price: 0},
        {id: 603,img: lr4,price: 0},
        {id: 604,img: lr5,price: 0},
        {id: 605,img: lr6,price: 0},
        {id: 606,img: lr7,price: 0},
        {id: 607,img: lr8,price: 0},
    ]
    const kitchen = [
        {id: 700,img: kt1,price: 0},
        {id: 701,img: kt2,price: 0},
        {id: 702,img: kt3,price: 0},
        {id: 703,img: kt4,price: 0},
        {id: 704,img: kt5,price: 0},
        {id: 705,img: kt6,price: 0},
        {id: 706,img: kt7,price: 0},
    ]
    const hall = [
        {id: 800,img: hl1,price: 0},
        {id: 801,img: hl2,price: 0},
        {id: 802,img: hl3,price: 0},
        {id: 803,img: hl4,price: 0},
        {id: 804,img: hl5,price: 0},
    ]
    return (
        <div className='catalog'>
            <div className='filters'>
                <p className='filters-txt' onClick={() => scroller.scrollTo('outdoor', { duration: 500, smooth: true })}>Входные двери</p>
                <p className='filters-txt' onClick={() => scroller.scrollTo('indoor', { duration: 500, smooth: true })}>Межкомнатные двери</p>
                <p className='filters-txt' onClick={() => scroller.scrollTo('fur')}>Фуринитура</p>
                <p className='filters-txt' onClick={() => scroller.scrollTo('floor')}>Напольное покрытие</p>
            </div>
            <h1 className='catalog-lb'>Каталог</h1>
            <Element name='outdoor'><h2 className='indoor-lb' id='outdoor'>Входные двери</h2></Element>
            <CardList item={outdoors} />
            <Element name='indoor'><h2 className='indoor-lb' id='indoor'>Межкомнатные двери</h2></Element>
            <CardList item={indoors} />
            <Element name='fur'><h2 className='indoor-lb' id='fur'>Фуринитура</h2></Element>
            <h2 className='indoor-lb fur'>Дверные ручки</h2>
            <CardListFur item={handles} />
            <h2 className='indoor-lb fur'>Замки</h2>
            <CardListFur item={locks} />
            <h2 className='indoor-lb fur'>Петли</h2>
            <CardListFur item={loops} />
            <Element name='floor'><h2 className='indoor-lb' id='floor'>Напольное покрытие</h2></Element>
            <h2 className='indoor-lb fur'>Для гостинной</h2>
            <CardListFur item={livingroom} />
            <h2 className='indoor-lb fur'>Для кухни</h2>
            <CardListFur item={kitchen} />
            <h2 className='indoor-lb fur'>Для прихожей</h2>
            <CardListFur item={hall} />
        </div>
    );
};

export default Catalog;