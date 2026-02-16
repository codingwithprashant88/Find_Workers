import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/home" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
      ) {
        navigate("/", { replace: false });
      }
    }
  }, [location.pathname]);

  return null;
}

export default RefreshHandler;
