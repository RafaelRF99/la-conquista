// SCSS
import styles from './Filtro.module.scss'

// CLASSNAMES
import classNames from 'classnames';

// JSON
import filtroTamanho from './filtroTamanho.json'

type IOpcao = typeof filtroTamanho[0];

interface FiltroProps {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtro({ filtro, setFiltro }: FiltroProps) {

    const selecionarFiltro = (props: IOpcao) => {
        if (filtro === props.id) return setFiltro(null);
        return setFiltro(props.id)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.container__title}>Pizza</h2>
            {filtroTamanho.map((props) => (
                <button className={classNames({
                    [styles.container__filtro]: true,
                    [styles['container__filtro--ativo']]: filtro === props.id
                })} key={props.id}
                    onClick={() => selecionarFiltro(props)}>
                    {props.label}
                </button>
            ))}
        </div>
    )
}