import { bg } from '@/assets';
import styles from './MainInfo.module.scss'
import Image from 'next/image';
const MainInfo = () => {
    return (
        <div className={styles.Page}>
            <div className={styles.Background}>
                <div className={styles.Background_Dark}></div>
                <Image className={styles.Background_Img} src={bg} height={400} alt="background"></Image>
            </div>
            <div className={styles.MainText} id='maininfo'>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <h1 className={styles.MainText_Title}>Самые надёжные двери по доступным ценам</h1>
                    <div className={styles.MainText_Line}></div>
                </div>
                <p className={styles.MainText_Txt}>Для вас в наличии входные и межкомнатные двери, дверная фурнитура и напольное покрытие. Новинки всех производителей у нас и только для вас. Квалифицированные сотрудники, индивидуальный подход, консультация по подбору товара. Доставка в любой район города и края. Профессиональная и качественная установка дверей с гарантией от магазина. Мы ждём вас!</p>
            </div>
        </div>
    );
}
 
export default MainInfo;