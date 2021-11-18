import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import Siderbar from './Shared/Siderbar/Siderbar';




function App() {
  return (
    <Router>
       <Navbar />
       <Siderbar />
       <Footer />
    </Router>
  );
}

export default App;
