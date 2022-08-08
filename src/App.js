import React from "react";
import { useState } from "react";
import Personals from "./components/Personals";
import { BiEdit, BiLockOpenAlt, BiLockAlt } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addPersonal } from "./features/personalsSlicer";

const App = () => {
  const [isAddPersonal, setAddPersonal] = useState(false);
  const [isAutoClose, setAutoClose] = useState(false);
  const [personalName, setPersonalName] = useState("");
  const dispatch = useDispatch();
  const handleAddPersonal = () => {
    setAddPersonal(!isAddPersonal);
  };

  const handleSubmit = (e, isAutoClose) => {
    e.preventDefault();
    isAutoClose ? setAddPersonal(true) : setAddPersonal(false);
    setPersonalName("");
    dispatch(addPersonal(personalName));
  };

  const handleNameValue = (e) => {
    setPersonalName(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-3xl font-semibold text-center mb-4">
          User Manager
        </h1>
        <div className=" border-gray-400 border border-solid w-full"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="pt-5 flex justify-end">
          <button
            onClick={handleAddPersonal}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-700 text-white px-3 py-2 font-semibold rounded-md"
          >
            <BiEdit size={20} /> Add Personal
          </button>
        </div>
        {isAddPersonal && (
          <div className="border border-solid rounded-md relative px-6 py-4 ">
            {isAutoClose ? (
              <BiLockAlt
                onClick={() => setAutoClose(false)}
                size={24}
                className="absolute right-6 top-2 hover:cursor-pointer"
              />
            ) : (
              <BiLockOpenAlt
                onClick={() => setAutoClose(true)}
                size={24}
                className="absolute right-6 top-2 hover:cursor-pointer"
              />
            )}
            <form
              className="flex flex-col gap-3 pt-3"
              onSubmit={(e) => handleSubmit(e, isAutoClose)}
            >
              <label>Personal Name:</label>
              <div className="flex justify-between ">
                <input
                  onChange={handleNameValue}
                  value={personalName}
                  type="text"
                  className="w-1/4 min-w-max rounded-md border border-solid py-2 px-2 flex focus:outline-0"
                />

                <button
                  type="submit"
                  className=" w-28 justify-center items-center gap-3 flex self-end bg-indigo-500 hover:bg-indigo-700 text-white px-6 py-2 font-semibold rounded-md"
                >
                  <IoMdAdd /> Add
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Personals />
    </div>
  );
};

export default App;
