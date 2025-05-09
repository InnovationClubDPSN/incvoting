fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    if (!data.active) {
      window.location.href = "closed.html";
    }
    document.getElementById('vote-question').textContent = data.question;
    const dropdown = document.getElementById('vote-dropdown');
    data.options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      dropdown.appendChild(opt);
    });
  });
