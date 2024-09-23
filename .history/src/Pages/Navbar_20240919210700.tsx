import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
interface nav {
  to: string,
  linkName: string

}
const Navbar: React.FC = () => {
  const [sign, setSign] = useState<string>('Sign up');
  const [menu , setMenu]= useState<boolean>(false)
  const [cart, setCart] = useState<JSX.Element>(<FaShoppingCart />);
  const navLink: nav[] = [
    { to: "/about", linkName: "About" },
    { to: "/", linkName: "Restaurant" },
    { to: "/help", linkName: "help" },
    // Add more links as needed
  ]
  const handleSign = () => {
    setSign(sign === 'Sign up'? 'Sign in' : 'Sign up');
  }
  const handleCart = () => {
    setCart(prevCart =>
      prevCart.type === FaShoppingCart ? <FaCartPlus /> : <FaShoppingCart />
    );
  }; 

  return (
    <div className=" mt-2 flex justify-between text-white">
      <div className="font-bold text-3xl"><h1><span className=" text-5xl">F</span>oo<span className=" text-5xl">D</span></h1></div>
      (
    <div className="mt-2 flex justify-between items-center text-white">
      <div className="font-bold text-3xl">
        <h1><span className="text-5xl">F</span>oo<span className="text-5xl">D</span></h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <IoReorderThreeOutline onClick={() => setMenu(!menu)} className="text-2xl cursor-pointer" />
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex ${menu ? 'w-full flex-col' : 'w-auto'}`}>
        {navLink.map((link, index) => (
          <Link key={index} to={link.to} className="mx-3 hover:text-gray-800">
            {link.linkName}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center ${menu ? 'flex' : 'hidden'}`}>
        {navLink.map((link, index) => (
          <Link key={index} to={link.to} className="text-white text-lg my-2" onClick={() => setMenu(false)}>
            {link.linkName}
          </Link>
        ))}
  
      <div className="flex justify-center items-center">
        <button className="max-md:hidden"> <NavLink to="/signUp" onClick={handleSign} className="m-1">{sign}</NavLink></button>
      
        <div onClick={handleCart}className="bg-orange-500  p-2 rounded-full" >
          {cart}
        </div>
       {/* Mobile Menu Button */}
       <div className="md:hidden flex items-center">
        <IoReorderThreeOutline onClick={() => setMenu(!menu)} className="text-2xl cursor-pointer" />
      </div>
     
     
     
      </div>
    </div>
  )
}

export default Navbar
