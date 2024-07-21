import React from "react";
import { WidgetType } from "@/data/types/widgetType";
import { updateData } from "@/lib/features/widgetSlice";
import { useAppDispatch } from "@/lib/hooks";

const LongText = ({ element }: { element: WidgetType }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col justify-start items-start gap-3 w-full p-4 min-h-14">
      <input
        type="text"
        placeholder="enter a header"
        className="bg-transparent  outline-none border-neutral-500"
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
      <input type="text" disabled className="border p-2 rounded-md w-64 h-52" />
      <input
        type="text"
        placeholder="enter a subheader"
        className="bg-transparent outline-none border-neutral-500 text-[14px]"
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

export default LongText;
