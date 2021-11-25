import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './App.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Sidebar from './Shared/Sidebar/Sidebar';
import Inicio from './componentes/Inicio/Inicio';
import Cabanas from './componentes/Cabanas/Cabanas';
import Clientes from './componentes/Clientes/Clientes';
import Recepcionistas from './componentes/Recepcionistas/Recepcionista';
import Reservas from './componentes/Reservas/Reservas';

//Componentes de Cabañas 
import NewCabana from './componentes/Cabanas/NewCabana';
import EditCabana from './componentes/Cabanas/EditCabana';


function App() {
  return (
    <Router>
       <Header />
       <div className="contenedor">
          <Sidebar />
           <Switch>          
              <Route exact path='/' component={Inicio} />              
              <Route exact path='/cabanas' component={Cabanas} />
              <Route exact path='/cabanas/new' component={NewCabana} />
              <Route exact path='/cabanas/edit/:id' component={EditCabana} />              
              <Route exact path='/clientes' component={Clientes} />
              <Route exact path='/recepcionistas' component={Recepcionistas} />
              <Route exact path='/reservas' component={Reservas} />
          </Switch>
        </div>
       <Footer />
    </Router>
  );
}

export default App;
