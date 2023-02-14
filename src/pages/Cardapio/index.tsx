// SCSS
import styles from './Cardapio.module.scss'

// HOOKS
import { useState } from 'react'

// JSON
import cardapio from './cardapio.json';

// COMPONENTS
import NavBar from '../../components/NavBar'
import Buscador from './Buscador'
import Filtro from './Filtro/intex'
import PizzaCardapio from './PizzaCardapio';

export default function Cardapio() {
    const [filtro, setFiltro] = useState<number | null>(null)
    const [busca, setBusca] = useState<string>("")

    return (
        <div className={styles.container}>
            <NavBar />
            <section className={styles.container__section}>
                <h1 className={styles.container__title}>Cardápio</h1>
                <div className={styles.container__buscador}>
                    <Buscador setBusca={setBusca} placeholder="Faça sua pesquisa..." />
                </div>
                <div className={styles.container__filtro}>
                    <Filtro filtro={filtro} setFiltro={setFiltro} />
                </div>
                <div>
                    <PizzaCardapio filtro={filtro} busca={busca} cardapio={cardapio} />
                </div>
            </section>
        </div>
    )
}