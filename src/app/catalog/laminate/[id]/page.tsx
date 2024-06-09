"use client"

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
import { d1 } from "@/catalog";

interface ProductProps{
    image: StaticImageData,
    name: string | undefined,
    price: number | undefined,
    description: string | undefined,
    Class: string | undefined,
    width: string | undefined,
    waterdef: string | undefined,
    fask: string | undefined,
    country: string | undefined
}


const Product = ({name, price, description, image, Class, width, waterdef, fask, country} : ProductProps) => {
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
                <Image className={styles.Product_Image} src={image} alt="product" />
                <div className={styles.Product_Info}>
                    <p className={styles.Product_Info_Base} style={{marginBottom: "20px"}}>ХАРАКТЕРИСТИКИ</p>
                    <p className={styles.Product_Info_Base}>Название — <span className={styles.Product_Info_Custom}>{name}</span></p>
                    <p className={styles.Product_Info_Base}>Цена — <span className={styles.Product_Info_Custom}>{price}</span></p>
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
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [Class, setClass] = useState()
    const [width, setWidth] = useState()
    const [waterdef, setWaterdef] = useState()
    const [fask, setFask] = useState()
    const [country, setCountry] = useState()
    const [image, setImage] = useState()
    return (
        <>
        <Header />
        <Product name={name} price={price} description={description} Class={Class} width={width} waterdef={waterdef} fask={fask} country={country} image={d1} />
        <Footer />
        </>
    );
}
 
export default ProductPage;