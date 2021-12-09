import styles from './Card.module.css'

export default function Card(props) {
    return <div id={props.id} className={styles.card}>
        <div className={styles.card_logo}>
            <img src={props.logo} alt="card_company_logo" />
        </div>
    </div>
}