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

const Home = () => {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Registrations",
        data: [700, 680, 650, 630, 610, 580, 560],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
      },
      {
        label: "Referrals",
        data: [300, 290, 280, 270, 260, 250, 240],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        fill: true,
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
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-row">
      {/* Sidebar Navbar */}
      {/* <nav className="bg-white shadow w-1/4 p-6 flex flex-col items-start">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Appzest</h1>
        <div className="space-y-4 flex flex-col">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Analytics
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Users
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Notifications
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Transactions
          </a>
        </div>
      </nav> */}

      <aside className="sidebar justify-start bg-white text-black">
        <section className="sidebar-title items-center p-4">
          <svg
            fill="none"
            height="42"
            viewBox="0 0 32 32"
            width="42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="100%" rx="16" width="100%"></rect>
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
          <div className="flex flex-col">
            <span>Appzest</span>
          </div>
        </section>
        <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
          <nav className="menu rounded-md">
            <section className="menu-section px-4">
              <ul className="menu-items">
                <li className="menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Analytics</span>
                </li>

                <li className="menu-item menu-active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>Teams</span>
                </li>
                <li className="menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span>Billing</span>
                </li>
                <li>
                  <input type="checkbox" id="menu-1" className="menu-toggle" />
                  <label className="menu-item justify-between" htmlFor="menu-1">
                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Account</span>
                    </div>

                    <span className="menu-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </label>

                  <div className="menu-item-collapse">
                    <div className="min-h-0">
                      <label className="menu-item-disabled menu-item ml-6">
                        Accounts
                      </label>
                      <label className="menu-item ml-6">Billing</label>
                      <label className="menu-item ml-6">Security</label>
                      <label className="menu-item ml-6">Notifications</label>
                      <label className="menu-item ml-6">Integrations</label>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </nav>
        </section>
        <section className="sidebar-footer h-full justify-end bg-gray-2 pt-2">
          <div className="divider my-0"></div>
          <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
            <label
              className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
              tabIndex="0"
            >
              <div className="flex flex-row gap-4 p-4">
                <div className="avatar avatar-md">
                  <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                </div>

                <div className="flex flex-col">
                  <span>Sandra Marx</span>
                  <span className="text-xs font-normal text-content2">
                    sandra
                  </span>
                </div>
              </div>
            </label>
            <div className="dropdown-menu dropdown-menu-right-top ml-2">
              <a className="dropdown-item text-sm">Profile</a>
              <a tabIndex="-1" className="dropdown-item text-sm">
                Account settings
              </a>
              <a tabIndex="-1" className="dropdown-item text-sm">
                Change email
              </a>
              <a tabIndex="-1" className="dropdown-item text-sm">
                Subscriptions
              </a>
              <a tabIndex="-1" className="dropdown-item text-sm">
                Change password
              </a>
              <a tabIndex="-1" className="dropdown-item text-sm">
                Refer a friend
              </a>
              <a tabIndex="-1" className="dropdown-item text-sm">
                Settings
              </a>
            </div>
          </div>
        </section>
      </aside>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {/* analytics and date range */}
        <div className="flex justify-between items-center w-full p-4 bg-gray-100">
          {/* Left Side Text */}
          <h2 className="text-2xl font-bold text-black">Analytics</h2>

          {/* Right Side Input */}
          <input className="input-ghost-success input" placeholder="Success" />
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-600">Users</h2>
            <p className="text-2xl font-bold text-green-600">140</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-600">Referral Users</h2>
            <p className="text-2xl font-bold text-blue-600">64</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-600">Today's Organic Users</h2>
            <p className="text-2xl font-bold text-green-600">76</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-600">This Week Users</h2>
            <p className="text-2xl font-bold text-blue-600">679</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-600">This Month Users</h2>
            <p className="text-2xl font-bold text-blue-600">22727</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-600">Last Month Users</h2>
            <p className="text-2xl font-bold text-blue-600">71291</p>
          </div>
        </div>

        {/* Graph */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Last 7 Days: Registrations vs Referrals
          </h2>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Home;
