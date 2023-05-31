// Wait for the document to load before running the JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Get all the navigation links
  const navLinks = document.querySelectorAll('nav ul li a');

  // Loop through each navigation link
  navLinks.forEach(function(link) {
    // Add a click event listener to each link
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Get the target section's ID from the link's href attribute
      const targetId = link.getAttribute('href').substring(1);

      // Get the target section by ID
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Add the 'active' class to the clicked link
      navLinks.forEach(function(navLink) {
        navLink.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
});
