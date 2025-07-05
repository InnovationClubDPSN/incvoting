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
  if (!document.querySelector(".site-footer")) {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerText = "Made by Satyaki Bandopadhyay";

    // Footer styling
    footer.style.textAlign = "center";
    footer.style.padding = "1rem 0";
    footer.style.color = "#a2ffe7";
    footer.style.fontSize = "0.9rem";
    footer.style.opacity = "0.5";
    footer.style.marginTop = "auto";

    // Ensure body is full-height flex column
    document.documentElement.style.height = "100%";
    document.body.style.minHeight = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";

    // Ensure main content fills vertical space
    const main = document.querySelector(".container") || document.querySelector("main");
    if (main) {
      main.style.flex = "1";
    } else {
      // fallback: wrap body content in a div
      const wrapper = document.createElement("div");
      wrapper.style.flex = "1";
      while (document.body.firstChild && document.body.firstChild !== footer) {
        wrapper.appendChild(document.body.firstChild);
      }
      document.body.prepend(wrapper);
    }

    document.body.appendChild(footer);
  }
});
