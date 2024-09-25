import React from 'react'
import Card from './Card'

const Category = () => {
  return (
    <div className='flex flex-col p-10  gap-4 items-center justify-center'>
      <div className='flex-1 bg-green-800'><button>Explore</button></div>
      <div className='flex-1' ><h1>Popular Categories</h1></div>
      {/* cards */}
      <div className='flex-1'>
       <Card/>
      </div>
    </div>
  )
}

export default Category
