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
  console.log(getContacts().length)





nameAdmin = document.querySelector('.adminUser h3');
session = JSON.parse(localStorage.getItem('SessionConnect'))

console.log(session)
nameAdmin.textContent = session.name

  logout = document.querySelector('.logout a')

  console.log(nameAdmin);
  
  logout.addEventListener('click', ()=>{
        localStorage.removeItem('SessionConnect')
        console.log("c'est clear")
  })
  // Radio Plusieurs



  Adp = document.querySelector('.dp h1')
  Adp.textContent = session.name[0].toUpperCase()