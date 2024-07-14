"use client";

import { useState } from "react";
import ShortText from "@/components/shortText";
export default function Home() {
  const [elements, setElements] = useState<any>([]);

  const leftSide = [
    {
      id: 1,
      name: "Short text",
      text: "Short text",
      event: () => {
        setElements([
          ...elements,
          {
            id: elements.length + 1,
            name: "Short text",
            type: ShortText,
            deleteEvent: (e: any) => {
              console.log(e.target);
            },
          },
        ]);
      },
    },
  ];

  return (
    <main className="flex min-h-screen flex-row items-start justify-center p-24 gap-3">
      <div className="w-1/4 bg-red-100 h-full flex flex-col items-start justify-start gap-1 p-2">
        {leftSide.map((element: any) => {
          return (
            <button
              className="bg-blue-300 border p-2 rounded-md font-semibold w-full"
              onClick={element.event}
            >
              {element.text}
            </button>
          );
        })}
      </div>
      <div className="w-2/4 bg-red-100 h-full p-6 flex flex-col justify-center items-start gap-2">
        {elements.map((element: any) => {
          const Element = element.type;
          return <Element deleteElement={element.deleteEvent} />;
        })}
      </div>
    </main>
  );
}
