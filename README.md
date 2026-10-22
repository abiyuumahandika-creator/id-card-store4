# NEXORE — MVP frontend

Proyek React + Vite dengan backend Node.js + Express.

## Menjalankan frontend
1. Jalankan `npm install` dari root proyek.
2. Jalankan backend di terminal pertama: `cd server`, `npm install`, lalu `npm run dev`.
3. Jalankan frontend di terminal kedua dari root: `npm run dev`.
4. Buka URL Vite yang ditampilkan di terminal (umumnya `http://localhost:5173`).

## Fitur yang tersedia dalam paket ini
- Landing page yang dipertahankan.
- Pilih tipe/template dan form data kartu.
- Keranjang dengan penyimpanan browser dan harga grosir per item/template.
- Checkout dan pembuatan pesanan demo.
- Halaman pembayaran dan status pesanan demo.
- Form permintaan custom demo.
- Halaman admin demo untuk melihat pesanan lokal dan mengatur tier harga lokal.

## Batasan penting sebelum produksi
- Keranjang, pesanan, permintaan custom, dan pengaturan harga saat ini disimpan di `localStorage`, bukan database bersama.
- QRIS/payment gateway belum diintegrasikan. Halaman pembayaran tidak membuat QR asli dan tidak memverifikasi pembayaran.
- Login admin dan proteksi otorisasi belum terhubung ke backend; halaman admin hanya demonstrasi lokal dan tidak aman untuk data produksi.
- Harga contoh pada frontend mengikuti tier ilustratif dari PRD dan harus dikonfirmasi sebelum dipakai untuk penjualan.
- Endpoint katalog backend saat ini masih menggunakan data dummy.
- Upload foto pada form demo menyimpan data URL di browser. Jangan memasukkan data sensitif dalam pengujian.
