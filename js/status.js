tbody = document.createElement("tbody");
table = document.querySelector(".table");
let initialContacts = getContacts() || [];

function getContacts() {
  return JSON.parse(localStorage.getItem("travailleurs"));
}

// function setContacts(contacts) {
//   localStorage.setItem('contacts', JSON.stringify(contacts))
// }

// setContacts(initialContacts)
let contacts = getContacts();

function createTable() {
  for (let index = 0; index < contacts.length; index++) {
    let row = document.createElement("tr");
    // creer le button de supression
    let buttonCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    let buttonText = document.createTextNode("terminer");
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.appendChild(buttonText);

    for (
      let element = 0;
      element < Object.keys(contacts[0]).length;
      element++
    ) {
      if (element == 1 || element == 3) {
        continue;
      }

      // ajouter les td
      const cell = document.createElement("td");

      const cellText = document.createTextNode( Object.values(contacts[index])[element]
      );
      console.log(cellText);
      console.log(cell);
      deleteButton.setAttribute("contactPhone", contacts[index].telephone);
      deleteButton.setAttribute("contactPhone", contacts[index].telephone);
      buttonCell.appendChild(deleteButton);
      cell.appendChild(cellText);
      row.appendChild(cell);
      row.appendChild(buttonCell);
      row.setAttribute("id", contacts[index].telephone);

      // console.log( Object.keys(contacts[0]));
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
}

createTable();

let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

// Click pour supprimer un utilistateur

deletetbn = document.querySelectorAll(".delete-btn");
// function myFunction() {
//   location.href = "https://diaramadou.github.io/RiZ-Local-Diara-Prod/html/Bilan.html";

// }

console.log(contacts)
deletetbn.forEach((elem) => {
  elem.addEventListener("click", () => {
  
    // if (elem.textContent !== 'terminer') {
    //   elem.removeAttribute("class");
    //   elem.textContent = "terminer";
    //   elem.setAttribute("class", "terminer-btn");
    //   // console.log(elem.contactPhone)
    //   console.log(elem.getAttribute("contactPhone"))
    // }else{
    //   myFunction()
    // }           
    // console.log("test");

    // // myFunction() 

        let contactPhone = elem.getAttribute("contactPhone");
        console.log(contactPhone);
        veriF = contacts.filter( id =>id.telephone === contactPhone )
        console.log(veriF);
  });
});




nameAdmin = document.querySelector('.adminUser h3');
DemoAdmin = document.querySelector('.adminUser h4');
session = JSON.parse(localStorage.getItem('SessionConnect'))

nameAdmin.textContent = session.Name
Adp = document.querySelector('.dp h1')
Adp.textContent = session.name[0].toUpperCase()

logout = document.querySelector('.logout a')

console.log(logout);

logout.addEventListener('click', ()=>{
      localStorage.removeItem('SessionConnect')
      console.log("c'est clear")
})