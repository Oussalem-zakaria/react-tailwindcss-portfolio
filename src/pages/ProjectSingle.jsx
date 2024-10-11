import { useLocation } from "react-router-dom";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { SingleProjectProvider } from "../context/SingleProjectContext";
import { motion } from "framer-motion";

const ProjectSingle = () => {
  const location = useLocation();
  const { project } = location.state || {};
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleProjectProvider>
        <ProjectHeader project={project} />
        <div className="mt-14 sm:mt-20 mb-7 flex-col space-y-4">
          <div className="font-general-medium text-left text-2xl font-bold text-primary-dark dark:text-primary-light">
            Objective
          </div>
          <div
            className="font-general-regular text-lg sm:text-xl text-primary-dark dark:text-primary-light"
            style={{ paddingTop: "1rem", textAlign: "justify" }}
          >
            {project.objective}
          </div>
        </div>
        <div className="mt-10 sm:mt-10 mb-7 flex-col space-y-6">
          <div className="font-general-medium text-left text-2xl font-bold text-primary-dark dark:text-primary-light">
            Screenshots
          </div>
        </div>
        <ProjectGallery project={project} />
        <div className="mt-10 sm:mt-10 mb-7 flex-col space-y-6">
          <div className="font-general-medium text-left text-2xl font-bold text-primary-dark dark:text-primary-light">
            Teck Stack
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.3rem",
            marginTop: "1.2rem",
          }}>
            {project.techStack.map((tech) => {
              return (
                <img
                  src={tech.icon}
                  alt="Tech Stack"
                  style={{
                    marginTop: "1.4rem",
                    width: "3.2rem",
                  }}
                  key={tech.id}
                  className="rounded-xl"
                  title={tech.name}
                />
              );
            })}
          </div>
        </div>
        {/* <ProjectInfo /> */}
        {/* <ProjectRelatedProjects /> */}
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;
