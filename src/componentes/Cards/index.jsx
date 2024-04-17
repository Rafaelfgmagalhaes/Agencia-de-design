import styles from './cards.module.css';

export default function Card(props){
    return(
        <div className={styles.card}>
            <p>{props.data}</p>
            <h1>{props.title}</h1>
            <p>{props.inf}</p>
            <br />
            <p>{props.info}</p>
        </div>
    )
}