import { WidgetType } from "@/data/types/widgetType";
import { useAppDispatch } from "@/lib/hooks";
import handleUpdate from "@/utils/updateHandler";
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
          handleUpdate(dispatch, element, "header", e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Subheader"
        className="bg-transparent outline-none text-md"
        value={element.data.subheader}
        onChange={(e) => {
          handleUpdate(dispatch, element, "subheader", e.target.value);
        }}
      />
    </div>
  );
};

export default HeaderText;
