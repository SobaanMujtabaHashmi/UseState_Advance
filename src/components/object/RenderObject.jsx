const RenderObject = ({arrayObject}) => {

    return (
        <div className=" text-white flex flex-row items-center gap-5">
        {
        arrayObject.map(
          (arrayObject, index) => (
          <div className="bg-gray-500 p-5 m-5 rounded-xl shadow-2xl size-fit flex flex-col" key={index}>
          <h4>Name: <span className="font-bold">{arrayObject.name}</span></h4>
          <h4>Age: <span className="font-bold">{arrayObject.age}</span></h4>
          <h4>Designation: <span className="font-bold">{arrayObject.designation}</span></h4>
          </div>
        )
      )
        }
        </div>
    )
}

export default RenderObject
