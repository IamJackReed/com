---
layout: disclaimer
title: Disclaimer
permalink: /disclaimer/
robots: noindex, nofollow
---

<div class="disclaimer-card">
  <h1>Before we continue</h1>

  <p>
    Quick legal thing. I'm sharing thoughts, opinions, experiments, and market notes.
    Nothing here is financial advice, medical advice, life advice, or any other kind of
    “you told me to YOLO my pension” advice.
  </p>

  <p><strong>By continuing you confirm that:</strong></p>

  <ul>
    <li>You understand this site is for education / entertainment only.</li>
    <li>You’ll make your own decisions and take your own risks.</li>
    <li>You won’t treat anything here as a recommendation to buy, sell, or trade anything.</li>
    <li>You’re not going to come back later and say “but you said…”</li>
  </ul>

  <p>If you don’t agree, please close this tab.</p>

  <div class="disclaimer-actions">
  <button id="acceptDisclaimer" type="button">
    I Understand &amp; Agree
  </button>

  <button id="rejectDisclaimer" type="button" class="button button--secondary">
    I Don’t Agree
  </button>
</div>

<script>
(function () {
  // MUST match _includes/disclaimer-gate.html
  var ACCEPT_KEY   = "disclaimerAccepted:v1";
  var REDIRECT_KEY = "postDisclaimerRedirect";
  var COOKIE_NAME  = "disclaimerAccepted";
  var COOKIE_VALUE = "v1";

  var acceptBtn = document.getElementById("acceptDisclaimer");
  var rejectBtn = document.getElementById("rejectDisclaimer");

  function setCookie(name, value, maxAgeSeconds) {
    try {
      var basePath = "{{ site.baseurl | default: '/' }}";
      if (!basePath.endsWith("/")) basePath += "/";
      document.cookie =
        encodeURIComponent(name) + "=" + encodeURIComponent(value) +
        "; path=" + basePath +
        "; max-age=" + (maxAgeSeconds || 0) +
        "; samesite=lax";
    } catch (e) {}
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // localStorage primary
      try { localStorage.setItem(ACCEPT_KEY, "true"); } catch (e) {}

      // cookie fallback (value MUST be "v1")
      setCookie(COOKIE_NAME, COOKIE_VALUE, 31536000);

      // return user to intended page if available
      var redirect = null;
      try {
        redirect = sessionStorage.getItem(REDIRECT_KEY);
        sessionStorage.removeItem(REDIRECT_KEY);
      } catch (e) {}

      if (redirect) {
        window.location.assign(redirect);
      } else {
        window.location.assign("{{ '/' | relative_url }}");
      }
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // persist rejection
      try { localStorage.setItem(ACCEPT_KEY, "false"); } catch (e) {}

      // clear cookie (so gate never treats as accepted)
      setCookie(COOKIE_NAME, "", 0);

      // exit
      window.location.assign("about:blank");
    });
  }
})();
</script>
