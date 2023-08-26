const projects = [
  {
    title: "Butget_app",
    description: "A mobile web app where you can manage your budget",
    description1:"A mobile web app where you can manage your budget: you have a list of transactions associated with a category, so you can see how much  money you've spent and on what.",
    imageSrc: "./images/butget.png",
    liveDemoLink: "https://budget-ixbx.onrender.com",
    codeLink: "https://github.com/massazoum/Budget.git",
    skills:"PostgreSQL, Ruby on rails"
  },
 {
   title: "ShowMovie",
   description: "A ShowMovie Site ",
   description1:"ReactShowMovie is a web application built using React.js, a popular JavaScript library for building user interfaces, and it utilizes an API to fetch and display information about movies.",
   imageSrc: "./images/reactmovie.png",
   liveDemoLink: "https://app.netlify.com/teams/massazoum/sites",
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
 },
 {
  title: "Bookstore",
  description: "This bookstore helps us to add and to remove book from API",
  description1:"The project is a user-friendly and efficient online bookstore application that allows users to easily manage the inventory of books stored in an external API. The primary objective is to simplify the process of adding new books to the API and removing existing ones.With this application, users can conveniently add book details such as title, author, genre, and publication information, and seamlessly upload them to the API. The interface is designed to be intuitive and straightforward, enabling users to input the necessary information with ease.",
  imageSrc: "./images/Bookstore.png",
  liveDemoLink: "https://64cf80e60ad7293d14b83e93--stirring-bublanina-e200bb.netlify.app/",
  codeLink: "https://github.com/massazoum/Zoum_Bookstore",
  skills:"React"
},
{
  title: "Space",
  description: "Space  ",
  description1: "Space  ",
  imageSrc: "./images/space.png",
  liveDemoLink: "https://example.com",
  codeLink: "https://github.com/Shaheryar0054/react-group-project",
  skills:"React"
},
{
  title: "Math_magicians",
  description: 'Math_magicians is a comprehensive calculator',
  description1: "Math_magicians is a comprehensive calculator project designed to provide users with a wide range of mathematical functionalities and capabilities. This project aims to create a versatile and user-friendly calculator application that offers a seamless experience for performing various mathematical calculations.Math_magicians incorporates a sleek and intuitive user interface, allowing users to input mathematical expressions and receive accurate results promptly.",
  imageSrc: "./images/Math_magicians.png",
  liveDemoLink: "https://math-magicians-ue5p.onrender.com",
  codeLink: "https://github.com/massazoum/Math-magicians",
  skills:"React"
},
{
  title: "Leaderboard",
  description: "This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  description1:"This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  imageSrc: "./images/leaderboard.png",
  liveDemoLink: "https://massazoum.github.io/Leaderboard/dist",
  codeLink: "https://github.com/massazoum/Leaderboard.git",
  skills:"HTML CSS JAVASCRIPT"
}
,{
  title: "To-Do-list",
  description: "This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  description1:"This to do list projet is a mini app to save task for our journey in this app we add remove and update",
  imageSrc: "./images/todo.png",
  liveDemoLink: "https://massazoum.github.io/To-Do-list-project/dist",
  codeLink: "https://github.com/massazoum/capstone-project-1",
  skills:"HTML CSS JAVASCRIPT"
}
,{
  title: "AI in education",
  description: "This capstone projet is around the artificial intelligence in order to improve our nation education",
  description1: "This capstone projet is around the artificial intelligence in order to improve our nation education",
  imageSrc: "./images/AI.png",
  liveDemoLink: "https://massazoum.github.io/capstone-project-1",
  codeLink: "https://github.com/massazoum/capstone-project-1",
  skills:"HTML CSS JAVASCRIPT"
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
 <div class="colortitle">${project.title}</div>
 <div class="color">${project.description}</div>
 <div class="skills">${project.skills}</div>
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