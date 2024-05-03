"use client"
import styles from '../Catalog.module.scss'
import Image, { StaticImageData } from 'next/image'
import {useState, useRef, useEffect} from 'react'
import Link from 'next/link'
import { cross, arrow } from '@/assets'
import { o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17, o18, o19, o20, o21, o22, o23, o24, o25, o26, o27, o28, o29, o30, o31, o32, o33, o34, o35, o36, o37, o38, o39, o40, o41, o42, o43, o44, o45, o46, o47, o48, } from '@/catalog'
interface CardProps{
    id: number,
    img: StaticImageData,
    price: number
}
const Outdoors = () => {
    const ref = useRef(null);
    const [listSlice, setListSlice] = useState(0)
    const [currnum, setCurrnum] = useState(1)
    const [img, setImg] = useState(o1)
    const [showimg, setShowimg] = useState(false)
    const GoRight = () => {
        if (currnum < Math.ceil(outdoors.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }
    const outdoors =[
        {id: 1000, img: o1, price: 0},
        {id: 1001, img: o2, price: 0},
        {id: 1002, img: o3, price: 0},
        {id: 1003, img: o4, price: 0},
        {id: 1004, img: o5, price: 0},
        {id: 1005, img: o6, price: 0},
        {id: 1006, img: o7, price: 0},
        {id: 1007, img: o8, price: 0},
        {id: 1008, img: o9, price: 0},
        {id: 1009, img: o10, price: 0},
        {id: 1010, img: o11, price: 0},
        {id: 1011, img: o12, price: 0},
        {id: 1012, img: o13, price: 0},
        {id: 1013, img: o14, price: 0},
        {id: 1014, img: o15, price: 0},
        {id: 1015, img: o16, price: 0},
        {id: 1016, img: o17, price: 0},
        {id: 1017, img: o18, price: 0},
        {id: 1018, img: o19, price: 0},
        {id: 1019, img: o20, price: 0},
        {id: 1020, img: o21, price: 0},
        {id: 1021, img: o22, price: 0},
        {id: 1022, img: o23, price: 0},
        {id: 1023, img: o24, price: 0},
        {id: 1024, img: o25, price: 0},
        {id: 1025, img: o26, price: 0},
        {id: 1026, img: o27, price: 0},
        {id: 1027, img: o28, price: 0},
        {id: 1028, img: o29, price: 0},
        {id: 1029, img: o30, price: 0},
        {id: 1030, img: o31, price: 0},
        {id: 1031, img: o32, price: 0},
        {id: 1032, img: o33, price: 0},
        {id: 1033, img: o34, price: 0},
        {id: 1034, img: o35, price: 0},
        {id: 1035, img: o36, price: 0},
        {id: 1036, img: o37, price: 0},
        {id: 1037, img: o38, price: 0},
        {id: 1038, img: o39, price: 0},
        {id: 1039, img: o40, price: 0},
        {id: 1040, img: o41, price: 0},
        {id: 1041, img: o42, price: 0},
        {id: 1042, img: o43, price: 0},
        {id: 1043, img: o44, price: 0},
        {id: 1044, img: o45, price: 0},
        {id: 1045, img: o46, price: 0},
        {id: 1046, img: o47, price: 0},
        {id: 1047, img: o48, price: 0},
    ]
    const handleClick = (e: any) => {
        //@ts-ignore
        if (ref.current && !ref.current.contains(e.target)){
            OpenImage(img)
        }
    }
    const OpenImage = (ig: StaticImageData) => {
        setImg(ig)
        setShowimg(!showimg)
    }
    const Card = (props: CardProps) => {
        return(
            <div className={styles.CardOutdoor} onClick={() => OpenImage(props.img)}>
                <Image src={props.img} className={styles.CardOutdoor_Img} alt='door'></Image>
                <p>{props.id}</p>
            </div>
        )
    }
    return (
        <>
            <div className={styles.CatalogPage}>
                <div className={styles.CatalogHeader}>
                    <Link href="/#catalog" className={styles.CatalogHeader_Link}>Каталог</Link>
                    <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                    <Link href="/catalog/indoors" className={styles.CatalogHeader_Link}>Входные двери</Link>
                </div>
                <div className={styles.Cards}>
                    {outdoors.slice(0, listSlice + 12).map((card: CardProps) => {
                        return(
                            <Card {...card}></Card>
                        )
                    })}
                </div>
                <div className={styles.Cards_Arrows}>
                {currnum < Math.ceil(outdoors.length / 12) && <button onClick={GoRight} className={styles.MoreBtn}>Посмотреть ещё</button>}
                </div>
                
            </div>
            {showimg &&
                <div className={styles.OpenImage} onClick={handleClick}>
                <div style={{display: "flex"}}>
                    <Image className={styles.OpenImage_Img} ref={ref} src={img} alt=''></Image>
                    <Image src={cross} className={styles.OpenImage_Cross} width={50} height={50} onClick={() => OpenImage(img)} alt=''></Image>
                </div>
            </div>
            }
        </>
    );
}
 
export default Outdoors;