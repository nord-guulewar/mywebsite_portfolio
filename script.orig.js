(function () {
  'use strict';
  const _0x3ad5 = [
    'load',
    'preloader',
    'classList',
    'hidden',
    'parentNode',
    'removeChild',
    'DOMContentLoaded',
    'getElementById',
    'navToggle',
    'mainNav',
    'click',
    'open',
    'aria-expanded',
    'submit',
    'preventDefault',
    'name',
    'value',
    'trim',
    'email',
    'message',
    'Please complete all fields before sending.',
    '#ffb74d',
    '#a2ff94',
    'textContent',
    'Thank you, ',
    '. Your message has been recorded and a support rep will reply to ',
    ' soon.',
    'reset',
    'setTimeout',
    'scrollIntoView',
    'smooth',
    'scrollTo',
    'top',
    'behavior'
  ];

  const d = document;
  const w = window;
  const g = function (i) {
    return _0x3ad5[i];
  };
  const id = function (name) {
    return d[g(7)](name);
  };
  const validEmail = function (value) {
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/u.test(value);
  };

  w.addEventListener(g(0), function () {
    const preloader = id(g(1));
    if (preloader) {
      preloader[g(2)].add(g(3));
      w[g(28)](function () {
        const parent = preloader[g(4)];
        if (parent) {
          parent[g(5)](preloader);
        }
      }, 600);
    }
  });

  d.addEventListener(g(6), function () {
    const form = id('contactForm');
    const output = id('formMessage');
    const navToggle = id('navToggle');
    const mainNav = id('mainNav');

    if (navToggle && mainNav) {
      navToggle.addEventListener(g(10), function () {
        const expanded = mainNav[g(2)].toggle(g(11));
        this.setAttribute(g(12), expanded ? 'true' : 'false');
      });
    }

    if (!form || !output) {
      return;
    }

    form.addEventListener(g(13), function (event) {
      event[g(14)]();
      const name = form[g(15)][g(16)][g(17)]();
      const email = form[g(18)][g(16)][g(17)]();
      const message = form[g(19)][g(16)][g(17)]();

      if (!name || !email || !message || !validEmail(email)) {
        output[g(23)] = g(20);
        output.style.color = g(21);
        return;
      }

      output[g(23)] = g(24) + name + g(25) + email + g(26);
      output.style.color = g(22);
      form[g(27)]();

      w[g(28)](function () {
        output[g(23)] = '';
      }, 7000);
    });
  });
})();