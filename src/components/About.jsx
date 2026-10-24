import { FaLightbulb, FaCubes, FaRocket, FaBookOpen } from "react-icons/fa";

const highlights = [
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    desc: "Strong passion for tackling logical problems.",
  },
  {
    icon: <FaCubes />,
    title: "Scalable Solutions",
    desc: "Building efficient and scalable digital products.",
  },
  {
    icon: <FaRocket />,
    title: "Real-World Focus",
    desc: "Applications that solve real-world challenges.",
  },
  {
    icon: <FaBookOpen />,
    title: "Always Learning",
    desc: "Continuously enhancing technical expertise.",
  },
];

export default function About() {
  return (
    <section id="about">

      <h2>About Me</h2>

      <p className="about-lead">
        Enthusiastic Software Engineer with a strong passion for solving logical
        problems and building efficient, scalable digital solutions. Skilled in
        developing applications that solve real-world challenges while
        continuously enhancing technical expertise.
      </p>

      <div className="about-grid">
        {highlights.map((item) => (
          <div className="about-card" key={item.title}>
            <span className="about-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
