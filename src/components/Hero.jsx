import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-left">

        <h1>
          Hi, I'm <br />
          <span>Syed Daniyal Ali</span>
        </h1>

        <TypeAnimation
          sequence={[
            "React Native Developer",
            2000,
            "Software Engineer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          speed={40}
          repeat={Infinity}
          className="typing"
        />

        <p className="hero-text">
          Passionate Software Engineer specializing in
          React Native, React.js and AI powered
          applications.
        </p>

        <div className="hero-buttons">

          <a className="primary" href="#contact">
            Hire Me
          </a>

          <a
            href="/resume.pdf"
            download="Syed_Daniyal_Ali_Resume.pdf"
            className="secondary"
          >
            Download CV
            <FaDownload />
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-box">

          <img src={profile} alt="profile" />

        </div>

      </div>

    </section>
  );
}