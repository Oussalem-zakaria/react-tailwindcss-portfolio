import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        to="/projects/single-project"
        state={{ project }}
        aria-label="Single Project"
      >
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-primary-light dark:bg-ternary-dark h-full">
          <div>
            <img
              src={project.img}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {project.title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {project.category}
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.7rem",
                marginTop: "1.4rem",
              }}
            >
              {project.techStack.map((tech) => {
                return (
                  <img
                    src={tech.icon}
                    alt="Tech Stack"
                    style={{
                      width: "1.7rem",
                    }}
                    key={tech.id}
					className="rounded-xl"
					title={tech.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
