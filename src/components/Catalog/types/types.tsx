import { Dispatch, SetStateAction } from 'react'
// Межкомнатные двери
export interface IndoorDetails{
    material: string,
    glazing: string,
    modification: string,
    construction: string,
    manufacturer: string,
}

export interface IndoorProps{
    id: string,
    name: string,
    article: string,
    price: number,
    details: IndoorDetails
    pathImage: string
}

export interface IndoorProductListProps{
    productList: IndoorProps[]
}
// Входные двери
export interface OutdoorDetails{
    installationPlace: string,
    glazing: string,
    additionalProperties: string
}

export interface OutdoorProps{
    id: string,
    name: string,
    article: string,
    price: number,
    details: OutdoorDetails
    pathImage: string
}

export interface OutdoorProductListProps{
    productList: OutdoorProps[]
}

// Дверная фурнитура

export interface FurDetails{
    hardwareType: string
}

export interface FurProps{
    id: string,
    name: string,
    article: string,
    price: number,
    details: FurDetails
    pathImage: string
}

export interface FurProductListProps{
    productList: FurProps[]
}

// Ламинат

export interface LaminateDetails{
    classType: string,
    thickness: string,
    waterResistance: string,
    bevel: string,
    countryOfOrigin: string,
}

export interface LaminateProps{
    id: string,
    name: string,
    article: string,
    price: number,
    details: LaminateDetails
    pathImage: string
}

export interface LaminateProductListProps{
    productList: LaminateProps[]
}

//  Кварцвинил

export interface QuartzvinylDetails{
    base: string,
    installationType: string,
    bevel: string,
    manufacturer: string
}

export interface QuartzvinylProps{
    id: string,
    name: string,
    article: string,
    price: number,
    details: QuartzvinylDetails
    pathImage: string
}

export interface QuartzvinylProductListProps{
    productList: QuartzvinylProps[]
}


export interface Filters {
    material: string[];
    glazing: string[];
    modification: string[];
    construction: string[];
    manufacturer: string[];
}

export interface CheckBox{
    paragraph: string,
    value: string
}

export interface CheckBoxes{
    CheckBoxList: CheckBox[]
    filters: any,
    setFilters: Dispatch<SetStateAction<Filters>>,
}

export interface Filter{
    name: string,
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>,
    CheckBoxList: CheckBox[]
}

export interface FiltersProps{
    priceshow: boolean,
    setPriceShow: Dispatch<SetStateAction<boolean>>,
    allFilters: Filter[],
    showMobileFilters: boolean,
    setShowMobileFilters: Dispatch<SetStateAction<boolean>>,
    minmax: number[],
    priceFilter: number[],
    filters: Filters,
    setFilters: Dispatch<SetStateAction<Filters>>,
    handleMinChange: any,
    handleMaxChange: any,
    handlePriceFilter: any
}


