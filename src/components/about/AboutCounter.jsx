import css from "../../images/icons/css3.png";
import symfony from "../../images/icons/symfony.png";
import react from "../../images/icons/react.png";
import springboot from "../../images/icons/springboot.png";
import database from "../../images/icons/database.png";
import reactnative from "../../images/icons/reactnative.png";
import firebase from "../../images/icons/firebase.png";
import redux from "../../images/icons/redux.png";

const AboutCounter = () => {

  return (
    <div
      className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"
      style={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <p className="font-general-medium pb-4 text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        Technical Skills
      </p>
      <div
        className="grid-container"
      >
        <div
          className="flex space-x-6 align-middle items-center"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={css}
            style={{
              width: "3rem",
            }}
            alt="text"
          />
          <p className="text-xl dark:text-primary-light">HTML5 / CSS / Tailwind / Bootstrap</p>
        </div>
        <div
          className="flex space-x-6 align-middle items-center"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={symfony}
            style={{
              width: "3rem",
            }}
            alt="text"
          />
          <p className="dark:text-primary-light">PHP / Symfony</p>
        </div>
        <div
          className="flex space-x-6 align-middle items-center"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={springboot}
            style={{
              width: "3rem",
            }}
            alt="text"
          />
          <p className="dark:text-primary-light">JAVA / JEE / Spring Boot / Hibernate </p>
        </div>
        <div
          className="flex space-x-6 align-middle items-center"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={react}
            style={{
              width: "3rem",
            }}
            alt="text"
          />
          <p className="dark:text-primary-light">Javascript / ReactJs</p>
        </div>
        <div
          className="flex space-x-6 align-middle items-center"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={database}
            style={{
              width: "3rem",
            }}
            alt="text"
          />
          <p className="dark:text-primary-light">SQL / MySQL / MongoDB</p>
        </div>
        <div
          className="flex space-x-6 align-middle items-center"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={reactnative}
            style={{
              width: "3rem",
            }}
            alt="text"
          />
          <p className="dark:text-primary-light">React Native / Expo</p>
        </div>
        <div
          className="flex space-x-6 align-middle items-center"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={firebase}
            style={{
              width: "3rem",
            }}
            alt="text"
          />
          <p className="dark:text-primary-light">
            Firebase: Authentication / Realtime Database ...
          </p>
        </div>
        <div
          className="flex space-x-6 align-middle items-center"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={redux}
            style={{
              width: "3rem",
            }}
            alt="text"
          />
          <p className="dark:text-primary-light">Redux Toolkit</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
