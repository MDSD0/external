function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    if (!name || !email || !phone) {
      alert('Please fill out all required fields.');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert('Phone number must be exactly 10 digits.');
        return;
      }
    alert('Form submitted successfully!');
  }
  