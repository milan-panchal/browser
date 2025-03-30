document.getElementById('searchBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let query = this.value.trim();
        const commands = {
            "": "",
            "": ""
        };
        if (commands[query]) {
            window.location.href = commands[query];
        } else {
            window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        }
    }
});

// Set your custom loading time in milliseconds (e.g., 3000ms = 3 seconds)
const customLoadingTime = 2000;

function showContent() {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  // Add fade-out effect
  loadingScreen.style.opacity = '0';

  // Wait for the fade-out transition to finish before hiding the loading screen
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
  }, 1000); // Match this with the CSS transition duration (1s)
}

// Start loading animation
setTimeout(showContent, customLoadingTime);

// Popup Functionality
const searchBox = document.getElementById('searchBox');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// Flag to track if popup was shown
let isPopupShown = false;

// Show popup only on the first click
searchBox.addEventListener('click', () => {
  if (!isPopupShown) {
    popup.style.display = 'flex';
    isPopupShown = true; // Prevent further popups
  }
});

// Close popup when clicking on 'x' button
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
