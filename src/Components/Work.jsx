import React from 'react'
import { motion } from 'framer-motion'
let project1 = "./assets/Project1.png"
import Project from "./Project"
const Work = () => {
  return (
    <>
      <motion.div className='overview'
        id="work"
        initial={{ opacity: 0, y: "-20px", x: '-20px' }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
      >
        <motion.div className="intro text-slate-400 text-2xl "
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          My Work
        </motion.div>
        <motion.div className="title"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          Projects.
        </motion.div>
        <motion.div className="info1 text-slate-400"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies and manage projects effectively.
        </motion.div>
        <motion.div className="cards flex justify-center"
          initial={{ opacity: 0, y: "-20px", x: '-20px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
        >
          <Project className={"project card"} image={project1} delay={0.3} project_name={"Portfolio Site"} overview={"A fully responsive personal portfolio designed and developed to showcase my skills in full-stack web development. This site features a modern dark theme with vibrant UI elements and 2 interactive 3D model to create an engaging user experience."} technologies={"React, Three.js, Framer-motion, Node.js"} />
        </motion.div>
      </motion.div>
    </>
  )
}

export default Work
