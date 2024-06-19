"use client"
import { IP, TOKEN } from "@/consts/consts";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useParams } from "next/navigation";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from '@/components/ui/ProductPage.module.scss'
import Link from "next/link";
import { arrow } from "@/assets";
import LoadingPage from "@/components/Loading/LoadingPage/LoadingPage";
import { useQuery } from "react-query";
import classNames from "classnames";

interface ProductProps{
    id: string,
    name: string,
    price: number,
    description: string,
    pathImage: string,
    hardwareType: string
}


const Product = ({name, price, description, pathImage, hardwareType} : ProductProps) => {
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
                <Link href="/catalog/furniture" className={styles.ProductHeader_Link}>Дверная фурнитура</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href="/catalog/furniture" className={styles.ProductHeader_Link}>{name}</Link>
            </div>
            <div className={styles.Product}>
                <img className={styles.Product_Image} src={image} alt="product" />
                <div className={styles.Product_Info}>
                    <p className={classNames(styles.Product_Info_Base, styles.Product_Info_Props)}>ХАРАКТЕРИСТИКИ</p>
                    <p className={styles.Product_Info_Base}>Название — <span className={styles.Product_Info_Custom}>{name}</span></p>
                    <p className={styles.Product_Info_Base}>Цена — <span className={styles.Product_Info_Custom}>{price / 100}р</span></p>
                    <p className={styles.Product_Info_Base}>Тип фурнитуры — <span className={styles.Product_Info_Custom}>{hardwareType}</span></p>
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
            url: `${IP}/catalog/product?id=${params.id}&type=HARDWARE`,
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
        {isLoading ? <LoadingPage /> : 
        <Product
            id={product != undefined ? product.id : ""}
            name={product != undefined ? product.name : ""} 
            price={product != undefined ? product.price : ""} 
            description={product != undefined ? product.description : ""}
            pathImage={product != undefined ? product.pathImage : ""}
            hardwareType={product != undefined ? product.details.hardwareType : ""}
        />}
        <Footer />
        </>
    );
}
 
export default ProductPage;