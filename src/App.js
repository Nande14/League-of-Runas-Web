import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from './components/pages/Home'
import Runas from './components/pages/Runas'
import Feiticos from "./components/pages/Feiticos"
import Partida from "./components/pages/Partida"
import Login from "./components/pages/Login"
import Adicionar from "./components/pages/Adicionar"


import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'


function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Container customClass="minHeight">
            <Route exact path="/">
              <Home />
            </Route>


            <Route exact path="/runas">
              <Runas />
            </Route>


            <Route exact path="/feiticos">
              <Feiticos />
              </Route>

              <Route exact path="/partida">
              <Partida />
              </Route>


            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/adicionar">
              <Adicionar />
            </Route>
            
          </Container>
        </Switch>
        <Footer />
      </Router>
  );
}
  



export default App;