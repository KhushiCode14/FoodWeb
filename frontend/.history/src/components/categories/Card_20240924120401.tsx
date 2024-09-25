import React from 'react'
interface FoodItem {
  id: number;
  name: string;
  price: number;
  icon: JSX.Element;
}
const Card = () => {
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
  },
];
  return (
    <div>
      
    </div>
  )
}

export default Card
