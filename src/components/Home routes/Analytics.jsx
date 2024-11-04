import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import StatCard from "./StatCard";

import { TbUsers } from "react-icons/tb";
import { PiSpeakerSimpleHighBold } from "react-icons/pi";
import { FaBullhorn } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";

const Analytics = () => {
  const statsData = [
    {
      icon: <TbUsers className="text-xl text-[#0fb97d]" />,
      name: "Users",
      number: "140",
      color: "text-[#0fb97d]",
      bgColor: "bg-[#d7f0e6]",
    },
    {
      icon: <FaBullhorn className="text-xl text-[#5792f6]" />,
      name: "Referral Users",
      number: "64",
      color: "text-[#5792f6]",
      bgColor: "bg-[#d7e6fa]",
    },
    {
      icon: <FaBullhorn className="text-xl text-[#0fb97d]" />,
      name: "Today's Organic Users",
      number: "76",
      color: "text-[#0fb97d]",
      bgColor: "bg-[#d7f0e6]",
    },
    {
      icon: <FaHouseUser className="text-xl text-[#5792f6]" />,
      name: "This Week Users",
      number: "679",
      color: "text-[#5792f6]",
      bgColor: "bg-[#d7e6fa]",
    },
    {
      icon: <FaHouseUser className="text-xl text-[#5792f6]" />,
      name: "This Month Users",
      number: "22727",
      color: "text-[#5792f6]",
      bgColor: "bg-[#d7e6fa]",
    },
    {
      icon: <FaHouseUser className="text-xl text-[#5792f6]" />,
      name: "Last Month Users",
      number: "71291",
      color: "text-[#5792f6]",
      bgColor: "bg-[#d7e6fa]",
    },
  ];
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Registrations",
        data: [700, 680, 650, 630, 610, 580, 560],
        borderColor: "#3b82f6",
        backgroundColor: "#cde1f0",
        fill: 1, // Fills the area between this line and the next dataset
      },
      {
        label: "Referrals",
        data: [300, 290, 280, 270, 260, 250, 240],
        borderColor: "#ef4444",
        backgroundColor: "#cdc8e1",
        fill: true, // Fills the area below this line to the bottom of the chart
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smooth line appearance
      },
    },
  };

  return (
    <div className="min-h-screen overflow-auto">
      {/* Main Content */}
      <div className="flex justify-between items-center w-full px-2 pb-10 pt-4 bg-gray-100">
        {/* Left Side Text */}
        <h2 className="text-2xl font-bold text-black">Analytics</h2>
        {/* Right Side Input */}

        <input
          class="input-xl input bg-[#ebebeb] text-[#a3a3a3]"
          placeholder="Select Date Range"
        />
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-start gap-4 pl-2">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon || null}
            name={stat.name}
            number={stat.number}
            color={stat.color}
            bgColor={stat.bgColor}
          />
        ))}
      </div>

      {/* Graph */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Last 7 Days: Registrations vs Referrals
        </h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;
