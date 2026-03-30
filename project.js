const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = PROJECTS.find((item) => item.id === projectId);

const titleElement = document.querySelector("#project-title");
const typeElement = document.querySelector("#project-type");
const descriptionElement = document.querySelector("#project-description");
const tagsElement = document.querySelector("#project-tags");
const statusElement = document.querySelector("#readme-status");
const readmeElement = document.querySelector("#readme-content");
const repoLinks = document.querySelectorAll(".repo-link");
const demoLinks = document.querySelectorAll(".demo-link");

if (!project) {
  document.title = "Proyecto no encontrado";
  statusElement.textContent = "No se encontro el proyecto solicitado.";
} else {
  document.title = `${project.title} | Portafolio`;
  titleElement.textContent = project.title;
  typeElement.textContent = project.type;
  descriptionElement.textContent = project.description;

  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "tag";
    tagElement.textContent = tag;
    tagsElement.appendChild(tagElement);
  });

  repoLinks.forEach((link) => {
    link.href = project.repoUrl;
  });

  demoLinks.forEach((link) => {
    if (project.demoUrl) {
      link.href = project.demoUrl;
    } else {
      link.classList.add("is-hidden");
    }
  });

  loadReadme(project);
}

async function loadReadme(projectItem) {
  try {
    const response = await fetch(projectItem.readmeUrl);

    if (!response.ok) {
      throw new Error("No se pudo descargar el README");
    }

    let markdown = await response.text();
    markdown = markdown.replace(/^\uFEFF/, "");
    markdown = normalizeMarkdown(markdown, projectItem);

    const html = marked.parse(markdown, {
      mangle: false,
      headerIds: true
    });

    readmeElement.innerHTML = html;
    readmeElement.classList.add("is-visible");
    statusElement.remove();
  } catch (error) {
    statusElement.innerHTML = 'No fue posible cargar el README automaticamente. Puedes revisar el <a href="' + projectItem.repoUrl + '" target="_blank" rel="noreferrer">repositorio en GitHub</a>.';
  }
}

function normalizeMarkdown(markdown, projectItem) {
  const rawBase = `${projectItem.repoUrl.replace("https://github.com", "https://raw.githubusercontent.com")}/${projectItem.branch}/`;
  const blobBase = `${projectItem.repoUrl}/blob/${projectItem.branch}/`;

  const normalizedImages = markdown.replace(/!\[([^\]]*)\]\((?!https?:|data:|#)([^)]+)\)/g, (match, alt, path) => {
    const cleanPath = cleanupPath(path);
    return `![${alt}](${rawBase}${cleanPath})`;
  });

  const normalizedLinks = normalizedImages.replace(/\[([^\]]+)\]\((?!https?:|mailto:|#)([^)]+)\)/g, (match, label, path) => {
    const cleanPath = cleanupPath(path);
    return `[${label}](${blobBase}${cleanPath})`;
  });

  return normalizedLinks;
}

function cleanupPath(path) {
  return path.trim().replace(/^\.\//, "").replace(/^\//, "").replace(/ /g, "%20");
}
