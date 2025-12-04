// Replace with your actual photos and messages
const memories = [
  {
    src: "assets/photos/photo1.jpg",
    title: "Wedding Day",
    text: "The beautiful beginning of your forever journey."
  },
  {
    src: "assets/photos/photo3.jpg",
    title: "Family Moments",
    text: "The days when our small family felt like the whole world."
  },
  {
    src: "assets/photos/photo2.jpg",
    title: "Festive Smiles",
    text: "Celebrating festivals together with joy and laughter."
  },
  {
    src: "assets/photos/photo4.jpg",
    title: "Travel Memories",
    text: "Trips that gave us stories, photos, and unforgettable memories."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("galleryGrid");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const modalClose = document.getElementById("modalClose");
  const scrollGalleryBtn = document.getElementById("scrollGalleryBtn");
  const musicToggleBtn = document.getElementById("musicToggleBtn");
  const bgMusic = document.getElementById("bgMusic");

  // Render gallery
  memories.forEach((memory, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `
      <img src="${memory.src}" alt="${memory.title}" data-index="${index}" />
      <div class="gallery-caption">${memory.title}</div>
    `;
    galleryGrid.appendChild(item);
  });

  // Open modal on image click
  galleryGrid.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (!img) return;

    const index = img.getAttribute("data-index");
    const memory = memories[index];

    modalImage.src = memory.src;
    modalTitle.textContent = memory.title;
    modalText.textContent = memory.text;

    modal.classList.add("open");
  });

  // Close modal
  modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });

  // Scroll to gallery button
  scrollGalleryBtn.addEventListener("click", () => {
    const gallerySection = document.getElementById("gallery");
    gallerySection.scrollIntoView({ behavior: "smooth" });
  });

  // Music toggle
  // Music toggle - FIXED
let isPlaying = false;

musicToggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicToggleBtn.textContent = "Pause Music";
      console.log("✅ Music playing");
    }).catch((err) => {
      console.log("❌ Music error:", err);
    });
  } else {
    bgMusic.pause();
    isPlaying = false;
    musicToggleBtn.textContent = "Play Music";
    console.log("⏸️ Music paused");
  }
});
})

