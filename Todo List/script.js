let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector(".list-container");
let button = document.querySelector("button");

let workDone = () => {
  if (inputBox.value === "") {
    alert("Write something");
    return;
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

button.addEventListener("click", workDone);

inputBox.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    workDone();
  }
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "/") {
    inputBox.focus();
    evt.preventDefault();
  }
});

listContainer.addEventListener(
  "click",
  (evt) => {
    if (evt.target.tagName === "LI") {
      evt.target.classList.toggle("checked");
      saveData();
    } else if (evt.target.tagName === "SPAN") {
      evt.target.parentElement.remove();
      saveData();
    }
  },
  false
);

let saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

let showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTask();
