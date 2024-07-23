import React from "react";
import { WidgetType } from "@/data/types/widgetType";
import { useAppDispatch } from "@/lib/hooks";
import { MdClose } from "react-icons/md";
import handleUpdate from "@/utils/updateHandler";

const MultipleChoice = ({
  element,
  editable,
}: {
  element: WidgetType;
  editable: boolean;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-start items-start gap-3 w-full p-4 min-h-14">
      <input
        type="text"
        placeholder="enter a header"
        className="bg-transparent  outline-none border-neutral-500 font-semibold"
        value={element.data.header}
        onChange={(e) => {
          handleUpdate(dispatch, element, "header", e.target.value);
        }}
        disabled={!editable}
      />

      {element.data.choices.map((choice: string, key: number) => {
        return (
          <div key={key} className="flex items-center gap-2">
            <input
              id={choice}
              name={element.name}
              type="checkbox"
              disabled={editable}
            />
            {!editable && <label htmlFor={choice}>{choice}</label>}
            {editable && (
              <>
                <input
                  type="text"
                  disabled={!editable}
                  placeholder="Option"
                  value={choice}
                  className="border p-1 rounded-md"
                  onChange={(e) => {
                    const newChoices = element.data.choices.map(
                      (choice: string, index: number) => {
                        if (index === key) {
                          return e.target.value;
                        }
                        return choice;
                      }
                    );
                    handleUpdate(dispatch, element, "choices", newChoices);
                  }}
                />

                <button
                  onClick={() => {
                    const newChoices = element.data.choices.filter(
                      (choice: string, index: number) => index !== key
                    );
                    handleUpdate(dispatch, element, "choices", newChoices);
                  }}
                >
                  <MdClose />
                </button>
              </>
            )}
          </div>
        );
      })}
      {editable && (
        <button
          className="underline text-[12px]"
          onClick={() => {
            handleUpdate(dispatch, element, "choices", [
              ...element.data.choices,
              "",
            ]);
          }}
        >
          add option
        </button>
      )}
    </div>
  );
};

export default MultipleChoice;
