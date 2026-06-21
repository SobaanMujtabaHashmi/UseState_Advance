const ButtonRight = ({onIncrease}) => {
    return (
        <div className="bg-green-400 hover:bg-green-600 text-white px-5 py-1 rounded-xl font-bold text-2xl">
            <button onClick={onIncrease}>+</button>
        </div>
    )
}

export default ButtonRight
