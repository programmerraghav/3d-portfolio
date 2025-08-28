import { motion } from "framer-motion"
import ComputersCanvas from "./canvas/Computers"

const handleNavClick = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    const navbarHeight = 80;
    const offsetTop = targetSection.offsetTop - navbarHeight;
    console.log(offsetTop)
    window.scrollTo({
      top: Math.max(0, offsetTop),
      behavior: 'smooth'
    });
  }
}

const Home = () => {
  return (
    <>
      <motion.div
        id="home"
        className="home"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.2 }}
      >
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="circle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.1 }}
        ></motion.div>
        <motion.div
          className="title font-bold text-white"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.3 }}
        >
          Hi, I'm <motion.span className="text-violet-700">Raghav Goyal</motion.span>
        </motion.div>
        <motion.div
          className="info text-white"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.6 }}
        >
          I develop modern user interface and web applicatins with backend and database fluently.
        </motion.div>
        <ComputersCanvas />
        <div className="gif absolute flex justify-center items-center bottom-44 w-full">
          <a href="#about" onClick={handleNavClick}>
            <div className="flex justify-center items-start p-2 border-4 rounded-full border-slate-500 w-[35px] h-[64px]" >
              <motion.div
                animate={{y: [0, 24,0]}}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-slate-500"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default Home