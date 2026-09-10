// Add/replace filenames here when real artwork is uploaded to images/
const BACKGROUND_IMAGES = [
  "images/filler-1.jpg",
  "images/filler-2.jpg",
  "images/filler-3.jpg",
  "images/filler-4.jpg",
  "images/filler-5.jpg",
];

const SLIDE_DURATION_MS = 6000;

function initSlideshow() {
  const container = document.getElementById("bg-slideshow");
  if (!container || BACKGROUND_IMAGES.length === 0) return;

  const layers = BACKGROUND_IMAGES.map((src) => {
    const layer = document.createElement("div");
    layer.className = "bg-layer";
    layer.style.backgroundImage = `url("${src}")`;
    container.appendChild(layer);
    return layer;
  });

  layers[0].classList.add("active");
  if (layers.length === 1) return;

  let current = 0;
  setInterval(() => {
    const next = (current + 1) % layers.length;
    layers[current].classList.remove("active");
    layers[next].classList.add("active");
    current = next;
  }, SLIDE_DURATION_MS);
}

document.addEventListener("DOMContentLoaded", initSlideshow);
