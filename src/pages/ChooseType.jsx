import { useState } from "react";
import { Link } from "react-router-dom";
import "./css/choose-type.css";
import Navbar from "../components/common/Navbar";

const collections = [
  {
    id: "individu",
    title: "ID Card Individu",
    description: "Desain personal untuk profesional, pelajar, dan kreator.",
    templates: [
      {
        id: "personal-minimal",
        name: "Personal Minimal",
        description: "Simpel, bersih, dan elegan.",
        theme: "minimal",
        initials: "AR",
        person: "Aditya Ramadhan",
        role: "PERSONAL ID",
      },
      {
        id: "professional",
        name: "Professional",
        description: "Formal untuk kebutuhan profesional.",
        theme: "professional",
        initials: "NP",
        person: "Nadia Putri",
        role: "PROFESSIONAL",
      },
      {
        id: "creative",
        name: "Creative Studio",
        description: "Warna berani dengan gaya modern.",
        theme: "creative",
        initials: "DS",
        person: "Dimas Saputra",
        role: "CREATIVE MEMBER",
      },
    ],
  },
  {
    id: "organisasi",
    title: "ID Card Organisasi",
    description: "Desain untuk komunitas, tim, acara, dan perusahaan.",
    templates: [
      {
        id: "corporate",
        name: "Corporate",
        description: "Profesional untuk tim perusahaan.",
        theme: "corporate",
        initials: "AK",
        person: "Andi Kurniawan",
        role: "MARKETING EXECUTIVE",
      },
      {
        id: "community",
        name: "Community",
        description: "Untuk komunitas dan organisasi.",
        theme: "community",
        initials: "SR",
        person: "Sarah Rahma",
        role: "COMMUNITY MEMBER",
      },
      {
        id: "event",
        name: "Event Crew",
        description: "Untuk panitia dan kebutuhan event.",
        theme: "event",
        initials: "RF",
        person: "Rizky Firmansyah",
        role: "EVENT COMMITTEE",
      },
    ],
  },
];

const themes = {
  minimal: ["#e9e4d9", "#c7bfae", "#282821"],
  professional: ["#263b52", "#4c7188", "#ffffff"],
  creative: ["#5836a6", "#a365e5", "#ffffff"],
  corporate: ["#182c42", "#315b72", "#ffffff"],
  community: ["#28685b", "#80a991", "#ffffff"],
  event: ["#d75a35", "#f1a04e", "#ffffff"],
};

function IDCardPreview({ template }) {
  const [start, end, textColor] = themes[template.theme];

  return (
    <div
      className={`id-preview id-preview-${template.theme}`}
      role="img"
      aria-label={`Preview ID card ${template.name}`}
      style={{
        "--preview-start": start,
        "--preview-end": end,
        "--preview-text": textColor,
      }}
    >
      <div className="id-preview-top">
        <span className="id-preview-logo">N.</span>
        <strong className="id-preview-brand">NEXORE</strong>
        <span className="id-preview-label">IDENTITY</span>
      </div>

      <div className="id-preview-body">
        <div className="id-preview-avatar">{template.initials}</div>
        <div className="id-preview-details">
          <span className="id-preview-caption">CARD HOLDER</span>
          <strong>{template.person}</strong>
          <span className="id-preview-role">{template.role}</span>
        </div>
      </div>

      <div className="id-preview-bottom">
        <span>MEMBER ID · 2026</span>
        <span>NXR / 001</span>
      </div>
    </div>
  );
}

export default function ChooseType() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />

      <main className="choose-type-page">
      <section className="choose-type-container">
        <Link to="/" className="choose-type-back">
          ← Kembali ke beranda
        </Link>

        <span className="choose-type-eyebrow">
          NEXORE DESIGN COLLECTION
        </span>

        <h1>Pilih desain ID card lu.</h1>

        <p className="choose-type-intro">
          Temukan desain yang cocok untuk kebutuhan individu maupun
          organisasi. Semua koleksi bisa lu lihat di bawah ini.
        </p>

        {collections.map((collection, index) => (
          <section className="template-collection" key={collection.id}>
            <div className="collection-heading">
              <div>
                <span className="collection-number">
                  COLLECTION / 0{index + 1}
                </span>
                <h2>{collection.title}</h2>
                <p>{collection.description}</p>
              </div>

              <span className="collection-count">
                {collection.templates.length} DESAIN
              </span>
            </div>

            <div className="template-collection-grid">
              {collection.templates.map((template) => {
                const isSelected = selected?.id === template.id;

                return (
                  <article
                    key={template.id}
                    className={`design-card ${
                      isSelected ? "design-card-selected" : ""
                    }`}
                  >
                    <IDCardPreview template={template} />

                    <div className="design-card-content">
                      <div className="design-card-title">
                        <h3>{template.name}</h3>
                        {isSelected && (
                          <span className="design-selected-label">
                            Dipilih ✓
                          </span>
                        )}
                      </div>

                      <p>{template.description}</p>

                      <button
                        type="button"
                        className="design-select-button"
                        aria-pressed={isSelected}
                        onClick={() =>
                          setSelected({
                            ...template,
                            category: collection.id,
                            categoryTitle: collection.title,
                          })
                        }
                      >
                        {isSelected ? "Template dipilih ✓" : "Pilih template ↗"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        {selected && (
          <section className="template-selection-summary">
            <div>
              <span className="choose-type-eyebrow">TEMPLATE PILIHAN LU</span>
              <h2>{selected.name}</h2>
              <p>
                {selected.categoryTitle} — {selected.description}
              </p>
            </div>

            <Link
              className="design-select-button"
              to={`/order/standard?template=${encodeURIComponent(selected.id)}&category=${encodeURIComponent(selected.category)}`}
            >
              Lanjutkan ↗
            </Link>
   </section>
        )}
      </section>
    </main>
  </>
  );
}