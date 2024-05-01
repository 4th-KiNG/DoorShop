import { doorgar, floor, indoor, outdoor } from '@/assets';
import styles from './Links.module.scss'
import Image from 'next/image';
const Links = () => {
    return (
        <div className={styles.Links}>
            <div className={styles.Card}>
                <div className={styles.Card_Bg}>
                    <Image src={indoor} className={styles.Card_Bg_Img} width={660} height={270} alt='indoors'></Image>
                    <div className={styles.Card_Bg_Dark}></div>
                </div>
                <div className={styles.Card_Text}>
                    <h1>Межкомнатные двери</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Card_Bg}>
                    <Image src={outdoor} className={styles.Card_Bg_Img} width={660} height={270} alt='indoors'></Image>
                    <div className={styles.Card_Bg_Dark}></div>
                </div>
                <div className={styles.Card_Text}>
                    <h1>Входные двери</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.Card_Bg}>
                    <Image src={doorgar} className={styles.Card_Bg_Img} width={660} height={270} alt='indoors'></Image>
                    <div className={styles.Card_Bg_Dark}></div>
                </div>
                <div className={styles.Card_Text}>
                    <h1>Дверная гарнитура</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </div>
            <div className={styles.Card}>
            <div className={styles.Card_Bg}>
                    <Image src={floor} className={styles.Card_Bg_Img} width={660} height={270} alt='indoors'></Image>
                    <div className={styles.Card_Bg_Dark}></div>
                </div>
                <div className={styles.Card_Text}>
                    <h1>Напольное покрытие</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </div>
        </div>
    );
}
 
export default Links;