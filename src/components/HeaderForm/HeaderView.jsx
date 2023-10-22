import HeaderTitle from "./HeaderTitle";
import AadoButton from "../AadoButton";
import DatePick from "./DatePicker";
import { useState } from "react";

function HeaderView() {
  const [eventInput, setEventInput] = useState("");
  const [placeInput, setPlaceInput] = useState("");

  const handleChangeEventName = (event) => {
    setEventInput(event.target.value);

    console.log(eventInput);
  };

  const handleChangePlaceName = (event) => {
    setPlaceInput(event.target.value);
  };

  return (
    <div className="bg-color-primary h-screen ">
      <HeaderTitle />
      <div className="flex flex-col space-y-2 sm:flex-row space-x-2 mt-8 ml-10 sm:mt-14 sm:ml-24   ">
        <input
          style={{ minWidth: "13rem" }}
          className="w-5/6  ml-2 md:w-80 bg-color-secondary rounded-md pl-3 text-gray-50  focus:outline-none md: h-12 "
          onChange={handleChangeEventName}
          value={eventInput}
          type="text"
          placeholder="Type a event name..."
        ></input>
        <DatePick />
        <input
          className="w-5/6 md:w-80 min-w-64 bg-color-secondary rounded-md pl-3 focus:outline-none text-gray-50 md: h-12 "
          onChange={handleChangePlaceName}
          value={placeInput}
          type="text"
          placeholder="Type a place..."
        ></input>
        <AadoButton
          primary
          className="w-5/6 md:w-80 md: h-12 rounded-md pl-3  scale-100 focus:outline-none hover:bg-[#246059] transition-all duration-300 ease-in-out border-none active:scale-105"
        >
          Find a ticket
        </AadoButton>
        ;
      </div>
    </div>
  );
}

export default HeaderView;
