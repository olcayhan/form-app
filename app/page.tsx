"use client";

import { useState } from "react";
import ShortText from "@/components/shortText";
import LongText from "@/components/longText";
import SingleChoice from "@/components/singleChoice";
import MultipleChoice from "@/components/multipleChoice";
import ImageBox from "@/components/imageBox";
import headerText from "@/components/headerText";
import fullnameText from "@/components/fullnameText";
import { MdDelete } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type Element = {
  id: number;
  name: string;
  type: any;
};

export default function Home() {
  const [elements, setElements] = useState<Element[]>([]);

  const leftSide = [
    {
      id: 1,
      name: "Short text",
      event: () => {
        setElements((prevElements: Element[]) => [
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
        setElements((prevElements: Element[]) => [
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
        setElements((prevElements: Element[]) => [
          ...prevElements,
          {
            id: Math.floor(Math.random() * 10000000),
            name: "Single choice",
            type: SingleChoice,
          },
        ]);
      },
    },
    {
      id: 4,
      name: "Multiple choice",
      event: () => {
        setElements((prevElements: Element[]) => [
          ...prevElements,
          {
            id: Math.floor(Math.random() * 10000000),
            name: "Multiple choice",
            type: MultipleChoice,
          },
        ]);
      },
    },
    {
      id: 5,
      name: "Image",
      event: () => {
        setElements((prevElements: Element[]) => [
          ...prevElements,
          {
            id: Math.floor(Math.random() * 10000000),
            name: "Image",
            type: ImageBox,
          },
        ]);
      },
    },
    {
      id: 6,
      name: "Header",
      event: () => {
        setElements((prevElements: Element[]) => [
          ...prevElements,
          {
            id: Math.floor(Math.random() * 10000000),
            name: "Header",
            type: headerText,
          },
        ]);
      },
    },
    {
      id: 7,
      name: "Full Name",
      event: () => {
        setElements((prevElements: Element[]) => [
          ...prevElements,
          {
            id: Math.floor(Math.random() * 10000000),
            name: "Full Name",
            type: fullnameText,
          },
        ]);
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
        {elements.map((element: any) => {
          const Element = element.type;
          return (
            <button
              className="relative w-full focus:border-blue-500 group border-[1px] rounded-md"
              key={element.id}
            >
              <div className="absolute h-full my-auto -right-12 hidden flex-col justify-center items-center gap-1 group-focus-within:flex ">
                <button
                  className="text-[32px]"
                  onClick={() => {
                    let index = elements.indexOf(element);
                    index > 0
                      ? ([elements[index], elements[index - 1]] = [
                          elements[index - 1],
                          elements[index],
                        ])
                      : null;
                    let newElements = [...elements];
                    setElements(newElements);
                  }}
                >
                  <BiChevronUp />
                </button>
                <button
                  className="text-[32px]"
                  onClick={() => {
                    let index = elements.indexOf(element);
                    index < elements.length - 1
                      ? ([elements[index], elements[index + 1]] = [
                          elements[index + 1],
                          elements[index],
                        ])
                      : null;
                    let newElements = [...elements];
                    setElements(newElements);
                  }}
                >
                  <BiChevronDown />
                </button>
                <button
                  onClick={() => {
                    let newElements = elements.filter(
                      (el: any) => el.id !== element.id
                    );
                    setElements(newElements);
                  }}
                  className=" bg-red-500 w-10 h-10 rounded-full text-neutral-50 hover:bg-red-400 active:bg-red-600 flex justify-center items-center"
                >
                  <MdDelete fontSize={20} />
                </button>
              </div>
              <Element />
            </button>
          );
        })}
      </div>
    </main>
  );
}
