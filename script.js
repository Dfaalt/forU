// Inisialisasi variabel
let ftom = 0; // Variabel penanda status
let jikapr = 1; // Variabel penanda status
let ftganti = 0; // Variabel penanda status
let flag = 1; // Variabel penanda status
let flagg = 1; // Variabel penanda status
let fungsi = 0; // Variabel penanda status

// Menyalin isi dari Bn ke Bn2
Bn2.innerHTML = Bn.innerHTML;
// Menyembunyikan elemen dengan id psnWA
psnWA.style.display = "none";

// Fungsi untuk menampilkan div
const showDiv = () => {
  // Menyalin isi dari psnWA ke variabel pesanwhatsapp
  pesanwhatsapp = psnWA.innerHTML;
  // Menyembunyikan Bn2
  Bn2.style.display = "none";
  // Menetapkan style untuk elemen Content
  Content.style = "opacity:1; margin-top:15vh;";
  // Menetapkan style untuk elemen ket
  ket.style = "margin-top:30px";
};

// Fungsi untuk memulai konten
const memulai = () => {
  // Menganimasikan suratin dan ket untuk menghilangkan mereka
  suratin.style = "transition: all 1s ease; transform: scale(.1); opacity:0";
  ket.style = "transition: all 1s ease; transform: scale(.1); opacity:0";
  // Menjalankan mulaikonten setelah 300ms
  setTimeout(mulaikonten, 300);
};

// Fungsi untuk memulai konten setelah animasi selesai
const mulaikonten = () => {
  otomatis(); // Memanggil fungsi otomatis
  suratin.style.display = "none";
  ket.style.display = "none";
  Content.style = "opacity:1; margin-top:4vh"; // Menetapkan style untuk Content
  bodyblur.style = "opacity:.6; animation:none";
  wallpaper.style = "transform: scale(2); opacity:1;"; // Menetapkan style untuk wallpaper
  fotoakhir.style = "display:inline-flex;"; // Menampilkan elemen fotoakhir
  setTimeout(ftmuncul, 200); // Menjalankan fungsi ftmuncul setelah 200ms
  bq.style =
    "position:relative; opacity:1; visibility:visible; transform: scale(1); border-radius:var(--bingkai); margin-top:0;"; // Menetapkan style untuk elemen bq
  fungsi = 1; // Mengatur fungsi menjadi 1
  setTimeout(tombol, 500); // Menjalankan fungsi tombol setelah 500ms
};

// Fungsi untuk menampilkan fotoakhir
const ftmuncul = () => {
  switch (ftganti) {
    case 0:
      fotoakhir.style = "display:inline-flex; opacity:1; transform:scale(1);";
      break;
    case 1:
      fotoakhir.src = fotoakhir2.src;
      fotoakhir.style =
        "display:inline-flex; opacity:1; transition:all .7s ease; transform:scale(1);";
      break;
    case 2:
      fotoakhir.src = fotoakhir3.src;
      fotoakhir.style =
        "display:inline-flex; opacity:1; transition:all .7s ease; transform:scale(1);";
      break;
  }
};

// Fungsi untuk menyembunyikan fotoakhir
const fthilang = () => {
  fotoakhir.style =
    "display:inline-flex; opacity:1; transition:all .7s ease; transform:scale(.1);";
};

// Fungsi untuk animasi fotoakhir
const jjfoto = () => {
  fotoakhir.style.animation = "rto .8s infinite alternate";
};

// Fungsi untuk menampilkan tombol
const tombol = () => {
  Tombol.style = "opacity:1; transform: scale(1);";
  Bn.style = "margin:12px 0 12px 12px";
  ftom = 1; // Mengatur ftom menjadi 1
};

// Fungsi multifungsi, tergantung pada nilai ftom
const multifungsi = () => {
  if (ftom === 1) {
    diterima();
  } else if (ftom === 5) {
    menuju();
  }
};

// Fungsi untuk menuju tautan WhatsApp
const menuju = async () => {
  await swals.fire("OK!", "Kirim pesan ke WhatsApp aku, ya!", "success"); // Memunculkan pesan Swal
  window.location.href = `https://api.whatsapp.com/send?phone=6282211708146&text=${pesanwhatsapp}`; // Membuka tautan WhatsApp
  Tombol.style = "margin-top:15px; opacity:1; transform: scale(1);"; // Menetapkan style untuk Tombol
};

// Menjalankan fungsi showDiv setelah 100ms
setTimeout(showDiv, 100);

// Inisialisasi Swal
const swalst = Swal.mixin({
  timer: 2777,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 100,
});

// Ambil elemen audio
const audio = new Audio();

// Ambil nilai src dari elemen source di dalam elemen audio
audio.src = document.getElementById("linkmp3").querySelector("source").src;

// Inisialisasi Swal
const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: "#FF0040",
  imageWidth: 100,
  imageHeight: 100,
});

// Membuat elemen style
const style = document.createElement("style");

// Mendapatkan tanggal hari ini
let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
today = `${dd} ${monthNames[today.getMonth()]} ${yyyy}`;

// Mendapatkan elemen body
const body = document.querySelector("body");

// Fungsi untuk membuat love animation
const createHeart = () => {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = `${Math.random() * 90}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  body.appendChild(heart);
};

// Menghapus love animation jika lebih dari 100
setInterval(() => {
  const heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);
