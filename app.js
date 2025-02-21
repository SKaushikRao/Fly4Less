// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-98rtJx7MmZbDmm41Pp3_sRYZ_7H8ZxI",
  authDomain: "fly4less-898ff.firebaseapp.com",
  projectId: "fly4less-898ff",
  storageBucket: "fly4less-898ff.appspot.com", // Corrected storageBucket
  messagingSenderId: "316842129134",
  appId: "1:316842129134:web:d576bb29b0b277721765ff",
  measurementId: "G-540BLNSDT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle Google login
function googleLogin() {
  // Create a GoogleAuthProvider instance
  const provider = new GoogleAuthProvider();

  // Trigger Firebase login with a popup
  signInWithPopup(auth, provider)
    .then((result) => {
      // User successfully logged in
      const user = result.user;
      console.log("User logged in:", user);
      // Redirect to the landing page
      window.location.href = "/landing.html"; // Update this path as needed
    })
    .catch((error) => {
      // Handle errors during login
      console.error("Error during login:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      alert(`Login failed: ${error.message}`);
    });
}

// Attach the googleLogin function to the button click
document.addEventListener("DOMContentLoaded", () => {
  // Firebase Login Button
  const loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", googleLogin);
  } else {
    console.error("Button with ID 'loginButton' not found!");
  }

  // Add event listeners for navigation buttons
  const flightsButton = document.getElementById("flightsButton");
  if (flightsButton) {
    flightsButton.addEventListener("click", () => {
      window.parent.postMessage("navigate-flights", "*");
    });
  }

  const hotelsButton = document.getElementById("hotelsButton");
  if (hotelsButton) {
    hotelsButton.addEventListener("click", () => {
      window.parent.postMessage("navigate-hotels", "*");
    });
  }

  const dealsButton = document.getElementById("dealsButton");
  if (dealsButton) {
    dealsButton.addEventListener("click", () => {
      window.parent.postMessage("navigate-deals", "*");
    });
  }

  const aboutButton = document.getElementById("aboutButton");
  if (aboutButton) {
    aboutButton.addEventListener("click", () => {
      window.parent.postMessage("navigate-about", "*");
    });
  }

  // Add event listeners for all "Book Now" buttons
  document.querySelectorAll(".book-now-button").forEach(button => {
    button.addEventListener("click", () => {
      window.parent.postMessage("navigate-payments", "*");
    });
  });
});