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

  // 4. Inject footer if not already present
  // Inject footer at bottom if not present
document.addEventListener("DOMContentLoaded", () => {
  // Inject footer if not already present
  if (!document.querySelector(".site-footer")) {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerText = "Made by Satyaki Bandopadhyay";

    // Style the footer
    footer.style.textAlign = "center";
    footer.style.padding = "1rem 0";
    footer.style.color = "#a2ffe7";
    footer.style.fontSize = "0.9rem";
    footer.style.opacity = "0.5";
    footer.style.marginTop = "auto";

    // Force it to bottom by setting container to flex
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.minHeight = "100vh";

    // Ensure main content takes space
    const container = document.querySelector(".container");
    if (container) {
      container.style.flex = "1";
    }

    document.body.appendChild(footer);
  }
});


});
