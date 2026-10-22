# PRD — NEXORE

**Product Requirements Document**

| Informasi | Detail |
|---|---|
| Nama Produk | NEXORE |
| Jenis Produk | Website pemesanan kartu identitas fisik |
| Versi | 1.0 |
| Status | Draft — MVP dalam pengembangan |
| Platform | Website |
| Frontend | React JS + Vite |
| Backend | Node.js + Express |
| Hosting Frontend | Cloudflare Pages |
| Metode Pembayaran | QRIS melalui payment gateway |

---

## 1. Ringkasan Produk

NEXORE adalah platform pemesanan kartu identitas fisik yang memungkinkan individu, organisasi, komunitas, dan perusahaan memesan kartu melalui website.

Pelanggan dapat memilih template yang tersedia, mengisi data kartu, menentukan jumlah pesanan, memasukkan produk ke keranjang, dan melakukan pembayaran secara online.

NEXORE menyediakan dua layanan utama:

1. **Kartu dengan template standar** — pelanggan memilih template yang tersedia dan memasukkan data yang diperlukan.
2. **Kartu dengan desain custom** — pelanggan mengajukan kebutuhan desain, kemudian admin memberikan penawaran harga.

Untuk pemesanan organisasi atau perusahaan, sistem menerapkan harga grosir berdasarkan jumlah pesanan pada setiap template, bukan berdasarkan total seluruh kartu dalam keranjang.

## 2. Tujuan Produk

- Mempermudah pelanggan memesan kartu identitas fisik secara online.
- Menyediakan pilihan template yang siap digunakan.
- Memberikan layanan desain custom berdasarkan kebutuhan pelanggan.
- Mendukung pemesanan dalam jumlah besar dengan harga grosir otomatis.
- Menyediakan pembayaran QRIS.
- Mempermudah admin mengelola template, harga, pesanan, dan pembayaran.
- Memulai bisnis dengan biaya operasional website serendah mungkin.

## 3. Target Pengguna

### 3.1 Individu

- Pelajar dan mahasiswa.
- Freelancer.
- Content creator.
- Profesional.
- Pemilik usaha kecil.

### 3.2 Organisasi

- Organisasi mahasiswa.
- Komunitas.
- OSIS dan MPK.
- Event organizer.
- Kepanitiaan.

### 3.3 Perusahaan dan Bisnis

- Karyawan.
- Tim sales dan marketing.
- Pemilik bisnis.
- Perusahaan.
- Tim atau divisi perusahaan.

## 4. Ruang Lingkup MVP

MVP (*Minimum Viable Product*) adalah versi awal website yang memiliki fitur inti agar bisnis dapat mulai menerima pesanan.

### 4.1 Fitur untuk Pelanggan

- Melihat halaman utama.
- Melihat katalog template.
- Melihat detail template.
- Memilih template.
- Mengisi data kartu.
- Menentukan jumlah pesanan.
- Melihat perubahan harga berdasarkan kuantitas.
- Menambahkan beberapa template ke keranjang.
- Mengubah kuantitas dan menghapus item keranjang.
- Mengisi informasi pemesan dan pengiriman.
- Melakukan checkout tanpa harus membuat akun.
- Membayar pesanan melalui QRIS.
- Melihat konfirmasi pesanan.
- Mengajukan desain custom.

### 4.2 Fitur Admin

- Login admin.
- Melihat daftar pesanan.
- Menambah, mengubah, dan menonaktifkan template.
- Mengatur harga setiap template.
- Mengatur tingkatan harga grosir.
- Melihat detail pesanan dan data kartu.
- Memantau status pembayaran.
- Mengubah status pesanan.
- Mengelola permintaan desain custom.
- Membuat penawaran harga custom.
- Melihat riwayat perubahan status pesanan.

### 4.3 Fitur di Luar MVP

Fitur berikut dapat dikembangkan setelah sistem utama berjalan:

- Akun dan dashboard pelanggan.
- Pelacakan pengiriman otomatis.
- Integrasi langsung dengan vendor percetakan.
- Upload data anggota melalui Excel.
- Sistem referral dan kode promo.
- Program loyalitas pelanggan.
- Integrasi dengan sistem perusahaan.

## 5. Struktur Halaman Website

### 5.1 Halaman Utama

Path: `/`

Konten:

