const thoughts = document.querySelectorAll(".thought");

thoughts.forEach((thought) => {
  const icon = thought.querySelector(".thought-icon");
  const popup = thought.querySelector(".thought-popup");

  icon.addEventListener("click", (e) => {
    e.stopPropagation();

    // close other popups
    document.querySelectorAll(".thought-popup").forEach((p) => {
      if (p !== popup) p.classList.remove("active");
    });

    popup.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!thought.contains(e.target)) {
      popup.classList.remove("active");
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const correctBooking = "J13568";

  const hints = [
    "Remember, the letters come first, then numbers.",
    "Check if all numbers are in ascending order.",
    "It starts with 'J'.",
    "Double-check the middle digits carefully."
  ];

  const form = document.querySelector(".form-left form");
  const input = document.getElementById("booking-number");
  const messageDiv = document.getElementById("booking-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userBooking = input.value.trim();

    if (userBooking === correctBooking) {
      messageDiv.textContent = "✅ Booking confirmed! Welcome to The Golden Age Society!";
      messageDiv.className = "booking-message-box correct";
    } else {
      const randomHint = hints[Math.floor(Math.random() * hints.length)];
      messageDiv.textContent = `❌ Incorrect booking number. Hint: ${randomHint}`;
      messageDiv.className = "booking-message-box wrong";
    }

    input.value = ""; // clear input
  });
});
