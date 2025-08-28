import { motion } from "framer-motion"
import Card from "./Card"
let image1 = "./assets/web.png"
let image2 = "./assets/mobile.png"
let image3 = "./assets/backend.png"
let image4 = "./assets/creator.png"
let skill1 = "./tech/skill1.png"
let skill2 = "./tech/skill2.png"
let skill3 = "./tech/skill3.png"
let skill4 = "./tech/skill4.png"
let skill5 = "./tech/skill5.png"
let skill6 = "./tech/skill6.png"
let skill7 = "./tech/skill7.png"
let skill8 = "./tech/skill8.png"
let skill9 = "./tech/skill9.png"
let skill10 = "./tech/skill10.png"
let skill11 = "./tech/skill11.svg"
let skill12 = "./tech/skill12.png"

const About = () => {
  return (
    <>
      <motion.div className="overview"
        id="about"
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
          Introduction
        </motion.div>
        <motion.div className="title"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          Overview.
        </motion.div>
        <motion.div className="info1 text-slate-400"
          initial={{ opacity: 0, y: "-5px", x: '-5px' }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.4 }}
        >
          I'm a skilled software developer with experience in Javascript and expertise in frameworks like React, Nodejs, and Nextjs, I'm a quick lernerr and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
          <div className="text-white">
            Let's work together to bring your ideas to life.
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="cards flex justify-center"
        initial={{ opacity: 0, y: "-20px", x: '-20px' }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
      >
        <Card className={"card"} image={image1} topic={ "Full Stack Developer" } delay={ 0.5 } />
        <Card className={"card"} image={image2} topic={ "Frontend Developer" } delay={ 0.75 } />
        <Card className={"card"} image={image3} topic={ "Backend Developer" } delay={ 1 } />
        <Card className={"card"} image={image4} topic={ "Mern Developer" } delay={ 1.25 } />
      </motion.div>
      <motion.div className="cards skills flex justify-center"
        initial={{ opacity: 0, y: "-20px", x: '-20px' }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
      >
        <Card className={"card skill"} image={skill1} delay={ 0.5 } />
        <Card className={"card skill"} image={skill2} delay={ 0.5 } />
        <Card className={"card skill"} image={skill3} delay={ 0.5 } />
        <Card className={"card skill"} image={skill4} delay={ 0.75 } />
        <Card className={"card skill"} image={skill5} delay={ 0.75 } />
        <Card className={"card skill"} image={skill6} delay={ 0.75 } />
        <Card className={"card skill"} image={skill7} delay={ 1 } />
        <Card className={"card skill"} image={skill8} delay={ 1 } />
        <Card className={"card skill"} image={skill9} delay={ 1 } />
        <Card className={"card skill"} image={skill10} delay={ 1.25 } />
        <Card className={"card skill"} image={skill11} delay={ 1.25 } />
        <Card className={"card skill"} image={skill12} delay={ 1.25 } />
      </motion.div>
    </>
  )
}

export default About
