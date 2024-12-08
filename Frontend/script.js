document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projects-container");
  const clientsContainer = document.getElementById("clients-container");
  const contactForm = document.getElementById("contact-form");
  const newsletterForm = document.getElementById("newsletter-form");

  fetch("http://localhost/backend/api/projects.php")
    .then((response) => response.json())
    .then((projects) => {
      projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
          <img src="http://localhost/backend/uploads/${project.image}" alt="${project.name}">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectCard);
      });
    });

  fetch("http://localhost/backend/api/clients.php")
    .then((response) => response.json())
    .then((clients) => {
      clients.forEach((client) => {
        const clientCard = document.createElement("div");
        clientCard.classList.add("client-card");
        clientCard.innerHTML = `
          <img src="http://localhost/backend/uploads/${client.image}" alt="${client.name}">
          <h3>${client.name}</h3>
          <p>${client.designation}</p>
          <p>${client.description}</p>
        `;
        clientsContainer.appendChild(clientCard);
      });
    });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    fetch("http://localhost/backend/api/contact.php", {
      method: "POST",
      body: formData,
    }).then(() => alert("Contact form submitted successfully!"));
  });

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    fetch("http://localhost/backend/api/newsletter.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).then(() => alert("Subscribed successfully!"));
  });
});
