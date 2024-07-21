"use client";
import React, { useState } from "react";

const SingleChoice = () => {
  const [data, setData] = useState<any>({
    header: "",
    choices: ["", "", ""],
  });
  return (
    <div className="flex flex-col justify-start items-start gap-3 w-full p-4 min-h-14">
      <input
        type="text"
        placeholder="enter a header"
        className="bg-transparent  outline-none border-neutral-500"
        onChange={(e) => setData({ ...data, header: e.target.value })}
        value={data.header}
      />

      {data.choices.map((choice: any) => {
        return (
          <div key={choice.id} className="flex items-center gap-2">
            <input type="radio" disabled />
            <input
              type="text"
              placeholder="Option"
              value={choice.text}
              onChange={(e) => {
                let newChoices = [...data.choices];
                newChoices = newChoices.map((c: any) => {
                  if (c.id === choice.id) {
                    return { ...c, text: e.target.value };
                  }
                  return c;
                });
                setData({ ...data, choices: newChoices });
              }}
            />
            <button
              onClick={() => {
                let newChoices = [...data.choices];
                newChoices = newChoices.filter((c: any) => c.id !== choice.id);
                setData({ ...data, choices: newChoices });
              }}
            >
              x
            </button>
          </div>
        );
      })}
      <button
        className="underline text-[12px]"
        onClick={() => {
          setData({
            ...data,
            choices: [
              ...data.choices,
              { id: Math.floor(Math.random() * 100), text: "" },
            ],
          });
        }}
      >
        add option
      </button>
    </div>
  );
};

export default SingleChoice;
