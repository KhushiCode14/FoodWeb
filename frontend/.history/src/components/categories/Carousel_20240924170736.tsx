import React from 'react'
import { FaPizzaSlice, FaHamburger, FaIceCream,  FaCoffee, FaAppleAlt, FaFish } from 'react-icons/fa';
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
  },]
const Carousel: React.FC = () => {
  return (
    <div>
      <Carousel>

      </Carousel>
    </div>
  )
}

export default Carousel
