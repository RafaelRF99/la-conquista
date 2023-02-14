import styles from './NavBar.module.scss'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className={styles.container}>
            <ul className={styles.container__navbar}>
                <li><Link className={styles.container__link} to="/" >Home</Link></li>
                <li><Link className={styles.container__link} to="/cardapio">Cardápio</Link></li>
                <li>Acompanhe o pedido</li>
            </ul>
        </nav>
    )
}