- Informasi singkat tentang NEXORE.
- Penjelasan layanan.
- Template pilihan.
- Keunggulan layanan.
- Tombol untuk melihat katalog.
- Tombol untuk mengajukan desain custom.

### 5.2 Katalog Template

Path: `/templates`

Konten:

- Daftar template kartu.
- Gambar preview.
- Nama template.
- Harga mulai dari.
- Kategori template.
- Tombol melihat detail.

### 5.3 Detail Template

Path: `/templates/:slug`

Konten:

- Preview desain kartu.
- Nama dan deskripsi template.
- Harga berdasarkan kuantitas.
- Formulir data kartu.
- Pilihan jumlah kartu.
- Tombol tambah ke keranjang.

### 5.4 Keranjang

Path: `/cart`

Konten:

- Daftar template yang dipilih.
- Kuantitas setiap template.
- Harga satuan.
- Subtotal setiap template.
- Total keseluruhan.
- Tombol mengubah kuantitas.
- Tombol menghapus item.
- Tombol lanjut checkout.

### 5.5 Checkout

Path: `/checkout`

Konten:

- Nama pemesan.
- Nomor WhatsApp.
- Email jika diperlukan.
- Nama organisasi atau perusahaan, jika ada.
- Alamat pengiriman.
- Catatan pesanan.
- Ringkasan item dan kuantitas.
- Rincian harga.
- Ongkos pengiriman.
- Total pembayaran.
- Tombol membuat pesanan dan melanjutkan pembayaran.

### 5.6 Halaman Pembayaran

Path: `/payment/:orderId`

Konten:

- Nomor pesanan.
- Total tagihan.
- Instruksi pembayaran QRIS dari payment gateway.
- Status pembayaran.
- Informasi jika pembayaran berhasil, kedaluwarsa, atau gagal.

### 5.7 Halaman Konfirmasi

Path: `/order/:orderId`

Konten:

- Nomor pesanan.
- Ringkasan pesanan.
- Status pembayaran.
- Status pesanan.
- Informasi langkah selanjutnya.

Halaman ini tidak boleh menganggap pembayaran berhasil hanya karena pelanggan kembali dari halaman payment gateway.

### 5.8 Halaman Pengajuan Custom

Path: `/custom-design`

Konten:

- Nama pemesan.
- Nomor WhatsApp.
- Email jika diperlukan.
- Jenis kartu.
- Perkiraan jumlah.
- Referensi desain.
- Deskripsi kebutuhan.
- Upload file referensi jika diperlukan.
- Tombol kirim permintaan.

### 5.9 Halaman Admin

Path: `/admin`

Subhalaman yang disarankan:

- `/admin/orders`
- `/admin/orders/:orderId`
- `/admin/templates`
- `/admin/templates/new`
- `/admin/templates/:templateId`
- `/admin/price-tiers`
- `/admin/custom-requests`
- `/admin/custom-requests/:requestId`

Seluruh halaman admin harus dilindungi autentikasi dan otorisasi.

## 6. Sistem Harga

### 6.1 Harga Template Standar

Setiap template mempunyai konfigurasi harga sendiri.

Contoh simulasi harga:

| Jumlah per Template | Harga per Kartu |
|---|---:|
| 1–9 | Rp15.000 |
| 10–24 | Rp13.500 |
| 25–49 | Rp12.500 |
| 50 ke atas | Diatur admin |

**Catatan:** Harga di atas hanya contoh untuk pengembangan dan bukan harga jual final.

### 6.2 Aturan Harga Grosir

Harga ditentukan dari jumlah kartu pada masing-masing template.

Contoh keranjang:

| Template | Jumlah | Harga Satuan | Subtotal |
|---|---:|---:|---:|
| Corporate Green | 10 | Rp13.500 | Rp135.000 |
| Modern Blue | 5 | Rp15.000 | Rp75.000 |
| **Total** | **15** | | **Rp210.000** |

Walaupun jumlah keseluruhan adalah 15 kartu, template Modern Blue tetap menggunakan harga untuk kuantitas 1–9.

Sistem tidak boleh menjumlahkan semua kuantitas dari template berbeda untuk menentukan tingkatan harga.

### 6.3 Aturan Perhitungan

Untuk setiap item keranjang:

`Subtotal item = kuantitas template × harga satuan sesuai tier`

Kemudian:

