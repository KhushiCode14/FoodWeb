
import { FaFacebookF, FaGooglePlusSquare, FaInstagram, } from "react-icons/fa"
import { CiTwitter } from "react-icons/ci";
import food from "../components/images/food.png"
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (

    <div className=" flex  gap-20 justify-center  h-[35rem ] max-md:flex-col ">

      <div className="w-1/2 justify-center items-center  mt-20  max-sm:w-full">
        <h3 className="font-cursive text-2xl mb-3 text-yellow-200 max-sm:text-3xl">Best food in town</h3>
        <h1 className="text-6xl mb-5 text-white font-bold max-md:text-4xl">Delivery food from best Restaurants</h1>
        <div className="justify-between">
         <div className="mb-10 rounded-lg bg-white w-2/3 p-2 justify-between ">
         <input type="text" placeholder="Food and restaurant " className="p-1 outline-none"></input>
         <button className="bg-orange-500 p-2 w-1/3 rounded-lg" >Search</button>
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
