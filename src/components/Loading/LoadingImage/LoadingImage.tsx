import styles from './LoadingImage.module.scss'


const LoadingImage = () => {
    return (
        <>
        <div className={styles.LoadingImage}>
            <div className={styles.Bounser}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </>
    );
}
 
export default LoadingImage;