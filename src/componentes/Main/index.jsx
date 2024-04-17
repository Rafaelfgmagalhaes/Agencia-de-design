import styles from './main.module.css';
import Card from '../Cards';


export default function Main({trocaTema, tema2}){
    return(
        <section className={`${styles.areaCorpo} ${tema2}`}>
            <div className={styles.info}>
                <h1>Experiências de Trabalho</h1>
                <div className={styles.linha}></div>
                <p>Há mais de 10 anos no mercado de Branding, design gráfico, criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className={styles.areaCards}>
                
                <Card data="Junho 2012 - 2018" title="Web Designer" inf="pied Piper Startup." info="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores." />

                <Card data="Agosto 2016 - 2019" title="Product Designer" inf="E corp." info="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra." />

                <Card data="Fevereiro 2019 - 2021" title="Digital Consulting" inf="Arasaka inc." info="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução." />
               
            </div>
        </section>
  )
}