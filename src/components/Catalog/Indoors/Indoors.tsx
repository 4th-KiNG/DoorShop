'use client'
import styles from './Indoors.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect } from 'react'
import { arrow, search } from '@/assets';
import { useQuery } from 'react-query';
import axios from 'axios';
import { IP, TOKEN } from '@/consts/consts';
import type { Filter, IndoorProps } from '../types/types';
import { ProductList } from './products/products';
import { Filters } from '../ui/ui';
import { material, glassing, build, mod, creaters } from './filterLists';
import LoadingPage from '@/components/Loading/LoadingPage/LoadingPage';

const Indoors = () => {
    const [listSlice, setListSlice] = useState(0)
    const [currnum, setCurrnum] = useState(1)
    const [priceshow, setPriceShow] = useState(true)
    const [materialshow, setMaterialShow] = useState(false)
    const [showGlass, setShowGlass] = useState(false)
    const [showMod, setShowMod] = useState(false)
    const [showBuild, setShowBuild] = useState(false)
    const [showCreater, setShowCreater] = useState(false)
    const [showMobileFilters, setShowMobileFilters] = useState(false)
    const [minmax, setMinMax] = useState([0,100000])
    const [priceFilter, setPriceFilter] = useState<number[]>([minmax[0], minmax[1]])
    const [searchtext, setSearchText] = useState<string>("")
    const [indoors, setIndoors] = useState<IndoorProps[]>([])
    const [filters, setFilters] = useState<Filters>({       // состояние фильтров
        material: [],
        glazing: [],
        modification: [],
        construction: [],
        manufacturer: []
    })
    const GetProducts = async () => {
        const {data} = await axios({
            method: "get",
            url: `${IP}/catalog/category/interior-door/all`,
        })
        console.log(data.products)
        return data.products
    }
    const {data: products, isLoading} = useQuery("indoors", GetProducts)
    const ShowMore = () => {
        if (currnum < Math.ceil(indoors.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }
    useEffect(() => {       // при обновлении useQuery переприсваивание массива и максимальной и минимальной цены
        if (products != undefined && products.length != 0){
            setIndoors(products)
            setMinMax(
                [products != undefined ? products.reduce((min: IndoorProps, current: IndoorProps) => {
                return current.price < min.price ? current : min;
                }, products[0]).price / 100 : 0,
                products != undefined ? products.reduce((max: IndoorProps, current: IndoorProps) => {
                return current.price > max.price ? current : max;
                }, products[0]).price / 100 : 0])
        }
    }, [products])

    useEffect(() => {       // присваивание фильтру цены новые значения при изменении массива
        setPriceFilter(minmax)
    }, [minmax])
    
    useEffect(() => {       // фильтрация массива при изменении фильтров
        setIndoors((products != undefined && products.length != 0) ? products.filter((door: IndoorProps) => (
            (door.name.includes(searchtext) || door.article.includes(searchtext) || searchtext.length == 0) &&
            (door.price / 100 >= priceFilter[0] && door.price / 100 <= priceFilter[1]) && 
            (filters.material.includes(door.details.material) || filters.material.length == 0) &&
            (filters.glazing.includes(door.details.glazing) || filters.glazing.length == 0) &&
            (filters.modification.includes(door.details.modification) || filters.modification.length == 0) &&
            (filters.construction.includes(door.details.construction) || filters.construction.length == 0) &&
            (filters.manufacturer.includes(door.details.manufacturer) || filters.manufacturer.length == 0)
        )) : [])
    }, [filters, priceFilter, searchtext])
    
    const handlePriceFilter = (e: any) => setPriceFilter(e)
    const handleMinChange = (e: any) => setPriceFilter([Number(e.target.value), priceFilter[1]])
    const handleMaxChange = (e: any) => setPriceFilter([priceFilter[0], Number(e.target.value)])
    const handleSearchText = (e: any) => setSearchText(e.target.value)

    const allFilters : Filter[] = [
        {
            name: "Материал",
            state: materialshow,
            setState: setMaterialShow,
            CheckBoxList: material
        },
        {
            name: "Остекление",
            state: showGlass,
            setState: setShowGlass,
            CheckBoxList: glassing
        },
        {
            name: "Модификация",
            state: showMod,
            setState: setShowMod,
            CheckBoxList: mod
        },
        {
            name: "Конструкция",
            state: showBuild,
            setState: setShowBuild,
            CheckBoxList: build
        },
        {
            name: "Производитель",
            state: showCreater,
            setState: setShowCreater,
            CheckBoxList: creaters
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
                <Link href="/catalog/indoors" className={styles.CatalogHeader_Link}>Межкомнатные двери</Link>
            </div>
            <div className={styles.Products}>
                <Filters {...props} />
                <div>
                    <div className={styles.InputWithIco}>
                        <Image className={styles.InputWithIco_Ico} src={search} alt='search' />
                        <input className={styles.InputWithIco_Input} placeholder='Введите имя товара' value={searchtext} onChange={handleSearchText} type="text" />
                    </div>
                    <ProductList productList={indoors.slice(0, listSlice + 12)} />
                </div>
                <div></div>
                <div className={styles.Products_Cards_Arrows}>
                    {currnum < Math.ceil(indoors.length / 12) && <button onClick={ShowMore} className={styles.MoreBtn}>Посмотреть ещё</button>}
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Indoors;