import React, { useState } from 'react'
import ButtonLeft from './ButtonLeft'
import ButtonReset from './ButtonReset'
import ButtonRight from './ButtonRight'

const Counter = () => {

const [countVal, setCountVal] = useState(0)

const decreaseVal = () =>{
    setCountVal(countVal-1);
  }
  const increaseVal = () =>{
    setCountVal(countVal+1);
  }
  const resetVal = () =>{
    setCountVal(0);
  }

    return (
        <div className='bg-gray-600 p-5 m-5 rounded-xl shadow-2xl size-fit flex flex-col gap-5 items-center'>
            
        <h1 className='font-bold text-6xl text-white'>{countVal}</h1>
        <div className='flex flex-row ri-align-center justify-between gap-5'>
            <ButtonLeft onDecrease={decreaseVal} />
            <ButtonRight onIncrease={increaseVal} />
            <ButtonReset onReset={resetVal} />
        </div>
            </div>
            )
}

export default Counter
