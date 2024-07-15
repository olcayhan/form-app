"use client";

import { useState } from "react";
import ShortText from "@/components/shortText";
import LongText from "@/components/longText";
import SingleChoice from "@/components/singleChoice";
export default function Home() {
  const [elements, setElements] = useState<any>([]);

  const leftSide = [
    {
      id: 1,
      name: "Short text",
      event: () => {
        setElements((prevElements: any) => [
          ...prevElements,
          {
            id: Math.floor(Math.random() * 10000000),
            name: "Short text",
            type: ShortText,
          },
        ]);
      },
    },
    {
      id: 2,
      name: "Long text",
      event: () => {
        setElements((prevElements: any) => [
          ...prevElements,
          {
            id: Math.floor(Math.random() * 10000000),
            name: "Long text",
            type: LongText,
          },
        ]);
      },
    },
    {
      id: 3,
      name: "Single choice",
      event: () => {
        setElements((prevElements: any) => [
          ...prevElements,
          {
            id: Math.floor(Math.random() * 10000000),
            name: "Single choice",
            type: SingleChoice,
          },
        ]);
      },
    },
  ];

  return (
    <main className="flex min-h-screen flex-row items-start justify-center p-24 gap-3">
      <div className="w-1/4 h-full flex flex-col items-start justify-start gap-1 p-6">
        {leftSide.map((element: any) => {
          return (
            <button
              className="bg-blue-300 border p-2 rounded-md font-semibold w-full"
              onClick={element.event}
            >
              {element.name}
            </button>
          );
        })}
      </div>
      <div className="w-2/4 h-auto flex flex-col justify-start items-start gap-2 p-6">
        {elements.map((element: any) => {
          const Element = element.type;
          return (
            <button
              className="relative w-full focus:border-blue-500 border-[1px] rounded-md"
              key={element.id}
            >
              <button
                onClick={() => {
                  let newElements = elements.filter(
                    (el: any) => el.id !== element.id
                  );
                  setElements(newElements);
                }}
                className="absolute top-0 right-0 bg-red-500"
              >
                Delete
              </button>
              <Element />
            </button>
          );
        })}
      </div>
    </main>
  );
}
