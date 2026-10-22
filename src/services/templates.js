const API_BASE_URL = "http://localhost:4000/api";

export async function getTemplates() {
  const response = await fetch(`${API_BASE_URL}/templates`);

  if (!response.ok) {
    throw new Error(
      `Gagal mengambil katalog: ${response.status}`
    );
  }

  const result = await response.json();

  if (!result.success || !Array.isArray(result.data)) {
    throw new Error("Format respons katalog tidak valid.");
  }

  return result.data;
}
