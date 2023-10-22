import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoTriangleDown } from "react-icons/go";

function DatePick() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <DatePicker
      showIcon
      icon="fa fa-calendar"
      placeholderText="Date"
      className=" bg-color-secondary cursor-pointer p-2  rounded-md focus:outline-none text-gray-50 md: h-12"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    ></DatePicker>
  );
}

export default DatePick;
