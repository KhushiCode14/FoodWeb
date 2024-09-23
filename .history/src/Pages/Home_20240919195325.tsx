
import {  FaFacebookF, FaGooglePlusSquare, FaInstagram,  } from "react-icons/fa"
import { CiTwitter } from "react-icons/ci";
import food from "../components/images/food.png"
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (

    <div className=" flex  gap-20 bgBack ">
     
      <div className="w-1/2">
        <h3>Best food in town</h3>
        <h1>Delivery food from best Restaurants</h1>
        <div>
          <input type="text"></input>
          <button>Search</button>
          <div  className="flex gap-2  ">
           <Link to="/">bg-orange-500 </Link>
            < CiTwitter color="white" className="bg-orange-500 rounded-full"/>
            <FaInstagram  color="white" className="bg-orange-500 rounded-full"/>
          </div>
        </div>
      </div>
      <div className="w-1/2 items-center justify-center" >
        <img src={food} alt="logo" width={400} />
        <FaGooglePlusSquare/>
      </div>
    </div>
  )
}

export default Home
