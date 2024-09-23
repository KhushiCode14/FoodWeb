import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
interface nav {
  to: string,
  linkName: string

}
const Navbar: React.FC = () => {
  const [sign, setSign] = useState<string>();
  const [cart, setCart] = useState<string>();
  const navLink: nav[] = [
    { to: "/", linkName: "Home" },
    { to: "/about", linkName: "About" },
    { to: "/contact", linkName: "Contact" },
    // Add more links as needed
  ]
  const handleSign = () => {
    setSign(sign === 'Sign up'? 'Sign in' : 'Sign up');
  }
  const handleSign = () => {
    setCart(cart === 'Sign up'? 'Sign in' : 'Sign up');
  }

  return (
    <div className="mx-5  mt-2 flex justify-between">
      <div className="font-bold text-3xl"><h1><span className=" text-5xl">F</span>oo<span className=" text-5xl">D</span></h1></div>
      <div>
        {
          navLink.map((link, index) => (
            <Link key={index} to={link.to} className="mx-3 hover:text-gray-800">
              {link.linkName}
            </Link>
          ))
        }
      </div>
      <div className="flex justify-center">
        <button><NavLink to="/signUp" onClick={handleSign}>{sign }</NavLink></button>
      
      <div onClick ={} >
      <FaShoppingCart />  </div> 
     
      <div>
      < FaCartPlus/> </div> 
     
      </div>
    </div>
  )
}

export default Navbar
