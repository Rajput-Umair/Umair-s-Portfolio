import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-white mt-4 text-sm font-semibold max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white mb-4 line-clamp-3 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-500 text-xs font-semibold text-white rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleCloseModal} // Background click
        >
          <div
            className="relative w-full max-w-lg bg-gray-900 rounded-xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()} // Modal click se close na ho
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-purple-500"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-60 object-contain rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-white text-sm text-center">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-500 text-xs font-semibold text-white rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex w-full gap-4 mt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center text-sm font-semibold"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center text-sm font-semibold"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
