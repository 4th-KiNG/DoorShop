'use client'
import { location, logo, mail, phone } from '@/assets';
import styles from './Header.module.scss'
import Image from 'next/image';
import classNames from 'classnames';
import {useState} from 'react'
import Link from 'next/link';
const Header = () => {
    const [menu, setMenu] = useState(false)
    const OpenMenu = () => {
        document.getElementsByClassName(styles.BurgerMenu_Top)[0].classList.toggle(styles.TopOpen)
        document.getElementsByClassName(styles.BurgerMenu_Bot)[0].classList.toggle(styles.BotOpen)
        document.getElementsByClassName(styles.BurgerMenu_Mid)[0].classList.toggle(styles.MidOpen)
        document.querySelector("body")?.classList.toggle(styles.noscroll)
        setMenu(!menu)
    }
    const Menu = () => {
        return(
            <div className={styles.NavMenu}>
                <nav className={styles.NavMenu_Links}>
                    <Link href="/#catalog" onClick={OpenMenu} className={styles.NavMenu_Links_Link}>Каталог</Link>
                    <Link href="/#maininfo" onClick={OpenMenu} className={styles.NavMenu_Links_Link}>Описание компании</Link>
                    <Link href="/#callback" onClick={OpenMenu} className={styles.NavMenu_Links_Link}>Заказать звонок</Link>
                    <Link href="/#footer" onClick={OpenMenu} className={styles.NavMenu_Links_Link}>Контактная информация</Link>
                    <Link href="/#footer" onClick={OpenMenu} className={styles.NavMenu_Links_Link}>Наши поставщики</Link>
                    <Link href="/#info" onClick={OpenMenu} className={styles.NavMenu_Links_Link}>Адрес и время работы</Link>
                </nav>
            </div>
        )
    }
    return (
        <header className={styles.Header}>
            <Link href="/" className={styles.Header_Logo}>
                <Image  className={styles.Header_Logo_Img} src={logo} width={40} height={40} alt='logo'></Image>
                <p className={styles.Header_Logo_Txt}>ДВЕРИ•ВАРИАНТ</p>
            </Link>
            <div className={styles.MainInfo}>
                <div className={classNames(styles.MainInfo_Block, styles.Mail)}>
                    <Image className={styles.MainInfo_Block_Ico} src={phone} width={30} height={30} alt='mail'></Image>
                    <p className={styles.MainInfo_Block_Txt}>8 953 105 37 67</p>
                </div>
                <div className={classNames(styles.MainInfo_Block, styles.Location)}>
                    <Image className={styles.MainInfo_Block_Ico} src={location} width={24} height={34} alt='location'></Image>
                    <p className={styles.MainInfo_Block_Txt}>г.Краснодар ул.Кирилла Россинского 18, этаж 2</p>
                </div>
                <div className={styles.BurgerMenu} onClick={OpenMenu}>
                    <div className={classNames(styles.BurgerMenu_Line, styles.BurgerMenu_Top)}></div>
                    <div className={classNames(styles.BurgerMenu_Line, styles.BurgerMenu_Mid)}></div>
                    <div className={classNames(styles.BurgerMenu_Line, styles.BurgerMenu_Bot)}></div>
                </div>
            </div>
            {menu && <Menu></Menu>}
        </header>
    );
}
 
export default Header;