import React from "react";

const StatCard = ({ icon, name, number, color, bgColor }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg relative flex flex-col justify-between w-[30%]">
      <div className="flex items-center">
        <div className={`rounded-lg mr-4 p-1.5 ${bgColor}`}>
          {icon && <div>{icon}</div>}
        </div>

        <h2 className="text-[1rem] font-semibold text-[#6b727f]">{name}</h2>
      </div>
      <p className={`text-2xl font-bold ${color} self-end`}>{number}</p>
    </div>
  );
};

export default StatCard;
