// Load voting question and options from questions.json
fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    // If voting is not active, redirect to closed page
    if (!data.active) {
      window.location.href = "closed.html";
      return;
    }

    // Set vote question text
    document.getElementById('vote-question').textContent = data.question;

    // Populate dropdown options
    const dropdown = document.getElementById('vote-dropdown');
    data.options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      dropdown.appendChild(opt);
    });

    // Autofill form fields from URL query parameters
    autofillFromQueryParams();
  })
  .catch(error => {
    console.error("Error loading voting data:", error);
  });

// Function to autofill fields using query parameters
function autofillFromQueryParams() {
  const params = new URLSearchParams(window.location.search);

  const name = params.get("name");
  const cls = params.get("class");
  const section = params.get("section");
  const admissionNumber = params.get("admission_number");

  if (name) {
    document.getElementById("name").value = decodeURIComponent(name);
  }

  if (cls) {
    document.getElementById("class").value = decodeURIComponent(cls);
  }

if (section) {
    document.getElementById("section").value = decodeURIComponent(section);
  }
  
  if (admissionNumber) {
    document.getElementById("admission_number").value = decodeURIComponent(admissionNumber);
  }
}
