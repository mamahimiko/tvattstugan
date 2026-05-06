"use client"
import { timeRange, getDaysInMonth } from "./calenderData"
import ThisDate from "./thisData"
import Cell from "./cell"
import { Booking } from "@/app/types/types"

type calenderProps = {
    selectedValue: Booking | null,
    setSelectedValue: (booking: Booking | null) => void,
    bookedValue: Booking | null,
    currentMonthIndex: number,
    selectedYear: number,
    handleCancel: () => void
    onNext: () => void,
    onPrev: () => void
}

const Calender = ({ selectedValue, setSelectedValue, bookedValue, currentMonthIndex, selectedYear, handleCancel, onNext, onPrev }: calenderProps) => {


    const disabledays = getDaysInMonth(selectedYear, currentMonthIndex + 1)

    let firstHalfDate: number[] = []
    for (let i: number = 1; i < 16; i++) {
        firstHalfDate.push(i)
    }

    let secondHalfDate: number[] = []
    for (let i: number = 16; i <= disabledays; i++) {
        secondHalfDate.push(i)
    }

    const datesArray: number[][] = [firstHalfDate, secondHalfDate]

    return (
        <div className="">
            <ThisDate currentMonthIndex={currentMonthIndex} year={selectedYear} onNext={onNext} onPrev={onPrev} />
            <div className="max-w-300 text-center lg:p-1 xl:p-5 flex flex-col justify-center">
                <>
                    {datesArray.map((dates, index) =>
                        <div key={index}>
                            <div className="grid grid-cols-17 gap-4">
                                <div className=""></div>
                                {dates.map((date: number) =>
                                    <div key={date}><p className="font-bold">{date}</p></div>)}
                            </div>
                            {timeRange.map((range: string, index: number) => (
                                <div key={index} className="grid grid-cols-17 gap-4">
                                    <p className="font-bold lg:text-[12px] xl:text-[14px]">{range}</p>
                                    {dates.map((date: number) => (
                                        <div className="w-15" key={`${range}${date}`}>
                                            <Cell
                                                booking={{ date, month: currentMonthIndex, year: selectedYear, timeRange: range }}
                                                selected={
                                                    selectedValue?.date === date &&
                                                    selectedValue?.month === currentMonthIndex &&
                                                    selectedValue?.year === selectedYear &&
                                                    selectedValue?.timeRange === range}
                                                booked={bookedValue}
                                                onSelect={setSelectedValue}
                                                onCancel={handleCancel}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))
                            }
                            {index !== datesArray.length - 1 && (
                                <div className="py-8">
                                    <hr />
                                </div>
                            )}
                        </div>
                    )}
                </>
            </div>
        </div >
    )
}

export default Calender