import React, { useState } from "react";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Footer = () => {
  const [isSplitscreenHovered, setIsSplitscreenHovered] = useState(false);
  const [isPersonHovered, setIsPersonHovered] = useState(false);
  return (
    <div
      className="py-3 fixed bottom-0 left-0 w-full"
      style={{
        backgroundColor: "rgba(246, 247, 250, 1)",
        border: "2px solid rgba(225, 225, 225, 2)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-96">
          <div
            onMouseEnter={() => setIsSplitscreenHovered(true)}
            onMouseLeave={() => setIsSplitscreenHovered(false)}
            style={{
              transform: isSplitscreenHovered ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <SplitscreenIcon style={{ fontSize: "2.5rem", color: "rgba(0, 0, 0, 0.6)" }} />
          </div>
          <div
            onMouseEnter={() => setIsPersonHovered(true)}
            onMouseLeave={() => setIsPersonHovered(false)}
            style={{
              transform: isPersonHovered ? 'scale(1.2)' : 'scale(1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <PersonOutlineOutlinedIcon style={{ fontSize: "2.5rem", color: "rgba(0, 0, 0, 0.6)" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
