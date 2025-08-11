import React from "react";
import { experiences } from "../../constants"; // Your experience data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 bg-debug-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-white mt-4 text-sm font-semibold">
         A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line for large screens (center) */}
        <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Vertical Line for small screens (left side) */}
        <div className="absolute sm:hidden  left-6 w-1 bg-white h-full z-0"></div>

        {/* Experience Items */}
        {experiences.map((experience, index) => {
          const isEven = !index % 2 === 0;

          return (
            <div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row ${
                isEven ? "sm:flex-row" : "sm:flex-row-reverse"
              } items-center mb-20`}
            >
              {/* Timeline Circle */}
              <div className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 sm:-translate-x-1/2 bg-gray-600 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
     
                <img
                
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Card */}
              <div
                className={`w-full  sm:w-1/2 mt-20  sm:mt-0 p-6  sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                  isEven ? "sm:pl-24" : "sm:pr-24 "
                }`}
              >
                {/* Header with Logo and Text */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    {console.log(experience.img, )}
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-white">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-white mt-1">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-1 p-3 text-white">{experience.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-white px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
