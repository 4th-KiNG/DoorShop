import { doorgar, floor, indoor, outdoor } from '@/assets';
import styles from './Links.module.scss'
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
const Links = () => {
    return (
        <div className={styles.Links} id='catalog'>
            <Link href={"/catalog/indoors"} prefetch={true} className={classNames(styles.Card, styles.Indoor)}>
                <div className={styles.Card_Text}>
                    <h1>Межкомнатные двери</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </Link>
            <Link href={"/catalog/outdoors"} prefetch={true} className={classNames(styles.Card, styles.Outdoor)}>
                <div className={styles.Card_Text}>
                    <h1>Входные двери</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </Link>
            <Link href={"/catalog/laminate"} prefetch={true} className={classNames(styles.Card, styles.Laminate)}>
                <div className={styles.Card_Text}>
                    <h1>Ламинат</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </Link>
            <Link href={"/catalog/quartzvinyl"} prefetch={true} className={classNames(styles.Card, styles.Quartzvinil)}>
                <div className={styles.Card_Text}>
                    <h1>Кварцвинил</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </Link>
            <Link href={"/catalog/furniture"} prefetch={true} className={classNames(styles.Card, styles.Garniture)}>
                <div className={styles.Card_Text}>
                    <h1>Дверная фурнитура</h1>
                    <p>Открыть в каталоге</p>
                </div>
            </Link>
        </div>
    );
}
 
export default Links;