import React from "react";
import { WidgetType } from "@/data/types/widgetType";
import { useAppDispatch } from "@/lib/hooks";
import handleUpdate from "@/utils/updateHandler";

const FullNameText = ({ element }: { element: WidgetType }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-start items-start p-4 gap-3">
      <input
        type="text"
        className="bg-transparent outline-none text-lg"
        placeholder="Type a Question"
        value={element.data.header}
        onChange={(e) => {
          handleUpdate(dispatch, element, "header", e.target.value);
        }}
      />
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col justify-center items-start gap-3 w-[45%]">
          <input
            type="text"
            disabled
            className="w-full p-2 rounded-md bg-transparent border-[1px]"
          />
          <input
            type="text"
            className="bg-transparent outline-none text-sm"
            value={element.data.subheader1}
            onChange={(e) => {
              handleUpdate(dispatch, element, "subheader1", e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-[45%]">
          <input
            type="text"
            className="w-full p-2 rounded-md bg-transparent border-[1px]"
            disabled
          />
          <input
            type="text"
            className="bg-transparent outline-none text-sm"
            value={element.data.subheader2}
            onChange={(e) => {
              handleUpdate(dispatch, element, "subheader2", e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FullNameText;
