   // Get elements
    const bookBtn = document.getElementById("bookBtn");
    const facilityModal = document.getElementById("facilityModal");
    const closeModal = document.getElementById("closeModal");

    // Show modal when booking button is clicked
    bookBtn.addEventListener("click", () => {
      facilityModal.style.display = "block";
    });

    // Close modal when X is clicked
    closeModal.addEventListener("click", () => {
      facilityModal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (event) => {
      if (event.target === facilityModal) {
        facilityModal.style.display = "none";
      }
    });

    