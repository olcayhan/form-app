"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { WidgetType } from "@/data/types/widgetType";
import WidgetButton from "@/components/custom/WidgetButton";
import Widget from "@/components/Widget";
import { widgetButtons } from "@/data/widgets";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { updateTitle } from "@/lib/features/widgetSlice";

export default function page() {
  const form = useAppSelector((state) => state.widgetReducer.value);
  const dispatch = useAppDispatch();

  return (
    <main className="flex min-h-screen flex-col items-start px-24 justify-start bg-neutral-100">
      <div className="w-full flex flex-row items-start  py-5 justify-between">
        <Link
          href="/"
          className="outline-1 hover:bg-neutral-200 active:bg-neutral-300 outline border p-2 rounded-md font-semibold transition-all duration-100"
        >
          <BsArrowLeft />
        </Link>
        <input
          type="text"
          placeholder="Name"
          value={form.title}
          className="text-3xl bg-transparent border border-neutral-500 p-1 rounded-md font-semibold text-center"
          onChange={(e) => dispatch(updateTitle(e.target.value))}
        />
        <button className="outline-1 hover:bg-neutral-200 active:bg-neutral-300 outline border p-2 rounded-md font-semibold transition-all duration-100">
          Generate Form
        </button>
      </div>
      <div className="flex flex-row items-start justify-center py-5 gap-3 bg-neutral-100 w-full">
        <div className="w-1/4 h-full flex flex-col items-start justify-start gap-2 p-6 border-[1px]">
          {widgetButtons.map((element: WidgetType) => {
            return <WidgetButton element={element} />;
          })}
        </div>
        <div className="w-2/4 flex flex-col justify-start items-start gap-2 p-6 border-[1px] bg-neutral-50">
          {form.widgets.length === 0 ? (
            <div className="w-full flex flex-row justify-center items-center border-neutral-300 border-[1px] min-h-36 rounded-md font-semibold text-lg text-neutral-700">
              Add elements from the left side
            </div>
          ) : (
            form.widgets.map((element) => {
              return <Widget element={element} key={element.id} editable />;
            })
          )}
        </div>
        <div className="w-1/4 flex flex-col justify-start items-start gap-2 p-6 border-[1px]">
          <div className="w-full flex flex-row justify-center items-center border-neutral-300 border-[1px] min-h-36 rounded-md font-semibold text-lg text-neutral-700">
            <pre>{JSON.stringify(form, null, 2)}</pre>
          </div>
        </div>
      </div>
    </main>
  );
}
