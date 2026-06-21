import { useState } from "react";
import ButtonAdd from "./ButtonAdd";

const Array = () => {
    const [arrayContent, setArrayContent] = useState([10, 20, 30])

      const addArrVal = () =>{
    setArrayContent([...arrayContent, 40]);
  }

    return (
        <div className='bg-gray-600 p-5 m-5 rounded-xl shadow-2xl size-fit flex flex-col gap-5 items-center flex-nowrap'>
          <div className="font-bold text-6xl text-white flex flex-row gap-5 items-center flex-nowrap">
    {
    arrayContent.map((num, index) => (
      <h4 key={index}>{num} </h4>
    ))
    }
    </div>
        <ButtonAdd onClick={addArrVal} />
        </div>
    )
}

export default Array
