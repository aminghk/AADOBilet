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
    <div className="bg-color-primary h-screen">
      <HeaderTitle />
      <div className="flex space-x-2 mt-14 ml-24">
        <input
          className="w-1/4 rounded-md pl-3 focus:outline-none"
          onChange={handleChangeEventName}
          value={eventInput}
          type="text"
          placeholder="Type a event name..."
        ></input>
        <DatePick />
        <input
          className="bg-color-secondary rounded-md pl-3 focus:outline-none text-gray-50"
          onChange={handleChangePlaceName}
          value={placeInput}
          type="text"
          placeholder="Type a place..."
        ></input>
        <AadoButton
          primary
          className="rounded-md pl-3  scale-100 focus:outline-none hover:bg-[#246059] transition-all duration-300 ease-in-out border-none active:scale-110"
        >
          Find a ticket
        </AadoButton>
        ;
      </div>
    </div>
  );
}

export default HeaderView;
