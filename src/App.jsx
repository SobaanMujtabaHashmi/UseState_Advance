import React, { useState } from 'react'
import Counter from './components/counter/Counter'
import Array from './components/array/SyntheticArray'
import AddObject from './components/object/AddObject'

const App = () => {

  return (
    <div className='bg-amber-100 p-5 m-5 shadow-2xl rounded-xl flex flex-row flex-wrap justify-around'>
      
      <div className='bg-gray-400 p-5 m-5 rounded-xl shadow-2xl size-fit items-center flex flex-col'>
        <Counter />
      </div>

      <div className='bg-gray-500 p-5 m-5 rounded-xl shadow-2xl size-fit items-center flex flex-col'>
        <Array />
      </div>

      <div className='bg-gray-600 p-5 m-5 rounded-xl shadow-2xl size-fit items-center flex flex-col'>
        <AddObject />
      </div>

    </div>
  )
}

export default App