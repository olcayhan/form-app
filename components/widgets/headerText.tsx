import React from "react";

const HeaderText = () => {
  return (
    <div className="flex flex-col justify-start items-start p-4 gap-3">
      <input
        type="text"
        placeholder="Header"
        className="bg-transparent outline-none text-3xl font-semibold"
      />
      <input
        type="text"
        placeholder="Subheader"
        className="bg-transparent outline-none text-md"
      />
    </div>
  );
};

export default HeaderText;
