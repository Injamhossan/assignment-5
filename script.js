let loveCount = 0;
const loveCounterSpan = document.getElementById("love-count");

document.querySelectorAll("#love-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("#love-icon");

    if (icon.classList.contains("fa-regular")) {
      // Like হলো
      icon.classList.remove("fa-regular", "text-gray-500");
      icon.classList.add("fa-solid", "text-black");
      loveCount++;
    } else {
      // Unlike হলো
      icon.classList.remove("fa-solid", "text-black");
      icon.classList.add("fa-regular", "text-gray-500");
      if(loveCount > 0) loveCount--; // count 0 এর নিচে যাবে না
    }

    // Counter update
    loveCounterSpan.textContent = loveCount;
  });
});
