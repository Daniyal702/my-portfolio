import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaWallet, FaTint } from "react-icons/fa";

const projects = [
  {
    title: "AI Tourism App",
    icon: <FaMapMarkedAlt />,
    desc: "React Native + Google Maps + Firebase + AI Chatbot",
    tags: ["React Native", "Google Maps", "Firebase", "AI Chatbot"],
  },
  {
    title: "Budget Management App",
    icon: <FaWallet />,
    desc: "Expense Tracking Application",
    tags: ["Mobile App", "Expense Tracking"],
  },
  {
    title: "Blood Donation System",
    icon: <FaTint />,
    desc: "SQL Database Project",
    tags: ["SQL", "Database Design"],
  },
];

export default function Projects() {
  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
