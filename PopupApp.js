const projects = [
  {
    title: "Butget_app",
    description: "A mobile web app where you can manage your budget",
    description1:"A mobile web app where you can manage your budget: you have a list of transactions associated with a category.",
    imageSrc: "./images/butget.png",
    liveDemoLink: "https://budget-ixbx.onrender.com",
    codeLink: "https://github.com/massazoum/Budget.git",
    skills:"PostgreSQL | Ruby on rails"
  },
 {
   title: "ShowMovie",
   description: "A ShowMovie Site ",
   description1:"ReactShowMovie is a web application built using React.js, a popular JavaScript library for building user interfaces, and it utilizes an API to fetch and display information about movies.",
   imageSrc: "./images/reactmovie.png",
   liveDemoLink: "https://zoumshowmovie.onrender.com",
   codeLink: "https://github.com/massazoum/ReactShowMovie",
   skills:"React"
 },
 {
   title: "NationConnect",
   description: "is a Web application thatpresents the countries with details such as thepopulation, language, region using an API.",
   description1:" is a Web application thatpresents the countries with details such as thepopulation, language, region using an API.",
   imageSrc: "./images/nation.png",
   liveDemoLink: "https://nationsconnect.onrender.com",
   codeLink: "https://github.com/massazoum/NationsConnect",
   skills:"React"
 }
,{
  title: "To-Do-list",
  description: "This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  description1:"This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  imageSrc: "./images/todo.png",
  liveDemoLink: "https://massazoum.github.io/To-Do-list-project/dist",
  codeLink: "https://github.com/massazoum/capstone-project-1",
  skills:"Html | Css | JavaScript"
}
,{
  title: "AI in education",
  description: "This capstone projet is around the artificial intelligence in order to improve our nation education",
  description1: "This capstone projet is around the artificial intelligence in order to improve our nation education",
  imageSrc: "./images/AI.png",
  liveDemoLink: "https://massazoum.github.io/capstone-project-1",
  codeLink: "https://github.com/massazoum/capstone-project-1",
  skills:"Html | Css | JavaScript"
},
];

const projectsContainer = document.querySelector(".projects");
projects.forEach(project => {
 const card = document.createElement("div");
 card.className = "card";
 card.dataset.aos = 'zoom-in';
 card.innerHTML = `
 <img src="${project.imageSrc}" class="ImageCard" alt="${project.title}" width="100%" onclick="openCardPopup('${project.title}', '${project.description}', '${project.imageSrc}', '${project.liveDemoLink}', '${project.codeLink}')">
 <div class="colortitle">${project.title}</div>
 <div class="color">${project.description}</div>
 <div class="skillscard">${project.skills}</div>
 <button class="see-project-button" onclick="openCardPopup('${project.title}', '${project.description1}', '${project.imageSrc}', '${project.liveDemoLink}', '${project.codeLink}')">See Project</button>
 `;
 projectsContainer.appendChild(card);
});

// Card Popup
function openCardPopup(title, description, imageSrc, liveDemoLink, codeLink) {
 document.getElementById("cardPopupTitle").textContent = title;
 document.getElementById("cardPopupDescription").textContent = description;
 document.getElementById("cardPopupImage").src = imageSrc;
 document.getElementById("cardPopup").classList.add("active");
 document.getElementById("cardPopupLiveDemo").href = liveDemoLink;
 document.getElementById("cardPopupLiveDemo").target = "_blank";
 document.getElementById("cardPopupCode").href = codeLink;
 document.getElementById("cardPopupCode").target = "_blank";
}

function closeCardPopup() {
 document.getElementById("cardPopup").classList.remove("active");
}

// Form Submission
function submitForm(event) {
 event.preventDefault();
}
