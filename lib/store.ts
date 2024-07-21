import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./features/widgetSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      widgetReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
