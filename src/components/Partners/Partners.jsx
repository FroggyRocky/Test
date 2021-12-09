import styles from './Partners.module.css'
import Card from './Card/Card'
import cardsData from '../../CardsData.js'
export default function Partners(props) {

const cards = cardsData.map(card => 
    <Card
    logo = {card.img}
    key={card.id}
    id={card.id}
    />)
console.log(cards)
return <section className={`container ${styles.partners_content}`}>
    <div className={styles.cards_header_section}>
        <h1>НАШИ ПАРТНЕРЫ</h1>
    </div>
    <section className={styles.cards}>
        {cards}
    </section>
</section>
}