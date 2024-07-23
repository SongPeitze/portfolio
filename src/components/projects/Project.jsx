import React from "react";
import "./Project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import sayHeart from "../../assets/img/sayheartDashboard.png";
import blogApp from "../../assets/img/blogApp.png";
import foodOrdering from "../../assets/img/foodOrdering.png";
import votingDashboard from "../../assets/img/votingDashboard.png";
import cakeProduct from "../../assets/img/cakeProduct.png";

const items = [
  {
    id: 1,
    title: "Freelance Project - SayHeart",
    image: sayHeart,
    description:
      "Developed SayHeart, a web application serving users in Malaysia and Singapore. Enabled users to upload medical reports and transformed these reports into data visualizations such as graphs. Provided personalized health suggestions based on the uploaded reports. Integrated appointment scheduling with doctors, and displayed successful appointments on a calendar. Designed and implemented a responsive frontend using HTML, CSS, and JavaScript, ensuring compatibility across mobile and web platforms. My responsibilities are utilized Flutterflow and Figma for prototyping and designing the user interface and experience. Developed backend functionality and managed data storage using MongoDB. Deployed the application to a live server, ensuring accessibility and reliability for users.",
  },
  {
    id: 2,
    title: "Blog Web Application",
    image: blogApp,
    description:
      "The blog web application allows users to create, read, update, and delete blog posts. It features a robust authentication system that ensures user data security and privacy such as Token-Based Authentication that utilizes JSON Web Tokens (JWT) for secure user sessions. Password hashing by implementing bcrypt to securely hash user passwords before storing them in the database. Authenticated users can write and publish new blog posts. Users can edit their own blog posts. The system ensures that users can only edit/delete their own content. Users can view a list of all blog posts. Individual posts can be opened to read the full content. Frontend Development used React.js to create a user-friendly interface. Backend Development is built using Node.js and Express.js. Utilized MySQL for data storage.",
  },
  {
    id: 3,
    title: "Food Ordering Mobile App",
    image: foodOrdering,
    description:
      "The food ordering mobile application provides a platform for users to browse, order, and track food from various restaurants. It includes both user-facing and admin-facing functionalities. Users can create an account and log in using their credentials. The system securely stores user data and handles authentication using Firebase Authentication. Users can view detailed menus, including item descriptions, prices, and images. Cross-Platform Development since it is developed using Flutter, ensuring the application works seamlessly on both Android and iOS devices. Leveraged Firebase for real-time database updates, providing users with instant feedback and status updates.",
  },
  {
    id: 4,
    title: "Voting Mobile App",
    image: votingDashboard,
    description:
      "The academic voting mobile application allows students within the same faculty to vote for their peers for various academic positions or awards. It ensures secure and fair voting by restricting votes to eligible users and limiting each user to a single vote. Interested students can apply to be candidates. The application includes providing necessary details and a brief statement. Admins review and approve or reject candidate applications, ensuring only eligible candidates are listed. Utilized SQLite for local data storage, ensuring fast and efficient data retrieval. Developed using Kotlin, ensuring a smooth and responsive user experience on Android devices.",
  },
  {
    id: 5,
    title: "Cake Shop Website",
    image: cakeProduct,
    description:
      "The cake shop web application allows users to browse and purchase a variety of cakes online. The application includes a user-friendly interface for customers to view products, add items to their cart, and complete purchases, as well as an administrative interface for managing products and orders. Developed with ASP.NET and C# for the backend, ensuring secure and efficient data processing. Implemented responsive design using HTML, CSS, and JavaScript, ensuring compatibility across various devices and screen sizes.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.image} alt={item.title} ref={ref} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>View Project</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Project({ project }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}
