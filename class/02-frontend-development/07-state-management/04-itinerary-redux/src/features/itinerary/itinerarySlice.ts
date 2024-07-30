import { createSlice } from "@reduxjs/toolkit";

export const initialItinerary = [
  { id: 0, text: "Denpasar, Bali", done: true },
  { id: 1, text: "Labuan Bajo, NTB", done: false },
  { id: 2, text: "Flores, NTB", done: false },
];

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState: initialItinerary,
  reducers: {
    add: (state, action) => {
      state.unshift({
        id: Date.now(),
        text: action.payload,
        done: false,
      });
    },
    edit: (state, action) => {
      const index = state.findIndex(
        (itinerary) => itinerary.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    remove: (state, action) => {
      const index = state.findIndex(
        (itinerary) => itinerary.id === action.payload
      );

      state.splice(index, 1);
    },
  },
});

export const { add, edit, remove } = itinerarySlice.actions;
export default itinerarySlice.reducer;