`Total pesanan = jumlah seluruh subtotal item + ongkos kirim + biaya lain yang berlaku`

Jika ada diskon, pajak, atau biaya tambahan, perhitungannya harus ditentukan secara eksplisit dan ditampilkan kepada pelanggan.

### 6.4 Persyaratan Sistem Harga

- Setiap template dapat memiliki tier harga berbeda.
- Admin dapat menambah, mengubah, dan menonaktifkan tier harga.
- Kuantitas harus berupa bilangan bulat positif.
- Harga harus dihitung ulang saat kuantitas berubah.
- Harga yang digunakan saat checkout harus dihitung ulang di server.
- Harga dan tier yang disepakati harus disimpan sebagai snapshot pada item pesanan.
- Perubahan harga template tidak boleh mengubah pesanan lama.

## 7. Sistem Keranjang

### 7.1 Aturan Keranjang

- Satu baris item mewakili satu template.
- Penambahan template yang sama dapat digabungkan ke satu baris.
- Template yang berbeda tetap menjadi item terpisah.
- Kuantitas dapat diubah.
- Subtotal diperbarui saat kuantitas berubah.
- Tier harga diperbarui berdasarkan kuantitas terbaru.
- Item dapat dihapus.
- Keranjang dapat berisi beberapa template sekaligus.

### 7.2 Validasi

Sebelum checkout, sistem harus memastikan:

- Template masih aktif.
- Kuantitas valid.
- Harga dihitung ulang dari data server.
- Data wajib sudah terisi.
- Total pesanan sesuai dengan perhitungan server.

Frontend tidak boleh menjadi sumber kebenaran untuk harga pembayaran.

## 8. Sistem Data Kartu

Pelanggan perlu memasukkan informasi yang akan dicetak pada kartu.

Contoh field:

- Nama lengkap.
- Nomor identitas internal atau nomor anggota, jika diperlukan.
- Jabatan atau divisi.
- Nama organisasi atau perusahaan.
- Foto.
- Field tambahan sesuai template.

Field harus dapat disesuaikan berdasarkan kebutuhan template.

### Persyaratan

- Field wajib dan opsional harus dapat dibedakan.
- Format input harus divalidasi.
- Foto dan file harus memiliki batas ukuran serta tipe file.
- Data hanya dapat diakses oleh pihak yang berwenang.
- Data pribadi harus dikumpulkan seperlunya.
- Harus tersedia kebijakan penyimpanan dan penghapusan data.

Untuk MVP, metode pengisian data dapat menggunakan formulir manual terlebih dahulu. Fitur upload Excel bisa ditambahkan setelah alur pemesanan utama stabil.

## 9. Sistem Desain Custom

### 9.1 Alur Pelanggan

1. Pelanggan mengisi formulir permintaan custom.
2. Sistem menyimpan permintaan.
3. Admin meninjau kebutuhan.
4. Admin membuat penawaran harga.
5. Pelanggan menerima atau menolak penawaran.
6. Jika diterima, pelanggan diarahkan ke alur pembayaran.
7. Setelah pembayaran terverifikasi, pesanan diproses.

### 9.2 Data Permintaan Custom

- ID permintaan.
- Data kontak pelanggan.
- Jenis kartu.
- Perkiraan kuantitas.
- Deskripsi kebutuhan.
- File referensi.
- Status permintaan.
- Harga penawaran.
- Masa berlaku penawaran.
- Catatan admin.

### 9.3 Status Permintaan Custom

- `submitted`
- `reviewing`
- `quoted`
- `accepted`
- `rejected`
- `expired`
- `converted_to_order`

Harga custom harus berasal dari penawaran yang dibuat admin dan tidak boleh ditentukan secara otomatis menggunakan harga template standar.

## 10. Sistem Pembayaran QRIS

### 10.1 Alur Pembayaran

1. Pelanggan menyelesaikan checkout.
2. Server memvalidasi item dan harga.
3. Server membuat pesanan.
4. Server membuat transaksi ke payment gateway.
5. Pelanggan menerima instruksi pembayaran QRIS.
6. Payment gateway mengirim notifikasi ke server.
7. Server memverifikasi notifikasi.
8. Status pembayaran diperbarui.
9. Pesanan dapat diproses setelah pembayaran terverifikasi.

### 10.2 Status Pembayaran

- `unpaid`
- `pending`
- `paid`
- `failed`
- `expired`
- `refunded`

