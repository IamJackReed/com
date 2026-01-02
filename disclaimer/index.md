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

    <a
      class="button button--secondary"
      href="about:blank"
      rel="nofollow noopener"
    >
      I Don’t Agree
    </a>
  </div>
</div>

<script>
(function () {
  var ACCEPT_KEY = "disclaimerAccepted:v1";
  var REDIRECT_KEY = "postDisclaimerRedirect";

  var button = document.getElementById("acceptDisclaimer");
  if (!button) return;

  button.addEventListener("click", function () {
    // Try localStorage first
    try {
      localStorage.setItem(ACCEPT_KEY, "true");
    } catch (e) {}

    // Cookie fallback (scoped to this project site)
    try {
      document.cookie =
        "disclaimerAccepted=v1; path={{ site.baseurl | default: '/' }}/; " +
        "max-age=31536000; samesite=lax";
    } catch (e) {}

    var redirect = null;
    try {
      redirect = sessionStorage.getItem(REDIRECT_KEY);
      sessionStorage.removeItem(REDIRECT_KEY);
    } catch (e) {}

    // Go back to where the user intended, or home
    if (redirect) {
      window.location.assign(redirect);
    } else {
      window.location.assign("{{ '/' | relative_url }}");
    }
  });
})();
</script>
