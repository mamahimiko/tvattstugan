import { LuLockKeyhole, LuLockKeyholeOpen } from "react-icons/lu";
import { Booking } from "@/app/types/types";

type CellProps = {
    booking: Booking,
    selected: boolean,
    booked: Booking | null,
    onSelect: (booking: Booking) => void
    onCancel: () => void
}


const Cell = ({ booking, selected, booked, onSelect, onCancel }: CellProps) => {


    const isBooked = booked?.date === booking.date &&
        booked?.month === booking.month &&
        booked?.year === booking.year &&
        booked?.timeRange === booking.timeRange

    return (
        <div className="w-full h-full cursor-pointer flex items-center justify-center hover:bg-sky-700 transition">
            {(isBooked) ? (
                <div onClick={() => onCancel()} className="group flex items-center justify-center w-full h-full hover:bg-black/30 transition">
                    <LuLockKeyhole className="w-6 h-6 group-hover:hidden transition animate-tada" />
                    <LuLockKeyholeOpen className="w-6 h-6 hidden group-hover:block transition" />
                </div>

            ) : (
                <div className="hover:bg-sky-700">
                    <input
                        type="radio"
                        checked={selected}
                        onChange={() => onSelect(booking)}
                        name="bookDate"
                        className="accent-company-primary"
                    />
                </div>
            )
            }
        </div>
    )
}

export default Cell