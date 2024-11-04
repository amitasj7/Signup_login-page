import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { HiMenu } from "react-icons/hi";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false); // Close sidebar when a link is clicked
    }
  };

  return (
    <div className="bg-white flex flex-col lg:flex-row">
      {/* Sidebar Toggle Button for Mobile */}
      <button className="lg:hidden p-4 text-black" onClick={toggleSidebar}>
        <HiMenu className="text-2xl" />
      </button>

      <aside
        className={`sidebar lg:block ${isSidebarOpen ? "block" : "hidden"} 
              justify-start h-[100vh] lg:h-auto bg-gray-custom 
              flex flex-col lg:w-1/4 fixed lg:relative z-20`}
        style={{ color: "black", marginTop: "0" }} // Set marginTop to 0
      >
        {/* Sidebar Content */}
        <section
          className="sidebar-title items-center p-4"
          style={{ color: "black" }}
        >
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
          <div className="flex flex-col font-bold text-xl">
            <span>Appzest</span>
          </div>
        </section>
        <section
          className="sidebar-content flex-grow overflow-y-auto"
          style={{ color: "black" }}
        >
          <nav className="menu rounded-md">
            <section className="menu-section px-4" style={{ color: "black" }}>
              <ul className="menu-items">
                <NavLink to="analytics" onClick={handleLinkClick}>
                  {({ isActive }) => (
                    <li
                      className={`menu-item hover:bg-gray ${
                        isActive ? "bg-gray" : ""
                      }`}
                      style={{ color: "black" }}
                    >
                      <SiSimpleanalytics className="text-xl" />
                      <span>Analytics</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="users" onClick={handleLinkClick}>
                  {({ isActive }) => (
                    <li
                      className={`menu-item hover:bg-gray ${
                        isActive ? "bg-gray" : ""
                      }`}
                      style={{ color: "black" }}
                    >
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
                      <span>Users</span>
                    </li>
                  )}
                </NavLink>
                <NavLink to="notifications" onClick={handleLinkClick}>
                  {({ isActive }) => (
                    <li>
                      <input
                        type="checkbox"
                        id="menu-1"
                        className="menu-toggle"
                      />
                      <label
                        className={`menu-item justify-between hover:bg-gray ${
                          isActive ? "bg-gray" : ""
                        }`}
                        htmlFor="menu-1"
                      >
                        <div className="flex gap-2" style={{ color: "black" }}>
                          <RiNotification2Line className="text-xl" />
                          <span>Notifications</span>
                        </div>
                      </label>
                    </li>
                  )}
                </NavLink>
                <NavLink to="transactions" onClick={handleLinkClick}>
                  {({ isActive }) => (
                    <li
                      className={`menu-item hover:bg-gray ${
                        isActive ? "bg-gray" : ""
                      }`}
                      style={{ color: "black" }}
                    >
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
                      <span>Transaction</span>
                    </li>
                  )}
                </NavLink>
              </ul>
            </section>
          </nav>
        </section>
        <section className="sidebar-footer justify-end pt-2 bg-gray-custom text-black font-bold lg:w-full mt-[-30%]">
          <div className="divider my-0"></div>
          <div className="dropdown z-50 flex w-full cursor-pointer hover:bg-gray rounded-lg px-4 py-2">
            <label
              className="whites flex w-full cursor-pointer p-0"
              tabIndex="0"
            >
              <div
                className="flex flex-row gap-4 items-center"
                style={{ color: "black" }}
              >
                <div className="avatar avatar-md">
                  <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
                </div>
                <div className="flex flex-col text-black">
                  <span>Sandra Marx</span>
                  <span className="text-xs font-normal text-black">sandra</span>
                </div>
              </div>
            </label>
            {/* Dropdown Menu */}
            <div className="dropdown-menu dropdown-menu-right-top mt-2 rounded-md shadow-lg bg-gray-custom text-black">
              <a className="dropdown-item text-sm hover:bg-gray px-4 py-2">
                Profile
              </a>
              <a className="dropdown-item text-sm hover:bg-gray px-4 py-2">
                Account settings
              </a>
              <a className="dropdown-item text-sm hover:bg-gray px-4 py-2">
                Change email
              </a>
              <a className="dropdown-item text-sm hover:bg-gray px-4 py-2">
                Subscriptions
              </a>
              <a className="dropdown-item text-sm hover:bg-gray px-4 py-2">
                Change password
              </a>
              <a className="dropdown-item text-sm hover:bg-gray px-4 py-2">
                Refer a friend
              </a>
              <a className="dropdown-item text-sm hover:bg-gray px-4 py-2">
                Settings
              </a>
            </div>
          </div>
        </section>
      </aside>

      <div
        className={`w-full lg:w-3/4 p-4 ${
          isSidebarOpen ? "lg:ml-0  ml-0" : "lg:ml-0"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
