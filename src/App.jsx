import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/signup" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
