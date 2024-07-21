import { WidgetType } from "@/data/types/widgetType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initStateType {
  value: WidgetType[];
}
const initialState: initStateType = {
  value: [],
};

export const widgetReducer = createSlice({
  name: "widget",
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<WidgetType>) => {
      state.value = [...state.value, action.payload];
    },
    deleteWidget: (state, action: PayloadAction<WidgetType>) => {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
    },
    upWidget: (state, action: PayloadAction<WidgetType>) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index === 0) return;
      const temp = state.value[index];
      state.value[index] = state.value[index - 1];
      state.value[index - 1] = temp;
    },
    downWidget: (state, action: PayloadAction<WidgetType>) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index === state.value.length - 1) return;
      const temp = state.value[index];
      state.value[index] = state.value[index + 1];
      state.value[index + 1] = temp;
    },
  },
});

export const { addWidget, deleteWidget, upWidget, downWidget } =
  widgetReducer.actions;
export default widgetReducer.reducer;
