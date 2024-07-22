"use client";
import { useAppSelector } from "@/lib/hooks";
import { WidgetType } from "@/data/types/widgetType";
import WidgetButton from "@/components/custom/WidgetButton";
import Widget from "@/components/Widget";
import { widgetButtons } from "@/data/widgets";

export default function page() {
  const widgets = useAppSelector((state) => state.widgetReducer.value);

  return (
    <main className="flex min-h-screen flex-row items-start justify-center p-24 gap-3 bg-neutral-100">
      <div className="w-1/4 h-full flex flex-col items-start justify-start gap-2 p-6 border-[1px]">
        {widgetButtons.map((element: WidgetType) => {
          return <WidgetButton element={element} />;
        })}
      </div>
      <div className="w-2/4 flex flex-col justify-start items-start gap-2 p-6 border-[1px]">
        {widgets.length === 0 ? (
          <div className="w-full flex flex-row justify-center items-center border-neutral-300 border-[1px] min-h-36 rounded-md font-semibold text-lg text-neutral-700">
            Add elements from the left side
          </div>
        ) : (
          widgets.map((element) => {
            return <Widget element={element} key={element.id} />;
          })
        )}
      </div>
      <div className="w-1/4 flex flex-col justify-start items-start gap-2 p-6 border-[1px]">
        <div className="w-full flex flex-row justify-center items-center border-neutral-300 border-[1px] min-h-36 rounded-md font-semibold text-lg text-neutral-700">
          <pre>{JSON.stringify(widgets, null, 2)}</pre>
        </div>
      </div>
    </main>
  );
}
