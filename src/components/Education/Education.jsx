import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-debug-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-white mt-4 text-sm font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line for large screens (center) */}
        <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Vertical line for small screens (left side) */}
        <div className="absolute sm:hidden left-6 w-1 bg-white h-full z-0"></div>

        {education.map((edu, index) => {
          const isEven = index % 2 === 0; // 0 index → right side start

          return (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row ${
                isEven ? "sm:flex-row-reverse" : "sm:flex-row"
              } items-center mb-20`}
            >
              {/* Timeline Circle */}
              <div className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 sm:-translate-x-1/2 bg-gray-600 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Card */}
              <div
                className={`w-full sm:w-1/2 mt-20 sm:mt-0 p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                  isEven ? "sm:pr-24" : "sm:pl-24"
                }`}
              >
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-full h-full bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover rounded-full "
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-white">
                      {edu.school}
                    </h4>
                    <p className="text-sm text-white mt-1">{edu.date}</p>
                  </div>
                </div>

                {/* Grade */}
                <p className="mt-4 text-white font-bold">
                  Grade: {edu.grade}
                </p>

                {/* Description */}
                <p className="mt-2 p-3 text-white">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
