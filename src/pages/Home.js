import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import '../styles/Home.scss';

function Home() {
    const [isHovered1, setHovered1] = useState(false);
    const [isHovered2, setHovered2] = useState(false);
    const [isHovered3, setHovered3] = useState(false);


    return (
      <div id="Home">
        <div id='project-1' className='project-container'>
            <motion.div className='polaroid-container' initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1, scale: isHovered1 ? 1.075 : 1 }} transition={{ y: { type: "spring", stiffness: 200, duration: 1 }, scale: { duration: 0.35 }, }}>
                <img src='./img/projects/habi-polaroid.png' alt='habi hero project' />
            </motion.div>
            <motion.div className='description-container' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ y: { type: "spring", stiffness: 200 }, default: { duration: 1 }, }}>
                <div className='description'>
                    <h1>habi hero '20</h1>
                    <p>research <span style={{color: '#009cd2'}}>&nbsp;•&nbsp;</span> design <span style={{color: '#ff8b00'}}>&nbsp;•&nbsp;</span> develop</p>
                </div>
                <NavLink 
                    id='first-project' 
                    to="/projects/habihero" 
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}
                >
                    <motion.img 
                        src='./img/projects/green-arrow.png' 
                        alt='arrow button' 
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 1 },
                        }}
                    />
                </NavLink>
            </motion.div>
        </div>
        <div id='project-2' className='project-container'>
            <motion.div className='polaroid-container' initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1, scale: isHovered2 ? 1.075 : 1 }} transition={{ y: { delay: 0.35, type: "spring", stiffness: 200, duration: 1 }, scale: { duration: 0.35 }, }}>
                <img src='./img/projects/fresh-polaroid.png' alt='amazon fresh project' />
            </motion.div>
            <motion.div className='description-container' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35, y: { type: "spring", stiffness: 200 }, default: { duration: 1 }, }}>
                <div className='description'>
                    <h1>amazon '20</h1>
                    <p>research <span style={{color: '#bfca00'}}>&nbsp;•&nbsp;</span> design <span style={{color: '#f44366'}}>&nbsp;•&nbsp;</span> test</p>
                </div>
                <NavLink 
                    id='second-project' 
                    to="/projects/fresh" 
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                >
                    <motion.img 
                        src='./img/projects/orange-arrow.png' 
                        alt='arrow button' 
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 1 },
                        }}
                    />
                </NavLink>
            </motion.div>
        </div>
        <div id='project-3' className='project-container'>
            <motion.div className='polaroid-container' initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1, scale: isHovered3 ? 1.075 : 1 }} transition={{ y: { delay: 0.65, type: "spring", stiffness: 200, duration: 1 }, scale: { duration: 0.35 }, }}>
                <img src='./img/projects/splash-polaroid.png' alt='splash project' />
            </motion.div>
            <motion.div className='description-container' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.65, y: { type: "spring", stiffness: 200 }, default: { duration: 1 }, }}>
                <div className='description'>
                    <h1>splash '19</h1>
                    <p>research <span style={{color: '#ff4c00'}}>&nbsp;•&nbsp;</span> design <span style={{color: '#9450dc'}}>&nbsp;•&nbsp;</span> present</p>
                </div>
                <NavLink 
                    id='second-project' 
                    to="/projects/splash" 
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}
                >
                    <motion.img 
                        src='./img/projects/pink-arrow.png' 
                        alt='arrow button' 
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 1 },
                        }}
                    />
                </NavLink>
            </motion.div>
        </div>
      </div>
    );
  }
  
  export default Home;
  