import { useEffect, useState } from "react";
import { getTemplates } from "../services/templates";
import "./css/home.css"


function Home() {
  const [featuredTemplates, setFeaturedTemplates] = useState([]);
const [templatesLoading, setTemplatesLoading] = useState(true);
const [templatesError, setTemplatesError] = useState("");

useEffect(() => {
  let cancelled = false;

  getTemplates()
    .then((data) => {
      if (!cancelled) {
        setFeaturedTemplates(data);
      }
    })
    .catch((error) => {
      if (!cancelled) {
        setTemplatesError(
          error.message || "Katalog belum bisa dimuat."
        );
      }
    })
    .finally(() => {
      if (!cancelled) {
        setTemplatesLoading(false);
      }
    });

  return () => {
    cancelled = true;
  };
}, []);


const benefits = [
  {
    number: "01",
    title: "Pilih template",
    description: "Temukan desain ID card yang sesuai dengan kebutuhan lu.",
  },
  {
    number: "02",
    title: "Sesuaikan kebutuhan",
    description: "Tentukan kebutuhan personal, organisasi, atau tim lu.",
  },
  {
    number: "03",
    title: "Konfirmasi pesanan",
    description: "Lanjutkan proses pemesanan sesuai detail yang dibutuhkan.",
  },
];

  return (
    <main className="home-page" id="beranda">
      {/* Hero */}
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">ID CARD UNTUK SETIAP KEBUTUHAN</p>

          <h1>
            Identitas yang baik,
            <br />
            dimulai dari <span>detail.</span>
          </h1>

          <p className="hero-description">
            ID card untuk personal, organisasi, dan tim kerja. Pilih desain yang tersedia atau mulai dari konsep yang sudah lu punya.
          </p>

          <div className="hero-actions">
            <a href="#template" className="home-button primary-button">
              Jelajahi Template <span>↗</span>
            </a>

            <a href="#custom" className="home-button secondary-button">
              Buat Desain Custom
            </a>
          </div>

          <div className="hero-note">
            <span className="note-dot" />
            Untuk personal, komunitas, hingga kebutuhan perusahaan
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-label">SELECTED DESIGN / 001</div>

          <div className="hero-card hero-card-back">
            <div className="card-back-top" />
            <div className="back-line long-line" />
            <div className="back-line medium-line" />
            <div className="back-line short-line" />
            <span className="back-caption">IDENTITY CARD</span>
          </div>

          <div className="hero-card hero-card-front">
            <div className="id-card-heading">
              <span className="id-brand-mark">K</span>
              <span>NEXORE</span>
              <span className="id-card-type">MEMBER ID</span>
            </div>

            <div className="id-card-content">
              <div className="id-avatar">A</div>

              <div className="id-person">
                <span className="id-small-label">NAME</span>
                <strong>Alexandra Putri</strong>

                <span className="id-small-label">POSITION</span>
                <span>Business Development</span>

                <span className="id-small-label">ID NUMBER</span>
                <span>KK-2026-001</span>
              </div>
            </div>

            <div className="id-card-footer">
              <span>MADE FOR YOUR TEAM</span>
              <span>2026</span>
            </div>
          </div>

          <div className="visual-caption">
            <span>01 / 03</span>
            <span>Corporate collection</span>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="home-intro-strip">
        <p>DIRANCANG UNTUK BERBAGAI KEBUTUHAN</p>

        <div className="intro-categories">
          <span>Personal</span>
          <span>Organisasi</span>
          <span>Komunitas</span>
          <span>Perusahaan</span>
        </div>
      </section>

      {/* Templates */}
      <section className="home-section" id="template">
        <div className="section-heading">
          <div>
            <p className="eyebrow">KOLEKSI DESAIN</p>
            <h2>Temukan gaya yang tepat.</h2>
            <p className="section-description">
              Pilih desain yang cocok untuk identitas personal maupun tim.
            </p>
          </div>

          <a className="text-link" href="#template">
            Lihat pilihan desain <span>↗</span>
          </a>
        </div>

       

<div className="template-grid">
  {templatesLoading ? (
    <p role="status">Memuat katalog template...</p>
  ) : templatesError ? (
    <p role="alert">
      Katalog belum bisa dimuat. {templatesError}
    </p>
  ) : featuredTemplates.length === 0 ? (
    <p>Belum ada template yang tersedia.</p>
  ) : (
    featuredTemplates.map((template) => (
      <article className="template-card" key={template.id}>
        <div className={`template-preview ${template.color}`}>
          <div className="template-preview-person">
            <div className="template-avatar">
              {template.initials}
            </div>

            <div>
              <strong>
                {template.initials === "AK"
                  ? "Aditya K."
                  : template.initials === "RA"
                    ? "Rania A."
                    : "Dimas N."}
              </strong>
              <span>{template.role}</span>
            </div>
          </div>

          <div className="template-preview-bottom">
            <span>ID CARD</span>
            <span>NEXORA / 2026</span>
          </div>
        </div>

        <div className="template-info">
          <div>
            <h3>{template.name}</h3>
            <p>{template.description}</p>
          </div>

          <a
            href="/pilih-tipe"
            className="template-arrow"
            aria-label={`Lihat cara pesan untuk template ${template.name}`}
          >
            ↗
          </a>
        </div>
      </article>
    ))
  )}
</div>


        <p className="home-disclaimer">
          Preview desain merupakan ilustrasi. Pilihan template dan spesifikasi
          cetak akan ditampilkan sesuai katalog yang tersedia.
        </p>
      </section>

      {/* Custom design */}
      <section className="home-custom" id="custom">
        <div className="custom-copy">
          <p className="eyebrow">PUNYA KONSEP SENDIRI?</p>

          <h2>
            Bawa identitas
            <br />
            brand lu ke <span>kartu.</span>
          </h2>

          <p>
            Sudah punya logo, warna, atau referensi? Kita bisa mulai dari kebutuhan itu dan bahas arah desain yang cocok.
          </p>

          <a href="#template" className="home-button light-button">
            Lihat opsi desain <span>↗</span>
          </a>
        </div>

        <div className="custom-visual">
          <div className="custom-sheet sheet-back">
            <span>BRAND GUIDELINE</span>
            <div className="sheet-color-row">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="custom-sheet sheet-front">
            <span className="sheet-kicker">DESIGN STUDY / 02</span>
            <div className="sheet-art">
              <span>K</span>
            </div>
            <strong>Make it yours.</strong>
            <p>Custom identity system</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="home-section how-section" id="cara-pesan">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CARA PESAN</p>
            <h2>Praktis dari awal.</h2>
            <p className="section-description">
              Tiga langkah untuk memulai pesanan ID card lu.
            </p>
          </div>
        </div>

        <div className="steps-grid">
          {benefits.map((benefit) => (
            <article className="step-item" key={benefit.number}>
              <span className="step-number">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Wholesale callout */}
      <section className="home-bulk" id="tentang">
        <div>
          <p className="eyebrow">UNTUK PEMESANAN DALAM JUMLAH BANYAK</p>
          <h2>
            Satu tim, satu identitas.
            <br />
            Pesan sesuai kebutuhan.
          </h2>
          <p>
            Cocok untuk perusahaan, kepanitiaan, organisasi, dan komunitas.
            Harga mengikuti jumlah pesanan pada setiap desain.
          </p>
        </div>

        <a href="#template" className="home-button primary-button">
          Mulai Pilih Desain <span>↗</span>
        </a>
      </section>
    </main>
  );
}

export default Home;
