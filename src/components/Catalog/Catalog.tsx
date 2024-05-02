import styles from './Catalog.module.scss'
import Link from 'next/link';

const Catalog = () => {
    return (
        <div className={styles.CatalogPage}>
            <div className={styles.CatalogHeader}>
                <Link href="/catalog" className={styles.CatalogHeader_Link}>Каталог</Link>
            </div>
            <div className={styles.Categories}>
                <Link href="/catalog/outdoors" className={styles.Categories_Category}>
                    <p className={styles.Categories_Link}>Входные двери</p>
                </Link>
                <Link href="/catalog/indoors" className={styles.Categories_Category}>
                    <p className={styles.Categories_Link}>Межкомнатные двери</p>
                </Link>
                <Link href="/catalog/outdoors" className={styles.Categories_Category}>
                    <p className={styles.Categories_Link}>Дверная гарнитура</p>
                </Link>
                <Link href="/catalog/outdoors" className={styles.Categories_Category}>
                    <p className={styles.Categories_Link}>Напольное покрытие</p>
                </Link>
            </div>
        </div>
    );
}
 
export default Catalog;