// Simple form handling – just shows an alert for demo purposes
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
  this.reset();
});
