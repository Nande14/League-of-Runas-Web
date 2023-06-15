import styles from './Home.module.css'
import tela from '../../img/TelaHome.png'
function Home(){
return(
    
    <section className={styles.home_container}>
        <img src={tela} alt="Tela home"></img>
    </section>
)

}

export default Home