import { WidgetType } from "@/data/types/widgetType";
import { updateData } from "@/lib/features/widgetSlice";
import { Dispatch } from "redux";

const handleUpdate = (
  dispatch: Dispatch,
  element: WidgetType,
  key: string,
  value: string | string[]
) => {
  dispatch(
    updateData({
      id: element.id,
      data: { ...element.data, [key]: value },
    })
  );
};

export default handleUpdate;
