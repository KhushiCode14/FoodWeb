import { Route, BrowserRouter as Router, Routes ,  } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        {/* <Route  path="/about" element={About} />
        <Route  path="/contact" element={Contact} /> */}
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
