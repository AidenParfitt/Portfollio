window.onload = function () {
  document.querySelector("#homeButton").addEventListener("click", loadHome);
  document.querySelector("#skillButton").addEventListener("click", loadSkills);
  document
    .querySelector("#projectsButton")
    .addEventListener("click", loadProjects);
  document
    .querySelector("#contactMeButton")
    .addEventListener("click", loadContacts);
  document
    .querySelector("#Quiz")
    .addEventListener("click", dropQuestionProject);
  document.querySelector("#addStuff").addEventListener("click", dropAddItems);
  document
    .querySelector("#Organizer")
    .addEventListener("click", dropOrganizeItems);
  loadHome();
  dropQuestionProject();
};
function loadHome() {
  let title = document.querySelector(".titleBasic");
  let baseInformation = document.querySelector(".basicInformation");
  let skills = document.querySelector(".skills");
  let education = document.querySelector(".Education");
  let projects = document.querySelector(".myProjects");
  let contact = document.querySelector(".my-contactInformation");
  skills.classList.add("hideSections");
  projects.classList.add("hideSections");
  contact.classList.add("hideSections");
  title.classList.remove("hideSections");
  baseInformation.classList.remove("hideSections");
  education.classList.remove("hideSections");
  let homeButton = document.querySelector("#homeButton");
  let skillButton = document.querySelector("#skillButton");
  let projectButton = document.querySelector("#projectsButton");
  let contactButton = document.querySelector("#contactMeButton");

  homeButton.disabled = true;
  skillButton.disabled = false;
  projectButton.disabled = false;
  contactButton.disabled = false;

  return homeButton;
}
function loadSkills() {
  let title = document.querySelector(".titleBasic");
  let baseInformation = document.querySelector(".basicInformation");
  let skills = document.querySelector(".skills");
  let education = document.querySelector(".Education");
  let projects = document.querySelector(".myProjects");
  let contact = document.querySelector(".my-contactInformation");
  education.classList.add("hideSections");
  projects.classList.add("hideSections");
  contact.classList.add("hideSections");
  title.classList.add("hideSections");
  baseInformation.classList.add("hideSections");
  skills.classList.remove("hideSections");

  let homeButton = document.querySelector("#homeButton");
  let skillButton = document.querySelector("#skillButton");
  let projectButton = document.querySelector("#projectsButton");
  let contactButton = document.querySelector("#contactMeButton");
  skillButton.disabled = true;
  homeButton.disabled = false;
  projectButton.disabled = false;
  contactButton.disabled = false;
}
function loadProjects() {
  let title = document.querySelector(".titleBasic");
  let baseInformation = document.querySelector(".basicInformation");
  let skills = document.querySelector(".skills");
  let education = document.querySelector(".Education");
  let projects = document.querySelector(".myProjects");
  let contact = document.querySelector(".my-contactInformation");
  education.classList.add("hideSections");
  skills.classList.add("hideSections");
  contact.classList.add("hideSections");
  title.classList.add("hideSections");
  baseInformation.classList.add("hideSections");
  projects.classList.remove("hideSections");
  let homeButton = document.querySelector("#homeButton");
  let skillButton = document.querySelector("#skillButton");
  let projectButton = document.querySelector("#projectsButton");
  let contactButton = document.querySelector("#contactMeButton");

  projectButton.disabled = true;
  homeButton.disabled = false;
  skillButton.disabled = false;
  contactButton.disabled = false;
}
function loadContacts() {
  let title = document.querySelector(".titleBasic");
  let baseInformation = document.querySelector(".basicInformation");
  let skills = document.querySelector(".skills");
  let education = document.querySelector(".Education");
  let projects = document.querySelector(".myProjects");
  let contact = document.querySelector(".my-contactInformation");
  education.classList.add("hideSections");
  skills.classList.add("hideSections");
  projects.classList.add("hideSections");
  title.classList.add("hideSections");
  baseInformation.classList.add("hideSections");
  contact.classList.remove("hideSections");
  let homeButton = document.querySelector("#homeButton");
  let skillButton = document.querySelector("#skillButton");
  let projectButton = document.querySelector("#projectsButton");
  let contactButton = document.querySelector("#contactMeButton");

  contactButton.disabled = true;
  homeButton.disabled = false;
  skillButton.disabled = false;
  projectButton.disabled = false;
}
function dropQuestionProject() {
  let activateQuestion = document.querySelector("#Quiz");
  let activateItems = document.querySelector("#addStuff");
  let activateOrganization = document.querySelector("#Organizer");
  let questions = document.querySelector("#quizDiv");
  let Add = document.querySelector("#addItems");
  let Organize = document.querySelector("#Item");
  questions.classList.remove("hideSections");
  Add.classList.add("hideSections");
  Organize.classList.add("hideSections");
  let sideArrow = ">";
  let downArrow = "\u2304";
  let Qhtml = "";
  let Ihtml = "";
  let Ohtml = "";

  Qhtml +=
    "<h2 style='color: orange;'>" + "Quiz Application" + downArrow + "</h2>";
  Ihtml +=
    "<h2 style='color: orange;'>" +
    "Add Items Application" +
    sideArrow +
    "</h2>";
  Ohtml +=
    "<h2 style='color: orange;'>" +
    "Javascript Item Organizer" +
    sideArrow +
    "</h2>";

  activateItems.innerHTML = Ihtml;
  activateQuestion.innerHTML = Qhtml;
  activateOrganization.innerHTML = Ohtml;
}

