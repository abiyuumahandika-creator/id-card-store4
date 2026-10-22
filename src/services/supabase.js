// Supabase belum diaktifkan di paket MVP ini. Isi variabel VITE_SUPABASE_URL
// dan VITE_SUPABASE_ANON_KEY setelah dependency dan skema database disiapkan.
export const supabaseConfig = {
  url: import.meta.env.VITE_SUPABASE_URL || "",
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
  configured: Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY),
};
