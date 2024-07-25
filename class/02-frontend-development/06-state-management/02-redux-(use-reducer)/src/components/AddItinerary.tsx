import { useState } from "react";

interface onAddProps {
  onAddItinerary: (text: string) => void;
}

function AddItinerary({ onAddItinerary }: onAddProps) {
  const [itinerary, setItinerary] = useState("");

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
          onAddItinerary(itinerary);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddItinerary;
