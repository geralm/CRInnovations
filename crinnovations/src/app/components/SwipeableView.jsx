import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const CustomSwipeableViews = ({ children, theme }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {children.map((child, index) => (
        <Box
          key={index}
          style={{
            flex: "0 0 100%",
            transform: `translateX(${-(activeStep - index) * 100}%)`,
            transition: "transform 0.3s ease-in-out",
            boxSizing: "border-box",
          }}
        >
          {Math.abs(activeStep - index) <= 2 ? (
            <Box className="flex justify-center text-justify">
              <Typography variant="body1">{child.props.description}</Typography>
            </Box>
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default CustomSwipeableViews;
