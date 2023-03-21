let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  })


  h2 = document.querySelector('.topic-heading')

  function getContacts() {
    return JSON.parse(localStorage.getItem('contacts'))
  }
  h2.textContent = getContacts().length;
  console.log(getContacts().length)





nameAdmin = document.querySelector('.adminUser h3');
session = JSON.parse(localStorage.getItem('AdminConnecte'))

nameAdmin.textContent = session.Name

  logout = document.querySelector('.logout a')

  console.log(logout);
  
  logout.addEventListener('click', ()=>{
        localStorage.removeItem('AdminConnecte')
        console.log("c'est clear")
  })
  // Radio Plusieurs



