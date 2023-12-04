import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./features/services/servicesSlice";

const store = configureStore({
  reducer: {
    services: servicesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
