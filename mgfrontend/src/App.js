import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import RecipientDashboard from "./Components/RecipientDashboard";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="aboutus" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<RecipientDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
