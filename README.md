# Vue 3 + Vite

# Transport Shipment Tracker UI

<!-- Proyek ini adalah aplikasi pelacak pengiriman sederhana (Shipment Tracker) yang dibangun menggunakan Vue 3 (Composition API), Pinia, dan **TailwindCSS**[cite: 1, 9, 26]. Aplikasi ini memungkinkan pengguna untuk mengelola daftar pengiriman dan menetapkan transporter secara efisien.

## 🛠 Project Structure
Struktur folder dirancang agar modular dan mudah dipahami sesuai standar industri[cite: 42, 43]:

```text
shipment-tracker/
├── src/
│   ├── router/
│   │   └── index.js        # Konfigurasi navigasi (List & Detail)
│   ├── store/
│   │   ├── shipmentStore.js # State Management & Logic (Pinia)
│   │   └── shipmentStore.test.js # Unit Testing (Vitest)
│   ├── views/
│   │   ├── ListView.vue    # Halaman Daftar Pengiriman
│   │   └── DetailView.vue  # Halaman Detail & Assign Transporter
│   ├── App.vue             # Root Component
│   └── main.js             # Entry Point & Library Setup
├── tailwind.config.js      # Konfigurasi Styling Responsive
├── package.json            # Dependencies & Scripts
└── README.md               # Dokumentasi Proyek -->

<!-- 🚀 Steps to Run Locally
Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer Anda:Persiapan: Pastikan Anda sudah menginstal Node.js.Install Dependencies: npm install
Jalankan Development Server: npm run dev
Aplikasi dapat diakses di browser melalui alamat yang muncul di terminal (biasanya http://localhost:5173).Jalankan Unit Test (Bonus Case): npm run test

📝 Assumptions & NotesBerikut adalah beberapa catatan dan asumsi yang diambil selama pengembangan:Mock Data: Karena tidak menggunakan API eksternal, aplikasi menggunakan data statis JSON yang dikelola melalui Pinia Store sebagai simulasi backend.State Management: Penggunaan Pinia memastikan data tetap sinkron saat berpindah antar halaman tanpa perlu memanggil ulang data dari awal.

Real-time Simulation (Bonus A): Status pengiriman akan berubah secara otomatis setiap 10 detik menggunakan setInterval untuk mensimulasikan pembaruan data secara real-time.

Responsive Design (Bonus B): Tata letak telah dioptimalkan untuk perangkat mobile dan desktop menggunakan utility classes dari TailwindCSS.

Form Validation (Bonus D): Terdapat validasi pada dropdown transporter; sistem akan menolak proses jika pengguna belum memilih transporter.
---
