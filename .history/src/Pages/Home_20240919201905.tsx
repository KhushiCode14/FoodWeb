
import { FaFacebookF, FaGooglePlusSquare, FaInstagram, } from "react-icons/fa"
import { CiTwitter } from "react-icons/ci";
import food from "../components/images/food.png"
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (

    <div className=" flex  gap-20 bgBack justify-center ">

      <div className="w-1/2 justify-center items-center m-4 mt-8 ">
        <h3 className="font-cursive text-2xl mb-3 text-yellow-200">Best food in town</h3>
        <h1 className="text-6xl mb-5 text-white font-bold">Delivery food from best Restaurants</h1>
        <div className="justify-between">
         <div className="mb-10 rounded-lg bg-white w-1/2">
         <input type="text" placeholder="Food and restaurant "></input>
         <button >Search</button>
         </div>
          <div className="flex gap-2  ">
            <Link to="/about"><FaFacebookF  size={30}className="bg-orange-500  text-black rounded-full font-extrabold  p-2"/>
            </Link>
            <Link to=""> < CiTwitter  size={30}className="bg-orange-500  p-2 rounded-full" />
            </Link>
            <Link to="">  <FaInstagram  size={30}className="bg-orange-500  p-2 rounded-full" />
            </Link>

          </div>
        </div>
      </div>
      <div className="w-1/2 items-center justify-center" >
        <img src={food} alt="logo" width={400} />
        <FaGooglePlusSquare />
      </div>
    </div>
  )
}

export default Home
