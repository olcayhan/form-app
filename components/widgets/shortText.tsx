import React from "react";
import { WidgetType } from "@/data/types/widgetType";
import { useAppDispatch } from "@/lib/hooks";
import handleUpdate from "@/utils/updateHandler";

const ShortText = ({
  element,
  editable,
}: {
  element: WidgetType;
  editable: boolean;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-start items-start gap-3 w-full p-4 min-h-14">
      <input
        type="text"
        placeholder="enter a header"
        className="bg-transparent  outline-none border-neutral-500"
        value={element.data.header}
        onChange={(e) => {
          handleUpdate(dispatch, element, "header", e.target.value);
        }}
        disabled={!editable}
      />
      <input
        type="text"
        disabled={editable}
        className="border p-2 rounded-md w-64"
      />
      <input
        type="text"
        placeholder="enter a subheader"
        className="bg-transparent outline-none border-neutral-500 text-[14px]"
        value={element.data.subheader}
        onChange={(e) => {
          handleUpdate(dispatch, element, "subheader", e.target.value);
        }}
        disabled={!editable}
      />
    </div>
  );
};

export default ShortText;
