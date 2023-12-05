import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  SERVICE_01,
  SERVICE_02,
  SERVICE_03,
  SERVICE_04,
  SERVICE_05,
  SERVICE_06,
} from "../../constants/NameService";

interface IServiceState {
  Service1: string[];

  Service2: string[];

  Service3: string[];

  Service4: string[];

  Service5: string[];

  Service6: string[];
}

const initialState: IServiceState = {
  Service1: [],

  Service2: [],

  Service3: [],

  Service4: [],

  Service5: [],

  Service6: [],
};

export const serviceSlice = createSlice({
  name: "services",

  initialState,

  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ nameService: string; valueItem: string }>,
    ) => {
      const { nameService, valueItem } = action.payload;

      switch (nameService) {
        case SERVICE_01:
          state.Service1.push(valueItem);
          break;

        case SERVICE_02:
          state.Service2.push(valueItem);
          break;

        case SERVICE_03:
          state.Service3.push(valueItem);
          break;

        case SERVICE_04:
          state.Service4.push(valueItem);
          break;

        case SERVICE_05:
          state.Service5.push(valueItem);
          break;

        case SERVICE_06:
          state.Service6.push(valueItem);
          break;
      }
    },

    removeItem: (
      state,
      action: PayloadAction<{ nameService: string; valueItem: string }>,
    ) => {
      const { nameService, valueItem } = action.payload;

      switch (nameService) {
        case SERVICE_01:
          state.Service1 = state.Service1.filter((el) => {
            return el !== valueItem;
          });

          break;

        case SERVICE_02:
          state.Service2 = state.Service2.filter((el) => {
            return el !== valueItem;
          });

          break;

        case SERVICE_03:
          state.Service3 = state.Service3.filter((el) => {
            return el !== valueItem;
          });

          break;

        case SERVICE_04:
          state.Service4 = state.Service4.filter((el) => {
            return el !== valueItem;
          });

          break;

        case SERVICE_05:
          state.Service5 = state.Service5.filter((el) => {
            return el !== valueItem;
          });

          break;

        case SERVICE_06:
          state.Service6 = state.Service6.filter((el) => {
            return el !== valueItem;
          });

          break;
      }
    },
  },
});

export const { addItem, removeItem } = serviceSlice.actions;

export default serviceSlice.reducer;