### 10.3 Persyaratan Keamanan Pembayaran

- Secret key payment gateway hanya boleh disimpan di server.
- Jangan menyimpan secret key di kode frontend React.
- Server menghitung total tagihan sendiri.
- Callback atau webhook harus diverifikasi sesuai dokumentasi gateway.
- Webhook harus idempoten agar notifikasi berulang tidak memproses pembayaran berkali-kali.
- Redirect ke halaman sukses tidak boleh menjadi bukti pembayaran.
- Simpan ID transaksi dari payment gateway.
- Catat waktu dan perubahan status pembayaran.
- Tangani transaksi kedaluwarsa dan pembayaran yang gagal.

## 11. Sistem Status Pesanan

Status pesanan dipisahkan dari status pembayaran.

### 11.1 Status Pesanan

| Status | Keterangan |
|---|---|
| `pending_payment` | Menunggu pembayaran |
| `paid` | Pembayaran sudah terverifikasi |
| `reviewing_data` | Admin memeriksa data kartu |
| `awaiting_customer_approval` | Menunggu persetujuan pelanggan jika diperlukan |
| `processing` | Pesanan sedang diproses |
| `completed` | Pesanan selesai |
| `cancelled` | Pesanan dibatalkan |

Alur status dapat disesuaikan ketika proses produksi dan pengiriman ditentukan.

### 11.2 Riwayat Status

Sistem sebaiknya menyimpan:

- Status sebelumnya.
- Status baru.
- Waktu perubahan.
- Pihak yang melakukan perubahan.
- Catatan perubahan jika diperlukan.

## 12. Sistem Admin

### 12.1 Manajemen Template

Admin dapat:

- Membuat template.
- Mengunggah gambar preview.
- Mengubah nama dan deskripsi.
- Mengatur field data kartu.
- Mengaktifkan atau menonaktifkan template.
- Mengelola kategori template.

### 12.2 Manajemen Harga

Admin dapat:

- Menetapkan harga dasar.
- Menambahkan tier kuantitas.
- Mengubah harga grosir.
- Mengatur batas minimum dan maksimum kuantitas.
- Menonaktifkan tier tertentu.

Sistem harus mencegah tier yang tumpang tindih atau tidak valid.

### 12.3 Manajemen Pesanan

Admin dapat:

- Melihat daftar pesanan.
- Membuka detail pesanan.
- Melihat data pemesan.
- Melihat item, kuantitas, dan snapshot harga.
- Melihat status pembayaran.
- Mengubah status proses pesanan.
- Melihat riwayat perubahan status.

Admin tidak boleh mengubah catatan pembayaran seolah-olah pembayaran telah diterima tanpa verifikasi transaksi yang sah.

### 12.4 Manajemen Custom

Admin dapat:

- Melihat permintaan desain.
- Meninjau file referensi.
- Menambahkan catatan.
- Membuat penawaran harga.
- Mengatur masa berlaku penawaran.
- Memantau respons pelanggan.

## 13. Rekomendasi Teknologi

### Frontend

- React JS.
- Vite.
- React Router.
- CSS.
- Context API atau state sederhana untuk keranjang.

### Backend dan Database

- Node.js + Express PostgreSQL untuk database.
- Node.js + Express Auth untuk autentikasi admin.
- Node.js + Express Storage untuk file yang diunggah.
- Node.js + Express Edge Functions atau backend server-side untuk operasi sensitif.

### Hosting

- Cloudflare Pages untuk frontend statis.
- Backend server-side untuk validasi pesanan, pembuatan transaksi, dan webhook sesuai kebutuhan integrasi.

Penggunaan layanan gratis perlu memperhatikan batas penggunaan, kuota, kebijakan penyimpanan, dan ketentuan terbaru setiap penyedia.

## 14. Rancangan Database

Tabel awal yang disarankan:

### `templates`

Menyimpan informasi template kartu.

Field utama:

- `id`
- `name`
- `slug`
- `description`
- `preview_image`
- `field_schema`
- `is_active`
- `created_at`
- `updated_at`

### `price_tiers`

Menyimpan tier harga setiap template.

Field utama:

- `id`
- `template_id`
- `min_quantity`
- `max_quantity`
- `unit_price`
- `is_active`
- `created_at`
- `updated_at`

