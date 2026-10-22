
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = Number(process.env.PORT) || 4000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(helmet());
app.use(cors({ origin: allowedOrigins }));


app.use(express.json({ limit: "100kb" }));

// Data katalog contoh untuk pengembangan
const templates = [
  {
    id: "corporate",
    name: "Corporate",
    description: "Tampilan profesional untuk kebutuhan kerja.",
    color: "template-corporate",
    initials: "AK",
    role: "Marketing Executive",
    company: "YOUR COMPANY",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Desain simpel dengan informasi yang jelas.",
    color: "template-minimal",
    initials: "RA",
    role: "Creative Designer",
    company: "STUDIO WORKS",
  },  
];

// Pemeriksaan kesehatan backend
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "nexore-api",
    timestamp: new Date().toISOString(),
  });
});

// Endpoint katalog
app.get("/api/templates", (_req, res) => {
  res.status(200).json({
    success: true,
    data: templates,
  });
});

// Middleware 404 — cukup satu
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint tidak ditemukan.",
  });
});

app.listen(port, () => {
  console.log(`NEXORE API berjalan di http://localhost:${port}`);
});
