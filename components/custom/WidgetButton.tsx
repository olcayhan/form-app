import { WidgetType } from "@/data/types/widgetType";
import { addWidget } from "@/lib/features/widgetSlice";
import { useAppDispatch } from "@/lib/hooks";
import React from "react";

const WidgetButton = ({ element }: { element: WidgetType }) => {
  const dispatch = useAppDispatch();

  const handleWidget = () => {
    let newElement = {
      id: Math.floor(Math.random() * 10000000),
      name: element.name,
      type: element.type,
      data: element.data,
    };
    dispatch(addWidget(newElement));
  };

  return (
    <button
      className="outline-1 hover:bg-neutral-200 active:bg-neutral-300 outline border p-2 rounded-md font-semibold w-full transition-all duration-100"
      onClick={handleWidget}
    >
      {element.name}
    </button>
  );
};

export default WidgetButton;
