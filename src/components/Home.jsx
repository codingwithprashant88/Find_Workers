import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import TopCard from '../components/TopCard'
import TextBox from "../components/TextBox";
import Info from "../components/Information/Info";


function Home() {
  return (
    <div className="relative w-full min-h-full ">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlZfT4LFT70z8a7yvF1GGuENyBKcrlS1C-g&s"
          alt="construction worker background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      </div>

      <TopCard />
      <TextBox />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-full">
        <Header />
        <Outlet />
        <Info />
      </div>
    </div>
  );
}

export default Home;
