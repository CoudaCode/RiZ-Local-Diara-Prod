

let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  }) 


// recuperer depuis localstorage

  function getContacts() {
  return JSON.parse(localStorage.getItem('todolist'))
}

// um tableau de contatactes
let initialContacts = getContacts() || []

const countElement = document.querySelector('.count')
const table = document.querySelector('.table')
const tblBody = document.createElement('tbody')

function setCount(count) {
  countElement.innerHTML = count
}

// ajouter dans localstorage
function settodolist(todolist) {
  localStorage.setItem('todolist', JSON.stringify(todolist))
}

settodolist(initialContacts)
let todolist = getContacts()

// remplir la table
function createTable(){
  for (let index = 0; index < todolist.length; index++) {
    let row = document.createElement('tr')
    // creer le button de supression
    let buttonCell = document.createElement('td')
    let deleteButton = document.createElement('button')
    let buttonText = document.createTextNode('Supprimer')
    deleteButton.setAttribute('class', 'delete-btn')
    deleteButton.appendChild(buttonText)

    for (
      let element = 0;
      element < Object.keys(todolist[0]).length;
      element++
    ) {

      // ajouter les td
      const cell = document.createElement('td')
      const cellText = document.createTextNode(Object.values(todolist[index])[element])


      deleteButton.setAttribute('contactPhone', todolist[index].taches)
      buttonCell.appendChild(deleteButton)
      cell.appendChild(cellText)
      row.appendChild(cell)
      row.appendChild(buttonCell)
      row.setAttribute('id', todolist[index].taches)

      // console.log( Object.keys(contacts[0]));
    }
    tblBody.appendChild(row)
  }
  table.appendChild(tblBody)

}

createTable()

let deleteButton = document.querySelectorAll('.delete-btn')

deleteButton.forEach(function (button) {
  button.addEventListener('click', function () {
    const taches = this.getAttribute('contactPhone')
    console.log(taches)

    let row = document.getElementById(taches)
    row.parentNode.removeChild(row)

    // enlever l'element supprimer
    let filteredContacts = todolist.filter(
      (contact) => contact.taches !== taches
    )
    todolist = filteredContacts

    console.log(todolist)
    setCount(todolist.length)
    settodolist(todolist)
  })
})

// modal
let modal = document.getElementById('contactModal')
let modalButton = document.getElementById('addContactModalButton')
let close = document.querySelector('.close')

modalButton.onclick = function () {
  modal.style.display = 'block'
}

close.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

// ajouter un contact
let addContactButton = document.querySelector('.addContactButton')
addContactButton.onclick = function (event) {
  event.preventDefault()
  const taches = document.getElementById('tache').value
  const Montant = document.getElementById('Montant').value
  
  if (!taches ){
    alert('merci de tout remplir')
    return 
  }

  const newContact = {taches,Montant}
  todolist.push(newContact)
  setCount(todolist.length)
  settodolist(todolist)

  // ajouter un tr
  let row = document.createElement('tr')

  let cell0 = row.insertCell(0)
  const cell0Text = document.createTextNode(taches)
  cell0.appendChild(cell0Text)
  row.appendChild(cell0)
  
    let cell1 = row.insertCell(1)
    const cell1Text = document.createTextNode(Montant)
    cell1.appendChild(cell1Text)
    row.appendChild(cell1)

  // creer le button de supression
  let buttonCell = document.createElement('td')
  let deleteButton = document.createElement('button')
  let buttonText = document.createTextNode('Supprimer')
  deleteButton.setAttribute('class', 'delete-btn')
  deleteButton.setAttribute('contactPhone', taches)
  deleteButton.appendChild(buttonText)

  // ajouter un evenment
  deleteButton.addEventListener('click', function () {
    const taches = this.getAttribute('contactPhone')

    let row = document.getElementById(taches)
    row.parentNode.removeChild(row)

    // enlever l'element supprimer
    let filteredtodolist = todolist.filter(
      (contact) => contact.taches !== taches
    )
   
    todolist = filteredtodolist
    setCount(todolist.length)
    settodolist(todolist)
  })

  buttonCell.appendChild(deleteButton)

  row.appendChild(buttonCell)

  row.setAttribute('id', taches)
  tblBody.appendChild(row)
  table.appendChild(tblBody)

  
  // vider les inputs
  document.getElementById('tache').value = ''
  document.getElementById('Montant').value = ''
 
  modal.style.display = 'none'
}

setCount(todolist.length)


nameAdmin = document.querySelector('.adminUser h3');
session = JSON.parse(localStorage.getItem('SessionConnect'))

nameAdmin.textContent = session.name


logout = document.querySelector('.logout a')

console.log(logout);

logout.addEventListener('click', ()=>{
      localStorage.removeItem('SessionConnect')
      console.log("c'est clear")
})

Adp = document.querySelector('.dp h1')
Adp.textContent = session.name[0].toUpperCase()