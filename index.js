const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

// Port harus dinamis agar bisa jalan di Vercel/Railway
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Rute Home
app.get("/", (req, res) => {
  res.render("home");
});

// Rute About
app.get("/about", (req, res) => {
  res.render("about");
});

// Aksi saat tombol "Sapa Saya" diklik
app.post("/greet", (req, res) => {
  const namaUser = req.body.nama;
  res.render("greeting", { nama: namaUser });
});

// Rute Team
app.get("/team", (req, res) => {
  const timKita = [
    { nama: "Rajib", peran: "Pengembang Utama" },
    { nama: "Tembakau", peran: "Dukungan Mental" },
    { nama: "Gemini", peran: "Asisten AI" },
    { nama: "Node.js", peran: "Mesin Backend" },
    { nama: "Express", peran: "Web Framework" },
  ];
  res.render("team", { anggota: timKita });
});

// Menjalankan Server
app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`);
});
