import React from 'react'
import Card from './Card'


const Category = () => {
  return (
    <div className='flex flex-col p-10  gap-4 items-center justify-center bg-white'>
      <div className='flex-1 bg-green-800 text-white p-2 rounded-md'><button>Explore</button></div>
      <div className='flex-1 text-6xl font-bold m-8' ><h1>Popular Categories</h1></div>
      {/* cards */}
      <div className='flex-1 max-sm:hidden'>
       <Card/>
     
      </div>
    </div>
  )
}

export default Category
