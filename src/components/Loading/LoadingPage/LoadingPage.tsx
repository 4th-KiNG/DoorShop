import styles from './LoadingPage.module.scss'

const LoadingPage = () => {
    return (
        <>
        <div className={styles.LoadingPage}>
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
 
export default LoadingPage;