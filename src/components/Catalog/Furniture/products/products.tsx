import { memo, useEffect, useState } from "react"
import { useQuery } from "react-query"
import Link from "next/link"
import type { FurProps, FurProductListProps } from "../../types/types"
import LoadingImage from "@/components/Loading/LoadingImage/LoadingImage"
import axios from "axios"
import { IP, TOKEN } from "@/consts/consts"
import styles from '../Furniture.module.scss'

const Card = memo((props: FurProps) => {
    const [image, setImage] = useState<string | undefined>("")
    const GetImage = async () => {
        const {data} = await axios({
            method: "get",
            url: `${IP}/catalog/image/?pathImage=${props.pathImage}`,
            responseType: 'blob'
        })
        return URL.createObjectURL(data)
    }
    const {data, isLoading} = useQuery(["image", props], GetImage) 
    useEffect(() => {
        try{
            setImage(data)
        }
        catch{
            console.warn("!!!!")
        }
    }, [data])
    return(
        <Link href={`/catalog/furniture/${props.id}`} className={styles.Card}>
            {isLoading ? <LoadingImage /> : <img src={image != undefined ? image : ""} className={styles.Card_Img} alt="" />}
            <div className={styles.Card_Info}>
                <p>{props.name}</p>
                <p>от {props.price / 100}р</p>
                <p>Артикул: {props.article}</p>
            </div>
        </Link>
    )
})

const ProductList = memo(({productList} : FurProductListProps) => {
    return(
        <div className={styles.Products_Cards}>
            {productList.map((card: FurProps) => {
                return(
                    <Card {...card}></Card>
                )
            })}
        </div>
    )
    
})

export{
    Card, ProductList
}