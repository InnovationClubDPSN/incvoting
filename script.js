// Load voting question and options from questions.json
fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    // If voting is not active, redirect to closed page
    if (!data.active) {
      window.location.href = "closed.html";
      return;
    }

    // Set session heading text
document.getElementById('session-title').textContent = data.session || "";

// Set hidden input value for session
document.getElementById('session-hidden').value = data.session || "";


    // Set vote question text
    document.getElementById('vote-question').textContent = data.question;

    // Get the dropdown element
    const dropdown = document.getElementById('vote-dropdown');

    // Populate dropdown options
    data.options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      dropdown.appendChild(opt);
    });

    // Handle multiple vote support
    if (data.multiple) {
      dropdown.multiple = true;
      dropdown.size = Math.min(data.options.length, 5); // Show multiple options clearly
    }

    // Before form submission, capture selected options in a hidden field
    document.getElementById("pollForm").addEventListener("submit", function (e) {
      if (data.multiple) {
        const selected = Array.from(dropdown.selectedOptions).map(opt => opt.value);
        document.getElementById("votes-hidden").value = selected.join(", ");
      }
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
