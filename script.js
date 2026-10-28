(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var media = window.matchMedia("(prefers-color-scheme: light)");

  function stored() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function save(value) {
    try {
      localStorage.setItem("theme", value);
    } catch (e) {
      /* private mode: theme just will not persist */
    }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      var light = theme === "light";
      toggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
      toggle.textContent = light ? "☾" : "☀";
    }
  }

  apply(stored() || (media.matches ? "light" : "dark"));

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      apply(next);
      save(next);
    });
  }

  if (media.addEventListener) {
    media.addEventListener("change", function (event) {
      if (!stored()) {
        apply(event.matches ? "light" : "dark");
      }
    });
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
