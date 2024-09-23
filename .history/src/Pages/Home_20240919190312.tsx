
import food from "images/food.png"
const Home:React.FC = () => {
  return (
    <div className="bg-green-600 ">

      <div>
        <h3>Best food in town</h3>
      <h1>Delivery food from best Restaurants</h1>
     <div>
     <input type="text"></input>
     <button>Search</button>
     </div>
      </div>
      <div >
        <img src={food} alt="logo" />
      </div>
    </div>
  )
}

export default Home
