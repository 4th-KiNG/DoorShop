import { avito, doorico } from '@/assets';
import styles from './Footer.module.scss'
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className={styles.Footer} id='footer'>
            <div className={styles.Footer_Blocks}>
                <div className={styles.Footer_Block}>
                    <h1 className={styles.Footer_Block_Title}>Каталог</h1>
                    <p>Межкомнатные двери</p>
                    <p>Входные двери</p>
                    <p>Дверная гарнитура</p>
                    <p>Напольное покрытие</p>
                </div>
                <div className={styles.Footer_Block}>
                    <h1 className={styles.Footer_Block_Title}>Поставщики</h1>
                    <p>CODE DECO</p>
                    <p>MSM</p>
                    <p>НОРА-М</p>
                    <p>VANTAGE</p>
                    <p>AGB</p>
                </div>
                <div className={styles.Footer_Block}>
                    <h1 className={styles.Footer_Block_Title}>Контакты</h1>
                    <p>dverivariant2@yandex.ru</p>
                    <p>8 953 105 37 67</p>
                    <p>8 988 381 63 27</p>
                    <p style={{display: "flex", alignItems: "center", gap: "5px"}}>Авито <Image src={avito} width={30} height={30} alt="avito"></Image></p>
                </div>
            </div>
            <Image className={styles.Ico} src={doorico} width={80} height={80} alt='ico'></Image>
        </footer>
    );
}
 
export default Footer;