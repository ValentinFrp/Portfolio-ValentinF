import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="relative">
        <div className="main-node p-4 bg-black text-white rounded-full text-center text-2xl font-bold">
          Projects
        </div>
        <div className="project-nodes absolute">
          <div className="project-node absolute p-2 bg-black text-white rounded-full text-center m-2">
            <a
              href="https://github.com/ValentinFrp/Epitech-Corewar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Corewar
            </a>
          </div>
          <div className="project-node absolute p-2 bg-black text-white rounded-full text-center m-2">
            <a
              href="https://github.com/votre-projet2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Robot_Factory
            </a>
          </div>
          <div className="project-node absolute p-2 bg-black text-white rounded-full text-center m-2">
            <a
              href="https://github.com/votre-projet3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              My_RPG
            </a>
          </div>
          {/* ..... */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
