document.addEventListener("DOMContentLoaded", () => {
  const addProjectForm = document.getElementById("add-project-form");
  const addClientForm = document.getElementById("add-client-form");
  const projectsList = document.getElementById("projects-list");
  const clientsList = document.getElementById("clients-list");

  addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addProjectForm);
    fetch("http://localhost/backend/api/projects.php", {
      method: "POST",
      body: formData,
    }).then(() => alert("Project added successfully!"));
  });

  addClientForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addClientForm);
    fetch("http://localhost/backend/api/clients.php", {
      method: "POST",
      body: formData,
    }).then(() => alert("Client added successfully!"));
  });
});
