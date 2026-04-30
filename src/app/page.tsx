import Calender from "./components/Calender/calender";
import BookButton from "./components/Button/bookButton";

export default function Home() {
  return (
    <div className="text-center">
      <div>
        <p className="text-1xl">You Booked </p>
        <p className="text-3xl">28th April 2026</p>
      </div>
      <div className="flex justify-center py-8">
        <Calender />
      </div>
      <BookButton />
    </div>
  );
}
