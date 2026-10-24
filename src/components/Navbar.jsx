import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo" onClick={() => setOpen(false)}>
        Daniyal<span>.</span>Ali
      </a>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}
