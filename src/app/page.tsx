"use client";
import Calender from "./components/Calender/calender";
import MobileCalender from "./components/Calender/mobileCalender";
import BookButton from "./components/Button/bookButton";
import { useIsMobile } from "./hook/isMobile";
import { useState, useEffect } from "react";
import { thisYear, thisMonth, monthArray } from "./components/Calender/calenderData";
import { dateFormat } from "./components/Data/data";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Home() {
  const isMobile = useIsMobile()
  const thisMonthIndex = thisMonth

  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(thisMonthIndex)
  const [selectedYear, setSelectedYear] = useState<number>(thisYear)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [bookedValue, setBookedValue] = useState<string | null>("")

  useEffect(() => {
    let latestBookedValue = localStorage.getItem("bookedDate")
    setBookedValue(latestBookedValue)
  }, [])

  const nextMonthButton = () => {
    const nextMonth = (currentMonthIndex + 1) % monthArray.length;
    setCurrentMonthIndex(nextMonth);

    if (currentMonthIndex === 0) {
      setSelectedYear(selectedYear + 1)
    }
  }

  const backMonthButton = () => {
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

  const cancelHandleClick = () => {
    if (bookedValue) {
      localStorage.removeItem("bookedDate");
      setBookedValue(null)
      setSelectedValue(null)
    }
  }

  return (
    <div className="text-center bg-company-background shadow-xl/30 md:mx-10 lg:mx-10" >
      <div className="flex place-content-between m-2 text-gray-400">
        <AiFillPlusCircle />
        <AiFillPlusCircle />
      </div>
      <div className=" md:m-2 lg:m-10 ">
        <h1 className="text-center text-5xl font-extrabold">Tvättstugan Bokningtavla</h1>
      </div>
      <div className="md: p-5">
        <p className="text-1xl">You Booked </p>
        <p className="text-3xl font-bold">{showBookedDate}</p>
      </div>
      <div className="flex justify-center py-8">
        {isMobile ? (
          <MobileCalender
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            bookedValue={bookedValue}
            handleCancel={cancelHandleClick}
            currentMonthIndex={currentMonthIndex}
            selectedYear={selectedYear}
            onNext={nextMonthButton}
            onPrev={backMonthButton} />
        ) : (
          < Calender
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            bookedValue={bookedValue}
            handleCancel={cancelHandleClick}
            currentMonthIndex={currentMonthIndex}
            selectedYear={selectedYear}
            onNext={nextMonthButton}
            onPrev={backMonthButton} />
        )
        }
      </div>
      <BookButton handleBook={bookHandleClick} />
      <div className="flex place-content-between m-2 text-gray-400">
        <AiFillPlusCircle />
        <AiFillPlusCircle />
      </div>
    </div>
  );
}
