import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

interface Nav {
  to: string;
  linkName: string;
}

const Navbar: React.FC = () => {
  const [sign, setSign] = useState<string>('Sign up');
  const [menu, setMenu] = useState<boolean>(false);
  const [cart, setCart] = useState<JSX.Element>(<FaShoppingCart />);

  const navLinks: Nav[] = [
    { to: "/about", linkName: "About" },
    { to: "/category", linkName: "Category" },
    { to: "/help", linkName: "Help" },
  ];

  const handleSignToggle = () => {
    setSign((prev) => (prev === 'Sign up' ? 'Sign in' : 'Sign up'));
  };

  const handleCartToggle = () => {
    setCart((prevCart) =>
      prevCart.type === FaShoppingCart ? <FaCartPlus /> : <FaShoppingCart />
    );
  };
const currentPath = window.location.pathname;


  return (
    
    <div className={`mt-2 flex justify-between items-center p-4  ${currentPath === "/" ? "bgBack text-white" : "bg-transparent text-black"}`}>
      <div className="font-bold text-3xl">
        <Link to="/">
          <span className="text-5xl">F</span>oo<span className="text-5xl">D</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.to} className="mx-3 hover:text-gray-400">
            {link.linkName}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center relative">
        <button className="hidden md:block">
          <NavLink to="/signUp" onClick={handleSignToggle} className="m-1">
            {sign}
          </NavLink>
        </button>

        <div onClick={handleCartToggle} className="bg-orange-500 p-2 rounded-full cursor-pointer">
         <Link to="/cart"> {cart}</Link>
        </div>

        <div className="md:hidden flex items-center ml-3">
          <IoReorderThreeOutline onClick={() => setMenu(!menu)} className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menu && (
        <div className="md:hidden mt-2 absolute right-0 w-40 bg-orange-500  p-2 rounded-lg z-10 top-20">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li key={index} className="my-1">
                <Link to={link.to} className="block px-4 py-2 text-white text-1xl  hover:bg-orange-800 rounded">
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
