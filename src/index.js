//const { documentBaseURL } = require("jsdom/lib/jsdom/living/helpers/document-base-url");
// const newTaskDescription = documentBaseURL.getElementById("new-task-description");

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    handleToDo(e.target['new-task-description'].value);
  })
});


function handleToDo(todo){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.textContent = ' Finito! '
  p.textContent = ` ${todo} `;
  document.getElementById('tasks').appendChild(p);
  p.appendChild(btn).addEventListener('click', (e) => {
    e.preventDefault();
    p.remove();
  });
};