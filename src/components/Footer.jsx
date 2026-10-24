import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      {/* TODO: replace # with your real profile links */}
      <div className="footer-socials">
        <a href="#" aria-label="GitHub" title="GitHub"><FiGithub /></a>
        <a href="#" aria-label="LinkedIn" title="LinkedIn"><FiLinkedin /></a>
        <a href="#" aria-label="Email" title="Email"><FiMail /></a>
      </div>

      <p>© 2026 Daniyal Ali • Built with React</p>

      <a href="#hero" className="back-to-top" aria-label="Back to top">
        <FiArrowUp />
      </a>
    </footer>
  );
}
