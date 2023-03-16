// 
//ajout de nouvelle options

// const opt1 = document.createElement("option");
// opt1.value = "3";
// opt1.textContent = "Changeur";


// console.log(document.getElementById('tache').add(opt1))

let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  }) 


// recuperer depuis localstorage

  function gettaches() {
  return JSON.parse(localStorage.getItem('taches'))
}

// um tableau de contatactes
let initialtaches = gettaches() || []

const countElement = document.querySelector('.count')
const table = document.querySelector('.table')
const tblBody = document.createElement('tbody')
// console.log(initialtaches)

// function counter
function setCount(count) {
  countElement.innerHTML = count
}

// ajouter dans localstorage
function settaches(taches) {
  localStorage.setItem('taches', JSON.stringify(taches))
}

settaches(initialtaches)
let taches = gettaches()

// remplir la table
function createTable(){
  for (let index = 0; index < taches.length; index++) {
    let row = document.createElement('tr')
    // creer le button de supression
    let buttonCell = document.createElement('td')
    let deleteButton = document.createElement('button')
    let buttonText = document.createTextNode('Supprimer')
    deleteButton.setAttribute('class', 'delete-btn')
    deleteButton.appendChild(buttonText)

    for (
      let element = 0;
      element < Object.keys(taches[0]).length;
      element++
    ) {

      if(element == 7){
        continue
      }
      // ajouter les td
      const cell = document.createElement('td')
      const cellText = document.createTextNode(
        Object.values(taches[index])[element]
      )
      deleteButton.setAttribute('contactPhone', taches[index].tache)
      buttonCell.appendChild(deleteButton)
      cell.appendChild(cellText)
      row.appendChild(cell)
      row.appendChild(buttonCell)
      row.setAttribute('id', taches[index].tache)

      // console.log( Object.keys(taches[0]));
    }
    tblBody.appendChild(row)
  }
  table.appendChild(tblBody)

}

createTable()

let deleteButton = document.querySelectorAll('.delete-btn')

deleteButton.forEach(function (button) {
  button.addEventListener('click', function () {
    const tache = this.getAttribute('contactPhone')

    let row = document.getElementById(tache)
    row.parentNode.removeChild(row)

    // enlever l'element supprimer
    let filteredtaches = taches.filter(
      (contact) => contact.tache !== tache
    )
    taches = filteredtaches
    setCount(taches.length)
    settaches(taches)
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
  const name = document.getElementById('tache').value
//   const email = document.getElementById('email').value
//   const telephone = document.getElementById('telephone').value
//   const Sexe = document.getElementById('Sexe').options[document.getElementById('Sexe').selectedIndex].innerText;
//   const Date = document.getElementById('date').value
//   const time = document.getElementById('temps').value
//   const Tache = document.getElementById('tache').options[document.getElementById('tache').selectedIndex].innerText
//   const gain = document.getElementById('gain').options[document.getElementById('gain').selectedIndex].innerText
  
  if (!name ) {
    alert('merci de tout remplir')
    return 
  }

  const newContact = {name}
  taches.push(newContact)
  setCount(taches.length)
  settaches(taches)

  // ajouter un tr
  let row = document.createElement('tr')

  let cell0 = row.insertCell(0)
  const cell0Text = document.createTextNode(name)
  cell0.appendChild(cell0Text)
  row.appendChild(cell0)
  
//     let cell1 = row.insertCell(1)
//     const cell1Text = document.createTextNode(email)
//     cell1.appendChild(cell1Text)
//     row.appendChild(cell1)

//   let cell2 = row.insertCell(2)
//   const cell2Text = document.createTextNode(telephone)
//   cell2.appendChild(cell2Text)
//   row.appendChild(cell2)

//   let cell3 = row.insertCell(3)
//   const cell3Text = document.createTextNode(Sexe)
//   cell3.appendChild(cell3Text)
//   row.appendChild(cell3)

//   let cell4 = row.insertCell(4)
//   const cell4Text = document.createTextNode(Date)
//   cell4.appendChild(cell4Text)
//   row.appendChild(cell4)

//   let cell5 = row.insertCell(5)
//   const cell5Text = document.createTextNode(time)
//   cell5.appendChild(cell5Text)
//   row.appendChild(cell5)

//   let cell6 = row.insertCell(6)
//   const cell6Text = document.createTextNode(Tache)
//   cell6.appendChild(cell6Text)
//   row.appendChild(cell6)
  

//   let cell7 = row.insertCell(7)
//   const cell7Text = document.createTextNode(gain)
//   cell7.appendChild(cell7Text)
//   row.appendChild(cell7)
  
  // creer le button de supression
  let buttonCell = document.createElement('td')
  let deleteButton = document.createElement('button')
  let buttonText = document.createTextNode('Supprimer')
  deleteButton.setAttribute('class', 'delete-btn')
  deleteButton.setAttribute('contactPhone', tache)
  deleteButton.appendChild(buttonText)

  // ajouter un evenment
  deleteButton.addEventListener('click', function () {
    const tache = this.getAttribute('contactPhone')

    let row = document.getElementById(tache)
    row.parentNode.removeChild(row)

    // enlever l'element supprimer
    let filteredtaches = taches.filter(
      (contact) => contact.tache !== tache
    )
    taches = filteredtaches
    setCount(taches.length)
    settaches(taches)
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
  document.getElementById('tache').value = ''
  document.getElementById('gain').value = ''
  document.getElementById('temps').value = ''
  modal.style.display = 'none'
}

setCount(taches.length)
