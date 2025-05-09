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

// Add watermark glow logo
const watermark = document.createElement('div');
watermark.style.position = 'fixed';
watermark.style.top = '10px';
watermark.style.right = '10px';
watermark.style.width = '80px';
watermark.style.height = '80px';
watermark.style.background = "url('logo.png') no-repeat center/contain";
watermark.style.opacity = '0.2';
watermark.style.zIndex = '1000';
watermark.style.pointerEvents = 'none';
document.body.appendChild(watermark);
