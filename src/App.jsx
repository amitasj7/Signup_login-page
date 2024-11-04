import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";

import Analytics from "./components/Home routes/Analytics";
import Users from "./components/Home routes/Users";
import Notifications from "./components/Home routes/Notifications";

import Transactions from "./components/Home routes/Transactions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/signup" />} />
        <Route path="/home" element={<Home />}>
          {/* Redirect to /home/analytics when /home is accessed */}
          <Route index element={<Navigate to="analytics" />} />

          {/* Nested Routes */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<Users />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
