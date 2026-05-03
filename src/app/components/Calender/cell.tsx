import { LuLockKeyhole, LuLockKeyholeOpen } from "react-icons/lu";

type CellProps = {
    value: string,
    selected: boolean,
    booked: string | null,
    onSelect: (value: string) => void
    onCancel: (value: string) => void

}

const Cell = ({ value, selected, booked, onSelect, onCancel }: CellProps) => {

    const isBooked = booked === value

    return (
        <div className="w-full h-full cursor-pointer flex items-center justify-center hover:bg-sky-700 transition">
            {(isBooked) ? (
                <div onClick={() => onCancel(value)} className="group flex items-center justify-center w-full h-full hover:bg-black/30 transition">
                    <LuLockKeyhole className="w-6 h-6 group-hover:hidden transition" />
                    <LuLockKeyholeOpen className="w-6 h-6 hidden group-hover:block transition" />
                </div>

            ) : (
                <div className="hover:bg-sky-700">
                    <input
                        type="radio"
                        value={value}
                        checked={selected}
                        onChange={() => onSelect(value)}
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