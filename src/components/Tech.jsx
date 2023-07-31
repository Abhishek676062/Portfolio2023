
import { BallCanvas } from "./canvas";
import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tilt from "../../node_modules/react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

// const LogoCard = ({ imgUrl }) => {
//   return (
//     <div
//       style={{
//         width: "200px",
//         height: "200px",
//         backgroundColor: "#ffffff",
//         perspective: "1000px",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           transformStyle: "preserve-3d",
//           transform: "rotateX(30deg) rotateY(30deg)",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             backfaceVisibility: "hidden",
//             transform: "translateZ(100px)",
//           }}
//         >
//           <img src={imgUrl} alt="Logo" style={{ width: "100%", height: "100%" }} />
//         </div>
//       </div>
//     </div>
//   );
// };



const LogoCard = ({ imgUrl }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="w-[150px] h-[150px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        style={{ margin: "-25px" }}
      >
        <div className="bg-[#003864] rounded-[20px] p-8 w-22 h-22 flex justify-center items-center h-full">
          <img src={imgUrl} alt="Logo" className="w-20 h-20 object-contain" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies :
        </h2>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {isMobile ? (
            <LogoCard imgUrl={technology.icon} />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

