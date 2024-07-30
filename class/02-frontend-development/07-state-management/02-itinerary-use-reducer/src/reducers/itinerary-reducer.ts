export interface Itinerary {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: "ADD"; id: number; text: string }
  | { type: "EDIT"; itinerary: Itinerary }
  | { type: "DELETE"; id: number };

const localStorageData = JSON.parse(
  localStorage.getItem("itineraries") || "[]"
);

console.log(localStorageData);

export const initialItinerary = localStorageData
  ? localStorageData
  : [
      { id: 0, text: "Denpasar, Bali", done: true },
      { id: 1, text: "Labuan Bajo, NTB", done: false },
      { id: 2, text: "Flores, NTT", done: false },
    ];

export function itineraryReducer(itineraries: Itinerary[], action: Action) {
  switch (action.type) {
    case "ADD": {
      const result = [
        ...itineraries,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

      localStorage.setItem("itineraries", JSON.stringify(result));
      return result;
    }
    case "EDIT": {
      const result = itineraries.map((item) => {
        if (item.id === action.itinerary.id) {
          return action.itinerary;
        } else {
          return item;
        }
      });

      localStorage.setItem("itineraries", JSON.stringify(result));
      return result;
    }
    case "DELETE": {
      const result = itineraries.filter(
        (itinerary) => itinerary.id !== action.id
      );

      localStorage.setItem("itineraries", JSON.stringify(result));
      return result;
    }
  }
}
