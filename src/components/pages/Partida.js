import styles from './Partida.module.css'
import tela from '../../img/TelaPartida.png'

function Partida(){
return(
    
    <section className={styles.partida_container}>
        <img src={tela} alt="Tela partida"></img>
    </section>
)

}

export default Partida