import { useState } from "react";
import { useDispatch } from "react-redux";

import { add } from "./itinerarySlice";

function AddItinerary() {
  const [itinerary, setItinerary] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Add itinerary"
        value={itinerary}
        onChange={(event) => setItinerary(event.target.value)}
      />
      <button
        onClick={() => {
          setItinerary("");
          dispatch(add(itinerary));
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddItinerary;
