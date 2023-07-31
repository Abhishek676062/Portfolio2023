import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
import CardImage from '../assets/Mayank.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#14639c]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[ #000000]">Hi, I'm</span> <span className="text-[#708090]">Abhishek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am Data Science and Data Analytics Enthusiast , building innovative AI models is my passion.
          </p>
          <div className="md:hidden mx-auto mt-10 p-6 rounded-lg shadow-lg transform hover:rotate-3 transition-transform">
        <img className="w-58 h-58 object-cover rounded-md" src={CardImage} alt="Card Image" />
      </div>
        </div>
      </div>

      {/* Card for mobile view */}
       <ComputersCanvas />
       <div className="absolute right-0 xs:bottom-10 bottom-32 flex justify-center items-center mr-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      
    </section>
    
  );
};

export default Hero;



