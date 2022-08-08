import React from "react";
import { useSelector } from "react-redux";
import PersonalItem from "./PersonalItem";

const Personals = () => {
  const personalData = useSelector((state) => state.personals.personalData);

  return (
    <div className=" grid grid-cols-3 mt-4 gap-3">
      {personalData.map(({ id, name }) => (
        <PersonalItem key={id} id={id} defaultName={name} />
      ))}
    </div>
  );
};

export default Personals;
