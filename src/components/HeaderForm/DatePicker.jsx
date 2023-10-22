import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoTriangleDown } from "react-icons/go";

function DatePick() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className=" relative">
      <DatePicker
        placeholderText="Date"
        className="bg-color-secondary cursor-pointer p-2  rounded-md focus:outline-none text-gray-50"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      <GoTriangleDown className="absolute top-3 left-40 text-white" />
    </div>
  );
}

export default DatePick;
