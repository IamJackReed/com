---
layout: disclaimer
title: Disclaimer
permalink: /disclaimer/
robots: noindex, nofollow
---

<div class="disclaimer-card">
  <h1>Before we continue</h1>

  <p>
    Quick legal thing. I'm sharing thoughts, opinions, experiments, and market notes. Nothing here is financial advice,
    medical advice, life advice, or any other kind of “you told me to YOLO my pension” advice.
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
    <button id="acceptDisclaimer" type="button">I Understand &amp; Agree</button>
    <a class="button button--secondary" href="https://www.google.com/" rel="nofollow noopener">I Don’t Agree</a>
  </div>
</div>

<script>
  (function () {
    var button = document.getElementById('acceptDisclaimer');
    if (!button) return;

    button.addEventListener('click', function () {
      try {
        localStorage.setItem('disclaimerAccepted:v1', 'true');
      } catch (e) {
        /* localStorage may be unavailable; continue without blocking */
      }

      // Cookie fallback (helps when localStorage is blocked)
      try {
        document.cookie = 'disclaimerAccepted=v1; path=/; max-age=31536000; samesite=lax';
      } catch (e) {
        /* ignore */
      }

      var redirect = null;
      try {
        redirect = sessionStorage.getItem('postDisclaimerRedirect');
      } catch (e) {
        /* sessionStorage may be unavailable; default redirect will be used */
      }

      if (redirect) {
        try { sessionStorage.removeItem('postDisclaimerRedirect'); } catch (e) {}
        window.location.assign(redirect);
      } else {
        window.location.assign("{{ '/' | relative_url }}");
      }
    });
  })();
</script>
