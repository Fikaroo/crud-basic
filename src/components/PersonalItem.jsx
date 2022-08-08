import React from "react";
import { MdDeleteForever } from "react-icons/md";
const PersonalItem = ({ defaultName }) => {
  return (
    <div>
      <div className="border border-solid rounded-md col py-4 px-6 bg-slate-100 font-medium text-lg">
        <div className="flex justify-between items-center">
          <h1>{defaultName}</h1>
          <MdDeleteForever size={24} />
        </div>
      </div>
    </div>
  );
};

export default PersonalItem;
