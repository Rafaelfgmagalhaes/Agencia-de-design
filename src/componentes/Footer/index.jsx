import styles from './footer.module.css';

export default function Footer({trocaTema, tema}){
    return(
        <footer className={`${styles.rodape} ${tema}`}>
            <div className={styles.areaRodape}>
                <img src="assets/logo.png" alt="logo" />
                <p>Ajudamos a criar uma personalidade digital construindo sua marca ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                <div className={styles.mediaSocial}>
                    <img src="assets/facebook.png" alt="facebook" />
                    <img src="assets/twitter.png" alt="twitter" />
                    <img src="assets/linkedin.png" alt="linkedin" />
                    <img src="assets/dribble.png" alt="dribble" />
                    <img src="assets/behance.png" alt="behance" />
                    <img src="assets/google-plus.png" alt="google+" />
                </div>
                <p>Copyright 2024 &copy; <span>Rafael aluno do curso Devmedia</span></p>
            </div>
        </footer>
    )
}