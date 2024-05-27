import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container flex flex-col items-center justify-center h-screen text-white text-center relative">
      <div className="z-10">
        <h1 className="text-6xl font-bold mb-4">Portfolio</h1>
        <h1 className="text-6xl font-bold mb-4">PERSONNAL</h1>
        <h1 className="text-6xl font-bold">DEV</h1>
      </div>
      <div className="navigation-links flex space-x-8 text-xl mt-8 z-10"></div>
    </div>
  );
}

export default Home;
