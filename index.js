const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
const port = 3000;

// PENTING: Supaya server bisa nangkep data dari form HTML
app.use(express.urlencoded({ extended: true }));

// Ganti rute home
app.get("/", (req, res) => {
  res.render("home"); // Otomatis cari home.ejs di folder views
});

// Ganti rute about
app.get("/about", (req, res) => {
  res.render("about"); // Otomatis cari about.ejs di folder views
});

// Aksi saat tombol "Sapa Saya" diklik
app.post("/greet", (req, res) => {
  const namaUser = req.body.nama; // Mengambil nama yang kamu ketik
  // Sekarang kita pakai res.render, bukan res.send lagi
  res.render("greeting", { nama: namaUser });
});

app.get("/team", (req, res) => {
  // Ini simulasi data dari database
  const timKita = [
    { nama: "Rajib", peran: "Lead Developer" },
    { nama: "Tembakau", peran: "Mental Support" },
    { nama: "Gemini", peran: "AI Assistant" },
    { nama: "Node.js", peran: "Backend Engine" },
    { nama: "Express", peran: "Web Framework" },
  ];

  // Kirim data 'timKita' ke file 'team.ejs' dengan nama variabel 'anggota'
  res.render("team", { anggota: timKita });
});

// Menjalankan Server
app.listen(port, () => {
  console.log("=========================================");
  console.log("   SERVER RDS BERHASIL DIJALANKAN! 🚀    ");
  console.log("=========================================");
  console.log(`🔗 Link: http://localhost:${port}`);
  console.log("Tekan Ctrl + C di CMD untuk mematikan.");
});
