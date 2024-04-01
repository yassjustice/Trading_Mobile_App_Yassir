import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const CircularProgressBar = ({ percentage }) => {
  // Calculate the angle for the progress (0 to 100%)
  const angle = (percentage / 100) * 360;
  const radius = 80; // Adjust this based on your circle's radius

  // Calculate the position for the text
  const textX = 90;
  const textY = 100;

  return (
    <View>
      {/* SVG container for the circular progress bar */}
      <Svg width="200" height="200">
        {/* Black background circle */}
        <Circle
          cx="100"
          cy="100"
          r={radius}
          stroke="black"
          strokeWidth="10"
          fill="transparent"
        />
        {/* Green progress circle */}
        <Circle
          cx="100"
          cy="100"
          r={radius}
          stroke="green"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={`360, ${angle}, 360`}
          strokeLinecap="round"
          transform={`rotate(-90, 100, 100)`} // Rotate to start from the top
        />
        {/* Text inside the circle */}
        <SvgText x={textX} y={textY} fontSize="32" textAnchor="middle" fill="#BCB8B8" fontWeight="700">
          {percentage}%
        </SvgText>
        <SvgText x={textX+10} y={textY+30} fontSize="21" textAnchor="middle" fill="#BCB8B8" fontWeight="400">
          Limit
        </SvgText>
      </Svg>
    </View>
  );
};

export default CircularProgressBar;
