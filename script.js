let ftom = 0;
let jikapr = 1;
let ftganti = 0;
let flag = 1;
let flagg = 1;
let fungsi = 0;
Bn2.innerHTML = Bn.innerHTML;
psnWA.style.display = "none";

const showDiv = () => {
  pesanwhatsapp = psnWA.innerHTML;
  Bn2.style.display = "none";
  Content.style = "opacity:1; margin-top:15vh;";
  ket.style = "margin-top:30px";
};

const memulai = () => {
  suratin.style = "transition: all 1s ease; transform: scale(.1); opacity:0";
  ket.style = "transition: all 1s ease; transform: scale(.1); opacity:0";
  setTimeout(mulaikonten, 300);
};

const mulaikonten = () => {
  otomatis();
  suratin.style.display = "none";
  ket.style.display = "none";
  Content.style = "opacity:1; margin-top:4vh";
  bodyblur.style = "opacity:.6; animation:none";
  wallpaper.style = "transform: scale(2); opacity:1;";
  fotoakhir.style = "display:inline-flex;";
  setTimeout(ftmuncul, 200);
  bq.style =
    "position:relative; opacity:1; visibility:visible; transform: scale(1); border-radius:var(--bingkai); margin-top:0";
  fungsi = 1;
  setTimeout(tombol, 500);
};

const ftmuncul = () => {
  switch (ftganti) {
    case 0:
      fotoakhir.style = "display:inline-flex; opacity:1; transform:scale(1)";
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

const fthilang = () => {
  fotoakhir.style =
    "display:inline-flex; opacity:1; transition:all .7s ease; transform:scale(.1)";
};

const jjfoto = () => {
  fotoakhir.style.animation = "rto .8s infinite alternate";
};

const tombol = () => {
  Tombol.style = "opacity:1; transform: scale(1);";
  Bn.style = "margin:12px 0 12px 12px";
  ftom = 1;
};

const multifungsi = () => {
  if (ftom === 1) {
    diterima();
  } else if (ftom === 5) {
    menuju();
  }
};

const menuju = async () => {
  await swals.fire("OK!", "Kirim pesan ke WhatsApp aku, ya!", "success");
  window.location.href = `https://api.whatsapp.com/send?phone=6282211708146&text=${pesanwhatsapp}`;
  Tombol.style = "margin-top:15px; opacity:1; transform: scale(1);";
};

setTimeout(showDiv, 100);

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

const style = document.createElement("style");
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
const body = document.querySelector("body");

const createHeart = () => {
  const heart = document.createElement("div");
  heart.className = "fas fa-heart";
  heart.style.left = `${Math.random() * 90}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  body.appendChild(heart);
};

setInterval(() => {
  const heartArr = document.querySelectorAll(".fa-heart");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);
