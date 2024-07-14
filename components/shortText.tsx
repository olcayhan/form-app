"use client";
import React from "react";

const ShortText = ({ deleteElement }: any) => {
  return (
    <div className="relative flex flex-col justify-start items-start gap-3 w-full p-4 min-h-14 border-[1px] border-blue-500 rounded-md">
      <button onClick={deleteElement} className="absoulte top-0 right-0">
        Delete
      </button>
      <input
        type="text"
        placeholder="enter a header"
        className="bg-transparent  outline-none border-neutral-500"
      />
      <input type="text" disabled className="border p-2 rounded-md w-64" />
      <input
        type="text"
        placeholder="enter a subheader"
        className="bg-transparent outline-none border-neutral-500 text-[14px]"
      />
    </div>
  );
};

export default ShortText;
