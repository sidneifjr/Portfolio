(function() {

  "use strict";

  // Debounce do Lodash
  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.querySelector(".btnTop").style.opacity = "1";
    } else {
      document.querySelector(".btnTop").style.opacity = "0";
    }
  }

  const target = document.querySelectorAll("[data-anime]"),
    animationClass = "animate";

  function animeScroll() {
    const windowTop = window.pageYOffset + window.innerHeight * 3 / 4;

    target.forEach(function(element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      }
    });
  }

  animeScroll();

  // Otimizando a execução do script.
  if (target.length) {
    window.addEventListener(
      "scroll",
      debounce(function() {
        animeScroll();
      }, 100)
    );
  }
})();