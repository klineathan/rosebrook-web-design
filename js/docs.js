/**
 * Tiny docs helpers: mobile nav, swatch copy, native <dialog>.
 * Not required to consume the CSS in another site.
 */
(function () {
  var nav = document.querySelector("[data-rb-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  if (nav && toggle) {
    var syncNav = function () {
      var open = toggle.checked === true || nav.classList.contains("is-open");
      if (toggle.checked === true) nav.classList.add("is-open");
      if (toggle.checked === false) nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("change", syncNav);
    toggle.addEventListener("click", function () {
      if (toggle.type !== "checkbox") {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      }
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (el) {
    el.addEventListener("click", function () {
      var value = el.getAttribute("data-copy") || "";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () {
          el.classList.add("is-copied");
          window.setTimeout(function () {
            el.classList.remove("is-copied");
          }, 1400);
        });
      }
    });
  });

  document.querySelectorAll("[data-dialog-open]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-dialog-open");
      var dialog = id ? document.getElementById(id) : null;
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  document.querySelectorAll("[data-dialog-close]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dialog = btn.closest("dialog");
      if (dialog) dialog.close();
    });
  });
})();
