let logo = "./assets/Screenshot_2025-08-03_003057.png"
import { motion } from "framer-motion"

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

const Navbar = () => {
  return (
    <>
      <motion.header
        className="flex max-sm: pl-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 10, delay: 0.2 }}
      >
        <img src={logo} alt="" className="title1" />
        <div className="links max-sm:hidden ">
          <ul className="links flex justify-around">
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#work" onClick={handleNavClick}>Work</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </div>
      </motion.header>
    </>
  )
}

export default Navbar;
