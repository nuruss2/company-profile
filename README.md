# Nexora — Website Company Profile

Template website company profile untuk bisnis produk dengan gaya modern premium, warna hitam dan emas.

## Struktur folder

```text
nexora-company-profile/
├── index.html
├── tentang.html
├── produk.html
├── portofolio.html
├── kontak.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── images/
    │   └── (simpan gambar lokal Anda di sini)
    └── icons/
        └── (simpan favicon atau ikon lokal di sini)
```

## Cara menjalankan

1. Ekstrak ZIP.
2. Buka folder `nexora-company-profile` di Visual Studio Code.
3. Pasang ekstensi **Live Server** (opsional, disarankan).
4. Klik kanan `index.html` → **Open with Live Server**.
5. Coba semua menu: Beranda, Tentang Kami, Produk, Portofolio, dan Kontak.

Website juga dapat dibuka langsung dengan klik dua kali `index.html`, tetapi Live Server lebih nyaman untuk pengembangan.

## Fitur yang sudah tersedia

- Lima halaman yang saling terhubung.
- Navbar dan footer konsisten di semua halaman.
- Navigasi mobile dengan hamburger menu.
- Desain responsif desktop, tablet, dan ponsel.
- Halaman produk dengan filter kategori dan pencarian.
- Modal detail produk.
- Form kontak dengan validasi demo.
- SEO dasar berupa title dan meta description.

## Bagian yang perlu Anda sesuaikan

- Ganti nama Nexora, logo, deskripsi, alamat, email, dan nomor telepon.
- Ganti harga serta nama produk dengan data asli.
- Ganti statistik, tahun perjalanan, portofolio, dan pencapaian dengan data yang valid.
- Gambar saat ini menggunakan URL Unsplash sehingga perlu koneksi internet. Untuk penggunaan final, unduh gambar yang memiliki izin penggunaan dan simpan ke `assets/images/`, lalu ubah URL gambar pada `assets/css/style.css`.
- Form kontak belum mengirim data ke email/database. Perlu backend atau layanan form jika ingin menerima pesan sungguhan.
- `nexora.example` adalah alamat contoh, bukan alamat email aktif.

## Teknologi

HTML5, CSS3, JavaScript vanilla, Google Fonts, dan gambar eksternal Unsplash. Tidak menggunakan framework atau Bootstrap.
