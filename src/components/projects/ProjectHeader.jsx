import { useContext } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectSingleHeader = ({ project }) => {
  return (
    <div>
      <p className="font-general-medium text-justify text-3xl md:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {project.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {project.ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center mr-10">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {project.ProjectHeader.tags}
          </span>
        </div>
		<div className="flex items-center">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {project.ProjectHeader.tags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;