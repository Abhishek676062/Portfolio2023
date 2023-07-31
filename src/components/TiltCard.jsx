import React from "react";
import Tilt from "../../node_modules/react-parallax-tilt";

const TiltCard = ({ icon }) => {
    return (
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.8}
        scale={1.02}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#003864",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={icon} alt="Logo" style={{ width: "70%" }} />
        </div>
      </Tilt>
    );
  };
  
  export default TiltCard;