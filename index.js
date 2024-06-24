
  document.addEventListener("DOMContentLoaded", function() {
    // Select the fade overlay element
    const fadeOverlay = document.getElementById("fade-overlay");
  
    // Set initial styles for the overlay
    fadeOverlay.style.position = "fixed";
    fadeOverlay.style.top = 0;
    fadeOverlay.style.left = 0;
    fadeOverlay.style.width = "100vw"; 
    fadeOverlay.style.height = "100vh"; 
    fadeOverlay.style.backgroundColor = "black";
    fadeOverlay.style.opacity = 1;
  
    // Create a timeline for the fade animation
    const tl = gsap.timeline();
  
    // Delay the fade-out by 0.25 seconds, then fade out over 1 second
    tl.to(fadeOverlay, { opacity: 0, duration: 1, ease: "power3.inOut" }, "+=0.25")
      .add(() => {
        // Add the 'hidden' class after the animation completes
        fadeOverlay.classList.add("hidden");
      }, "+=0.25"); // Adjust the delay before adding the hidden class as needed
  });

