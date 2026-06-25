import React, { useState } from 'react'
import RenderObject from './RenderObject';
import ButtonAdd from './ButtonAdd'
import ButtonUpdate from './ButtonUpdate';

const AddObject = () => {

  // const [numArr, setnumArr] = useState([12,13,14,15])
  // const newArr = [numArr];
  // const newArr2 = [...numArr];
  // console.log(newArr);
  // console.log(newArr2);

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
    }
  ])

  const addObjVal = () => {
    setObjVal([...objVal, {
      name: 'Ibad',
      age: 36,
      designation: 'Web Dev'
    }
    ]);
  }


  const updateObjVal = () => {
    setObjVal(
      prev => prev.map(
        (item, index) => {
      if(index===0) {
          console.log('This is index ', index);
          return {
              ...objVal, name: 'Updated Name', age: 50, designation: 'Vella'
            }
      }
      else{
        console.log('This is else part');
        return item;
      }
    }))
  }

  return (
    <div className='bg-gray-400 p-5 m-5 rounded-xl shadow-2xl size-fit flex flex-col gap-5 items-center'>
      <div className='flex flex-row gap-5 flex-nowrap'>
        <RenderObject arrayObject={objVal} />
      </div>
      <ButtonAdd onClick={addObjVal} />
      <ButtonUpdate onClick={()=>{
        updateObjVal()
      }}
      />
    </div>
  )
}

export default AddObject
