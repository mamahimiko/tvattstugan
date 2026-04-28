import Calender from "./components/Calender/calender";

export default function Home() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl">You Booked 28th April 2026</h2>
      </div>
      <div className="flex justify-center">
        <Calender />
      </div>
    </div>
  );
}
