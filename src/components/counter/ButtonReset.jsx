const ButtonReset = ({onReset}) => {
    return (
        <div className="bg-gray-400 hover:bg-gray-800 text-white px-5 py-1 rounded-xl font-bold text-2xl">
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default ButtonReset
