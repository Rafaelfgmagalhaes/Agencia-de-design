import styles from './banner.module.css';

export default function Banner({trocaTema, tema}){
    return(
        <section className={styles.areaBanner}>
            <div className={`${styles.divfoto} ${tema}`} >
                <img src="assets/banner.png" alt="banner" />
            </div>
            <div className={styles.textBanner}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>Agência de Branding <strong>e design digital</strong></h1>
            </div>
        </section>
    )
}