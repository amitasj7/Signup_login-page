import React from "react";

const StatCard = ({ icon, name, number, color, bgColor }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg relative flex flex-col justify-between w-full sm:w-[48%] lg:w-[30%]">
      <div className="flex items-center mb-2">
        <div className={`rounded-lg mr-4 p-2 ${bgColor}`}>
          {icon && <div>{icon}</div>}
        </div>
        <h2 className="text-base sm:text-lg font-semibold text-[#6b727f]">{name}</h2>
      </div>
      <p className={`text-xl sm:text-2xl font-bold ${color} mt-2 sm:mt-0 text-right`}>{number}</p>
    </div>
  );
};

export default StatCard;
