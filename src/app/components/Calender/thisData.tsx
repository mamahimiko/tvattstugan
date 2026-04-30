"use client"
import { useState } from "react";
import { thisYear, thisMonth, monthArray } from "./calenderData"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type dateProps = {
    thisYear: number,
    thisMonth: number,
    monthArray: string[]

}

const ThisDate = () => {
    const thisMonthIndex = thisMonth

    const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(thisMonthIndex)
    const [year, setYear] = useState<number>(thisYear)

    const nextMonthToggle = () => {
        const nextMonth = (currentMonthIndex + 1) % monthArray.length;
        setCurrentMonthIndex(nextMonth);

        if (currentMonthIndex === 0) {
            setYear(year + 1)
        }
    }

    const backMonthToggle = () => {
        const backMonth = (currentMonthIndex + (monthArray.length - 1)) % monthArray.length;
        setCurrentMonthIndex(backMonth);
        if (currentMonthIndex === 11) {
            setYear(year - 1)
        }
    }

    return (
        <div className="flex items-center justify-center gap-4">
            <button onClick={backMonthToggle}>
                <HiChevronLeft className="text-lg" />
            </button>
            <div className="w-40">
                <p>{monthArray[currentMonthIndex]} {year}</p>
            </div>
            <button onClick={nextMonthToggle}>
                <HiChevronRight className="text-lg" />
            </button>

        </div>
    )
}

export default ThisDate