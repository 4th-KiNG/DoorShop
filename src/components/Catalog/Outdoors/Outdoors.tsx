'use client'
import styles from './Outdoors.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect } from 'react'
import { arrow, search } from '@/assets';
import { useQuery } from 'react-query';
import axios from 'axios';
import { IP, TOKEN } from '@/consts/consts';
import { Filters } from '../ui/ui';
import { ProductList } from './products/products';
import { place, glassing, addprops } from './filterLists';
import { Filter, OutdoorProps } from '../types/types';
import LoadingPage from '@/components/Loading/LoadingPage/LoadingPage';

const Outdoors = () => {
    const [listSlice, setListSlice] = useState(0)
    const [currnum, setCurrnum] = useState(1)
    const [priceshow, setPriceShow] = useState(true)
    const [placeShow, setPlaceShow] = useState(false)
    const [showGlass, setShowGlass] = useState(false)
    const [showProps, setShowProps] = useState(false)
    const [showMobileFilters, setShowMobileFilters] = useState(false)
    const [minmax, setMinMax] = useState([0,100000])
    const [priceFilter, setPriceFilter] = useState<number[]>([minmax[0], minmax[1]])
    const [searchtext, setSearchText] = useState<string>("")
    const [outdoors, setOutdoors] = useState<OutdoorProps[]>([])
    const [filters, setFilters] = useState<any>({       // состояние фильтров
        installationPlace: [],
        glazing: [],
        additionalProperties: []
    })

    const GetProducts = async () => {
        const {data} = await axios({
            method: "get",
            url: `${IP}/catalog/category/entrance-door/all`
        })
        return data.products
    }
    const {data: products, isLoading} = useQuery("outdoors", GetProducts)
    const ShowMore = () => {
        if (currnum < Math.ceil(outdoors.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }

    useEffect(() => {     // при обновлении useQuery переприсваивание массива и максимальной и минимальной цены
        if (products != undefined && products.length != 0){
            setOutdoors(products)
            setMinMax(
                [products != undefined ? products.reduce((min: OutdoorProps, current: OutdoorProps) => {
                return current.price < min.price ? current : min;
                }, products[0]).price / 100 : 0,
                products != undefined ? products.reduce((max: OutdoorProps, current: OutdoorProps) => {
                return current.price > max.price ? current : max;
                }, products[0]).price / 100 : 0])
        }
    }, [products])

    useEffect(() => {     // присваивание фильтру цены новые значения при изменении массива
        setPriceFilter(minmax)
    }, [minmax])

    useEffect(() => {       // фильтрация массива при изменении фильтров
        setOutdoors(products != undefined ? products.filter((door: OutdoorProps) => (
            (door.name.includes(searchtext) || searchtext.length == 0) &&
            (door.price / 100 >= priceFilter[0] && door.price / 100 <= priceFilter[1]) && 
            (filters.installationPlace.includes(door.details.installationPlace) || filters.installationPlace.length == 0) &&
            (filters.glazing.includes(door.details.glazing) || filters.glazing.length == 0) &&
            (filters.additionalProperties.includes(door.details.additionalProperties) || filters.additionalProperties.length == 0)
        )) : [])
    }, [filters, priceFilter, searchtext])
    
    const handlePriceFilter = (e: any) => setPriceFilter(e)
    const handleMinChange = (e: any) => setPriceFilter([Number(e.target.value), priceFilter[1]])
    const handleMaxChange = (e: any) => setPriceFilter([priceFilter[0], Number(e.target.value)])
    const handleSearchText = (e: any) => setSearchText(e.target.value)
    const allFilters : Filter[] = [
        {
            name: "Материал",
            state: placeShow,
            setState: setPlaceShow,
            CheckBoxList: place
        },
        {
            name: "Остекление",
            state: showGlass,
            setState: setShowGlass,
            CheckBoxList: glassing
        },
        {
            name: "Модификация",
            state: showProps,
            setState: setShowProps,
            CheckBoxList: addprops
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
                <Link href="/catalog/outdoors" className={styles.CatalogHeader_Link}>Входные двери</Link>
            </div>
            <div className={styles.Products}>
                <Filters {...props} />
                <div>
                    <div className={styles.InputWithIco}>
                        <Image className={styles.InputWithIco_Ico} src={search} alt='search' />
                        <input className={styles.InputWithIco_Input} placeholder='Введите имя товара' value={searchtext} onChange={handleSearchText} type="text" />
                    </div>
                    <ProductList productList={outdoors.slice(0, listSlice + 12)} />
                </div>
                <div className={styles.Cards_Arrows}>
                    {currnum < Math.ceil(outdoors.length / 12) && <button onClick={ShowMore} className={styles.MoreBtn}>Посмотреть ещё</button>}
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Outdoors;