import React, { useState } from 'react'
import RenderObject from './RenderObject';
import ButtonAdd from './ButtonAdd'

const AddObject = () => {

const [objVal, setObjVal] = useState([
  {
    name: 'Sobaan',
    age: 26,
    designation: 'Web Dev'
  },
  {
    name: 'Hammad',
    age: 16,
    designation: 'Web Dev'
  },
])
  
  const addObjVal = () =>{ setObjVal([...objVal, { 
    name: 'Ibad',
    age: 36,
    designation: 'Web Dev'
    }
  ]);
  }

    return (
        <div className='bg-gray-400 p-5 m-5 rounded-xl shadow-2xl size-fit flex flex-col gap-5 items-center'>
          <div className='flex flex-row gap-5 flex-nowrap'>
          <RenderObject arrayObject={objVal} />
          </div>
          <ButtonAdd onClick={addObjVal} name={objVal.name} age={objVal.age} designation={objVal.designation} />
        </div>
    )
}

export default AddObject
