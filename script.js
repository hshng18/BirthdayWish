
const PHOTOS = [
  { file: "Pic1.jpeg", caption: "My favorite distraction. ❤️‍🔥" },
  { file: "Pic2.jpeg", caption: "I get to call her mine. 😏" },
  { file: "Pic3.jpeg", caption: "My favorite person in every frame" },
  { file: "Pic4.jpeg", caption: "She's the flex." },
  { file: "Pic5.jpeg", caption: "I won the lottery the day I met you." },
  { file: "Pic6.jpeg", caption: "This is what happiness actually looks like" },
  { file: "Pic7.jpeg", caption: "Beauty with a dangerous smile." },
  { file: "Pic8.jpeg", caption: "Warning: dangerously cute" },
  { file: "Pic9.jpeg", caption: "Mera baccha, forever and always 🌸" },
  { file: "Pic10.jpeg", caption: "My ras malai — soft, sweet, and completely irreplaceable" },
  { file: "Pic11.jpeg", caption: "Not all love stories are romantic — some are just us" },
  { file: "Pic12.jpeg", caption: "She's the definition of \"wow.\"" },
  { file: "Pic13.jpeg", caption: "She doesn't chase attention—she owns it." },
  { file: "Pic14.jpeg", caption: "Meri ras malai, sweeter than the real thing" },
  { file: "Pic15.jpeg", caption: "My person. My peace. My cutie." },
  { file: "Pic16.jpeg", caption: "My favorite headache, my favorite everything" },
  { file: "Pic17.jpeg", caption: "My favorite chapter, still being written" },
  { file: "Pic18.jpeg", caption: "Every angle is her best angle." },
];

const VIDEOS = [
  { file: "vid1.mp4", caption: "Proof that my taste is elite. 😌" },
  { file: "vid2.mp4", caption: "Respectfully... wow. 😮‍💨" },
];

/* ========================================================================= */

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  const empty = document.getElementById("gallery-empty");
  if (!grid) return;

  if (!PHOTOS.length) {
    if (empty) empty.style.display = "block";
    return;
  }
  if (empty) empty.style.display = "none";

  grid.innerHTML = PHOTOS.map((p, i) => `
    <figure class="card">
      <img class="media" src="${p.file}" alt="${p.caption || "Photo of Bhavana"}"
           loading="lazy" data-index="${i}" onclick="openLightbox('photo', ${i})">
      ${p.caption ? `<figcaption class="cap">${p.caption}</figcaption>` : ""}
    </figure>
  `).join("");
}

function renderVideos() {
  const grid = document.getElementById("videos-grid");
  const empty = document.getElementById("videos-empty");
  if (!grid) return;

  if (!VIDEOS.length) {
    if (empty) empty.style.display = "block";
    return;
  }
  if (empty) empty.style.display = "none";

  grid.innerHTML = VIDEOS.map((v, i) => `
    <figure class="card video-card">
      <video src="${v.file}" controls preload="metadata"></video>
      ${v.caption ? `<figcaption class="cap">${v.caption}</figcaption>` : ""}
    </figure>
  `).join("");
}

function openLightbox(type, index) {
  const box = document.getElementById("lightbox");
  const stage = document.getElementById("lightbox-stage");
  if (!box || !stage) return;

  if (type === "photo") {
    const p = PHOTOS[index];
    stage.innerHTML = `<img src="${p.file}" alt="${p.caption || ""}">`;
  }
  box.classList.add("open");
}

function closeLightbox() {
  const box = document.getElementById("lightbox");
  const stage = document.getElementById("lightbox-stage");
  if (box) box.classList.remove("open");
  if (stage) stage.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderVideos();

  const closeBtn = document.getElementById("lightbox-close");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

  const box = document.getElementById("lightbox");
  if (box) {
    box.addEventListener("click", (e) => {
      if (e.target === box) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
