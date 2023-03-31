mail = document.querySelector("#email");
pass = document.querySelector("#password");
Name = document.querySelector("#name");

superUser = {
  mail: "couda.dm@gmail.com",
  mdp: "couda123@",
  status: "SuperAdmin",
  name: "Diara Madou"
};

localStorage.setItem("SuperUser", JSON.stringify(superUser));

form = document.querySelector(".content");

console.log(mail, pass, form);



function AdminConnect(){
  return JSON.parse(localStorage.getItem("Admin"));
}


let addAdmin = AdminConnect() || [];

console.log(addAdmin)

form.addEventListener("submit", (e) => {
  e.preventDefault();


  if (mail.value == superUser.mail && pass.value == superUser.mdp){
   
    window.location.href = "https://diaramadou.github.io/RiZ-Local-Diara-Prod/html/superAdmin.html";
    localStorage.setItem("SessionConnect", JSON.stringify(superUser));
  } 
  addAdmin.forEach(element => {
    
    if(mail.value == element.email && pass.value == element.password){
      
      window.location.href = "https://diaramadou.github.io/RiZ-Local-Diara-Prod/html/admin.html";
      
      localStorage.setItem("SessionConnect", JSON.stringify(element));

    }
  })


  

});
