import { configureStore } from "@reduxjs/toolkit";
import itinerariesReducer from "../features/itinerary/itinerarySlice";

export const store = configureStore({
  reducer: {
    itineraries: itinerariesReducer,
  },
});
