import React from 'react'

const ButtonAdd = ({onClick}) => {
    return (
        <div className="bg-green-400 hover:bg-green-600 text-white px-5 py-1 rounded-xl font-bold text-2xl">
          <button onClick={onClick}>Add New Object</button>
        </div>
    )
}

export default ButtonAdd
