const form = document.querySelector('#form-id')
const enterTask = document.querySelector('#Enter-task')
const submit = document.querySelector('#submit')
let tasks = document.querySelectorAll('.lis')
let tasksList = document.querySelector('#task-style')
let taskElement = document.createElement('li')
let deletebutton = document.querySelector('#delete')
const checkBox = document.createElement('input')

checkBox.className = "checkbox"

checkBox.setAttribute('type', 'checkbox')

checkBox.setAttribute('aria-label', 'Checkbox for following text input')

form.addEventListener('submit', addTask)
deletebutton.addEventListener('click', removeTask)



function addTask(e) {
  e.preventDefault()

  if (enterTask.value.length > 0 && tasks.length > 0) {
    tasksList.id = 'shown'
    taskElement = document.createElement('li')
    taskElement.id = 'new-lis'
    taskElement.className = "lis"

    pTag = document.createElement('p')

    taskElement.append(document.createTextNode(enterTask.value))

    const checkBox = document.createElement('input')

    checkBox.className = "checkbox"


    checkBox.setAttribute('type', 'checkbox')

    checkBox.setAttribute('aria-label', 'Checkbox for following text input')

    taskElement.append(checkBox)

    tasksList.append(taskElement)

    let tasks = document.querySelectorAll('.lis')

    enterTask.value = ''
    console.log(taskElement[i])
  } else {
    alert("Add a task")
  }
}

function removeTask(e) {
  let tasksList = document.querySelectorAll('.checkbox')
  let cb = tasksList
  let newTasks = document.querySelectorAll('#new-lis')
  for (i = 0; i < tasksList.length; i++) {
    if (cb[i].checked) {
      newTasks[i].remove()
    }
  }
}

