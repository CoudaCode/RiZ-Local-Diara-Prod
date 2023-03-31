let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  })


  h2 = document.querySelector('.topic-heading')
  let bilan = JSON.parse(localStorage.getItem("bilan"))
  let todo = JSON.parse(localStorage.getItem("todolist"))

  function getContacts() {
    return JSON.parse(localStorage.getItem('travailleurs'))
  }

  console.log(bilan)
  h2.textContent = getContacts().length;
  console.log(getContacts())
  tacheLength = document.querySelector('.topic-heading1')
  tacheLength.textContent = todo.length
let travailleurs = getContacts()
  items1 = document.querySelector('.items1')
  items2 = document.querySelector('.items2')
  prent1 = document.querySelector('.report-body1')
  prent2 = document.querySelector('.report-body2')
  travailleurs.forEach(element =>{
    
    contenu1 = ` <div class="item1">
        <h3 class="top-nextlvl">${element.name}</h3>
        <h3 class="top-nextlvl">${element.Tache}</h3>
        <button class="top-nextlvl label-tag">En cours</button>
      </div>`
      items1.innerHTML += contenu1
      prent1.appendChild(items1)
  });
  
  for (let ele = 0; ele < 5; ele++) {
  
    
    
    contenu2 = ` <div class="item1">
        <h3 class="top-nextlvl">${bilan[ele].name}</h3>
        <h3 class="top-nextlvl">${bilan[ele].gain}</h3>
      
      </div>`
      items2.innerHTML += contenu2
      prent2.appendChild(items2)
  }





nameAdmin = document.querySelector('.adminUser h3');
session = JSON.parse(localStorage.getItem('SessionConnect'))
// Deconnexion 
nameAdmin.textContent = session.name

  logout = document.querySelector('.logout a')

  console.log(nameAdmin, logout);
  
  logout.addEventListener('click', ()=>{
        localStorage.removeItem('SessionConnect')
        console.log("c'est clear")
  })
  // Radio Plusieurs



  Adp = document.querySelector('.dp h1')
  Adp.textContent = session.name[0].toUpperCase()