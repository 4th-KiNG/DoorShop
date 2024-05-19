import styles from './MainPage.module.scss'
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header/Header"))
const MainInfo = dynamic(() => import("../MainInfo/MainInfo"))
const Links = dynamic(() => import("../Links/Links"))
const Info = dynamic(() => import("../Info/Info"))
const Callback = dynamic(() => import("../Callback/Callback"))
const Footer = dynamic(() => import("../Footer/Footer"))


const MainPage = () => {
    return (
        <div style={{marginLeft: "auto", marginRight: "auto"}}>
            <Header></Header>
            <div className={styles.MainPage}>
                <MainInfo></MainInfo>
                <Links></Links>
                <Callback></Callback>
                <Info></Info>
                
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default MainPage;