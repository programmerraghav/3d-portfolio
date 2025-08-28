import { motion } from "framer-motion"

const Card = ({ image, topic, delay, className }) => {
  return (
    <>
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: delay }}
        >
        <motion.img src={image} alt="skill image" />
        <motion.div className="topic">{topic}</motion.div>
      </motion.div>
    </>
  )
}

export default Card
