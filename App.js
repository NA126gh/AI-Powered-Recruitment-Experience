import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"; // ✅ Added login page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page (Demo User) */}
        <Route path="/login" element={<Login />} />

        {/* Candidate Flow */}
        <Route path="/builder" element={<Builder />} />

        {/* Recruiter Flow */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;