import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AllAboutfile/About";
import Busines from "./components/AllAboutfile/Busines";
import Workers from "./components/AllAboutfile/Workers";
import Labour from "./components/AllAboutfile/SubMenu/Labour";
import Signup from "./components/Users/Signup";
import Login from "./components/Users/Login";
import { useState } from "react";
import RefreshHandler from "./components/RefreshHandler";
import Mason from "./components/AllAboutfile/SubMenu/Mason";
import Painter from "./components/AllAboutfile/SubMenu/Painter";
import Plumber from "./components/AllAboutfile/SubMenu/Plumber";
import Carpenter from "./components/AllAboutfile/SubMenu/Carpenter";
import Electrician from "./components/AllAboutfile/SubMenu/Electrician";
import Foremen from "./components/AllAboutfile/SubMenu/Foremen";
import Supervisor from "./components/AllAboutfile/SubMenu/Supervisor";
import Engineer from "./components/AllAboutfile/SubMenu/Engineer";
import Welder from "./components/AllAboutfile/SubMenu/Welder";
import ItI from "./components/AllAboutfile/SubMenu/ItI";
import FindJob from "./components/Find-jobs/FindJob";
import Project from "./components/AllAboutfile/Project";
import ClickBtn from "./components/AllAboutfile/ClickBtn";
import Contact from "./components/AllAboutfile/Contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");
    return token ? element : <Navigate to="/login" />;
  };

  const NotFound = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl">Oops! That page can’t be found.</p>
      </div>
    );
  };
  
  return (
    <>
      <Router>
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/about" element={<PrivateRoute element={<About />} />} />
          <Route
            path="/business"
            element={<PrivateRoute element={<Busines />} />}
          />
          <Route
            path="/worker"
            element={<PrivateRoute element={<Workers />} />}
          />
          <Route
            path="/labour"
            element={<PrivateRoute element={<Labour />} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mason" element={<PrivateRoute element={<Mason />} />} />
          <Route
            path="/painter"
            element={<PrivateRoute element={<Painter />} />}
          />
          <Route
            path="/plumber"
            element={<PrivateRoute element={<Plumber />} />}
          />
          <Route
            path="/carpenter"
            element={<PrivateRoute element={<Carpenter />} />}
          />
          <Route
            path="/electrician"
            element={<PrivateRoute element={<Electrician />} />}
          />
          <Route
            path="/foremen"
            element={<PrivateRoute element={<Foremen />} />}
          />
          <Route
            path="/supervisor"
            element={<PrivateRoute element={<Supervisor />} />}
          />
          <Route
            path="/engineer"
            element={<PrivateRoute element={<Engineer />} />}
          />
          <Route
            path="/welder"
            element={<PrivateRoute element={<Welder />} />}
          />
          <Route
            path="/iti-technician"
            element={<PrivateRoute element={<ItI />} />}
          />
          <Route
            path="/jobs"
            element={<PrivateRoute element={<FindJob />} />}
          />
          <Route
            path="/project"
            element={<PrivateRoute element={<Project />} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/contact"
            element={<PrivateRoute element={< ClickBtn/>} />}
          />
          <Route
            path="/contact-us"
            element={<PrivateRoute element={< Contact/>} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
