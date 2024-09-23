
import { FaFacebook, FaGooglePlusSquare, FaInstagram, FaTwitter } from "react-icons/fa"
import food from "../components/images/food.png"
const Home: React.FC = () => {
  return (

    <div className=" flex  gap-20 bgBack ">
     
      <div className="w-1/2">
        <h3>Best food in town</h3>
        <h1>Delivery food from best Restaurants</h1>
        <div>
          <input type="text"></input>
          <button>Search</button>
          <div >
            <FaFacebook color="white" className="bg-orange-500 rounded-full"/>
            <FaTwitter/>
            <FaInstagram/>
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
