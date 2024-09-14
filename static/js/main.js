document.addEventListener('DOMContentLoaded', function() {
  var options = {
    strings: [
      'DevOps Engineer',
      'Physics Student',
      'Quantum Computing Enthusiast',
      'Software Developer'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true
  };

  var typed = new Typed('#typed-tagline', options);
});