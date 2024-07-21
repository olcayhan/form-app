import React from "react";

const FullNameText = () => {
  return (
    <div className="flex flex-col justify-start items-start p-4 gap-3">
      <input
        type="text"
        className="bg-transparent outline-none text-lg"
        placeholder="Type a Question"
        value="Name"
      />
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col justify-center items-start gap-3 w-[45%]">
          <input
            type="text"
            className="w-full p-2 rounded-md bg-transparent border-[1px]"
          />
          <input
            type="text"
            className="bg-transparent outline-none text-sm"
            value="First Name"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-[45%]">
          <input
            type="text"
            className="w-full p-2 rounded-md bg-transparent border-[1px]"
          />
          <input
            type="text"
            className="bg-transparent outline-none text-sm"
            value="Last Name"
          />
        </div>
      </div>
    </div>
  );
};

export default FullNameText;
