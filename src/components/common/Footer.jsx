function Footer() {
  return (
    <footer className="site-footer" id="kontak">
      <a className="footer-brand" href="/">NEXORE<span>.</span></a>
      <p>Identitas yang dirancang dengan perhatian pada detail.</p>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} NEXORE</span>
        <a href="/#template">Jelajahi koleksi ↗</a>
      </div>
    </footer>
  );
}

export default Footer;
