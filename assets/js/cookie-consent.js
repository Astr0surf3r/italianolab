// Cookie consent functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check if user has already accepted cookies
  if (!localStorage.getItem('cookieConsent')) {
    // Create cookie banner
    showCookieBanner();
  }
});

function showCookieBanner() {
  const cookieBanner = document.createElement('div');
  cookieBanner.id = 'cookie-banner';
  cookieBanner.className = 'cookie-banner';
  cookieBanner.innerHTML = `
    <div class="cookie-content">
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <div class="cookie-buttons">
        <button id="cookie-accept" class="btn btn--primary">Accept all cookies</button>
        <button id="cookie-decline" class="btn">Only necessary cookies</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(cookieBanner);
  
  // Add event listeners for buttons
  document.getElementById('cookie-accept').addEventListener('click', function() {
    acceptCookies(true);
    hideCookieBanner();
  });
  
  document.getElementById('cookie-decline').addEventListener('click', function() {
    acceptCookies(false);
    hideCookieBanner();
  });
}

function hideCookieBanner() {
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner) {
    cookieBanner.style.display = 'none';
    setTimeout(() => {
      cookieBanner.remove();
    }, 500);
  }
}

function acceptCookies(acceptAll) {
  // Save the user's preference
  localStorage.setItem('cookieConsent', 'true');
  localStorage.setItem('cookiePreference', acceptAll ? 'all' : 'necessary');
  
  // If only necessary cookies are accepted, you might want to disable certain tracking scripts
  if (!acceptAll) {
    // Code to disable non-essential cookies/tracking
    console.log('Only necessary cookies accepted');
  } else {
    console.log('All cookies accepted');
    // You can initialize additional analytics or tracking scripts here
  }
}
