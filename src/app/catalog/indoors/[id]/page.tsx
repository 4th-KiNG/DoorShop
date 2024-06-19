"use client"
import { useParams } from "next/navigation";
import Header from "@/components/Header/Header";
import '../../../globals.css'
import '../../../../../public/fonts/lato.css'  
import Footer from "@/components/Footer/Footer";
import { arrow } from "@/assets";
import Image from "next/image";
import styles from '@/components/ui/ProductPage.module.scss'
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import { IP } from "@/consts/consts";
import { useQuery } from "react-query";
import classNames from "classnames";
import LoadingPage from "@/components/Loading/LoadingPage/LoadingPage";

interface ProductProps{
    id: string,
    name: string,
    article: string,
    price: number,
    material: string,
    glazing: string,
    modification: string,
    construction: string,
    manufacturer: string,
    pathImage: string
    description: string
}

const Product = ({id, pathImage, name, price, description, material, glazing, modification, construction, manufacturer, article} : ProductProps) => {
    const GetImage = async () => {
        if (pathImage != ""){
            const {data} = await axios({
                method: "get",
                url: `${IP}/catalog/image/?pathImage=${pathImage}`,
                responseType: 'blob',
            })
            console.log(data)
            return URL.createObjectURL(data)
        }
        console.log(pathImage)
        return ""
    }
    const {data: image, isLoading} = useQuery(`image=${pathImage}`, GetImage)
    useEffect(() => {
        console.log(image)
    }, [image])
    if (isLoading){
        return(
            <>
            <LoadingPage />
            </>
        )
    }
    return(
        <>
        <div className={styles.ProductPage}>
            <div className={styles.ProductHeader}>
                <Link href="/#catalog" className={styles.ProductHeader_Link}>Каталог</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href="/catalog/indoors" className={styles.ProductHeader_Link}>Межкомнатные двери</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href={`/catalog/indoors/${id}`} className={styles.ProductHeader_Link}>{name}</Link>
            </div>
            <div className={styles.Product}>
                <img className={styles.Product_Image} src={image != undefined ? image: ""} alt="product" />
                <div className={styles.Product_Info}>
                    <p className={classNames(styles.Product_Info_Base, styles.Product_Info_Props)}>ХАРАКТЕРИСТИКИ</p>
                    <p className={styles.Product_Info_Base}>Название — <span className={styles.Product_Info_Custom}>{name}</span></p>
                    <p className={styles.Product_Info_Base}>Артикул — <span className={styles.Product_Info_Custom}>{article}</span></p>
                    <p className={styles.Product_Info_Base}>Цена — <span className={styles.Product_Info_Custom}>{price / 100}р</span></p>
                    <p className={styles.Product_Info_Base}>Материал — <span className={styles.Product_Info_Custom}>{material}</span></p>
                    <p className={styles.Product_Info_Base}>Остекление — <span className={styles.Product_Info_Custom}>{glazing}</span></p>
                    <p className={styles.Product_Info_Base}>Модификация — <span className={styles.Product_Info_Custom}>{modification}</span></p>
                    <p className={styles.Product_Info_Base}>Конструкция — <span className={styles.Product_Info_Custom}>{construction}</span></p>
                    <p className={styles.Product_Info_Base}>Производитель — <span className={styles.Product_Info_Custom}>{manufacturer}</span></p>
                    <p className={styles.Product_Info_Base}>Описание</p>
                    <span className={styles.Product_Info_Custom}>{description}</span>
                </div>
            </div>
        </div>
        </>
    )
}


const ProductPage = () => {
    const params = useParams()
    const GetProduct = async () => {
        const {data} = await axios({
            method: "get",
            url: `${IP}/catalog/product?id=${params.id}&type=INTERIOR_DOOR`,
        })
        return data.products
    }
    const {data: product, isLoading} = useQuery(`productid=${params.id}`, GetProduct)
    useEffect(() => {
        console.log(product)
    }, [product])
    return (
        <>
        <Header></Header>
        {isLoading ? <LoadingPage /> : 
        <Product
            id={product != undefined ? product.id : ""} 
            pathImage={product != undefined ? product.pathImage : ""} 
            name={product != undefined ? product.name : ""}
            article={product != undefined ? product.article: ""}
            price={product != undefined ? product.price : ""} 
            description={product != undefined ? product.description : ""} 
            manufacturer={product != undefined ? product.details.manufacturer : ""} 
            material={product != undefined ? product.details.material : ""} 
            modification={product != undefined ? product.details.modification : ""} 
            construction={product != undefined ? product.details.construction : ""}
            glazing={product != undefined ? product.details.glazing : ""}
        />}
        <Footer></Footer>
        </>
    );
}
 
export default ProductPage;