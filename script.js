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

  // 3. Spinner on button clicks
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      spinner.style.display = "block";
      setTimeout(() => {
        spinner.style.display = "none";
      }, 3000);
    });
  });

  // 4. Footer box injection
  if (!document.querySelector(".site-footer-box")) {
    const footerBox = document.createElement("footer");
    footerBox.className = "site-footer-box";
    footerBox.innerText = `Made by Satyaki Bandopadhyay
    Made by Ridit Jana
    Made by Aryaman Ghosh
    Made by Satvik Roy`;

    // Ensure body is full-height flex layout
    document.documentElement.style.height = "100%";
    document.body.style.minHeight = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";

    // Push footer to bottom
    const wrapper = document.createElement("div");
    wrapper.style.flex = "1";
    while (document.body.firstChild && !document.body.firstChild.classList?.contains('site-footer-box')) {
      wrapper.appendChild(document.body.firstChild);
    }
    document.body.prepend(wrapper);
    document.body.appendChild(footerBox);
  }
});
