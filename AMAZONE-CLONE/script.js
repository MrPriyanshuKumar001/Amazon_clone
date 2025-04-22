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
  