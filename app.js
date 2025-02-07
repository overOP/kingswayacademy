function toggleNav() {
    document.getElementById("mobile-nav").classList.toggle("flex");
  }
  function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    answer.classList.toggle("hidden");
}


// Back to Top button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
