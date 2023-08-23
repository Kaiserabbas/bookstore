// ProgressCircle.js
import React from 'react';
import PropTypes from 'prop-types';

const ProgressCircle = ({ progress }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <svg width="60" height="60">
      <circle
        cx="30"
        cy="30"
        r={radius}
        stroke="#ccc"
        strokeWidth="5"
        fill="none"
      />
      <circle
        cx="30"
        cy="30"
        r={radius}
        stroke="#3498db"
        strokeWidth="5"
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90, 30, 30)"
      />
    </svg>
  );
};

ProgressCircle.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressCircle;
