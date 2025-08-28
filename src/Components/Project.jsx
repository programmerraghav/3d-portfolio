import { motion } from "framer-motion"

const Project = ({ className, image, project_name, delay, overview, source_code_link, technologies }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: delay }}
        >
            <div className="absolute flex justify-center">
                <img src={image} alt="project image" className="project-image h-48 rounded-xl border-slate-600 border-2" />
                <div className="github flex justify-end m-3">
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img
                            src="./github.png"
                            alt="github"
                            className=" rounded-full object-contain" />
                    </div>
                </div>
            </div>
            <span className="title">{project_name}</span>
            <div className="details">{overview}</div>
            <div className="technologies">Technologies Used: <span>{technologies}</span></div>
        </motion.div>
    )
}

export default Project;
