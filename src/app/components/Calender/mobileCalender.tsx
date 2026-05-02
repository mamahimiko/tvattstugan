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

const MobileCalender = ({ selectedValue, setSelectedValue, currentMonthIndex, selectedYear, onNext, onPrev }: calenderProps) => {


    const disabledays = getDaysInMonth(selectedYear, currentMonthIndex + 1)

    let firstSevenDays: number[] = []
    for (let i: number = 1; i < 8; i++) {
        firstSevenDays.push(i)
    }

    let secondSevenDays: number[] = []
    for (let i: number = 8; i < 15; i++) {
        secondSevenDays.push(i)
    }

    let thirdSevenDays: number[] = []
    for (let i: number = 15; i < 22; i++) {
        thirdSevenDays.push(i)
    }

    let forthSevenDays: number[] = []
    for (let i: number = 22; i < 29; i++) {
        forthSevenDays.push(i)
    }

    let lastDays: number[] = []
    for (let i: number = 29; i <= disabledays; i++) {
        lastDays.push(i)
    }


    return (
        <div className="">
            <ThisDate currentMonthIndex={currentMonthIndex} year={selectedYear} onNext={onNext} onPrev={onPrev} />
            <div className="max-w-300 text-center p-3 flex flex-col justify-center">
                <div className="grid grid-cols-8 gap-2">
                    <div></div>
                    {firstSevenDays.map((date: number) =>
                        <div key={date}><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div key={index} className="grid grid-cols-8 gap-2">
                        <p className="font-bold text-xs">{range}</p>
                        {firstSevenDays.map((date: number) => (
                            <div key={`${range}${date}`}>
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
                <div className="grid grid-cols-8 gap-2">
                    <div></div>
                    {secondSevenDays.map((date: number) =>
                        <div key={date}><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div key={index} className="grid grid-cols-8 gap-2">
                        <p className="font-bold text-xs" key={index}>{range}</p>
                        {secondSevenDays.map((date: number) => (
                            <div key={`${range}${date}`}>
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
                <div className="grid grid-cols-8 gap-2">
                    <div className="font-bold"></div>
                    {thirdSevenDays.map((date: number) =>
                        <div key={date}><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div key={index} className="grid grid-cols-8 gap-2">
                        <p className="font-bold  text-xs" key={index}>{range}</p>
                        {thirdSevenDays.map((date: number) => (
                            <div key={`${range}${date}`}>
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
                <div className="grid grid-cols-8 gap-2">
                    <div className="font-bold"></div>
                    {forthSevenDays.map((date: number) =>
                        <div key={date}><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div key={index} className="grid grid-cols-8 gap-2">
                        <p className="font-bold  text-xs" key={index}>{range}</p>
                        {forthSevenDays.map((date: number) => (
                            <div key={`${range}${date}`}>
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
                <div className="grid grid-cols-8 gap-2">
                    <div className="font-bold"></div>
                    {lastDays.map((date: number) =>
                        <div key={date}><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div key={index} className="grid grid-cols-8 gap-2">
                        <p className="font-bold text-xs" key={index}>{range}</p>
                        {lastDays.map((date: number) => (
                            <div key={`${range}${date}`}>
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

export default MobileCalender