import { car, pencil, repare } from '@/assets';
import styles from './Info.module.scss'
import Image from 'next/image';
const Info = () => {
    return (
        <div className={styles.InfoPage} id='info'>
            <div className={styles.Cards}>
                <div className={styles.Cards_Card}>
                    <Image className={styles.Cards_Card_Ico} src={pencil}width={50} height={50} alt='pencil'></Image>
                    <p>Выезд замерщика</p>
                </div>
                <div className={styles.Cards_Card}>
                    <Image className={styles.Cards_Card_Ico} src={repare} width={50} height={50} alt='repare'></Image>
                    <p>Установка входных и межкомнатных дверей</p>
                </div>
                <div className={styles.Cards_Card}>
                    <Image className={styles.Cards_Card_Ico} src={car} width={50} height={45} alt='car'></Image>
                    <p>Доставка по Краснодару и Краснодарскому краю</p>
                </div>
            </div>
            <div className={styles.Info}>
                <div className={styles.Info_Txt}>
                    <div className={styles.Info_Txt_Main}>
                        <h1>График работы</h1>
                        <p>Понедельник-Воскресенье 10.00-19.00</p>
                    </div>
                    <div className={styles.Info_Txt_Main}>
                        <h1>Адрес</h1>
                        <p>г.Краснодар ул.Кирилла Россинского 18, этаж 2</p>
                    </div>
                </div>
                <div className={styles.Info_Map}>
                    <iframe className={styles.Info_Map_Google} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d296.0887249164506!2d39.02214374056111!3d45.08809374139919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f0444e4b4f0eef%3A0x7504d21a08317277!2z0YPQuy4g0JrQuNGA0LjQu9C70LAg0KDQvtGB0YHQuNC90YHQutC-0LPQviwgMTgsINCa0YDQsNGB0L3QvtC00LDRgCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksINCg0L7RgdGB0LjRjywgMzUwMDcz!5e0!3m2!1sru!2sfr!4v1703080854421!5m2!1sru!2sfr"  loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}
 
export default Info;