function dropAddItems() {
  let activateItems = document.querySelector("#addStuff");
  let activateQuestion = document.querySelector("#Quiz");
  let activateOrganization = document.querySelector("#Organizer");
  let questions = document.querySelector("#quizDiv");
  let Add = document.querySelector("#addItems");
  let Organize = document.querySelector("#Item");
  questions.classList.add("hideSections");
  Add.classList.remove("hideSections");
  Organize.classList.add("hideSections");
  let sideArrow = ">";
  let downArrow = "\u2304";
  let Qhtml = "";
  let Ihtml = "";
  let Ohtml = "";

  Qhtml +=
    "<h2 style='color: orange;'>" + "Quiz Application" + sideArrow + "</h2>";
  Ihtml +=
    "<h2 style='color: orange;'>" +
    "Add Items Application" +
    downArrow +
    "</h2>";
  Ohtml +=
    "<h2 style='color: orange;'>" +
    "Javascript Item Organizer" +
    sideArrow +
    "</h2>";

  activateItems.innerHTML = Ihtml;
  activateQuestion.innerHTML = Qhtml;
  activateOrganization.innerHTML = Ohtml;
}

function dropOrganizeItems() {
  let activateItems = document.querySelector("#addStuff");
  let activateQuestion = document.querySelector("#Quiz");
  let activateOrganization = document.querySelector("#Organizer");
  let questions = document.querySelector("#quizDiv");
  let Add = document.querySelector("#addItems");
  let Organize = document.querySelector("#Item");
  questions.classList.add("hideSections");
  Add.classList.add("hideSections");
  Organize.classList.remove("hideSections");
  let sideArrow = ">";
  let downArrow = "\u2304";
  let Qhtml = "";
  let Ihtml = "";
  let Ohtml = "";
  Qhtml +=
    "<h2 style='color: orange;'>" + "Quiz Application" + sideArrow + "</h2>";
  Ihtml +=
    "<h2 style='color: orange;'>" +
    "Add Items Application" +
    sideArrow +
    "</h2>";
  Ohtml +=
    "<h2 style='color: orange;'>" +
    "Javascript Item Organizer" +
    downArrow +
    "</h2>";

  activateItems.innerHTML = Ihtml;
  activateQuestion.innerHTML = Qhtml;
  activateOrganization.innerHTML = Ohtml;
}
