"use client"
import { IP, TOKEN } from "@/consts/consts";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import styles from '@/components/ui/ProductPage.module.scss'
import Link from "next/link";
import { arrow } from "@/assets";
import { useQuery } from "react-query";
import classNames from "classnames";
import LoadingPage from "@/components/Loading/LoadingPage/LoadingPage";

interface ProductProps{
    id: string,
    name: string,
    article: string,
    price: number,
    description: string,
    pathImage: string,
    installationPlace: string,
    glazing : string,
    additionalProperties: string,
}


const Product = ({id, name, article, price, description, pathImage, installationPlace, glazing, additionalProperties} : ProductProps) => {
    const GetImage = async () => {
        console.log(pathImage + "|||")
        if (pathImage != ""){
            const {data} = await axios({
                method: "get",
                url: `${IP}/catalog/image/?pathImage=${pathImage}`,
                responseType: 'blob'
            })
            console.log(data)
            return URL.createObjectURL(data)
        }

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
                <Link href="/catalog/outdoors" className={styles.ProductHeader_Link}>Входные двери</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href={`/catalog/outdoors/${id}`} className={styles.ProductHeader_Link}>{name}</Link>
            </div>
            <div className={styles.Product}>
                <img className={styles.Product_Image} src={image != undefined ? image: ""} alt="product" />
                <div className={styles.Product_Info}>
                    <p className={classNames(styles.Product_Info_Base, styles.Product_Info_Props)}>ХАРАКТЕРИСТИКИ</p>
                    <p className={styles.Product_Info_Base}>Название — <span className={styles.Product_Info_Custom}>{name}</span></p>
                    <p className={styles.Product_Info_Base}>Артикул — <span className={styles.Product_Info_Custom}>{article}</span></p>
                    <p className={styles.Product_Info_Base}>Цена — <span className={styles.Product_Info_Custom}>{price / 100}</span></p>
                    <p className={styles.Product_Info_Base}>Место установки — <span className={styles.Product_Info_Custom}>{installationPlace}</span></p>
                    <p className={styles.Product_Info_Base}>Остекление — <span className={styles.Product_Info_Custom}>{glazing}</span></p>
                    <p className={styles.Product_Info_Base}>Дополнительные свойства — <span className={styles.Product_Info_Custom}>{additionalProperties}</span></p>
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
            url: `${IP}/catalog/product?id=${params.id}&type=ENTRANCE_DOOR`,
        })
        return data.products
    }
    const {data: product, isLoading} = useQuery(`productid=${params.id}`, GetProduct)
    useEffect(() => {
        console.log(product)
    }, [product])
    return (
        <>
        <Header />
        {isLoading ?  <LoadingPage /> : 
        <Product 
            id={product != undefined ? product.id : ""} 
            pathImage={product != undefined ? product.pathImage : ""} 
            name={product != undefined ? product.name : ""}
            article={product != undefined ? product.article: ""}
            price={product != undefined ? product.price : ""} 
            description={product != undefined ? product.description : ""} 
            installationPlace={product != undefined ? product.details.installationPlace : ""}
            glazing={product != undefined ? product.details.glazing : ""}
            additionalProperties={product != undefined ? product.details.additionalProperties : ""}
        />}
        <Footer />
        </>
    );
}
 
export default ProductPage;