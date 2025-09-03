// Smooth Scroll Function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Typing Animation (Optional)
window.onload = () => {
  const title = document.querySelector(".hero h1");
  const text = title.textContent;
  title.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
};
