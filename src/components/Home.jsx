import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";

const Home = () => {
  return (
    <div className="bg-gray-100 flex">
      <aside
        className="sidebar justify-start h-[140vh] bg-gray-custom flex flex-col"
        style={{ color: "black" }}
      >
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
          <nav className="menu rounded-md ">
            <section className="menu-section px-4 " style={{ color: "black" }}>
              <ul className="menu-items ">
                <NavLink to="analytics">
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

                <NavLink to="users">
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

                <NavLink to="notifications">
                  {({ isActive }) => (
                    <li className="">
                      <input
                        type="checkbox"
                        id="menu-1"
                        className="menu-toggle "
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

                <NavLink to="transactions">
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
        <section className="sidebar-footer justify-end pt-2 bg-white text-black font-bold ">
          <div className="divider my-0"></div>
          <div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray rounded-lg">
            <label
              className="whites mx-2 flex w-full cursor-pointer p-0"
              tabIndex="0"
            >
              <div
                className="flex flex-row gap-4 p-4 "
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

      <div className="w-3/4 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
