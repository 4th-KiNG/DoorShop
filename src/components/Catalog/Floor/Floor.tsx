'use client'
import styles from '../Catalog.module.scss'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import {useState, useRef, useEffect} from 'react'
import { arrow, cross } from '@/assets';
import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import { fh1, fh2, fh3, fh4, fh5, fh6, fh7, fh8, fh9, fh10, fh11, fh12, fh13, fh14, fh15, fh16, fh17, fh18, fh19, fh20, } from '@/catalog';
import { fk1, fk2, fk3, fk4, fk5, fk6, fk7, fk8, fk9, fk10, fk11, fk12, fk13, fk14, fk15, fk16,  } from '@/catalog';
import { fl1, fl2, fl3, fl4, fl5, fl6, fl7, fl8, fl9, fl10, fl11, fl12, fl13, fl14, fl15, fl16, fl17, fl18, fl19, fl20,  } from '@/catalog';
interface CardProps{
    id: number,
    img: StaticImageData,
    price: number
}

const Floor = () => {
    const hall = [
        {id:6000, img:fh1, price: 0},
{id:6001, img:fh2, price: 0},
{id:6002, img:fh3, price: 0},
{id:6003, img:fh4, price: 0},
{id:6004, img:fh5, price: 0},
{id:6005, img:fh6, price: 0},
{id:6006, img:fh7, price: 0},
{id:6007, img:fh8, price: 0},
{id:6008, img:fh9, price: 0},
{id:6009, img:fh10, price: 0},
{id:6010, img:fh11, price: 0},
{id:6011, img:fh12, price: 0},
{id:6012, img:fh13, price: 0},
{id:6013, img:fh14, price: 0},
{id:6014, img:fh15, price: 0},
{id:6015, img:fh16, price: 0},
{id:6016, img:fh17, price: 0},
{id:6017, img:fh18, price: 0},
{id:6018, img:fh19, price: 0},
{id:6019, img:fh20, price: 0},
    ]
    const kitchen = [
        {id:6020, img:fk1, price: 0},
{id:6021, img:fk2, price: 0},
{id:6022, img:fk3, price: 0},
{id:6023, img:fk4, price: 0},
{id:6024, img:fk5, price: 0},
{id:6025, img:fk6, price: 0},
{id:6026, img:fk7, price: 0},
{id:6027, img:fk8, price: 0},
{id:6028, img:fk9, price: 0},
{id:6029, img:fk10, price: 0},
{id:6030, img:fk11, price: 0},
{id:6031, img:fk12, price: 0},
{id:6032, img:fk13, price: 0},
{id:6033, img:fk14, price: 0},
{id:6034, img:fk15, price: 0},
{id:6035, img:fk16, price: 0},
    ]
    const livingroom = [
{id:6038, img:fl1, price: 0},
{id:6039, img:fl2, price: 0},
{id:6040, img:fl3, price: 0},
{id:6041, img:fl4, price: 0},
{id:6042, img:fl5, price: 0},
{id:6043, img:fl6, price: 0},
{id:6044, img:fl7, price: 0},
{id:6045, img:fl8, price: 0},
{id:6046, img:fl9, price: 0},
{id:6047, img:fl10, price: 0},
{id:6048, img:fl11, price: 0},
{id:6049, img:fl12, price: 0},
{id:6050, img:fl13, price: 0},
{id:6051, img:fl14, price: 0},
{id:6052, img:fl15, price: 0},
{id:6053, img:fl16, price: 0},
{id:6054, img:fl17, price: 0},
{id:6055, img:fl18, price: 0},
{id:6056, img:fl19, price: 0},
{id:6057, img:fl20, price: 0},
    ]
    const ref = useRef(null);
    const [listSlice, setListSlice] = useState(0)
    const [currnum, setCurrnum] = useState(1)
    const [img, setImg] = useState(fl1)
    const [showimg, setShowimg] = useState(false) 
    const [currlist, setCurrlist] = useState(hall.concat(kitchen).concat(livingroom))
    const GoRight = () => {
        if (currnum < Math.ceil(currlist.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }
    const params = useSearchParams()
    const filter = params.get('filter')
    useEffect(() => {
        if (filter == "hall"){
            setCurrlist(hall)
        }
        else if (filter == "livingroom"){
            setCurrlist(livingroom)
        }
        else if(filter == "kitchen"){
            setCurrlist(kitchen)
        }
        else{
            setCurrlist(hall.concat(kitchen).concat(livingroom))
        }
    }, [filter])
    const OpenImage = (ig: StaticImageData) => {
        setImg(ig)
        setShowimg(!showimg)

    }
    const handleClick = (e: any) => {
        //@ts-ignore
        if (ref.current && !ref.current.contains(e.target)){
            OpenImage(img)
        }
    }
    const FiltersOpen = () => {
        document.getElementsByClassName(styles.Filters)[0].classList.toggle(styles.Filters_Open)
    }
    const Card = (props: CardProps) => {
        return(
            <div className={styles.CardFur} onClick={() => OpenImage(props.img)}>
                <Image src={props.img} className={styles.CardFur_Img} width={160} height={170} alt='door'></Image>
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
                <Link href="/catalog/floor" className={styles.CatalogHeader_Link}>Напольное покрытие</Link>
                {filter == "hall" && 
                <>
                    <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                    <Link href="/catalog/floor?filter=hall" className={styles.CatalogHeader_Link}>Для прихожей</Link>
                </>}
                {filter == "kitchen" && 
                <>
                    <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                    <Link href="/catalog/floor?filter=kitchen" className={styles.CatalogHeader_Link}>Для кухни</Link>
                </>}
                {filter == "livingroom" && 
                <>
                    <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                    <Link href="/catalog/floor?filter=livingroom" className={styles.CatalogHeader_Link}>Для гостинной</Link>
                </>}
                <div style={{marginLeft: "auto"}}>
                    <button className={styles.FiltersBtn} onClick={FiltersOpen}>Фильтры</button>
                    <div className={styles.Filters}>
                        <Link href="/catalog/floor?filter=hall" className={classNames(styles.Filters_Btn, filter == "hall" ? styles.Filters_Btn_Select: "")}>Для прихожей</Link>
                        <Link href="/catalog/floor?filter=kitchen" className={classNames(styles.Filters_Btn, filter == "kitchen" ? styles.Filters_Btn_Select: "")}>Для кухни</Link>
                        <Link href="/catalog/floor?filter=livingroom" className={classNames(styles.Filters_Btn, filter == "livingroom" ? styles.Filters_Btn_Select: "")}>Для гостинной</Link>
                        <Link href="/catalog/floor" className={styles.Filters_Btn}>Отчистить фильтры</Link>
                    </div>
                </div>
            </div>
            <div className={styles.Cards}>
                {currlist.slice(0, listSlice + 12).map((card: CardProps) => {
                    return(
                        <Card {...card}></Card>
                    )
                })}
            </div>
            <div className={styles.Cards_Arrows}>
                {currnum < Math.ceil(currlist.length / 12) && <button onClick={GoRight} className={styles.MoreBtn}>Посмотреть ещё</button>}
            </div>
            
        </div>
        {showimg && 
        <div className={styles.OpenImage} onClick={handleClick}>
            <div style={{display: "flex"}}>
                <Image className={styles.OpenImage_Img} src={img} ref={ref} alt=''></Image>
                <Image src={cross} className={styles.OpenImage_Cross} width={50} height={50} onClick={() => OpenImage(img)} alt=''></Image>
            </div>
        </div>}
        
        </>
    );
}
 
export default Floor;