`max_quantity` dapat menggunakan nilai kosong untuk tier tanpa batas atas, sesuai rancangan implementasi.

### `customers`

Menyimpan informasi kontak pelanggan jika diperlukan.

Field utama:

- `id`
- `name`
- `whatsapp`
- `email`
- `created_at`

Untuk MVP tanpa akun pelanggan, hubungan pelanggan dengan pesanan dapat disimpan sebagai snapshot kontak pada pesanan.

### `orders`

Menyimpan informasi utama pesanan.

Field utama:

- `id`
- `order_number`
- `customer_id`
- `customer_name`
- `customer_whatsapp`
- `customer_email`
- `organization_name`
- `shipping_address`
- `shipping_cost`
- `subtotal`
- `total_amount`
- `order_status`
- `created_at`
- `updated_at`

### `order_items`

Menyimpan setiap template dalam pesanan.

Field utama:

- `id`
- `order_id`
- `template_id`
- `template_name_snapshot`
- `quantity`
- `unit_price_snapshot`
- `subtotal`
- `card_data`
- `created_at`

Snapshot digunakan untuk mempertahankan rincian harga dan nama produk ketika konfigurasi template berubah.

### `members`

Menyimpan data orang yang akan tercetak pada kartu.

Field utama:

- `id`
- `order_item_id`
- `member_data`
- `photo_path`
- `created_at`

Struktur `member_data` dapat menggunakan JSONB jika field berbeda-beda antar-template.

### `payments`

Menyimpan informasi transaksi pembayaran.

Field utama:

- `id`
- `order_id`
- `provider`
- `provider_transaction_id`
- `amount`
- `payment_status`
- `paid_at`
- `created_at`
- `updated_at`

### `custom_requests`

Menyimpan permintaan desain custom.

Field utama:

- `id`
- `customer_name`
- `customer_whatsapp`
- `customer_email`
- `card_type`
- `estimated_quantity`
- `description`
- `reference_files`
- `request_status`
- `created_at`
- `updated_at`

### `quotes`

Menyimpan penawaran harga custom.

Field utama:

- `id`
- `custom_request_id`
- `quoted_amount`
- `description`
- `valid_until`
- `quote_status`
- `created_at`

### `order_status_history`

Menyimpan riwayat perubahan status pesanan.

Field utama:

- `id`
- `order_id`
- `previous_status`
- `new_status`
- `changed_by`
- `note`
- `created_at`

### `admin_users`

Jika menggunakan Node.js + Express Auth, identitas autentikasi admin sebaiknya mengacu pada user ID Node.js + Express. Tabel profil atau role tambahan dapat digunakan untuk mengatur hak akses admin.

## 15. Persyaratan Nonfungsional

### 15.1 Keamanan

- Halaman admin wajib menggunakan autentikasi.
- Hak akses database harus dikonfigurasi menggunakan Row Level Security (RLS) bila relevan.
- Pelanggan tidak boleh mengakses pesanan milik pelanggan lain.
- File pribadi tidak boleh tersedia melalui akses publik tanpa kontrol.
- Validasi input dilakukan di frontend dan server.
- Secret key tidak boleh berada di frontend.
- Operasi sensitif harus berjalan di server.

### 15.2 Performa

- Gambar template dioptimalkan.
- Halaman katalog tidak memuat aset berukuran berlebihan.
- Daftar pesanan admin menggunakan pagination jika data sudah banyak.
- Tampilan responsif untuk perangkat seluler dan desktop.

### 15.3 Keandalan

- Perhitungan harga harus konsisten antara keranjang dan checkout.
- Pesanan dan transaksi harus memiliki identitas unik.
- Webhook pembayaran harus menangani notifikasi duplikat.
- Kegagalan pembayaran harus memiliki status yang jelas.
- Perubahan status pesanan harus dapat ditelusuri.

### 15.4 Privasi

- Kumpulkan data sesuai kebutuhan.
- Jelaskan penggunaan data pelanggan.
- Batasi akses ke foto dan data kartu.
- Tentukan masa penyimpanan dan prosedur penghapusan data.

## 16. Indikator Keberhasilan

Indikator yang dapat dipantau setelah website diluncurkan:

