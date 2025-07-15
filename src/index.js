//const { documentBaseURL } = require("jsdom/lib/jsdom/living/helpers/document-base-url");
// const newTaskDescription = documentBaseURL.getElementById("new-task-description");

document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) =>  {
    e.preventDefault();
    buildToDo(e.target['new-task-description'].value);
  })

  function buildToDo(task){
    const p = document.createElement('p');
    const btn = document.createElement('button');

    p.style.fontSize = '20px';
    btn.style.fontSize = '15px';
    
    p.textContent = ` ${task} `;
    btn.textContent = 'Deletrius!';

    document.getElementById('tasks').appendChild(p);
    p.appendChild(btn).addEventListener('click', function(e) {
      e.preventDefault();
      p.remove();
    }) 
    
    form.querySelector('#new-task-description').value = '';
  }
})