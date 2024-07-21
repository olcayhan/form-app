import { WidgetType } from "@/data/types/widgetType";
import { updateData } from "@/lib/features/widgetSlice";
import { useAppDispatch } from "@/lib/hooks";
import React from "react";

const HeaderText = ({ element }: { element: WidgetType }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col justify-start items-start p-4 gap-3">
      <input
        type="text"
        placeholder="Header"
        className="bg-transparent outline-none text-3xl font-semibold"
        value={element.data.header}
        onChange={(e) => {
          dispatch(
            updateData({
              id: element.id,
              data: { ...element.data, header: e.target.value },
            })
          );
        }}
      />
      <input
        type="text"
        placeholder="Subheader"
        className="bg-transparent outline-none text-md"
        value={element.data.subheader}
        onChange={(e) => {
          dispatch(
            updateData({
              id: element.id,
              data: { ...element.data, subheader: e.target.value },
            })
          );
        }}
      />
    </div>
  );
};

export default HeaderText;
