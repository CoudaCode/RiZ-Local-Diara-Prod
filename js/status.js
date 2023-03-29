tbody = document.createElement("tbody");
table = document.querySelector(".table");
let initialContacts = getContacts() || [];

function getContacts() {
  return JSON.parse(localStorage.getItem("travailleurs"));
}


function getBilan(){
    return JSON.parse(localStorage.getItem("bilan"));
}

function setBilan(){
  return JSON.stringify(localStorage.setItem("bilan"));
}



let bilan = getBilan() || []

// function setContacts(contacts) {
//   localStorage.setItem('contacts', JSON.stringify(contacts))
// }

// setContacts(initialContacts)
let contacts = getContacts();
contacts.forEach(elem => {
        conten = `
        <tr id="${elem.email}">
            <td>${elem.name}</td>
            <td>${elem.telephone}</td>
            <td>${elem.Date}</td>
            <td>${elem.time}</td>
            <td>${elem.time}</td>
            <td>${elem.gain}</td>
            <td><button class="delete-btn" contactphone="1234">terminer</button></td>
        </tr>  
        `

        tbody.innerHTML += conten

        table.appendChild(tbody)
});
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

// Click pour supprimer un utilistateur

deletetbn = document.querySelectorAll(".delete-btn");


console.log(contacts)
deletetbn.forEach((elem) => {
  elem.addEventListener("click", (e) => {


        parentButom = e.target.closest("tr");
        console.log(parentButom)
        veriF = contacts.filter( id =>id.email === parentButom.id )
        console.log(veriF);

          let dat = new Date        

          console.log(dat.toDateString())
        // Bilan = contacts.map(function(id) {
        //         let data = null;

        //         if (id.email !== parentButom.id) {
        //               data = id;
        //         }

        //         return data
        // } )
        console.log(Bilan);





  });
});




nameAdmin = document.querySelector('.adminUser h3');
DemoAdmin = document.querySelector('.adminUser h4');
session = JSON.parse(localStorage.getItem('SessionConnect'))

nameAdmin.textContent = session.name
Adp = document.querySelector('.dp h1')
Adp.textContent = session.name[0].toUpperCase()

logout = document.querySelector('.logout a')

console.log(logout);

logout.addEventListener('click', ()=>{
      localStorage.removeItem('SessionConnect')
      console.log("c'est clear")
})