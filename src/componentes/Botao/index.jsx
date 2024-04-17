import styles from './botao.module.css';

export default function Botao({trocaTema, tema}){
   
    if(tema === 'light'){
        return(
            <div className={styles.BotaoDark} onClick={trocaTema}>
                <img src="assets/moon.png" alt="dark-mode" />
            </div>
        )
    }else{
        return(
            <div className={styles.BotaoLight} onClick={trocaTema}>
                 <img src="assets/sun.png" alt="light-mode" />
            </div>
        )
    }
}














