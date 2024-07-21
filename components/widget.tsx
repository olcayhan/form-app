import React from "react";
import { MdDelete } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useAppDispatch } from "@/lib/hooks";
import { deleteWidget, downWidget, upWidget } from "@/lib/features/widgetSlice";
import { WidgetType } from "@/data/types/widgetType";

const Widget = ({ element }: { element: WidgetType }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="relative w-full focus-within:border-blue-500 group border-[1px] rounded-md">
      <div className="absolute h-full my-auto -right-12 hidden flex-col justify-center items-center gap-1 group-focus-within:flex text-[32px]">
        <button onClick={() => dispatch(upWidget(element))}>
          <BiChevronUp />
        </button>
        <button onClick={() => dispatch(downWidget(element))}>
          <BiChevronDown />
        </button>
        <button
          onClick={() => dispatch(deleteWidget(element))}
          className=" bg-red-500 p-2 rounded-full text-neutral-50 hover:bg-red-400 active:bg-red-600 flex justify-center items-center"
        >
          <MdDelete fontSize={20} />
        </button>
      </div>
      <element.type />
    </div>
  );
};

export default Widget;
