"use client"
import { IP, TOKEN } from "@/consts/consts";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useParams } from "next/navigation";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from '@/components/ui/ProductPage.module.scss'
import Link from "next/link";
import { arrow } from "@/assets";

interface ProductProps{
    image: StaticImageData,
    name: string | undefined,
    price: number | undefined,
    description: string | undefined,
    place: string | undefined,
    glassing : string | undefined,
    props: string | undefined
}


const Product = ({name, price, description, image, place, glassing, props} : ProductProps) => {
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
                    <p className={styles.Product_Info_Base}>Место установки — <span className={styles.Product_Info_Custom}>{place}</span></p>
                    <p className={styles.Product_Info_Base}>Остекление — <span className={styles.Product_Info_Custom}>{glassing}</span></p>
                    <p className={styles.Product_Info_Base}>Дополнительные свойства — <span className={styles.Product_Info_Custom}>{props}</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

const ProductPage = () => {
    const params = useParams()
    return (
        <>
        <Header />

        <Footer />
        </>
    );
}
 
export default ProductPage;