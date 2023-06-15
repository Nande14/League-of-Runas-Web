import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/Logo.png'
import Titulo from '../../img/Titulo.png'
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link className={styles.logo} to="/"><img src={logo} alt="LogoLol"></img></Link>
                <Link className={styles.titulo} to="/"><img src={Titulo} alt="TituloLeagueOfRunas"></img></Link>

                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">HOME</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/Runas">RUNAS</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/Feiticos">FEITIÇOS</Link>
                    </li>
                    
                    <li classname={styles.item}>
                        <Link to="/Partida">INGAME</Link>
                    </li>

                    <li classname={styles.item}>
                        <Link to="/login">LOGIN</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/Adicionar">ADICIONAR</Link>
                    </li>
                     
                </ul>


            </Container>
        </nav>
    )

}

export default Navbar