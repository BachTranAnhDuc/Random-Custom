import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IServiceState {
  numberService: number;
  valuesService: string[];
}

// Define the initial state using that type
const initialState: IServiceState[] = [
  { numberService: 1, valuesService: [] },
  { numberService: 2, valuesService: [] },
  { numberService: 3, valuesService: [] },
  { numberService: 4, valuesService: [] },
  { numberService: 5, valuesService: [] },
  { numberService: 6, valuesService: [] },
];

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {},
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
