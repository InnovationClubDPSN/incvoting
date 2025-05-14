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
  const classSection = params.get("class_section");
  const admissionNumber = params.get("admission_number");

  if (name) {
    document.getElementById("name").value = decodeURIComponent(name);
  }

  if (classSection) {
    document.getElementById("class_section").value = decodeURIComponent(classSection);
  }

  if (admissionNumber) {
    document.getElementById("admission_number").value = decodeURIComponent(admissionNumber);
  }
}
