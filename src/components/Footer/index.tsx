import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.container__informacao}>
                <h1 className={styles.container__title}>Informações do Desenvolvedor</h1>
                <ul className={styles.container__lista}>
                    <li>Desenvolvido por Rafael Ferreira</li>
                    <li>Utilizado ReactVite</li>
                    <li>LinkeDin:
                        <a href="https://www.linkedin.com/in/rafael-ferreira99/">
                            rafael-ferreira99</a>
                    </li>
                    <li>GitHub:
                        <a href="https://github.com/RafaelRF99">
                            RafaelRF99</a>
                    </li>
                </ul>
            </div>
            <div className={styles.container__contato}>
                <h1 className={styles.container__contato__title}>Contato:</h1>
                <ul className={styles.container__contato__lista}>
                    <li>Email: rafaelfferreira99@hotmail.com</li>
                    <li>WhatsApp: (19) 99825-5728</li>
                </ul>
            </div>
        </footer>
    )
}