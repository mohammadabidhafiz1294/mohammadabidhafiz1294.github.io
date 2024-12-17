document.addEventListener('DOMContentLoaded', function () {
  var options = {
    strings: [
      'Physics Student',
      'Software Developer',
      'DevOps Engineer',
      'Quantum Enthusiast'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true
  };

  var typed = new Typed('#typed-tagline', options);
});
import { initContactForm } from './contact';
import { accordion } from './accordion';

initContactForm();
accordion();