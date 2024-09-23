
import food from "images/Black and White Minimalist Wedding Monogram Logo (1).png"
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
        <image src={food}></image>
      </div>
    </div>
  )
}

export default Home
