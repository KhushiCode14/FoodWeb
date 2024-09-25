import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import SignUp from './components/Home/SignUp';
import SignIn from './components/Home/SignIn';
import Cart from './components/Home/Cart';
import Category from './components/categories/Category';
import { useEffect, useState } from 'react';

function App() {
  const [currentPath, setCurrentPath] = useState("");
 

  useEffect(() => {
    setCurrentPath(window.location.pathname); 
    console.log("Current Path:", window.location.pathname);
    // Update currentPath when the component mounts
  }, []);

  return (
    <div  className={`m-0 px-20 pt-2 max-sm:px-3 max-sm:pt-1 ${currentPath === "/" ? "bg-[url()]text-white" : "bg-white text-black "}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* Sign Up: This action is for new users who want to create an account. */}
          <Route path="/signIn" element={<SignIn />} />
          {/* Sign In: This action is for users who already have an account */}
          <Route path="/cart" element={<Cart />} />
         <Route  path="/category" element={<Category/>} />
          {/*<Route  path="/contact" element={Contact} /> */}
        </Routes>
      
      </Router>

    </div>
  );
}

export default App;
