"use client"
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { monthArray } from "./calenderData"

type dateProps = {
    currentMonthIndex: number
    year: number,
    onNext: () => void,
    onPrev: () => void
}

const ThisDate = ({ currentMonthIndex, year, onNext, onPrev }: dateProps) => {


    return (
        <div className="flex items-center justify-center gap-4">
            <button onClick={onPrev}>
                <HiChevronLeft className="text-lg" />
            </button>
            <div className="w-40">
                <p>{monthArray[currentMonthIndex]} {year}</p>
            </div>
            <button onClick={onNext}>
                <HiChevronRight className="text-lg" />
            </button>

        </div>
    )
}

export default ThisDate