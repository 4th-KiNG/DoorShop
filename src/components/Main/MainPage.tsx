import { bg } from "@/assets";
import Header from "../Header/Header";
import styles from './MainPage.module.scss'
import Image from "next/image";
import MainInfo from "../MainInfo/MainInfo";
import Links from "../Links/Links";
import Info from "../Info/Info";
import Callback from "../Callback/Callback";
import Footer from "../Footer/Footer";
const MainPage = () => {
    return (
        <div style={{marginLeft: "auto", marginRight: "auto"}}>
            <Header></Header>
            <div className={styles.MainPage}>
                
                <MainInfo></MainInfo>
                <Links></Links>
                <Info></Info>
                <Callback></Callback>
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default MainPage;