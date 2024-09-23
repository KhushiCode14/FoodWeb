import { Route, BrowserRouter as Router, Routes ,  } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import SignUp from './components/Home/SignUp';
import SignIn from './components/Home/SignIn';

function App() {
  return (
    <div className="App bgBack m-0 px-20 pt-2 md:m-3">
      <Router>
        <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/signUp" element={<SignUp/>} />
        <Route  path="/signIn" element={<SignIn/>} />
        {/* <Route  path="/about" element={About} />
        <Route  path="/contact" element={Contact} /> */}
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
