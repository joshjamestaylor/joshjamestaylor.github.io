const infos = document.querySelectorAll(".info");

infos.forEach((info) => {
  const icon = info.querySelector(".info-icon");
  const popup = info.querySelector(".info-popup");

  icon.addEventListener("click", (e) => {
    e.stopPropagation();

    // close other popups
    document.querySelectorAll(".info-popup").forEach((p) => {
      if (p !== popup) p.classList.remove("active");
    });

    popup.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!info.contains(e.target)) {
      popup.classList.remove("active");
    }
  });
});
