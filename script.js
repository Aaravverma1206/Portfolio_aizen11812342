// Auto Year
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Smooth Scroll
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Open Video Modal
function openVideo(videoFile) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("modalVideo");
  const source = document.getElementById("videoSource");

  source.src = videoFile;
  video.load();

  modal.style.display = "flex";
}

// Close Video Modal
function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("modalVideo");

  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

// Close when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideo();
  }
};