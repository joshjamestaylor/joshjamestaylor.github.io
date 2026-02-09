// Get all icons
const icons = document.querySelectorAll(".info-icon");

// Loop through each icon
icons.forEach(icon => {
  const popupId = icon.getAttribute("data-popup");
  const popup = document.getElementById(popupId);
  const closeBtn = popup.querySelector(".close-popup");

  // Show popup on icon click
  icon.addEventListener("click", () => {
    console.log(`Icon clicked: ${popupId}`);
    popup.style.display = "block";
  });

  // Close popup on button click
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
