import { useEffect, useState } from "react";
import "./css/Navbar.css";

const links = [
  { href: "/#beranda", label: "Beranda" },
  { href: "/#template", label: "Template" },
  { href: "/#custom", label: "Custom" },
  { href: "/#cara-pesan", label: "Cara pesan" },
  { href: "/#tentang", label: "Tentang" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("nexore-theme") === "dark"
  );

  useEffect(() => {
    const theme = isDark ? "dark" : "light";

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("nexore-theme", theme);
  }, [isDark]);

  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  return (
    <header className="navbar">
      <a
        className="brand"
        href="/"
        onClick={closeMenu}
        aria-label="NEXORE, beranda"
      >
        <span className="brand-icon" aria-hidden="true">N</span>
        <span>
          NEXORA<span className="brand-period">.</span>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? "×" : "☰"}
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        aria-label="Navigasi utama"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="nav-theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={
            isDark ? "Aktifkan Light Mode" : "Aktifkan Dark Mode"
          }
          title={isDark ? "Light Mode" : "Dark Mode"}
        >
          <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
        </button>

        <a className="button button-dark nav-cta" href="/pilih-tipe">
          Lihat koleksi <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
