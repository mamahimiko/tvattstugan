"use client"
import { timeRange, getDaysInMonth } from "./calenderData"
import ThisDate from "./thisData"
import Cell from "./cell"

type calenderProps = {
    selectedValue: string | null,
    setSelectedValue: (date: string | null) => void,
    currentMonthIndex: number,
    selectedYear: number,
    onNext: () => void,
    onPrev: () => void
}

const Calender = ({ selectedValue, setSelectedValue, currentMonthIndex, selectedYear, onNext, onPrev }: calenderProps) => {


    const disabledays = getDaysInMonth(selectedYear, currentMonthIndex + 1)

    let firstHalfDate: number[] = []
    for (let i: number = 1; i < 16; i++) {
        firstHalfDate.push(i)
    }
    console.log(firstHalfDate)

    let secondHalfDate: number[] = []
    for (let i: number = 16; i <= disabledays; i++) {
        secondHalfDate.push(i)
    }

    return (
        <div className="">
            <ThisDate currentMonthIndex={currentMonthIndex} year={selectedYear} onNext={onNext} onPrev={onPrev} />
            <div className="max-w-300 text-center p-5 flex flex-col justify-center">
                <div className="grid grid-cols-16 gap-4">
                    <div className=""></div>
                    {firstHalfDate.map((date: number) =>
                        <div key={date}><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div key={index} className="grid grid-cols-16 gap-4">
                        <p className="font-bold">{range}</p>
                        {firstHalfDate.map((date: number) => (
                            <div className="w-15" key={`${range}${date}`}>
                                <Cell
                                    value={`${date},${currentMonthIndex},${selectedYear},${range}`}
                                    selected={selectedValue === `${date},${currentMonthIndex},${selectedYear},${range}`}
                                    onSelect={setSelectedValue}
                                />
                            </div>
                        ))}
                    </div>
                ))}
                <div className="py-8">
                    <hr></hr>
                </div>
                <div className="grid grid-cols-17 gap-4">
                    <div className="font-bold"></div>
                    {secondHalfDate.map((date: number) =>
                        <div key={date}><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div key={index} className="grid grid-cols-17 gap-4">
                        <p className="font-bold" key={index}>{range}</p>
                        {secondHalfDate.map((date: number) => (
                            <div className="w-15" key={`${range}${date}`}>
                                <Cell
                                    value={`${date},${currentMonthIndex},${selectedYear},${range}`}
                                    selected={selectedValue === `${date},${currentMonthIndex},${selectedYear},${range}`}
                                    onSelect={setSelectedValue}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calender