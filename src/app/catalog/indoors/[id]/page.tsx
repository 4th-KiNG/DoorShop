"use client"
import { useParams } from "next/navigation";
import Header from "@/components/Header/Header";
import '../../../globals.css'
import '../../../../../public/fonts/lato.css'  
import Footer from "@/components/Footer/Footer";
import { d1 } from "@/catalog";
import { arrow } from "@/assets";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from '@/components/ui/ProductPage.module.scss'
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { IP, TOKEN } from "@/consts/consts";

interface ProductProps{
    image: StaticImageData
    name: string | undefined,
    price: number | undefined,
    description: string | undefined,
    material: string | undefined,
    glassing: string | undefined,
    mod: string | undefined,
    build: string | undefined,
    creater: string | undefined,

}

const Product = ({image, name, price, description, material, glassing, mod, build, creater} : ProductProps) => {
    return(
        <>
        <div className={styles.ProductPage}>
            <div className={styles.ProductHeader}>
                <Link href="/#catalog" className={styles.ProductHeader_Link}>Каталог</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href="/catalog/indoors" className={styles.ProductHeader_Link}>Межкомнатные двери</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href="/catalog/indoors" className={styles.ProductHeader_Link}>{name}</Link>
            </div>
            <div className={styles.Product}>
                <Image className={styles.Product_Image} src={image} alt="product" />
                <div className={styles.Product_Info}>
                    <p className={styles.Product_Info_Base} style={{marginBottom: "20px"}}>ХАРАКТЕРИСТИКИ</p>
                    <p className={styles.Product_Info_Base}>Название — <span className={styles.Product_Info_Custom}>{name}</span></p>
                    <p className={styles.Product_Info_Base}>Цена — <span className={styles.Product_Info_Custom}>{price}</span></p>
                    <p className={styles.Product_Info_Base}>Материал — <span className={styles.Product_Info_Custom}>{material}</span></p>
                    <p className={styles.Product_Info_Base}>Остекление — <span className={styles.Product_Info_Custom}>{glassing}</span></p>
                    <p className={styles.Product_Info_Base}>Модификация — <span className={styles.Product_Info_Custom}>{mod}</span></p>
                    <p className={styles.Product_Info_Base}>Конструкция — <span className={styles.Product_Info_Custom}>{build}</span></p>
                    <p className={styles.Product_Info_Base}>Производитель — <span className={styles.Product_Info_Custom}>{creater}</span></p>
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
    const [material, setMaterial] = useState()
    const [glassing, setGlassing] = useState()
    const [mod, setMod] = useState()
    const [build, setBuild] = useState()
    const [creater, setCreater] = useState()
    const [image, setImage] = useState()
    useEffect(() => {
        axios({
            method: "get",
            url: `${IP}/catalog/product?id=${params.id}`,
            headers: {
                "Authorization" : `Bearer ${TOKEN}`,
                "ngrok-skip-browser-warning": "69420"
            }
        })
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }, [])
    return (
        <>
        <Header></Header>
        <Product name={name} price={price} description={description} material={material} glassing={glassing} mod={mod} build={build} creater={creater} image={d1} />
        <Footer></Footer>
        </>
    );
}
 
export default ProductPage;