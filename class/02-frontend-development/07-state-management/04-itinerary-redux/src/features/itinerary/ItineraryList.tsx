import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove } from "./itinerarySlice";

interface Itinerary {
  id: number;
  text: string;
  done: boolean;
}

function ItineraryList() {
  const itineraries = useSelector(
    (state: { itineraries: Itinerary[] }) => state.itineraries
  );

  return (
    <ul>
      {itineraries.map((itinerary) => {
        return (
          <li key={itinerary.id}>{<Itinerary itinerary={itinerary} />}</li>
        );
      })}
    </ul>
  );
}

function Itinerary({ itinerary }: { itinerary: Itinerary }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(itinerary.text);
  let itineraryContent;

  if (isEditing) {
    itineraryContent = (
      <>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(edit({ ...itinerary, text }));
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    itineraryContent = (
      <>
        <p>{itinerary.text}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <input type="checkbox" />
      {itineraryContent}
      <button onClick={() => dispatch(remove(itinerary.id))}>Delete</button>
    </div>
  );
}

export default ItineraryList;
