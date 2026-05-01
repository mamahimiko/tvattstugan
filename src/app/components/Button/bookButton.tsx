type bookButtonProps = {
    handleBook: () => void
}

const BookButton = ({ handleBook }: bookButtonProps) => {

    return (
        <>
            <button onClick={handleBook}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Book!
            </button>
        </>
    )
}

export default BookButton