import styles from './topo.module.css';
import Botao from '../Botao';

export default function Topo({trocaTema, tema}){
    return(
        <header className={tema}>
            <div className={styles.topoArea}>
                <img src="assets/logo.png" alt="logo" />
               
                <Botao trocaTema={trocaTema} tema={tema}/>
            </div>
        </header>
    )
}