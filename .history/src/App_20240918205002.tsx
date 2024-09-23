import { Route, BrowserRouter as Router, Routes ,  } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route  path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/contact" component={Contact} />
        </Routes>
      </Router>
   <Navbar/>
   
    </div>
  );
}

export default App;
