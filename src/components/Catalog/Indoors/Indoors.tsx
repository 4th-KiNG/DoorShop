'use client'
import styles from './Indoors.module.scss'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import {useState, useRef, useEffect} from 'react'
import { arrow, arrowdown, cross, filter, search } from '@/assets';
import Head from 'next/head';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import styles1 from '@/components/ui/DoubleRange/DoubleRange.module.scss'
import '@/components/ui/DoubleRange/DoubleRange.css'
import { d1, d2, d3,} from '@/catalog';

interface CardProps{
    id: string,
    img: StaticImageData,
    name: string,
    price: number,
    material: string
}

interface RangeProps {
    min: number;
    max: number;
}

interface CheckBox{
    paragraph: string,
    value: string
}

interface CheckBoxes{
    CheckBoxList: CheckBox[]
}





const Indoors = () => {
    type Dictionary = Record<string, (string)[] >
    const ref = useRef(null);
    const [listSlice, setListSlice] = useState(0)
    const [currnum, setCurrnum] = useState(1)
    const [img, setImg] = useState(d1)
    const [showimg, setShowimg] = useState(false)
    const [priceshow, setPriceShow] = useState(true)
    const [materialshow, setMaterialShow] = useState(false)
    const [showGlass, setShowGlass] = useState(false)
    const [showMod, setShowMod] = useState(false)
    const [showBuild, setShowBuild] = useState(false)
    const [showCreater, setShowCreater] = useState(false)
    const [showMobileFilters, setShowMobileFilters] = useState(false)
    const [minmax, setMinMax] = useState([0,10000])
    const material = [
        {
            paragraph: "Массив",
            value: "material"
        },
        {
            paragraph: "Натуральный шпон",
            value: "material"
        },
        {
            paragraph: "Покрытие Soft Touch",
            value: "material"
        },
        {
            paragraph: "Экошпон",
            value: "material"
        },
        {
            paragraph: "Эмаль",
            value: "material"
        }
    ]
    const glassing = [
        {
            paragraph: "Без стекла (глухое)",
            value: "glazing"
        },
        {
            paragraph: "С зеркалом",
            value: "glazing"
        },
        {
            paragraph: "Со стеклом",
            value: "glazing"
        },
    ]
    const mod = [
        {
            paragraph: "Стандартное открывание",
            value: "modification"
        },
        {
            paragraph: "Раздвижные двери",
            value: "modification"
        },
        {
            paragraph: "Раздвижные двери",
            value: "modification"
        },
    ]
    const build = [
        {
            paragraph: "Щитовая",
            value: "construction"
        },
        {
            paragraph: "Царговая",
            value: "construction"
        },
        {
            paragraph: "С алюминиевой кромкой",
            value: "construction"
        },
        {
            paragraph: "С пластиковой кромкой",
            value: "construction"
        },
        {
            paragraph: "Багетные",
            value: "construction"
        }
    ]
    const creaters = [
        {
            paragraph: "Optima Porte",
            value: "manufacturer"
        },
        {
            paragraph: "Uberture",
            value: "manufacturer"
        },
        {
            paragraph: "Ока",
            value: "manufacturer"
        },
        {
            paragraph: "FlyDoors",
            value: "manufacturer"
        },
        {
            paragraph: "ArtGamma",
            value: "manufacturer"
        },
        {
            paragraph: "QuestDoors",
            value: "manufacturer"
        },
        {
            paragraph: "WestStyle",
            value: "manufacturer"
        },
        {
            paragraph: "elPORTA",
            value: "manufacturer"
        },
        {
            paragraph: "ВФД",
            value: "manufacturer"
        },
        {
            paragraph: "Tandor",
            value: "manufacturer"
        },
        {
            paragraph: "Эко-Стиль",
            value: "manufacturer"
        },
        {
            paragraph: "ДИОдор",
            value: "manufacturer"
        },
        {
            paragraph: "Dariano",
            value: "manufacturer"
        },
        {
            paragraph: "Легенда",
            value: "manufacturer"
        }
    ]
    const GoRight = () => {
        if (currnum < Math.ceil(indoors.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }
    const [indoors, setIndoors] = useState<CardProps[]>([
        {id: "2001", img: d1, name: "Дверь №1", price: 3000, material: "Дерево"},
        {id: "2001", img: d2, name: "Дверь №2", price: 4000, material: "Пластик"},
        {id: "2001", img: d3, name: "Дверь №3", price: 1000, material: "Шпон"},
        {id: "2001", img: d1, name: "Дверь №1", price: 3000, material: "Дерево"},
        {id: "2001", img: d2, name: "Дверь №2", price: 4000, material: "Пластик"},
        {id: "2001", img: d3, name: "Дверь №3", price: 1000, material: "Шпон"},
        {id: "2001", img: d1, name: "Дверь №1", price: 3000, material: "Дерево"},
        {id: "2001", img: d2, name: "Дверь №2", price: 4000, material: "Пластик"},
        {id: "2001", img: d3, name: "Дверь №3", price: 1000, material: "Шпон"},
    ])
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
    
    const [filters, setFilters] = useState<Dictionary>({
        material: [],
        glazing: [],
        modification: [],
        construction: [],
        manufacturer: []
    })
    const DoubleRange = () => {
        const [priceFilter, setPriceFilter] = useState<number[]>([minmax[0], minmax[1]])
        // useEffect(() => {
        //     setIndoors(indoors.filter(door => door.price < priceFilter[1] && door.price > priceFilter[0]))
        // }, [priceFilter, indoors, setIndoors])
        const handleSliderChange = (newRange: any) => {
            setPriceFilter(newRange)
        };
        const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = Number(event.target.value);
            const newPriceFilter = [...priceFilter];
            newPriceFilter[index] = newValue;
            if (newPriceFilter[0] <= newPriceFilter[1]) {
                setPriceFilter(newPriceFilter);
            }
        };
        return (
            <>
                <div className={styles1.Inputs}>
                    <input
                        className={styles1.Inputs_Input}
                        type="number"
                        onChange={() => handleInputChange(0)}
                        value={priceFilter[0]}
                        min={minmax[0]}
                        max={minmax[1]}
                    />
                    <input
                        className={styles1.Inputs_Input}
                        type="number"
                        onChange={() => handleInputChange(1)}
                        value={priceFilter[1]}
                        min={minmax[0]}
                        max={minmax[1]}
                    />
                </div>
                <Slider
                    range
                    min={minmax[0]}
                    max={minmax[1]}
                    value={priceFilter}
                    onChange={handleSliderChange}
                />
            </>
        );
    }
    const CheckBoxes = ({CheckBoxList} : CheckBoxes) => {
        return(
            <div className={styles.CheckBoxes}>
            {CheckBoxList.map((el: CheckBox) => {
                return(
                    <>
                    <label className={styles.CheckBoxes_CheckBox} >
                        <input type="checkbox" checked={filters[el.value] != undefined && filters[el.value].includes(el.paragraph)} onChange={() => setFilters((prevFilters: Dictionary) => {
                        return{
                            ...prevFilters,
                            [el.value]: !prevFilters[el.value].includes(el.paragraph) ? [...prevFilters[el.value], el.paragraph] : prevFilters[el.value].filter(item => item !== el.paragraph)
                        }
                    })} />
                        <span>{el.paragraph}</span>
                    </label>
                    </>
                )
            })}
            </div>
        )
    }
    const Card = (props: CardProps) => {
        return(
            <Link href={"/catalog/indoors/1"} className={styles.Card}>
                <Image src={props.img} className={styles.Card_Img} alt='door'></Image>
                <div className={styles.Card_Info}>
                    <p>{props.name}</p>
                    <p>от {props.price}</p>
                </div>
            </Link>
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
                <div className={styles.Products_Filters}>
                    <div className={styles.Products_Filters_Title}>
                        <Image src={filter} alt='filter' width={30} height={30}></Image>
                        <p>Фильтры</p>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setPriceShow(!priceshow)}>
                            <p>Розничная цена</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${priceshow ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${priceshow ? "max-content" : "0px"}`, width: "100%"}}><DoubleRange /></div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setMaterialShow(!materialshow)}>
                            <p>Материал</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${materialshow ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${materialshow ? "max-content" : "0px"}`, width: "100%"}}>
                            <div className={styles.CheckBoxes}>
                                <CheckBoxes CheckBoxList={material}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setShowGlass(!showGlass)}>
                            <p>Остекление</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showGlass ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${showGlass ? "max-content" : "0px"}`, width: "100%"}}>
                            <CheckBoxes CheckBoxList={glassing} />
                        </div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setShowMod(!showMod)}>
                            <p>Модификация</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showMod ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${showMod ? "max-content" : "0px"}`, width: "100%"}}>
                            <CheckBoxes CheckBoxList={mod} />
                        </div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setShowBuild(!showBuild)}>
                            <p>Конструкция</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showBuild ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${showBuild ? "max-content" : "0px"}`, width: "100%"}}>
                            <CheckBoxes CheckBoxList={build}/>
                        </div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setShowCreater(!showCreater)}>
                            <p>Производитель</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showCreater ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${showCreater ? "max-content" : "0px"}`, width: "100%"}}>
                            <CheckBoxes CheckBoxList={creaters}/>
                        </div>
                    </div>
                </div>
                <div className={styles.Products_Filters_Mobile}>
                    <div className={styles.Products_Filters_Mobile_Title} onClick={() => setShowMobileFilters(!showMobileFilters)}>
                        <Image src={filter} className={styles.Products_Filters_Mobile_Ico} alt='filter' width={30} height={30}></Image>
                        <p>Фильтры</p>
                    </div>
                    <div className={styles.Products_Filters_Mobile_Blocks} style={{height: `${showMobileFilters ? "max-content" : "0px"}`}}>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setPriceShow(!priceshow)}>
                                <p>Розничная цена</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${priceshow ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${priceshow ? "max-content" : "0px"}`, width: "100%"}}><DoubleRange /></div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setMaterialShow(!materialshow)}>
                                <p>Материал</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${materialshow ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${materialshow ? "max-content" : "0px"}`, width: "100%"}}>
                                <div className={styles.CheckBoxes}>
                                    <CheckBoxes CheckBoxList={material}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setShowGlass(!showGlass)}>
                                <p>Остекление</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showGlass ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${showGlass ? "max-content" : "0px"}`, width: "100%"}}>
                                <CheckBoxes CheckBoxList={glassing} />
                            </div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setShowMod(!showMod)}>
                                <p>Модификация</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showMod ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${showMod ? "max-content" : "0px"}`, width: "100%"}}>
                                <CheckBoxes CheckBoxList={mod} />
                            </div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setShowBuild(!showBuild)}>
                                <p>Конструкция</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showBuild ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${showBuild ? "max-content" : "0px"}`, width: "100%"}}>
                                <CheckBoxes CheckBoxList={build}/>
                            </div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setShowCreater(!showCreater)}>
                                <p>Производитель</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showCreater ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${showCreater ? "max-content" : "0px"}`, width: "100%"}}>
                                <CheckBoxes CheckBoxList={creaters}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.InputWithIco}>
                        <Image className={styles.InputWithIco_Ico} src={search} alt='search' />
                        <input className={styles.InputWithIco_Input} placeholder='Введите имя товара' type="text" />
                    </div>
                    <div className={styles.Products_Cards}>
                        {indoors.slice(0, listSlice + 12).map((card: CardProps) => {
                            return(
                                <Card {...card}></Card>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.Cards_Arrows}>
                {currnum < Math.ceil(indoors.length / 12) && <button onClick={GoRight} className={styles.MoreBtn}>Посмотреть ещё</button>}
                </div>
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
 
export default Indoors;