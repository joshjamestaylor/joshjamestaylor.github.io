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
    "There is a hidden letter in the acorn.",
    "Start with the first note of the chord that sets the mood for the evening.",
    "He’s moving across the river; record the path he takes.",
    "Follow the ballroom dance steps on a board of some kind.",
    "Add up the selected dishes and drinks to find this lucky number.",
    "He met the staff in a certain order.",

    "You may need to expand your horizons to find the letter.",
    "A minor key will help you with this.",
    "I wonder what the meal will cost.",
  ];

  const form = document.querySelector(".form-container form");
  const input = document.getElementById("booking-number");
  const messageDiv = document.getElementById("booking-message");
  const lengthMessage = document.getElementById("length-message");

  if (!form) return;

  // hide left message box initially
  messageDiv.style.display = "none";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userBooking = input.value.trim().toUpperCase();

    // reset messages
    lengthMessage.textContent = "";
    messageDiv.textContent = "";
    messageDiv.className = "booking-message-box";
    messageDiv.style.display = "none";

    // LENGTH VALIDATION FIRST
    if (userBooking.length !== 6) {

      input.value = "";
      lengthMessage.textContent =
        "Invalid booking number.";
      
      return;
    }

    // Only now show left box
    messageDiv.style.display = "block";

   if (userBooking === correctBooking) {
  messageDiv.innerHTML = 
  `
  <div class="booking-message-content">
  <div class="booking-message-content-header">Congratulations!</div>
  <div class="booking-message-content-body">
    Your booking is confirmed!<br>
    Please enjoy an enchanting evening of great jazz, fine company, and unforgettable memories at <strong>The Golden Age Society</strong>.
  </div>
  <div class="booking-message-content-footer">
    <em>Event Date: February 14, 1924</em>
  </div>

  <div class="booking-message-content-flavor">
  <p>"As soon as I stepped through the doors of The Golden Age Society, the soft golden glow of lights wrapped me like a warm hug. The air smelled faintly of polished wood and fresh flowers, and somewhere in the distance, the piano began to roll its first jazzy notes, like it was playing just for us.</p>

<p>He was waiting by the grand marble cocktail bar, looking effortlessly charming. His smile was that kind that makes your heart do little somersaults. I couldn’t help but notice the way the light caught his eyes—like they were little pieces of amber glowing in the dim elegance of the room.</p>

<p>We laughed nervously over our cocktails—he insisted I try a Sidecar, which was tart and sweet, while I teased him about ordering a mocktail Ginger Fizz “just to be safe.” But soon, the awkwardness melted away, swept up in the rhythm of the live jazz.</p>

<p>The food arrived and oh my goodness… it was a little slice of heaven. Deviled eggs to start, perfectly creamy with just a hint of paprika. Then the wild mushroom risotto, rich and velvety, each bite better than the last. And dessert—oh, dessert! The chocolate soufflé came up in a swirl of warmth and cocoa aroma; it practically melted in my mouth while he watched me with the most delighted expression.</p>

<p>We wandered over to the grand ballroom, where the music swelled, and before I knew it, he was extending his hand, and we were gliding across the polished floor. Step, spin, laugh, dip—we danced like the world outside didn’t exist, just the two of us and the jazz. I whispered, “I hope I remember the steps,” and he laughed, guiding me effortlessly through the rhythm.</p>

<p>At one point, we peeked at the roulette table, watching the little ball spin in a golden whirl. He joked about the numbers needing to be in ascending order, and I rolled my eyes, but it made my heart do a happy little skip.</p>

<p>By the time we finally stepped outside onto Orange Way, the night had spun itself into a memory I wanted to bottle. The soft hum of the Mississippi in the distance, the lingering scent of champagne and chocolate, and the warmth of his hand in mine… it felt like something out of a jazz song, one that plays just once, but never leaves your heart.</p>

<p>And as he whispered about the acorn pattern he loved—just the tiniest, quirkiest detail—I realized that sometimes, the sweetest part of a night isn’t the grandeur, the music, or even the chocolate soufflé… it’s the little shared smiles, the hand-holding, the secret jokes that make your cheeks ache from happiness."</p>

  </div>
</div>
`;
  messageDiv.classList.remove("wrong");
  messageDiv.classList.add("correct");
} else {
  const randomHint = hints[Math.floor(Math.random() * hints.length)];
  messageDiv.innerHTML = `"Oh no, that's the wrong booking! Hint: ${randomHint}"`;
  messageDiv.classList.remove("correct");
  messageDiv.classList.add("wrong");
}



    input.value = "";
  });
});
