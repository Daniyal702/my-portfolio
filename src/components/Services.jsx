import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaRobot,
  FaDatabase,
  FaFire,
  FaPalette,
} from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Build cross-platform mobile applications using React Native with clean architecture and responsive UI.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Develop fast and responsive websites using React.js, JavaScript, HTML and CSS.",
  },
  {
    icon: <FaRobot />,
    title: "AI Integration",
    desc: "Integrate AI chatbots, recommendation systems and APIs into modern applications.",
  },
  {
    icon: <FaFire />,
    title: "Firebase & Supabase",
    desc: "Authentication, Firestore, Realtime Database, Storage and backend integration.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    desc: "Design SQL databases and build scalable backend solutions for real-world applications.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Development",
    desc: "Create beautiful, responsive and user-friendly interfaces with modern design principles.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">

      <h2>What I Do</h2>

      <div className="services-grid">

        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
          >

            <div className="icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
