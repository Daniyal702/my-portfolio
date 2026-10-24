import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  // SiCsharp,
  // SiOpenai,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";


const skills = [
  { name: "React Native", icon: <SiReact />, level: 80 },
  { name: "React.js", icon: <FaReact />, level: 75 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
  { name: "Firebase", icon: <SiFirebase />, level: 70 },
  { name: "Supabase", icon: <SiSupabase />, level: 70 },
  { name: "SQL", icon: <FaDatabase />, level: 65 },
  { name: "Python", icon: <FaPython />, level: 60 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 70 },
  { name: "Git & GitHub", icon: <FaGitAlt />, level: 80 },
  { name:"C Sharp", icon: <TbBrandCSharp />, level: 60 },
  { name: "AI / Prompt Engineering", icon: <FaBrain />, level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-header">
              <div className="skill-left">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>

              <span className="skill-percent">
                {skill.level}%
              </span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}