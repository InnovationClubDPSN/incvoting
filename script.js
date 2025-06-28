document.addEventListener("DOMContentLoaded", () => {
  // 1. Make watermark clickable
  const watermark = document.querySelector(".watermark");
  if (watermark) {
    watermark.style.cursor = "pointer";
    watermark.addEventListener("click", () => {
      window.location.href = "https://innovationclubvotingwebsite.netlify.app/";
    });
  }

  // 2. Add spinner if not present
  let spinner = document.getElementById("spinner");
  if (!spinner) {
    spinner = document.createElement("div");
    spinner.id = "spinner";
    document.body.appendChild(spinner);
  }

  // 3. Show spinner on button clicks
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      spinner.style.display = "block";
      setTimeout(() => {
        spinner.style.display = "none";
      }, 3000); // 3 seconds
    });
  });
});
