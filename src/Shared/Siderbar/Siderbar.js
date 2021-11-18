import './style.css';
import { Link } from 'react-router-dom'

const Siderbar = ()=>{
    return(
        <div className="siderbar">
            <ul>
                <li>
                    <Link to="/componentes/Cabanas">Cabanas</Link>
                </li>
                <li>
                    <Link to="/componentes/Clientes">Clientes</Link>
                </li>
                <li>
                    <Link to="/componentes/Recepcionistas">Recepcionistas</Link>
                </li>
                <li>
                    <Link to="/componentes/Reservas">Reservas</Link>
                </li>
            </ul>
        </div>
    )
}

export default Siderbar
