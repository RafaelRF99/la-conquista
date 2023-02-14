import styles from './Buscador.module.scss'

// REACT ICONS
import { CgSearch } from 'react-icons/cg'

interface BuscadorProps {
    placeholder: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador(props: BuscadorProps) {
    return (
        <div className={styles.container}>
            <input className={styles.container__input} type="text" placeholder={props.placeholder} 
            onChange={e => props.setBusca(e.target.value)} />
            <CgSearch size={20} color="#FFF" />
        </div>
    )
}