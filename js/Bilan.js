
nameAdmin = document.querySelector('.adminUser h3');
session = JSON.parse(localStorage.getItem('AdminConnecte'))

nameAdmin.textContent = session.Name


logout = document.querySelector('.logout a')

console.log(logout);

logout.addEventListener('click', ()=>{
      localStorage.removeItem('AdminConnecte')
      console.log("c'est clear")
})