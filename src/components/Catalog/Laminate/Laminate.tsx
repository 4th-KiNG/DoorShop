'use client'
import styles from './Laminate.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react'
import { arrow, search } from '@/assets';
import { useQuery } from 'react-query';
import axios from 'axios';
import { IP, TOKEN } from '@/consts/consts';
import { ProductList } from './products/products';
import { Filters } from '../ui/ui';
import { Filter, LaminateProps } from '../types/types';
import { Class, fask, country, waterdef, width } from './filtersLists';
import LoadingPage from '@/components/Loading/LoadingPage/LoadingPage';

const Laminate = () => {
    const [listSlice, setListSlice] = useState(0)
    const [currnum, setCurrnum] = useState(1)
    const [priceshow, setPriceShow] = useState(true)
    const [classShow, setClassShow] = useState(false)
    const [widthShow, setWidthShow] = useState(false)
    const [waterDefShow, setWaterDefShow] = useState(false)
    const [faskShow, setFaskShow] = useState(false)
    const [countryShow, setCountryShow] = useState(false)
    const [showMobileFilters, setShowMobileFilters] = useState(false)
    const [minmax, setMinMax] = useState([0,100000])
    const [priceFilter, setPriceFilter] = useState<number[]>([minmax[0], minmax[1]])
    const [searchtext, setSearchText] = useState<string>("")
    const [laminate, setLaminate] = useState<LaminateProps[]>([])
    const [filters, setFilters] = useState<any>({       // состояние фильтров
        classType: [],
        thickness: [],
        waterResistance: [],
        bevel: [],
        countryOfOrigin: []
    })
    const GetProducts = async () => {
        const {data} = await axios({
            method: "get",
            url: `${IP}/catalog/category/laminate/all`
        })
        return data.products
    }
    const {data: products, isLoading} = useQuery("laminate", GetProducts)
    const ShowMore = () => {
        if (currnum < Math.ceil(laminate.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }
    
    useEffect(() => {       // при обновлении useQuery переприсваивание массива и максимальной и минимальной цены
        if (products != undefined && products.length != 0){
            setLaminate(products)
            setMinMax(
                [products != undefined ? products.reduce((min: LaminateProps, current: LaminateProps) => {
                return current.price < min.price ? current : min;
                }, products[0]).price / 100 : 0,
                products != undefined ? products.reduce((max: LaminateProps, current: LaminateProps) => {
                return current.price > max.price ? current : max;
                }, products[0]).price / 100 : 0])
        }
    }, [products])
    
    useEffect(() => {       // присваивание фильтру цены новые значения при изменении массива
        setPriceFilter(minmax)
    }, [minmax])

    useEffect(() => {       // фильтрация массива при изменении фильтров
        setLaminate(products != undefined ? products.filter((door: LaminateProps) => (
            (door.name.includes(searchtext) || searchtext.length == 0) &&
            (door.price / 100 >= priceFilter[0] && door.price / 100 <= priceFilter[1]) && 
            (filters.classType.includes(door.details.classType) || filters.classType.length == 0) &&
            (filters.thickness.includes(door.details.thickness) || filters.thickness.length == 0) &&
            (filters.waterResistance.includes(door.details.waterResistance) || filters.waterResistance.length == 0) &&
            (filters.bevel.includes(door.details.bevel) || filters.bevel.length == 0) &&
            (filters.countryOfOrigin.includes(door.details.countryOfOrigin) || filters.countryOfOrigin.length == 0)
        )) : [])
    }, [filters, priceFilter, searchtext])

    const handlePriceFilter = (e: any) => setPriceFilter(e)
    const handleMinChange = (e: any) => setPriceFilter([Number(e.target.value), priceFilter[1]])
    const handleMaxChange = (e: any) => setPriceFilter([priceFilter[0], Number(e.target.value)])
    const handleSearchText = (e: any) => setSearchText(e.target.value)

    const allFilters : Filter[] = [
        {
            name: "Класс",
            state: classShow,
            setState: setClassShow,
            CheckBoxList: Class
        },
        {
            name: "Толщина",
            state: widthShow,
            setState: setWidthShow,
            CheckBoxList: width
        },
        {
            name: "Влагостойкость",
            state: waterDefShow,
            setState: setWaterDefShow,
            CheckBoxList: waterdef
        },
        {
            name: "Фаска",
            state: faskShow,
            setState: setFaskShow,
            CheckBoxList: fask
        },
        {
            name: "Страна производства",
            state: countryShow,
            setState: setCountryShow,
            CheckBoxList: country
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
                <Link href="/catalog/laminate" className={styles.CatalogHeader_Link}>Ламинат</Link>
            </div>
            <div className={styles.Products}>
                <Filters {...props} />
                <div>
                    <div className={styles.InputWithIco}>
                        <Image className={styles.InputWithIco_Ico} src={search} alt='search' />
                        <input className={styles.InputWithIco_Input} placeholder='Введите имя товара' value={searchtext} onChange={handleSearchText} type="text" />
                    </div>
                    <ProductList productList={laminate.slice(0, listSlice + 12)} />
                </div>
                <div className={styles.Cards_Arrows}>
                {currnum < Math.ceil(laminate.length / 12) && <button onClick={ShowMore} className={styles.MoreBtn}>Посмотреть ещё</button>}
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Laminate;