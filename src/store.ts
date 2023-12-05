import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./features/services/servicesSlice";
import phoneSlice from "./features/phone/phoneSlice";

const store = configureStore({
  reducer: {
    services: servicesSlice,
    phone: phoneSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
