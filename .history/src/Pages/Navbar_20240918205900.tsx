import { Link } from "react-router-dom"


interface nav {
  to :string,
  linkName:string
  
}
const Navbar:React.FC = () => {
  const navLink:nav[]=[
    { to: "/", linkName: "Home" },
    { to: "/about", linkName: "About" },
    { to: "/contact", linkName: "Contact" },
    // Add more links as needed
  ]
  return (
    <div className="mx-5">
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
      <div></div>
    </div>
  )
}

export default Navbar
