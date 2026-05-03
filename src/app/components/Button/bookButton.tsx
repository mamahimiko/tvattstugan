import { MdLocalLaundryService } from "react-icons/md";

type bookButtonProps = {
    handleBook: () => void
}

const BookButton = ({ handleBook }: bookButtonProps) => {

    return (
        <>
            <button onClick={handleBook}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
                <div className="flex">
                    <MdLocalLaundryService className="text-2xl" />
                    Book!
                </div>
            </button>
        </>
    )
}

export default BookButton