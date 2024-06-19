"use client"
import { useQuery } from "react-query";
import { IP, TOKEN } from "@/consts/consts";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useParams } from "next/navigation";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import styles from '@/components/ui/ProductPage.module.scss'
import Link from "next/link";
import { arrow } from "@/assets";
import LoadingPage from "@/components/Loading/LoadingPage/LoadingPage";
import classNames from "classnames";
interface ProductProps{
    id:string,
    name: string,
    price: number,
    description: string,
    pathImage: string,
    Class: string,
    width: string,
    waterdef: string,
    fask: string,
    country: string
}


const Product = ({id, pathImage, name, price, description, Class, width, waterdef, fask, country} : ProductProps) => {
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
                <Link href="/catalog/laminate" className={styles.ProductHeader_Link}>Ламинат</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href="/catalog/laminate" className={styles.ProductHeader_Link}>{name}</Link>
            </div>
            <div className={styles.Product}>
                <img className={styles.Product_Image} src={image} alt="product" />
                <div className={styles.Product_Info}>
                    <p className={classNames(styles.Product_Info_Base, styles.Product_Info_Props)}>ХАРАКТЕРИСТИКИ</p>
                    <p className={styles.Product_Info_Base}>Название — <span className={styles.Product_Info_Custom}>{name}</span></p>
                    <p className={styles.Product_Info_Base}>Цена — <span className={styles.Product_Info_Custom}>{price / 100}р</span></p>
                    <p className={styles.Product_Info_Base}>Класс — <span className={styles.Product_Info_Custom}>{Class}</span></p>
                    <p className={styles.Product_Info_Base}>Толщина — <span className={styles.Product_Info_Custom}>{width}</span></p>
                    <p className={styles.Product_Info_Base}>Влагостойкость — <span className={styles.Product_Info_Custom}>{waterdef}</span></p>
                    <p className={styles.Product_Info_Base}>Фаска — <span className={styles.Product_Info_Custom}>{fask}</span></p>
                    <p className={styles.Product_Info_Base}>Страна производства — <span className={styles.Product_Info_Custom}>{country}</span></p>
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
            url: `${IP}/catalog/product?id=${params.id}&type=LAMINATE`,
        })
        return data.products
    }
    const {data: product, isLoading} = useQuery(`productid=${params.id}`, GetProduct)
    return (
        <>
        <Header />
        {isLoading ? <LoadingPage /> : 
        <Product
            id={product != undefined ? product.id : ""}
            name={product != undefined ? product.name : ""} 
            price={product != undefined ? product.price : ""} 
            description={product != undefined ? product.description : ""}
            pathImage={product != undefined ? product.pathImage : ""}
            Class={product != undefined ? product.details.classType : ""} 
            width={product != undefined ? product.details.thickness : ""} 
            waterdef={product != undefined ? product.details.waterResistance : ""} 
            fask={product != undefined ? product.details.bevel : ""}
            country={product != undefined ? product.details.countryOfOrigin : ""} 
        />}
        <Footer />
        </>
    );
}
 
export default ProductPage;