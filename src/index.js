//const { documentBaseURL } = require("jsdom/lib/jsdom/living/helpers/document-base-url");
// const newTaskDescription = documentBaseURL.getElementById("new-task-description");

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('form').addEventListener('submit', (e) =>  {
    e.preventDefault();
    addToDo(e.target['new-task-description'].value);
  })

  function addToDo(todo){
    const p = document.createElement('p');
    const btn = document.createElement('button');
    
    p.textContent = ` ${todo} `;
    btn.textContent = 'Deletrius!';

    document.getElementById('tasks').appendChild(p);
    p.appendChild(btn).addEventListener('click', function(e) {
      e.preventDefault();
      p.remove();
    })  
  }
})