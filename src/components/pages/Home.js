import React from 'react';
import styles from './Home.module.css';
import tela from '../../img/TelaHome.png';

function Home() {
  const handleClick = () => {
    alert('Agora você será redirecionado para a próxima página!');
  };

  return (
    <section className={styles.home_container}>
      <img src={tela} alt="Tela home" useMap="#imagemMapa" />
      <map name="imagemMapa">
        <area
          shape="rect" coords="140,260,410,270" alt="Área Clicável"
          onClick={handleClick} style={{ cursor: 'pointer' }} />
        <area
        shape="rect" coords= "220,340,365,350" alt="Área Clicável"
        onClick={handleClick} style={{cursor:'pointer'}} />
      </map>
    </section>
  );
}

export default Home;
