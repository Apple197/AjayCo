function toggleAccordion(id, element) {
  const accordion = document.getElementById(id);
  const icon = element.querySelector(".accordion-icon");

  // Close all other accordions
  closeAllAccordions();

  if (accordion.classList.contains("max-h-0")) {
    // Open accordion
    accordion.classList.remove("max-h-0");
    accordion.classList.add("max-h-screen");
    // Change icon to × (cross)
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />`; // Cross icon
  } else {
    // Close accordion
    accordion.classList.add("max-h-0");
    accordion.classList.remove("max-h-screen");
    // Change icon back to + (plus)
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />`; // Plus icon
  }
}

function closeAllAccordions() {
  document.querySelectorAll(".accordion-content").forEach((content) => {
    content.classList.add("max-h-0");
    content.classList.remove("max-h-screen");
  });
  document.querySelectorAll(".accordion-icon").forEach((icon) => {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />`; // Plus icon for all
  });
}
