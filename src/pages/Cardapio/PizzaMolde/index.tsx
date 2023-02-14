// SCSS
import styles from './Pizza.module.scss'

// CLASSNAMES
import classNames from 'classnames'

interface ICardapio {
    imagem?: string
    name: string;
    price: number;
    description: string
    clique: boolean | null
}

export default function PizzaMolde({imagem, name, price, description, clique }: ICardapio) {

    return (
        <div className={classNames({
            [styles.container]: true,
            [styles['container--ativo']]: clique == false
        })}>
            <div className={styles.container__imagem}>
                <img src={imagem} alt={name} />
            </div>
            <div className={classNames({
                [styles.container__informacao]: true,
                [styles['container__informacao--ativo']]: clique == false
            })}>
                <div className={styles.container__informacao__name}>{name}</div>
                <div className={styles.container__informacao__price}>R${price}</div>
                <div className={styles.container__informacao__description}>{description}</div>
            </div>
        </div>
    )
}