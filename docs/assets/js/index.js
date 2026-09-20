const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

const projectCards = document.querySelectorAll(".project-card");

const scrumModal = document.getElementById("scrumModal");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");

const modalTitle = document.getElementById("modalTitle");
const modalSemester = document.getElementById("modalSemester");
const modalDescription = document.getElementById("modalDescription");

const modalTechnologies = document.getElementById("modalTechnologies");
const modalContribution = document.getElementById("modalContribution");

const modalProjectImage = document.getElementById("modalProjectImage");
const modalImage = document.getElementById("modalImage");

const modalRepository = document.getElementById("modalRepository");
const teamGrid = document.getElementById("teamGrid");

const projects = {
  scrum: {
    title: "Scrum Dungeon",
    semester: "1DSM · 1º Sem. 2026",
    description:
      "Projeto desenvolvido no primeiro semestre, utilizando uma experiência em estilo RPG para ensinar conceitos de Scrum.",
    technologies: ["HTML5", "CSS3", "JavaScript", "EJS"],
    contribution:
      "Prototipação Desktop/Mobile; efeitos sonoros e músicas; refatoração do código; organização da arquitetura; funcionalidades adicionais.",
    image: "assets/img/scrumLogo.png",
    imageAlt: "Projeto Scrum Dungeon",
    repository: "https://github.com/octopusCode26/scrum-dungeon",
    team: [
      {
        name: "Enzo Suzuki Prokopas",
        image: "assets/img/PerfilImagem.jpeg",
        contribution: true,
      },
      {
        name: "Alef Gabriel Oliveira",
        image: "assets/img/alef.jpeg",
      },
      {
        name: "Cauã Silva",
        image: "assets/img/caua.jpeg",
      },
      {
        name: "Igor Iansen",
        image: "assets/img/igor.jpeg",
      },
      {
        name: "Lorenzo Nogueira",
        image: "assets/img/lorenzo.jpeg",
      },
      {
        name: "Renam Santos",
        image: "assets/img/renam.jpeg",
      },
      {
        name: "Thiago Souza Santos",
        image: "assets/img/thiago.jpeg",
      },
      {
        name: "Vitor Hirch",
        image: "assets/img/vitor.jpeg",
      },
      {
        name: "Patricia Rosa Maidana",
        image: "assets/img/patricia.jpeg",
      },
    ],
  },

  abp2: {
    title: "ABP 2",
    semester: "2DSM · 2º Sem. 2026",
    description:
      "Projeto acadêmico do segundo semestre. Conteúdo em desenvolvimento.",
    technologies: ["..."],
    contribution:
      "As informações sobre minha participação serão adicionadas após a conclusão do projeto.",
    image: "",
    imageAlt: "",
    repository: "#",
    team: [],
  },
};

menuButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

function openModal(projectId) {
  const project = projects[projectId];

  if (!project) {
    return;
  }

  modalTitle.textContent = project.title;
  modalSemester.textContent = project.semester;
  modalDescription.textContent = project.description;
  modalContribution.textContent = project.contribution;
  modalRepository.href = project.repository;

  if (project.image) {
    modalImage.src = project.image;
    modalImage.alt = project.imageAlt;
    modalProjectImage.style.display = "block";
  } else {
    modalProjectImage.style.display = "none";
  }

  modalTechnologies.innerHTML = "";

  project.technologies.forEach((technology) => {
    const tag = document.createElement("span");

    tag.textContent = technology;

    modalTechnologies.appendChild(tag);
  });

  teamGrid.innerHTML = "";

  if (project.team && project.team.length > 0) {
    project.team.forEach((member) => {
      const memberCard = document.createElement("div");

      memberCard.classList.add("team-member");

      if (member.contribution) {
        memberCard.classList.add("team-member-highlight");
      }

      memberCard.innerHTML = `
                <img
                    src="${member.image}"
                    alt="Foto de ${member.name}"
                >

                <div>
                    <strong>${member.name}</strong>

                    ${
                      member.contribution
                        ? "<span>Minha participação</span>"
                        : ""
                    }
                </div>
            `;

      teamGrid.appendChild(memberCard);
    });
  } else {
    teamGrid.innerHTML = `
            <p class="team-empty">
                Equipe será adicionada em breve.
            </p>
        `;
  }

  scrumModal.classList.add("active");

  scrumModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeModal() {
  scrumModal.classList.remove("active");

  scrumModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.dataset.project;

    openModal(projectId);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      const projectId = card.dataset.project;

      openModal(projectId);
    }
  });
});

modalClose.addEventListener("click", () => {
  closeModal();
});

modalOverlay.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
