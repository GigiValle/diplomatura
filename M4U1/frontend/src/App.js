//import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"



import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import ContactoPage from './pages/ContactoPage';
import EstudiarPage from './pages/EstudiarPage';
import IndexPage from './pages/IndexPage';
import NovedadesPage from './pages/NovedadesPage';
import TrabajarPage from './pages/TrabajarPage';
import VivirPage from './pages/VivirPage';

function App() {
  return (

    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/contacto" exact component={ContactoPage} />
        <Route path="/estudiar" exact component={EstudiarPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/trabajar" exact component={TrabajarPage} />
        <Route path="/vivir" exact component={VivirPage} />
      </Switch>
      <Footer/>
   </Router>



  
  );
}

export default App;
