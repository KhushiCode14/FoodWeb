import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="mx-5">
      <div className="font-bold text-3xl"><h1><span className=" text-5xl">F</span>oo<span className=" text-5xl">D</span></h1></div>
      <div><Link to="/"></Link></div>
      <div></div>
    </div>
  )
}

export default Navbar
