import React from 'react'
import { FaPizzaSlice, FaHamburger, FaIceCream, FaHotdog, FaDrumstickBite, FaCoffee, FaAppleAlt, FaFish } from 'react-icons/fa';
interface FoodItem {
  id: number;
  name: string;
  price: number;
  icon: JSX.Element;
}
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Pizza',
    price: 12.99,
    icon: <FaPizzaSlice />,
  },
  {
    id: 2,
    name: 'Burger',
    price: 8.99,
    icon: <FaHamburger />,
  },
  {
    id: 3,
    name: 'Ice Cream',
    price: 4.99,
    icon: <FaIceCream />,
  }
  ,
  {
    id: 4,
    name: 'Fish',
    price: 15.99,
    icon: <FaFish />,
  },
  {
    id: 5,
    name: 'Apple',
    price: 2.99,
    icon: <FaAppleAlt />,
  },
  {
    id: 6,
    name: 'Coffee',
    price: 3.50,
    icon: <FaCoffee />,
  },
  // {
  //   id: 7,
  //   name: 'Hot Dog',
  //   price: 5.49,
  //   icon: <FaHotdog />,
  // },
  // {
  //   id: 8,
  //   name: 'Chicken Drumstick',
  //   price: 9.99,
  //   icon: <FaDrumstickBite />,
  // },
];

const Card: React.FC = () => {
  
  return ( 
    <div className="food-items-container flex gap-2">
      {foodItems.map((item) => (
        <div key={item.id} className="bg-gray-400 p-3 items-center justify-center flex-row w-">
          <div className="icon rounded-full bg-white size-8" >{item.icon}</div>
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}

export default Card