- Jumlah pengunjung katalog.
- Jumlah pelanggan yang menambahkan item ke keranjang.
- Persentase checkout yang selesai.
- Jumlah transaksi berhasil.
- Nilai rata-rata pesanan.
- Jumlah pesanan organisasi.
- Jumlah permintaan desain custom.
- Waktu penanganan pesanan oleh admin.
- Jumlah kesalahan perhitungan harga.
- Jumlah kegagalan pembayaran.

## 17. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Harga checkout berbeda dengan harga keranjang | Hitung ulang harga di server |
| Pelanggan mengubah nominal pembayaran | Buat transaksi berdasarkan nominal dari server |
| Webhook terkirim berkali-kali | Terapkan idempotensi |
| Data kartu salah | Sediakan pemeriksaan data sebelum produksi |
| File pelanggan bocor | Gunakan kontrol akses dan penyimpanan aman |
| Tier harga saling tumpang tindih | Validasi aturan tier saat admin menyimpan konfigurasi |
| Biaya layanan gratis meningkat | Pantau kuota dan siapkan alternatif hosting |
| Pelanggan mengajukan revisi setelah persetujuan | Tentukan kebijakan revisi sebelum produksi |

## 18. Tahapan Pengembangan

### Tahap 1 — Fondasi Frontend

- Membuat proyek React + Vite.
- Membuat struktur folder.
- Membuat navigasi.
- Membuat halaman utama.
- Membuat katalog dan detail template.
- Membuat keranjang.
- Mengimplementasikan perhitungan harga di frontend untuk simulasi.

### Tahap 2 — Database dan Backend

- Menyiapkan Node.js + Express.
- Membuat tabel database.
- Menghubungkan frontend dengan data template.
- Menyimpan pesanan.
- Mengimplementasikan validasi harga di server.
- Mengatur autentikasi dan hak akses admin.

### Tahap 3 — Panel Admin

- Manajemen template.
- Manajemen tier harga.
- Daftar dan detail pesanan.
- Pengelolaan status.
- Pengelolaan permintaan custom.

### Tahap 4 — Pembayaran

- Memilih payment gateway.
- Mengintegrasikan QRIS.
- Memverifikasi webhook.
- Menangani pembayaran berhasil, gagal, dan kedaluwarsa.
- Menguji alur transaksi dari awal sampai akhir.

### Tahap 5 — Pengujian dan Peluncuran

- Menguji tampilan mobile dan desktop.
- Menguji harga setiap tier.
- Menguji keranjang multi-template.
- Menguji keamanan akses.
- Menguji pembayaran di lingkungan sandbox.
- Menyiapkan domain atau subdomain hosting.
- Melakukan peluncuran awal.

## 19. Keputusan yang Masih Perlu Ditentukan

- Apakah data anggota diisi satu per satu atau melalui Excel?
- Field apa saja yang dibutuhkan pada setiap template?
- Apakah pelanggan harus menyetujui preview sebelum kartu dicetak?
- Bagaimana cara menghitung ongkos kirim?
- Apakah pelanggan tetap menggunakan guest checkout?
- Bagaimana kebijakan revisi desain, pembatalan, dan pengembalian dana?
- Berapa harga final setiap tier?
- Berapa lama data kartu dan foto disimpan?
- Siapa yang bertanggung jawab atas proses cetak dan pengiriman?

## 20. Definition of Done

MVP dapat dianggap siap diuji apabila:

- [ ] Pelanggan dapat melihat katalog template.
- [ ] Pelanggan dapat memilih template dan mengisi data.
- [ ] Keranjang mendukung beberapa template.
- [ ] Harga grosir dihitung per template.
- [ ] Total checkout dihitung ulang di server.
- [ ] Pesanan dapat disimpan ke database.
- [ ] Admin dapat mengelola template dan harga.
- [ ] Admin dapat melihat dan memperbarui status pesanan.
- [ ] Pelanggan dapat mengajukan desain custom.
- [ ] Pembayaran QRIS dapat dibuat melalui payment gateway.
- [ ] Status pembayaran diperbarui melalui notifikasi yang terverifikasi.
- [ ] Halaman admin dilindungi autentikasi dan otorisasi.
- [ ] Data pelanggan dilindungi sesuai hak akses.
- [ ] Website responsif dan telah melewati pengujian dasar.

---

**Dokumen ini merupakan PRD awal.** Detail harga, kebijakan produksi, pengiriman, dan aturan revisi masih perlu diputuskan sebelum peluncuran produksi.
