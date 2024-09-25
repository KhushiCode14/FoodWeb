import React from 'react'

const Category = () => {
  return (
    <div className='flex flex-col p-10 border-red-800 border-2 gap-4 justify-between'>
      <div className='flex-1'><button>Explore</button></div>
      <div className='flex-1' ><h1>Popular Categories</h1></div>
      {/* cards */}
      <div className='flex-1'>card </div>
    </div>
  )
}

export default Category
