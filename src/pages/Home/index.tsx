// SCSS
import styles from './Home.module.scss'

// COMPONENTS
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import WhatsApp from '../../components/WhatsApp';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.container__navbar}>
                <NavBar />
            </div>
            <div className={styles.container__banner}>
                <Banner />
            </div>
            <div className={styles.container__whats}>
                <WhatsApp />
            </div>
            <div className={styles.container__footer}>
                <Footer />
            </div>
        </div>
    )
}