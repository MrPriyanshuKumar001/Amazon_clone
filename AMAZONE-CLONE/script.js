function openModal() {
    document.getElementById("signInModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("signInModal").style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("signInModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  /* ===== Simple Language Selector ===== */
document.addEventListener('DOMContentLoaded', function() {
  const languageOptions = document.querySelectorAll('.language-option');
  const currentLanguage = document.getElementById('current-language');
  
  // Handle language selection
  languageOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      const langCode = this.getAttribute('data-lang');
      currentLanguage.textContent = langCode;
      
      // Hide the dropdown after selection
      this.closest('.language-dropdown').style.display = 'none';
    });
  });
  
  // Toggle dropdown when clicking the language selector
  document.querySelector('.nav-language').addEventListener('click', function(e) {
    const dropdown = this.querySelector('.language-dropdown');
    if (e.target.classList.contains('language-option')) return;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-language')) {
      document.querySelector('.language-dropdown').style.display = 'none';
    }
  });
});
  
// Add this at the END of your script.js file

// New Customer Modal Functions
function openNewCustomerModal() {
  document.getElementById('newCustomerModal').style.display = 'block';
}

function closeNewCustomerModal() {
  document.getElementById('newCustomerModal').style.display = 'none';
}

// Handle form submission
document.getElementById('newCustomerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const password = this.querySelector('input[type="password"]').value;
  const confirmPassword = this.querySelector('input[type="password"]:nth-of-type(2)').value;
  
  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }
  
  alert("Account created successfully!");
  closeNewCustomerModal();
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  if (e.target === document.getElementById('newCustomerModal')) {
    closeNewCustomerModal();
  }
});