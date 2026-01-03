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
    <button id="disclaimer-accept" type="button">
      I Understand &amp; Agree
    </button>

    <button id="disclaimer-reject" type="button" class="button button--secondary">
      I Don’t Agree
    </button>
  </div>
</div>

<script>
(function () {
  var ACCEPT_KEY = "disclaimerAccepted:v1";

  var acceptBtn = document.getElementById("disclaimer-accept");
  var rejectBtn = document.getElementById("disclaimer-reject");

  if (acceptBtn) {
    acceptBtn.addEventListener("click", function () {
      try {
        localStorage.setItem(ACCEPT_KEY, "true");
      } catch (e) {}

      // Cookie fallback (scoped to /com/)
      try {
        document.cookie =
          "disclaimerAccepted=true; path=/com/; max-age=31536000; samesite=lax";
      } catch (e) {}

      // Redirect to site root
      window.location.href = "{{ '/' | relative_url }}";
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", function () {
      try {
        localStorage.setItem(ACCEPT_KEY, "false");
      } catch (e) {}

      // Clear page / exit politely
      window.location.href = "about:blank";
    });
  }
})();
</script>
