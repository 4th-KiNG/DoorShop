'use client'
import styles from './Quartzvinyl.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useRef, useEffect } from 'react'
import { arrow, search } from '@/assets';
import { useQuery } from 'react-query';
import axios from 'axios';
import { IP, TOKEN } from '@/consts/consts';
import { fask, creater, type, base } from './filterLists';
import { Filters } from '../ui/ui';
import { Filter, QuartzvinylProps } from '../types/types';
import { ProductList } from './products/products';
import LoadingPage from '@/components/Loading/LoadingPage/LoadingPage';


const Quartzvinyl = () => {
    const ref = useRef(null);
    const [listSlice, setListSlice] = useState(0)
    const [currnum, setCurrnum] = useState(1)
    const [priceshow, setPriceShow] = useState(true)
    const [baseShow, setBaseShow] = useState(false)
    const [typeShow, setTypeShow] = useState(false)
    const [createrShow, setCreaterShow] = useState(false)
    const [faskShow, setFaskShow] = useState(false)
    const [showMobileFilters, setShowMobileFilters] = useState(false)
    const [minmax, setMinMax] = useState([0,100000])
    const [priceFilter, setPriceFilter] = useState<number[]>([minmax[0], minmax[1]])
    const [searchtext, setSearchText] = useState<string>("")
    const [quartzvinyl, setQuartzvinyl] = useState<QuartzvinylProps[]>([])
    const [filters, setFilters] = useState<any>({       // состояние фильтров
        base: [],
        installationType: [],
        bevel: [],
        manufacturer: []
    })

    const GetProducts = async () => {
        const {data} = await axios({
            method: "get",
            url: `${IP}/catalog/category/quartzvinyl/all`
        })
        return data.products
    }
    const {data: products, isLoading} = useQuery("quartzvinyl", GetProducts)
    const ShowMore = () => {
        if (currnum < Math.ceil(quartzvinyl.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }
    
    useEffect(() => {       // при обновлении useQuery переприсваивание массива и максимальной и минимальной цены
        if (products != undefined && products.length != 0){
            console.log(products)
            setQuartzvinyl(products)
            setMinMax(
                [products != undefined ? products.reduce((min: QuartzvinylProps, current: QuartzvinylProps) => {
                return current.price < min.price ? current : min;
                }, products[0]).price / 100 : 0,
                products != undefined ? products.reduce((max: QuartzvinylProps, current: QuartzvinylProps) => {
                return current.price > max.price ? current : max;
                }, products[0]).price / 100 : 0])
        }
    }, [products])
    
    useEffect(() => {       // присваивание фильтру цены новые значения при изменении массива
        setPriceFilter(minmax)
    }, [minmax])

    useEffect(() => {       // фильтрация массива при изменении фильтров
        setQuartzvinyl(products != undefined ? products.filter((door: QuartzvinylProps) => (
            (door.name.includes(searchtext) || searchtext.length == 0) &&
            (door.price / 100 >= priceFilter[0] && door.price / 100 <= priceFilter[1]) && 
            (filters.base.includes(door.details.base) || filters.base.length == 0) &&
            (filters.installationType.includes(door.details.installationType) || filters.installationType.length == 0) &&
            (filters.bevel.includes(door.details.bevel) || filters.bevel.length == 0) &&
            (filters.manufacturer.includes(door.details.manufacturer) || filters.manufacturer.length == 0)
        )) : [])
    }, [filters, priceFilter, searchtext])

    const handlePriceFilter = (e: any) => setPriceFilter(e)
    const handleMinChange = (e: any) => setPriceFilter([Number(e.target.value), priceFilter[1]])
    const handleMaxChange = (e: any) => setPriceFilter([priceFilter[0], Number(e.target.value)])
    const handleSearchText = (e: any) => setSearchText(e.target.value)

    const allFilters : Filter[] = [
        {
            name: "Основа",
            state: baseShow,
            setState: setBaseShow,
            CheckBoxList: base
        },
        {
            name: "Тип укладки",
            state: typeShow,
            setState: setTypeShow,
            CheckBoxList: type
        },
        {
            name: "Фаска",
            state: faskShow,
            setState: setFaskShow,
            CheckBoxList: fask
        },
        {
            name: "Производитель",
            state: createrShow,
            setState: setCreaterShow,
            CheckBoxList: creater
        }
    ]
    const props = {
        priceshow, setPriceShow,
        priceFilter, minmax,
        handleMinChange, handleMaxChange, handlePriceFilter, 
        allFilters,
        showMobileFilters, setShowMobileFilters,
        filters, setFilters
    }
    if (isLoading){
        return(
            <>
            <LoadingPage />
            </>
        )
    }
    return (
        <>
        <div className={styles.CatalogPage}>
            <div className={styles.CatalogHeader}>
                <Link href="/#catalog" className={styles.CatalogHeader_Link}>Каталог</Link>
                <Image src={arrow} width={12} height={12} alt='arrow' style={{transform: "rotate(90deg)"}} ></Image>
                <Link href="/catalog/quartzvinyl" className={styles.CatalogHeader_Link}>Кварцвинил</Link>
            </div>
            <div className={styles.Products}>
                <Filters {...props} />
                <div>
                    <div className={styles.InputWithIco}>
                        <Image className={styles.InputWithIco_Ico} src={search} alt='search' />
                        <input className={styles.InputWithIco_Input} placeholder='Введите имя товара' value={searchtext} onChange={handleSearchText} type="text" />
                    </div>
                    <ProductList productList={quartzvinyl.slice(0, listSlice + 12)} />
                </div>
                <div className={styles.Cards_Arrows}>
                {currnum < Math.ceil(quartzvinyl.length / 12) && <button onClick={ShowMore} className={styles.MoreBtn}>Посмотреть ещё</button>}
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Quartzvinyl;