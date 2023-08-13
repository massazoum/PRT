const projects = [
 {
   title: "ShowMovie",
   description: "A ShowMovie Site ",
   description1:"",
   imageSrc: "./images/reactmovie.png",
   liveDemoLink: "https://app.netlify.com/teams/massazoum/sites",
   codeLink: "https://github.com/examplehttps://zoumshowmovie.onrender.com"
 },
 {
   title: "NationConnect",
   description: "This is my third project",
   description1:"",
   imageSrc: "./images/nation.png",
   liveDemoLink: "https://space-x-27k2.onrender.com",
   codeLink: "https://github.com/massazoum/NationsConnect"
 },
 {
  title: "Bookstore",
  description: "This bookstore helps us to add and to remove book from API",
  description1:"The project is a user-friendly and efficient online bookstore application that allows users to easily manage the inventory of books stored in an external API. The primary objective is to simplify the process of adding new books to the API and removing existing ones.With this application, users can conveniently add book details such as title, author, genre, and publication information, and seamlessly upload them to the API. The interface is designed to be intuitive and straightforward, enabling users to input the necessary information with ease.",
  imageSrc: "./images/Bookstore.png",
  liveDemoLink: "https://64cf80e60ad7293d14b83e93--stirring-bublanina-e200bb.netlify.app/",
  codeLink: "https://github.com/example"
},
{
  title: "Space",
  description: "This is my second project",
  imageSrc: "./images/space.png",
  liveDemoLink: "https://example.com",
  codeLink: "https://github.com/Shaheryar0054/react-group-project"
},
{
  title: "Math_magicians",
  description: 'Math_magicians is a comprehensive calculator',
  description1: "Math_magicians is a comprehensive calculator project designed to provide users with a wide range of mathematical functionalities and capabilities. This project aims to create a versatile and user-friendly calculator application that offers a seamless experience for performing various mathematical calculations.Math_magicians incorporates a sleek and intuitive user interface, allowing users to input mathematical expressions and receive accurate results promptly.",
  imageSrc: "./images/Math_magicians.png",
  liveDemoLink: "https://math-magicians-ue5p.onrender.com",
  codeLink: "https://github.com/massazoum/Math-magicians"
},
{
  title: "Leaderboard",
  description: "This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  description1:"This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  imageSrc: "./images/leaderboard.png",
  liveDemoLink: "https://massazoum.github.io/Leaderboard/dist",
  codeLink: "https://github.com/massazoum/Leaderboard.git"
}
,{
  title: "To-Do-list",
  description: "This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  description1:"This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  imageSrc: "./images/todo.png",
  liveDemoLink: "https://massazoum.github.io/To-Do-list-project/dist",
  codeLink: "https://github.com/massazoum/capstone-project-1"
}
,{
  title: "AI in education",
  description: "This capstone projet is around the artificial intelligence in order to improve our nation education",
  description1: "This capstone projet is around the artificial intelligence in order to improve our nation education",
  imageSrc: "./images/AI.png",
  liveDemoLink: "https://massazoum.github.io/capstone-project-1",
  codeLink: "https://github.com/massazoum/capstone-project-1"
},
];

// Render projects
const projectsContainer = document.querySelector(".projects");
projects.forEach(project => {
 const card = document.createElement("div");
 card.className = "card";
 card.dataset.aos = 'zoom-in';
 card.innerHTML = `
 <img src="${project.imageSrc}" class="ImageCard" alt="${project.title}" width="100%" onclick="openCardPopup('${project.title}', '${project.description}', '${project.imageSrc}', '${project.liveDemoLink}', '${project.codeLink}')">
 <div class="color">${project.title}</div>
 <div class="color">${project.description}</div>
 <div  class="color"><span type="button" disabled>HTML</span><span type="button" disabled>CSS</span><span type="button" disabled>JavaScript</span></div>
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
 document.getElementById("cardPopupCode").href= codeLink;
}

function closeCardPopup() {
 document.getElementById("cardPopup").classList.remove("active");
}

// Form Submission
function submitForm(event) {
 event.preventDefault();
}