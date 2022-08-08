import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deletePersonal } from "../features/personalsSlicer";
const PersonalItem = ({ defaultName, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="border border-solid rounded-md col py-4 px-6 bg-slate-100 font-medium text-lg">
        <div className="flex justify-between items-center">
          <h1>{defaultName}</h1>
          <MdDeleteForever
            onClick={() => dispatch(deletePersonal(id))}
            className="hover:cursor-pointer hover:scale-105"
            size={24}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalItem;
