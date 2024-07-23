import React from "react";
import { MdDelete } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useAppDispatch } from "@/lib/hooks";
import { deleteWidget, downWidget, upWidget } from "@/lib/features/widgetSlice";
import { WidgetType } from "@/data/types/widgetType";

const Widget = ({
  element,
  editable,
}: {
  element: WidgetType;
  editable: boolean;
}) => {
  const dispatch = useAppDispatch();
  if (!editable) {
    return (
      <div className="relative w-full rounded-md">
        <element.type element={element} />
      </div>
    );
  }
  return (
    <button className="relative w-full focus-within:border-blue-500 group border-[1px] rounded-md">
      <div className="absolute h-full my-auto -right-12 hidden flex-col justify-center items-center gap-1 group-focus-within:flex text-[32px]">
        <div onClick={() => dispatch(upWidget(element))}>
          <BiChevronUp />
        </div>
        <div onClick={() => dispatch(downWidget(element))}>
          <BiChevronDown />
        </div>
        <div
          onClick={() => dispatch(deleteWidget(element))}
          className=" bg-red-500 p-2 rounded-full text-neutral-50 hover:bg-red-400 active:bg-red-600 flex justify-center items-center"
        >
          <MdDelete fontSize={20} />
        </div>
      </div>
      <element.type element={element} editable />
    </button>
  );
};

export default Widget;
