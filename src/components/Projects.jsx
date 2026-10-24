const projects = [
  {
    title: "AI Tourism App",
    desc: "React Native + Google Maps + Firebase + AI Chatbot",
  },
  {
    title: "Budget Management App",
    desc: "Expense Tracking Application",
  },
  {
    title: "Blood Donation System",
    desc: "SQL Database Project",
  },
];

export default function Projects() {
  return (
    <section id="projects">

      <h2>Projects</h2>

      {projects.map((project) => (
        <div className="project-card" key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
      ))}

    </section>
  );
}