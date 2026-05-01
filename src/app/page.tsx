"use client";
import Calender from "./components/Calender/calender";
import BookButton from "./components/Button/bookButton";
import { useState, useEffect } from "react";
import { thisYear, thisMonth, monthArray } from "./components/Calender/calenderData";
import { dateFormat } from "./components/Data/data";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Home() {

  const thisMonthIndex = thisMonth

  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(thisMonthIndex)
  const [selectedYear, setSelectedYear] = useState<number>(thisYear)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [bookedValue, setBookedValue] = useState<string | null>("")

  useEffect(() => {
    let latestBookedValue = localStorage.getItem("bookedDate")
    setBookedValue(latestBookedValue)
  }, [])

  const nextMonthToggle = () => {
    const nextMonth = (currentMonthIndex + 1) % monthArray.length;
    setCurrentMonthIndex(nextMonth);

    if (currentMonthIndex === 0) {
      setSelectedYear(selectedYear + 1)
    }
  }

  const backMonthToggle = () => {
    const backMonth = (currentMonthIndex + (monthArray.length - 1)) % monthArray.length;
    setCurrentMonthIndex(backMonth);
    if (currentMonthIndex === 11) {
      setSelectedYear(selectedYear - 1)
    }
  }

  const bookedValueArray = bookedValue?.split(",")
  const BookedMonthIndex = bookedValueArray ? Number(bookedValueArray[1]) : null;
  const bookedDate = bookedValueArray ? Number(bookedValueArray[0]) : null;
  const showBookedDate =
    bookedValueArray && bookedValueArray.length >= 4 && bookedDate !== null && BookedMonthIndex !== null
      ? `${bookedDate}${dateFormat(bookedDate)} ${monthArray[BookedMonthIndex]} ${bookedValueArray[3]}`
      : "Select the date!"


  const bookHandleClick = () => {
    setBookedValue(selectedValue)
    if (selectedValue) {
      localStorage.setItem("bookedDate", selectedValue)
    }

  }


  return (
    <div className="text-center bg-company-background shadow-xl/30 mx-10" >
      <div className="flex place-content-between m-2">
        <AiFillPlusCircle />
        <AiFillPlusCircle />
      </div>
      <div className="m-10">
        <h1 className="text-center text-5xl font-extrabold">Tvättstugan Bokningtavla</h1>
      </div>
      <div>
        <p className="text-1xl">You Booked </p>
        <p className="text-3xl">{showBookedDate}</p>
      </div>
      <div className="flex justify-center py-8">
        <Calender
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          currentMonthIndex={currentMonthIndex}
          selectedYear={selectedYear}
          onNext={nextMonthToggle}
          onPrev={backMonthToggle} />
      </div>
      <BookButton handleBook={bookHandleClick} />
      <div className="flex place-content-between m-2">
        <AiFillPlusCircle />
        <AiFillPlusCircle />
      </div>
    </div>
  );
}
