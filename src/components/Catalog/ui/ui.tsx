import { memo, useEffect, useState } from "react"
import { useQuery } from "react-query"
import Link from "next/link"
import type { CheckBox, CheckBoxes, FiltersProps, Filters, Filter } from "../types/types"
import Image from "next/image"
import axios from "axios"
import { IP, TOKEN } from "@/consts/consts"
import styles from '../Indoors/Indoors.module.scss'
import { d1 } from "@/catalog"
import { filter, arrowdown } from "@/assets"
import styles1 from '@/components/ui/DoubleRange/DoubleRange.module.scss'
import Slider from "rc-slider"
import '@/components/ui/DoubleRange/DoubleRange.css'

const CheckBoxes = ({CheckBoxList, filters, setFilters} : CheckBoxes) => {
    return(
        <div className={styles.CheckBoxes}>
        {CheckBoxList.map((el: CheckBox) => {
            return(
                <>
                <label className={styles.CheckBoxes_CheckBox} >
                    <input type="checkbox" checked={filters[el.value] != undefined && filters[el.value].includes(el.paragraph)} onChange={() => setFilters((prevFilters: any) => {
                    return{
                        ...prevFilters,
                        [el.value]: !prevFilters[el.value].includes(el.paragraph) ? [...prevFilters[el.value], el.paragraph] : prevFilters[el.value].filter((item: any) => item !== el.paragraph)
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

const Filters = memo((props: FiltersProps) => {
    console.log(props.handlePriceFilter)
    return(
        <>
        <div className={styles.Products_Filters}>
            <div className={styles.Products_Filters_Title}>
                <Image src={filter} alt='filter' width={30} height={30}></Image>
                <p>Фильтры</p>
            </div>
            <div className={styles.Products_Filters_Filter}>
                <div className={styles.Products_Filters_Checkbox} onClick={() => props.setPriceShow(!props.priceshow)}>
                    <p>Розничная цена</p>
                    <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${props.priceshow ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                </div>
                <div style={{overflow: "hidden", height: `${props.priceshow ? "max-content" : "0px"}`, width: "100%"}}>
                    <div className={styles1.Inputs}>
                        <input
                            className={styles1.Inputs_Input}
                            type="number"
                            value={props.priceFilter[0]}
                            min={props.minmax[0]}
                            max={props.minmax[1]}
                            onChange={props.handleMinChange}
                        />
                        <input
                            className={styles1.Inputs_Input}
                            type="number"
                            value={props.priceFilter[1]}
                            min={props.minmax[0]}
                            max={props.minmax[1]}
                            onChange={props.handleMaxChange}
                        />
                    </div>
                    <Slider
                        range
                        min={props.minmax[0]}
                        max={props.minmax[1]}
                        value={props.priceFilter}
                        onChange={props.handlePriceFilter}
                    />
                </div>
            </div>
            {props.allFilters.map((oneFilter: Filter) => {
                return(
                    <>
                    <div className={styles.Products_Filters_Filter}>
                        <div className={styles.Products_Filters_Checkbox} onClick={() => oneFilter.setState(!oneFilter.state)}>
                            <p>{oneFilter.name}</p>
                            <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${oneFilter.state ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                        </div>
                        <div style={{overflow: "hidden", height: `${oneFilter.state ? "max-content" : "0px"}`, width: "100%"}}>
                            <div className={styles.CheckBoxes}>
                                <CheckBoxes CheckBoxList={oneFilter.CheckBoxList} filters={props.filters} setFilters={props.setFilters}/>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
        <div className={styles.Products_Filters_Mobile}>
            <div className={styles.Products_Filters_Mobile_Title} onClick={() => props.setShowMobileFilters(!props.showMobileFilters)}>
                <Image src={filter} className={styles.Products_Filters_Mobile_Ico} alt='filter' width={30} height={30}></Image>
                <p>Фильтры</p>
            </div>
            <div className={styles.Products_Filters_Mobile_Blocks} style={{height: `${props.showMobileFilters ? "max-content" : "0px"}`}}>
                <div className={styles.Products_Filters_Filter}>
                    <div className={styles.Products_Filters_Checkbox} onClick={() => props.setPriceShow(!props.priceshow)}>
                        <p>Розничная цена</p>
                        <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${props.priceshow ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                    </div>
                    <div style={{overflow: "hidden", height: `${props.priceshow ? "max-content" : "0px"}`, width: "100%"}}>
                    <div className={styles1.Inputs}>
                        <input
                            className={styles1.Inputs_Input}
                            type="number"
                            value={props.priceFilter[0]}
                            min={props.minmax[0]}
                            max={props.minmax[1]}
                            onChange={props.handleMinChange}
                        />
                        <input
                            className={styles1.Inputs_Input}
                            type="number"
                            value={props.priceFilter[1]}
                            min={props.minmax[0]}
                            max={props.minmax[1]}
                            onChange={props.handleMaxChange}
                        />
                    </div>
                        <Slider
                            range
                            min={props.minmax[0]}
                            max={props.minmax[1]}
                            value={props.priceFilter}
                            onChange={props.handlePriceFilter}
                        />
                    </div>
                </div>
                {props.allFilters.map((oneFilter: Filter) => {
                    return(
                        <>
                        <div className={styles.Products_Filters_Filter}>
                            <div className={styles.Products_Filters_Checkbox} onClick={() => oneFilter.setState(!oneFilter.state)}>
                                <p>{oneFilter.name}</p>
                                <Image src={arrowdown} className={styles.Products_Filters_Checkbox_Ico} style={{transform: `${oneFilter.state ? "rotate(180deg)" : ""}`}} alt='arr' width={25} height={25}/>
                            </div>
                            <div style={{overflow: "hidden", height: `${oneFilter.state ? "max-content" : "0px"}`, width: "100%"}}>
                                <div className={styles.CheckBoxes}>
                                    <CheckBoxes CheckBoxList={oneFilter.CheckBoxList} filters={props.filters} setFilters={props.setFilters}/>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
})


export{
    Filters
}