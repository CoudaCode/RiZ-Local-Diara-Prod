let bilan = JSON.parse(localStorage.getItem("bilan"))

console.log(bilan)
tbody = document.createElement("tbody");
table = document.querySelector(".table");
bilan.forEach(lem => {
      
      tr = `<tr>
            <td>${lem.name}</td>
            <td>${lem.telephone}</td>
            <td>${lem.DateDefin}</td>
            <td>${lem.Tache}</td>
            <td>${lem.gain}</td>
       
            
      </tr>
      `

      tbody.innerHTML += tr

      table.appendChild(tbody)
});

nameAdmin = document.querySelector('.adminUser h3');
session = JSON.parse(localStorage.getItem('SessionConnect'))

nameAdmin.textContent = session.Name


logout = document.querySelector('.logout a')

console.log(logout);

logout.addEventListener('click', ()=>{
      localStorage.removeItem('SessionConnect')
      console.log("c'est clear")
})
Adp = document.querySelector('.dp h1')
Adp.textContent = session.name[0].toUpperCase()