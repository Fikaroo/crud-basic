import React from "react";
import { useState } from "react";
import Personals from "./components/Personals";
import { BiEdit } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

const App = () => {
  const [isAddPersonal, setAddPersonal] = useState(false);
  const [personalName, setPersonalName] = useState("");

  const handleAddPersonal = () => {
    setAddPersonal(!isAddPersonal);
  };

  const addPersonal = (e) => {
    e.preventDefault();
    setAddPersonal(false);
    console.log(personalName);
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
          <div className="border border-solid rounded-md px-6 py-4">
            <form className="flex flex-col gap-3" onSubmit={addPersonal}>
              <label>Personal Name:</label>
              <input
                onChange={handleNameValue}
                value={personalName}
                type="text"
                className="max-w-md rounded-md border border-solid py-2 px-2 flex focus:outline-0"
              />

              <button
                type="submit"
                className=" justify-center items-center gap-3 flex self-end bg-indigo-500 hover:bg-indigo-700 text-white px-6 py-2 font-semibold rounded-md"
              >
                <IoMdAdd /> Add
              </button>
            </form>
          </div>
        )}
      </div>
      <Personals inputName={personalName} />
    </div>
  );
};

export default App;
