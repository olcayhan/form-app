"use client";
import ShortText from "@/components/widgets/shortText";
import LongText from "@/components/widgets/longText";
import SingleChoice from "@/components/widgets/singleChoice";
import MultipleChoice from "@/components/widgets/multipleChoice";
import ImageBox from "@/components/widgets/imageBox";
import HeaderText from "@/components/widgets/headerText";
import FullNameText from "@/components/widgets/fullnameText";
import { useAppSelector } from "@/lib/hooks";
import { WidgetType } from "@/data/types/widgetType";
import WidgetButton from "@/components/custom/WidgetButton";
import Widget from "@/components/Widget";

export default function Home() {
  const widgets = useAppSelector((state) => state.widgetReducer.value);
  const widgetButtons: WidgetType[] = [
    {
      id: 1,
      name: "Short Text",
      type: ShortText,
    },
    {
      id: 2,
      name: "Long Text",
      type: LongText,
    },
    {
      id: 3,
      name: "Single Choice",
      type: SingleChoice,
    },
    {
      id: 4,
      name: "Multiple Choice",
      type: MultipleChoice,
    },
    {
      id: 5,
      name: "Image",
      type: ImageBox,
    },
    {
      id: 6,
      name: "Header",
      type: HeaderText,
    },
    {
      id: 7,
      name: "Full Name",
      type: FullNameText,
    },
  ];

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
    </main>
  );
}
