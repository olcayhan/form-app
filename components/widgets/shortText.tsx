"use client";
import React, { useState } from "react";

const ShortText = () => {
  const [data, setData] = useState<any>({
    header: "",
    subheader: "",
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
      <input type="text" disabled className="border p-2 rounded-md w-64" />
      <input
        type="text"
        placeholder="enter a subheader"
        className="bg-transparent outline-none border-neutral-500 text-[14px]"
        onChange={(e) => setData({ ...data, subheader: e.target.value })}
        value={data.subheader}
      />
    </div>
  );
};

export default ShortText;
