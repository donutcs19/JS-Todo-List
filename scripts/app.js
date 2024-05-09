const addBtn = document.getElementById('enter')
const userInput = document.getElementById('userInput')
const ul = document.querySelector('ul')

const todos = []

const addInput = (input) => {
if (input){
    todos.push(input)
}

console.log(todos)
}

const createList = () => {
    addInput(userInput.value)
while (ul.firstChild){
    ul.removeChild(ul.lastChild)
}

    todos.forEach((todo) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(todo))
        ul.appendChild(li)
        userInput.value = ''

        const doneTask = () => {
            li.classList.toggle('done')
        }
        li.addEventListener('click', doneTask)

        const deleteBtn = document.createElement('button')
        deleteBtn.appendChild(document.createTextNode('Close'))
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            li.classList.add('delete')
        })
    })
}
addBtn.addEventListener('click', createList)

