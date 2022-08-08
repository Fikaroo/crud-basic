import React from "react";
import PersonalItem from "./PersonalItem";

const Personals = ({ inputName }) => {
  const personalData = [
    "Fuad",
    "Eli",
    "Esger",
    "Emin",
    "Tamerlan",
    "Nurlan",
    "Hesen",
  ];

  return (
    <div className=" grid grid-cols-3 mt-4 gap-3">
      {personalData.map((personal, idx) => (
        <PersonalItem key={idx} defaultName={personal} />
      ))}
    </div>
  );
};

export default Personals;
