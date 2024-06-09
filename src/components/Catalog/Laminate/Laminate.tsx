'use client'
import styles from './Laminate.module.scss'
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
    price: string,
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

const DoubleRange = ({ min, max }: RangeProps) => {
    const [range, setRange] = useState([min, max]);

    const handleSliderChange = (newRange: any) => {
        setRange(newRange);
    };

    const handleInputChange = (index: number, value: number) => {
        const newRange = [...range];
        newRange[index] = value;
        if (newRange[0] <= newRange[1]) {
            setRange(newRange);
        }
    };

    return (
        <>
            <div className={styles1.Inputs}>
                <input
                    className={styles1.Inputs_Input}
                    type="number"
                    onChange={(e) => handleInputChange(0, parseInt(e.target.value))}
                    value={range[0]}
                    min={min}
                    max={max}
                />
                <input
                    className={styles1.Inputs_Input}
                    type="number"
                    onChange={(e) => handleInputChange(1, parseInt(e.target.value))}
                    value={range[1]}
                    min={min}
                    max={max}
                />
            </div>
            <Slider
                range
                min={min}
                max={max}
                value={range}
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
                <label className={styles.CheckBoxes_CheckBox}>
                    <input type="checkbox" />
                    <span>{el.paragraph}</span>
                </label>
                </>
            )
        })}
        </div>
    )
}

const Laminate = () => {
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
    const Class = [
        {
            paragraph: "32",
            value: "32"
        },
        {
            paragraph: "33",
            value: "33"
        },
        {
            paragraph: "34",
            value: "34"
        }
    ]
    const width = [
        {
            paragraph: "8мм",
            value: "8мм"
        },
        {
            paragraph: "10мм",
            value: "10мм"
        },
        {
            paragraph: "12мм",
            value: "12мм"
        },
    ]
    const waterdef = [
        {
            paragraph: "Да",
            value: "Да"
        },
        {
            paragraph: "Нет",
            value: "Нет"
        },
    ]
    const fask = [
        {
            paragraph: "Без фаски",
            value: "Без фаски"
        },
        {
            paragraph: "4V",
            value: "4V"
        },
        {
            paragraph: "V4 окрашенная",
            value: "V4 окрашенная"
        },
    ]
    const country = [
        {
            paragraph: "Россия",
            value: "Россия"
        },
        {
            paragraph: "Беларусь",
            value: "Беларусь"
        },
        {
            paragraph: "Турция",
            value: "Турция"
        },
        {
            paragraph: "КНР",
            value: "КНР"
        },
    ]
    const GoRight = () => {
        if (currnum < Math.ceil(indoors.length / 12)){
            setCurrnum(currnum + 1)
            setListSlice(listSlice + 12)
        }
    }
    const indoors = [
        {id: "2001", img: d1, name: "Дверь №1", price: "3000", material: "Дерево"},
        {id: "2001", img: d2, name: "Дверь №2", price: "4000", material: "Пластик"},
        {id: "2001", img: d3, name: "Дверь №3", price: "1000", material: "Шпон"},
        {id: "2001", img: d1, name: "Дверь №1", price: "3000", material: "Дерево"},
        {id: "2001", img: d2, name: "Дверь №2", price: "4000", material: "Пластик"},
        {id: "2001", img: d3, name: "Дверь №3", price: "1000", material: "Шпон"},
        {id: "2001", img: d1, name: "Дверь №1", price: "3000", material: "Дерево"},
        {id: "2001", img: d2, name: "Дверь №2", price: "4000", material: "Пластик"},
        {id: "2001", img: d3, name: "Дверь №3", price: "1000", material: "Шпон"},
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
            <Link href={"/catalog/laminate/1"} className={styles.Card}>
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
                <Link href="/catalog/laminate" className={styles.CatalogHeader_Link}>Ламинат</Link>
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
                        <div style={{overflow: "hidden", height: `${priceshow ? "max-content" : "0px"}`, width: "100%"}}><DoubleRange min={0} max={100} /></div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setMaterialShow(!materialshow)}>
                            <p>Класс</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${materialshow ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${materialshow ? "max-content" : "0px"}`, width: "100%"}}>
                            <div className={styles.CheckBoxes}>
                                <CheckBoxes CheckBoxList={Class}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setShowGlass(!showGlass)}>
                            <p>Толщина</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showGlass ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${showGlass ? "max-content" : "0px"}`, width: "100%"}}>
                            <CheckBoxes CheckBoxList={width} />
                        </div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setShowMod(!showMod)}>
                            <p>Влагостойкость</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showMod ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${showMod ? "max-content" : "0px"}`, width: "100%"}}>
                            <CheckBoxes CheckBoxList={waterdef} />
                        </div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setShowBuild(!showBuild)}>
                            <p>Фаска</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showBuild ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${showBuild ? "max-content" : "0px"}`, width: "100%"}}>
                            <CheckBoxes CheckBoxList={fask}/>
                        </div>
                    </div>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => setShowCreater(!showCreater)}>
                            <p>Страна производства</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showCreater ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${showCreater ? "max-content" : "0px"}`, width: "100%"}}>
                            <CheckBoxes CheckBoxList={country}/>
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
                            <div style={{overflow: "hidden", height: `${priceshow ? "max-content" : "0px"}`, width: "100%"}}><DoubleRange min={0} max={100} /></div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setMaterialShow(!materialshow)}>
                                <p>Класс</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${materialshow ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${materialshow ? "max-content" : "0px"}`, width: "100%"}}>
                                <div className={styles.CheckBoxes}>
                                    <CheckBoxes CheckBoxList={Class}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setShowGlass(!showGlass)}>
                                <p>Толщина</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showGlass ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${showGlass ? "max-content" : "0px"}`, width: "100%"}}>
                                <CheckBoxes CheckBoxList={width} />
                            </div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setShowMod(!showMod)}>
                                <p>Влагостойкость</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showMod ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${showMod ? "max-content" : "0px"}`, width: "100%"}}>
                                <CheckBoxes CheckBoxList={waterdef} />
                            </div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setShowBuild(!showBuild)}>
                                <p>Фаска</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showBuild ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${showBuild ? "max-content" : "0px"}`, width: "100%"}}>
                                <CheckBoxes CheckBoxList={fask}/>
                            </div>
                        </div>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => setShowCreater(!showCreater)}>
                                <p>Страна производства</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${showCreater ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${showCreater ? "max-content" : "0px"}`, width: "100%"}}>
                                <CheckBoxes CheckBoxList={country}/>
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
 
export default Laminate;