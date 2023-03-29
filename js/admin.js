let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  })


  h2 = document.querySelector('.topic-heading')

  function getContacts() {
    return JSON.parse(localStorage.getItem('travailleurs'))
  }
  h2.textContent = getContacts().length;
  console.log(getContacts())

let travailleurs = getContacts()
  items = document.querySelector('.items')
  prent = document.querySelector('.report-body')
  travailleurs.forEach(element => {
    
    contenu = ` <div class="item1">
        <h3 class="top-nextlvl">${element.name}</h3>
        <h3 class="top-nextlvl">${element.Tache}</h3>
        <button class="top-nextlvl label-tag">En cours</button>
      </div>`
      items.innerHTML += contenu
      prent.appendChild(items)
  });




nameAdmin = document.querySelector('.adminUser h3');
session = JSON.parse(localStorage.getItem('SessionConnect'))

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