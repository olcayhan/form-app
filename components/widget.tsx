import React from "react";
import { MdDelete } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useAppDispatch } from "@/lib/hooks";
import { deleteWidget, downWidget, upWidget } from "@/lib/features/widgetSlice";
import { WidgetType } from "@/data/types/widgetType";

const Widget = ({ element }: { element: WidgetType }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="relative w-full focus:border-blue-500 group border-[1px] rounded-md"
    >
      <div className="absolute h-full my-auto -right-12 hidden flex-col justify-center items-center gap-1 group-focus-within:flex ">
        <button
          className="text-[32px]"
          onClick={() => {
            dispatch(upWidget(element));
          }}
        >
          <BiChevronUp />
        </button>
        <button
          className="text-[32px]"
          onClick={() => {
            dispatch(downWidget(element));
          }}
        >
          <BiChevronDown />
        </button>
        <button
          onClick={() => {
            dispatch(deleteWidget(element));
          }}
          className=" bg-red-500 w-10 h-10 rounded-full text-neutral-50 hover:bg-red-400 active:bg-red-600 flex justify-center items-center"
        >
          <MdDelete fontSize={20} />
        </button>
      </div>
      <element.type />
    </button>
  );
};

export default Widget;
