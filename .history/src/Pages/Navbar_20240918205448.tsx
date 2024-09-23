import { Link } from "react-router-dom"


interface nav {
  to :"string",
  linkName:"string"
  
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
navLink.map((lik)=>{
  return(

    <li>
    <Link to={link.to}>{link.linkName}</Link>
  </li>
})
)
        }
      </div>
      <div></div>
    </div>
  )
}

export default Navbar
