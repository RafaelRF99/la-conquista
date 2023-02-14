import styles from './Banner.module.scss'

export default function Banner() {
    return (
        <div className={styles.container}>
            <div className={styles.container__text}>Pizzaria La Conquista</div>
        </div>
    )
}