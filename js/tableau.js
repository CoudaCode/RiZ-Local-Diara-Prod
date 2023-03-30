// 
//ajout de nouvelle options



let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  }) 


// recuperer depuis localstorage

  function getTravailleurs() {
  return JSON.parse(localStorage.getItem('travailleurs'))
}

  function getTodolist() {
  return JSON.parse(localStorage.getItem('todolist'))
}



console.log(Object.values(getTodolist()[0]))

for (let tab = 0; tab < getTodolist().length; tab++) {
  
  for (let tel = 0; tel < Object.keys(getTodolist()[tab]).length - 1 ; tel++) {
   
    const optTAche = document.createElement("option");
   
    optTAche.textContent = Object.values(getTodolist()[tab])[0];  
    
    document.getElementById('Tache').add(optTAche)
    
    console.log(optTAche.value)
  }
  
}

// Changement automatique

changeGain = document.getElementById('Gain')

changeTAche = document.getElementById('Tache')
let TabMtn = []


for (let alt = 0; alt < getTodolist().length; alt++){
  
  for (let tel = 0; tel < Object.keys(getTodolist()[alt]).length - 1 ; tel++) {
    TabMtn.push(parseInt(Object.values(getTodolist()[alt])[1]))
  }
}

changeTAche.addEventListener('change', function(){
    console.log(changeTAche.selectedIndex);
    changeGain.value = TabMtn[changeTAche.selectedIndex]
})
// um tableau de contatactes
let initialContacts = getTravailleurs() || []

const countElement = document.querySelector('.count')
const table = document.querySelector('.table')
const tblBody = document.createElement('tbody')
// console.log(initialContacts)
 
// function counter
function setCount(count) {
  countElement.innerHTML = count
}

// ajouter dans localstorage
function setContacts(contacts) {
  localStorage.setItem('travailleurs', JSON.stringify(contacts))
}

setContacts(initialContacts)
let contacts = getTravailleurs()

console.log(contacts)
// remplir la table
function createTable(){
  for (let index = 0; index < contacts.length; index++) {
    let row = document.createElement('tr')
    // creer le button de supression
    let buttonCell = document.createElement('td')
    let deleteButton = document.createElement('button')
    let buttonText = document.createTextNode('Supprimer')
    deleteButton.setAttribute('class', 'delete-btn')
    deleteButton.appendChild(buttonText)

    for (
      let element = 0;
      element < Object.keys(contacts[0]).length;
      element++
    ) {

      
      // ajouter les td
      const cell = document.createElement('td')
      const cellText = document.createTextNode(
        Object.values(contacts[index])[element]
      )


      deleteButton.setAttribute('contactPhone', contacts[index].telephone)
      buttonCell.appendChild(deleteButton)
      cell.appendChild(cellText)
      row.appendChild(cell)
      row.appendChild(buttonCell)
      row.setAttribute('id', contacts[index].telephone)

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
    const telephone = this.getAttribute('contactPhone')
    console.log(telephone)

    let row = document.getElementById(telephone)
    row.parentNode.removeChild(row)

    // enlever l'element supprimer
    let filteredContacts = contacts.filter(
      (contact) => contact.telephone !== telephone
    )
    contacts = filteredContacts
    setCount(contacts.length)
    setContacts(contacts)
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
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const telephone = document.getElementById('telephone').value
  const Sexe = document.getElementById('Sexe').options[document.getElementById('Sexe').selectedIndex].innerText;
  const Date = document.getElementById('date').value
  const time = document.getElementById('temps').value
  const Tache = document.getElementById('Tache').options[document.getElementById('Tache').selectedIndex].innerText
  // const gain = document.getElementById('Gain').options[document.getElementById('Gain').selectedIndex].innerText
  const gain = document.getElementById('Gain').value
  if (!name || !email || !telephone || !Sexe || !Date || !Tache || !time || !gain) {
    alert('merci de tout remplir')
    return 
  }

  const newContact = { name, email, telephone, Sexe, Date,time,Tache,gain}
  contacts.push(newContact)
  setCount(contacts.length)
  setContacts(contacts)

  // ajouter un tr
  let row = document.createElement('tr')

  let cell0 = row.insertCell(0)
  const cell0Text = document.createTextNode(name)
  cell0.appendChild(cell0Text)
  row.appendChild(cell0)

  let cell1 = row.insertCell(1)
  const cell1Text = document.createTextNode(email)
  cell1.appendChild(cell1Text)
  row.appendChild(cell1)

  let cell2 = row.insertCell(2)
  const cell2Text = document.createTextNode(telephone)
  cell2.appendChild(cell2Text)
  row.appendChild(cell2)

  let cell3 = row.insertCell(3)
  const cell3Text = document.createTextNode(Sexe)
  cell3.appendChild(cell3Text)
  row.appendChild(cell3)

  let cell4 = row.insertCell(4)
  const cell4Text = document.createTextNode(Date)
  cell4.appendChild(cell4Text)
  row.appendChild(cell4)

  let cell5 = row.insertCell(5)
  const cell5Text = document.createTextNode(time)
  cell5.appendChild(cell5Text)
  row.appendChild(cell5)

  let cell6 = row.insertCell(6)
  const cell6Text = document.createTextNode(Tache)
  cell6.appendChild(cell6Text)
  row.appendChild(cell6)
  

  let cell7 = row.insertCell(7)
  const cell7Text = document.createTextNode(gain)
  cell7.appendChild(cell7Text)
  row.appendChild(cell7)
  
  // creer le button de supression
  let buttonCell = document.createElement('td')
  let deleteButton = document.createElement('button')
  let buttonText = document.createTextNode('Supprimer')
  deleteButton.setAttribute('class', 'delete-btn')
  deleteButton.setAttribute('contactPhone', telephone)
  deleteButton.appendChild(buttonText)

  // ajouter un evenment
  deleteButton.addEventListener('click', function () {
    const telephone = this.getAttribute('contactPhone')

    let row = document.getElementById(telephone)
    row.parentNode.removeChild(row)

    // enlever l'element supprimer
    let filteredContacts = contacts.filter(
      (contact) => contact.telephone !== telephone
    )
   
    contacts = filteredContacts
    setCount(contacts.length)
    setContacts(contacts)
  })

  buttonCell.appendChild(deleteButton)

  row.appendChild(buttonCell)

  row.setAttribute('id', telephone)
  tblBody.appendChild(row)
  table.appendChild(tblBody)


  // vider les inputs
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('telephone').value = ''
  document.getElementById('Sexe').value = ''
  document.getElementById('date').value = ''
  document.getElementById('Tache').value = ''
  document.getElementById('Gain').value = ''
  document.getElementById('temps').value = ''
  modal.style.display = 'none'
}

setCount(contacts.length)




nameAdmin = document.querySelector('.adminUser h3');
session = JSON.parse(localStorage.getItem('SessionConnect'))

nameAdmin.textContent = session.name
Adp = document.querySelector('.dp h1')
Adp.textContent = session.name[0].toUpperCase()
logout = document.querySelector('.logout a')

console.log(logout);


console.log(session)
logout.addEventListener('click', ()=>{
      localStorage.removeItem('SessionConnect')
      console.log("c'est clear")
})