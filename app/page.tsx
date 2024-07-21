"use client";

import { useState } from "react";
import ShortText from "@/components/widgets/shortText";
import LongText from "@/components/widgets/longText";
import SingleChoice from "@/components/widgets/singleChoice";
import MultipleChoice from "@/components/widgets/multipleChoice";
import ImageBox from "@/components/widgets/imageBox";
import Widget from "@/components/widget";
import HeaderText from "@/components/widgets/headerText";
import FullNameText from "@/components/widgets/fullnameText";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addWidget } from "@/lib/features/widgetSlice";

export default function Home() {
  const elements = useAppSelector((state) => state.widgetReducer.value);
  const dispatch = useAppDispatch();

  const leftSide = [
    {
      id: 1,
      name: "Short text",
      event: () => {
        dispatch(
          addWidget({
            id: Math.floor(Math.random() * 10000000),
            name: "Short text",
            type: ShortText,
          })
        );
      },
    },
    {
      id: 2,
      name: "Long text",
      event: () => {
        dispatch(
          addWidget({
            id: Math.floor(Math.random() * 10000000),
            name: "Long text",
            type: LongText,
          })
        );
      },
    },
    {
      id: 3,
      name: "Single choice",
      event: () => {
        dispatch(
          addWidget({
            id: Math.floor(Math.random() * 10000000),
            name: "Single choice",
            type: SingleChoice,
          })
        );
      },
    },
    {
      id: 4,
      name: "Multiple choice",
      event: () => {
        dispatch(
          addWidget({
            id: Math.floor(Math.random() * 10000000),
            name: "Multiple choice",
            type: MultipleChoice,
          })
        );
      },
    },
    {
      id: 5,
      name: "Image",
      event: () => {
        dispatch(
          addWidget({
            id: Math.floor(Math.random() * 10000000),
            name: "Image",
            type: ImageBox,
          })
        );
      },
    },
    {
      id: 6,
      name: "Header",
      event: () => {
        dispatch(
          addWidget({
            id: Math.floor(Math.random() * 10000000),
            name: "Header",
            type: HeaderText,
          })
        );
      },
    },
    {
      id: 7,
      name: "Full Name",
      event: () => {
        dispatch(
          addWidget({
            id: Math.floor(Math.random() * 10000000),
            name: "Full Name",
            type: FullNameText,
          })
        );
      },
    },
  ];

  return (
    <main className="flex min-h-screen flex-row items-start justify-center p-24 gap-3 bg-neutral-100">
      <div className="w-1/4 h-full flex flex-col items-start justify-start gap-2 p-6 border-[1px]">
        {leftSide.map((element: any) => {
          return (
            <button
              className="outline-1 hover:bg-neutral-200 active:bg-neutral-300 outline border p-2 rounded-md font-semibold w-full transition-all duration-100"
              onClick={element.event}
            >
              {element.name}
            </button>
          );
        })}
      </div>
      <div className="w-2/4 flex flex-col justify-start items-start gap-2 p-6 border-[1px]">
        {elements.length === 0 && (
          <div className="w-full flex flex-row justify-center items-center border-neutral-300 border-[1px] min-h-36 rounded-md font-semibold text-lg text-neutral-700">
            Add elements from the left side
          </div>
        )}
        {elements.map((element) => {
          return <Widget element={element} key={element.id} />;
        })}
      </div>
    </main>
  );
}
