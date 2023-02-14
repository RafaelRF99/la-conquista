// SCSS
import styles from './PizzaCardapio.module.scss'

// SHARED
import { ICardapio } from "../../../shared/interface/ICardapio";

// COMPONENTS
import PizzaMolde from "../PizzaMolde";

// JSON
import cardapio from '../cardapio.json';


// REACT ICON
import { VscListFlat } from 'react-icons/vsc'

// HOOKS
import { useState, useEffect } from 'react'


interface PizzaCardapioProps {
  cardapio: ICardapio[]
  filtro: number | null
  busca: string
}

export default function PizzaCardapio(props: PizzaCardapioProps) {
  const [clique, setClique] = useState<false | null>(null);
  const [lista, setLista] = useState(cardapio)
  const { filtro, busca } = props

  const iconClicado = () => {
    if ( clique === false ) return setClique(null);
    return setClique(false);
  }

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaFiltro(item.sabor) && testaBusca(item.name) );
    setLista(novaLista)
  },[filtro, busca])

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }
  
  function testaBusca(name: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(name)
  }

  return (
    <div className={styles.container}>
      <div  className={styles.container__filtro}>
        <VscListFlat className={styles.container__icon} size={30}
        onClick={() => iconClicado()} />
      </div>
      <div className={styles.container__cardapio}>
      {lista.map((cardapio) => <PizzaMolde key={cardapio.id}
        imagem={cardapio.imagem}
        name={cardapio.name}
        price={cardapio.price}
        description={cardapio.description}
        clique={clique} />)}
      </div>
    </div>
  )
}