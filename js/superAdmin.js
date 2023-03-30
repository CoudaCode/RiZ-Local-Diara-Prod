let modal = document.getElementById("contactModal");
let modalButton = document.getElementById("addContactModalButton");
let close = document.querySelector(".close");
const countElement = document.querySelector(".count");
const table = document.querySelector(".table");
const tblBody = document.createElement("tbody");
const form = document.querySelector(".form");






modalButton.onclick = function () {
  modal.style.display = "block";
  
  
  
  formAjout =`
  <div class="champ"> 
  <div>
  <label for="email">Email:</label>
  <input class="form-control" required type="email" id="email" name="email">
  </div>
  <div>
      <label for="name">Nom complet:</label>
      <input class="form-control" required type="text" id="name" name="name">
  </div>
  </div>
  <div class="champ"> 
  <div>
  <label for="telephone">Mot de passe:</label>
  <input class="form-control" required type="password" id="password" name="password">
  </div>
  </div>
  <button type="submit" class="addContactButton">Ajouter</button>`
  
  
  form.innerHTML = formAjout;
  addContactButton = form.querySelector(".addContactButton");
  
  addContactButton.addEventListener('click',function() {
    console.log('bienvue') 
    
    console.log(form)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!name || !email || !password) {
      alert("merci de tout remplir");
      return;
    }
  
    const newContact = { name, email, password };
    Admin.push(newContact);
    setCount(Admin.length);
    setAdmin(Admin);
  
    window.location.reload()
  
    // vider les inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    modal.style.display = "none";
})


};

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

// recuperer depuis localstorage les admins

function getAdmin() {
  return JSON.parse(localStorage.getItem("Admin"));
}

// um tableau de contatactes
let initialAdmin = getAdmin() || [];

// function counter
function setCount(count) {
  countElement.innerHTML = count;
}

// ajouter dans localstorage les admins
function setAdmin(Admin) {
  localStorage.setItem("Admin", JSON.stringify(Admin));
}

setAdmin(initialAdmin);
let Admin = getAdmin();


Admin.forEach(adm => {

  row = `<tr id="${adm.email}">
          <td>${adm.name}</td>
          <td>${adm.email}</td>
          <td>${adm.password}</td>
          <td><button class="delete-btn" contactphone="${adm.email}">Supprimer</button></td>
          <td><button class="modif-btn" contactphone="${adm.email}">Modier</button></td>
          
          </tr>`
  tblBody.innerHTML += row
  table.appendChild(tblBody)
});



// enlever l'element supprimer

let deleteButton = document.querySelectorAll(".delete-btn");

deleteButton.forEach(function (button) {
  button.addEventListener("click", function (e) {
    
    parentButom = e.target.closest("tr");

    console.log(parentButom.id);
    // let row = document.getElementById(password);
    // console.log(row)
      tblBody.removeChild(parentButom);
    let filteredAdmin = Admin.filter(
      (adm) => adm.email !== parentButom.id
    );
    console.log(filteredAdmin);
    Admin = filteredAdmin;
    setCount(Admin.length);
    setAdmin(Admin);
    window.location.reload()
  });
});

form.addEventListener('submit', function(){
    e.preventDefault()
})
// Ajouter Un element




// Modification l'element 
let UpdateBtn = document.querySelectorAll(".modif-btn")

UpdateBtn.forEach(function (btn){
  btn.addEventListener("click", function (e){
    e.preventDefault();
    
    parent = e.target.closest('tr')
    mail = parent.id
    console.log(e.target.closest('tr').id)
    data = getAdmin()

    
    conpare = data.find((dat)=> dat.email === mail)
    
    console.log("before",conpare)

    VerifTAb = data.filter((pass)=> pass.email !== mail)
    console.log(VerifTAb)
  
        contenu = `
        <div class="champ"> 
        <div>
            <label for="email">Email:</label>
            <input class="form-control" required type="email" value="${conpare.email}" id="email" name="email">
        </div>
          <div>
            <label for="name">Nom complet:</label>
            <input class="form-control"  required type="text" value="${conpare.name}" id="name" name="name">
            </div>
            </div>
          <div class="champ">
                <div>
                  <label for="telephone">Mot de passe:</label>
                  <input class="form-control" required type="password" value="${conpare.password}" id="password" name="password">
                </div>
          </div>
            <button type="button" id="${conpare.email}" class="UpdateContactButton">Modif</button>
      `
      form.innerHTML = contenu
      // form
      // .querySelector(".UpdateContactButton")
      // .addEventListener("click", () => {
      //   let inputs = form.querySelectorAll("input");
      //   inputs.forEach(function (input) {
      //     concerne[conpare.id] = input.value;
      //   });
      //   data.push(conpare);
      //   setAdmin(data);
      //   window.location.reload()
      // });
      form.querySelector('.UpdateContactButton').addEventListener('click',function(e){
        e.preventDefault()
        let inputs = form.querySelectorAll("input");
         
          const email = inputs[0]
          const name = inputs[1]
          const mdp = inputs[2]


          
          const inde = data.find(cle => cle.email == e.target.id)
          const indeix = data.indexOf(inde)

          console.log(indeix)
          console.log(inde)

          
          inde.name = name.value;
          inde.password = mdp.value;

          data[indeix] = inde



          
        setAdmin(data)
        window.location.reload()
      })
        console.log('TEST',form.querySelector('.UpdateContactButton'))
        // form.innerHTML = contenu

        modal.style.display = "block";
      
        close.onclick = function () {
          modal.style.display = "none";
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
        };
        
        window.onclick = function (event) {
          if(event.target == modal) {
            modal.style.display = "none";
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
          }
        };

  });
});


// Ajouet les admin apres le click btn


setCount(Admin.length);


// Afficher La Personne connec
nameAdmin = document.querySelector(".adminUser h3");
Spadmin = document.querySelector(".adminUser h4");
session = JSON.parse(localStorage.getItem("SessionConnect"));

// console.log(session)

nameAdmin.textContent = session.name;
Spadmin.textContent = session.status;
Adp = document.querySelector(".dp h1");
Adp.textContent = session.name[0].toUpperCase();
logout = document.querySelector(".logout a");

logout.addEventListener("click", () => {
  localStorage.removeItem("SessionConnect");
  console.log("c'est clear");
});

