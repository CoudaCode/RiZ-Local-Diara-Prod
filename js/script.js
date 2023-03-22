mail = document.querySelector("#email");
pass = document.querySelector("#password");
Name = document.querySelector("#name");


form = document.querySelector(".content");

console.log(mail, pass, form);

function AdminConnect() {
  return JSON.parse(localStorage.getItem("admin"));
}

function setContacts(contacts) {
  localStorage.setItem("admin", JSON.stringify(contacts));
}

let addAdmin = AdminConnect() || [];

console.log(AdminConnect());

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const admin = {
     mail:mail.value,
     pass: pass.value,
     Name:Name.value
  }
  // addAdmin.push(admin)
  // setContacts(addAdmin)
  addAdmin.forEach((element) => {
    if (
      mail.value === element.mail &&
      pass.value === element.pass
    ){
      // alert("Mdp ou Email est incorrect");
      localStorage.setItem("AdminConnecte", JSON.stringify(admin));
      
      window.location.href='http://127.0.0.1:5500/index.html'
    } 
  });
 
});
