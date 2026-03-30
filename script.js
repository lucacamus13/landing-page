const projectsGrid = document.querySelector("#projects-grid");
const template = document.querySelector("#project-card-template");

PROJECTS.forEach((project) => {
  const card = template.content.cloneNode(true);
  const article = card.querySelector(".project-card");

  article.dataset.href = `project.html?id=${project.id}`;
  article.setAttribute("tabindex", "0");
  article.setAttribute("role", "link");
  article.setAttribute("aria-label", `Ver detalle del proyecto ${project.title}`);

  card.querySelector(".project-type").textContent = project.type;
  card.querySelector("h3").textContent = project.title;
  card.querySelector(".project-description").textContent = project.description;

  const detailLink = card.querySelector(".project-detail");
  detailLink.href = `project.html?id=${project.id}`;

  const repoLink = card.querySelector(".project-repo");
  repoLink.href = project.repoUrl;

  const demoLink = card.querySelector(".project-demo");
  if (project.demoUrl) {
    demoLink.href = project.demoUrl;
  } else {
    demoLink.classList.add("is-hidden");
  }

  const tagList = card.querySelector(".tag-list");
  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "tag";
    tagElement.textContent = tag;
    tagList.appendChild(tagElement);
  });

  article.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }

    window.location.href = article.dataset.href;
  });

  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = article.dataset.href;
    }
  });

  projectsGrid.appendChild(card);
});
