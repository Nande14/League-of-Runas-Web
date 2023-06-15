import styles from './Feiticos.module.css'
import tela from '../../img/TelaFeiticos.png'
function Feiticos(){
return(
    
    <section className={styles.feiticos_container}>
        <img src={tela} alt="Tela feiticos"></img>
    </section>
)

}

export default Feiticos