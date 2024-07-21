import React from "react";
import { WidgetType } from "@/data/types/widgetType";
import { useAppDispatch } from "@/lib/hooks";
import { updateData } from "@/lib/features/widgetSlice";

const MultipleChoice = ({ element }: { element: WidgetType }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col justify-start items-start gap-3 w-full p-4 min-h-14">
      <input
        type="text"
        placeholder="enter a header"
        className="bg-transparent  outline-none border-neutral-500"
        value={element.data.header}
        onChange={(e) => {
          dispatch(
            updateData({
              id: element.id,
              data: { ...element.data, header: e.target.value },
            })
          );
        }}
      />

      {element.data.choices.map((choice: string, key: number) => {
        return (
          <div key={key} className="flex items-center gap-2">
            <input type="checkbox" disabled />
            <input
              type="text"
              placeholder="Option"
              value={choice}
              onChange={(e) => {
                const newChoices = element.data.choices.map(
                  (choice: string, index: number) => {
                    if (index === key) {
                      return e.target.value;
                    }
                    return choice;
                  }
                );
                dispatch(
                  updateData({
                    id: element.id,
                    data: { ...element.data, choices: newChoices },
                  })
                );
              }}
            />
            <button
              onClick={() => {
                const newChoices = element.data.choices.filter(
                  (choice: string, index: number) => index !== key
                );
                dispatch(
                  updateData({
                    id: element.id,
                    data: { ...element.data, choices: newChoices },
                  })
                );
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
          dispatch(
            updateData({
              id: element.id,
              data: { ...element.data, choices: [...element.data.choices, ""] },
            })
          );
        }}
      >
        add option
      </button>
    </div>
  );
};

export default MultipleChoice;
