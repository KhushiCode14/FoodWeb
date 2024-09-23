import { Route, BrowserRouter as Router, Routes ,  } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        {/* <Route  path="/about" element={About} />
        <Route  path="/contact" element={Contact} /> */}
        </Routes>
      </Router>
   <Navbar/>
   
    </div>
  );
}

export default App;
