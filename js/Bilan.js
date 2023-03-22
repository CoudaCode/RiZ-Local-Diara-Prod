
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