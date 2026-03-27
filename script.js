// Typing Effect
const text = ["Full Stack Developer", "AI Enthusiast", "Web Designer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// AOS Init
AOS.init({
  duration: 1000,
});

