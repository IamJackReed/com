---
---
(function () {
  var ACCEPT_KEY = "disclaimerAccepted:v1";
  var REDIRECT_KEY = "postDisclaimerRedirect";
  var COOKIE_NAME = "disclaimerAccepted";
  var COOKIE_VALUE = "v1";

  var HOME_URL = "{{ '/' | relative_url }}";
  var BASE_PATH = "{{ site.baseurl | default: '/' }}";
  if (!BASE_PATH.endsWith("/")) BASE_PATH += "/";

  function setCookie(name, value, maxAgeSeconds) {
    try {
      document.cookie =
        encodeURIComponent(name) + "=" + encodeURIComponent(value) +
        "; path=" + BASE_PATH +
        "; max-age=" + (maxAgeSeconds || 0) +
        "; samesite=lax";
    } catch (e) {}
  }

  var acceptBtn = document.getElementById("acceptDisclaimer");
  var rejectBtn = document.getElementById("rejectDisclaimer");

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function (e) {
      e.preventDefault();

      try { localStorage.setItem(ACCEPT_KEY, "true"); } catch (e2) {}
      setCookie(COOKIE_NAME, COOKIE_VALUE, 31536000);

      var redirect = null;
      try {
        redirect = sessionStorage.getItem(REDIRECT_KEY);
        sessionStorage.removeItem(REDIRECT_KEY);
      } catch (e3) {}

      window.location.assign(redirect || HOME_URL);
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", function (e) {
      e.preventDefault();

      try { localStorage.setItem(ACCEPT_KEY, "false"); } catch (e2) {}
      setCookie(COOKIE_NAME, "", 0);

      window.location.assign("about:blank");
    });
  }
})();
