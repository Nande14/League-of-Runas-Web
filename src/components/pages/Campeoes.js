import styles from './Campeoes.module.css'
import tela from '../../img/TelaCampeoes.png'

function Campeoes(){
return(
    
    <section className={styles.campeoes_container}>
        <img src={tela} alt="Tela campeoes"></img>
    </section>
)

}

export default Campeoes