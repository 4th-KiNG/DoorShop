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
    type: string | undefined
}


const Product = ({name, price, description, image, type} : ProductProps) => {
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
                <Image className={styles.Product_Image} src={image} alt="product" />
                <div className={styles.Product_Info}>
                    <p className={styles.Product_Info_Base} style={{marginBottom: "20px"}}>ХАРАКТЕРИСТИКИ</p>
                    <p className={styles.Product_Info_Base}>Название — <span className={styles.Product_Info_Custom}>{name}</span></p>
                    <p className={styles.Product_Info_Base}>Цена — <span className={styles.Product_Info_Custom}>{price}</span></p>
                    <p className={styles.Product_Info_Base}>Тип фурнитуры — <span className={styles.Product_Info_Custom}>{type}</span></p>
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
    const [type, setType] = useState()
    const [image, setImage] = useState()
    return (
        <>
        <Header />
        <Product name={name} price={price} description={description} type={type} image={d1} />
        <Footer />
        </>
    );
}
 
export default ProductPage;