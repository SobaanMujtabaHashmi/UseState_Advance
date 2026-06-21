const ButtonLeft = ({onDecrease}) => {
    return (
        <div className="bg-red-400 hover:bg-red-600 text-white px-5 py-1 rounded-xl font-bold text-2xl">
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default ButtonLeft
