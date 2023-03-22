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

  // console.log(mail.value)
  // console.log(addAdmin)
  if (mail.value == superUser.mail && pass.value == superUser.mdp){
   
    window.location.href = "http://127.0.0.1:5500/html/superAdmin.html";
    localStorage.setItem("SessionConnect", JSON.stringify(superUser));
  }else{
    
  } 
  addAdmin.forEach(element => {
    
    if(mail.value == element.email && pass.value == element.password){
      
      window.location.href = "http://127.0.0.1:5500/html/admin.html";
      
      localStorage.setItem("SessionConnect", JSON.stringify(element));

    }
  })


  

});
