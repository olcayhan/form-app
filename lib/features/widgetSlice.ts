import { formType } from "@/data/forms";
import { WidgetType } from "@/data/types/widgetType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initStateType {
  value: formType;
}
const initialState: initStateType = {
  value: {
    id: 12345,
    title: "Form 1",
    widgets: [],
  },
};

export const widgetReducer = createSlice({
  name: "widget",
  initialState,
  reducers: {
    updateTitle: (state, action: PayloadAction<string>) => {
      state.value.title = action.payload;
    },
    addWidget: (state, action: PayloadAction<WidgetType>) => {
      state.value.widgets = [...state.value.widgets, action.payload];
    },
    deleteWidget: (state, action: PayloadAction<WidgetType>) => {
      state.value.widgets = state.value.widgets.filter(
        (el) => el.id !== action.payload.id
      );
    },
    upWidget: (state, action: PayloadAction<WidgetType>) => {
      const index = state.value.widgets.findIndex(
        (el) => el.id === action.payload.id
      );
      if (index === 0) return;
      const temp = state.value.widgets[index];
      state.value.widgets[index] = state.value.widgets[index - 1];
      state.value.widgets[index - 1] = temp;
    },
    downWidget: (state, action: PayloadAction<WidgetType>) => {
      const index = state.value.widgets.findIndex(
        (el) => el.id === action.payload.id
      );
      if (index === state.value.widgets.length - 1) return;
      const temp = state.value.widgets[index];
      state.value.widgets[index] = state.value.widgets[index + 1];
      state.value.widgets[index + 1] = temp;
    },
    updateData: (state, action: PayloadAction<any>) => {
      const index = state.value.widgets.findIndex(
        (el) => el.id === action.payload.id
      );
      state.value.widgets[index].data = action.payload.data;
    },
  },
});

export const {
  addWidget,
  deleteWidget,
  upWidget,
  downWidget,
  updateData,
  updateTitle,
} = widgetReducer.actions;
export default widgetReducer.reducer;
