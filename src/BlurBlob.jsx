import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
        zIndex: 0, // behind content
      }}
    >
      <div
        className="w-full h-full rounded-full blur-[120px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(147,51,234,0.6), rgba(236,72,153,0.6))",
        }}
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
