document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
  
    formFeedback.textContent = "✅ Thanks for reaching out! I will get back to you soon.";
    formFeedback.style.color = "green";
    
  });
}
