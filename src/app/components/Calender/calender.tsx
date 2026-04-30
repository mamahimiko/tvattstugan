import { timeRange, firstHalfDate, secondHalfDate } from "./calenderData"
import ThisDate from "./thisData"
import Cell from "./cell"
const Calender = () => {


    return (
        <div className="">
            <ThisDate />
            <div className="max-w-300 text-center p-5 flex flex-col justify-center">
                <div className="grid grid-cols-16 gap-4">
                    <div className=""></div>
                    {firstHalfDate.map((date: number, index: number) => <div><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div className="grid grid-cols-16 gap-4">
                        <p className="font-bold" key={index}>{range}</p>
                        {firstHalfDate.map((date: number, index: number) => (
                            <div className="w-15" key={index}><Cell date={date} /></div>
                        ))}
                    </div>
                ))}
                <div className="py-8">
                    <hr></hr>
                </div>
                <div className="grid grid-cols-17 gap-4">
                    <div className="font-bold"></div>
                    {secondHalfDate.map((date: number, index: number) => <div><p className="font-bold">{date}</p></div>)}
                </div>
                {timeRange.map((range: string, index: number) => (
                    <div className="grid grid-cols-17 gap-4">
                        <p className="font-bold" key={index}>{range}</p>
                        {secondHalfDate.map((date: number, index: number) => (
                            <div className="w-15" key={index}><Cell date={date} /></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calender