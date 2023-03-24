let modal = document.getElementById("contactModal");
let modalButton = document.getElementById("addContactModalButton");

let UpBtn = modal.querySelector(".UpdateContactButton");
console.log(UpBtn)
let close = document.querySelector(".close");

modalButton.onclick = function () {
  modal.style.display = "block";
  UpBtn.style.display ='none';
  addContactButton.style.display ='block'

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

// recuperer depuis localstorage

function getAdmin() {
  return JSON.parse(localStorage.getItem("Admin"));
}

// um tableau de contatactes
let initialAdmin = getAdmin() || [];

const countElement = document.querySelector(".count");
const table = document.querySelector(".table");
const tblBody = document.createElement("tbody");
// console.log(initialAdmin)

// function counter
function setCount(count) {
  countElement.innerHTML = count;
}

// ajouter dans localstorage
function setAdmin(Admin) {
  localStorage.setItem("Admin", JSON.stringify(Admin));
}

setAdmin(initialAdmin);
let Admin = getAdmin();

// remplir la table
function createTable() {
  for (let index = 0; index < Admin.length; index++) {
    let row = document.createElement("tr");
    // creer le button de supression
    let buttonCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    let buttonText = document.createTextNode("Supprimer");
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.appendChild(buttonText);

    //  // creer le button de modifier
    let UpdateCell = document.createElement("td");
    let UpdateButton = document.createElement("button");
    let UpdateText = document.createTextNode("Modifer");
    UpdateButton.setAttribute("class", "modif-btn");
    UpdateButton.appendChild(UpdateText);
    for (let element = 0; element < Object.keys(Admin[0]).length; element++) {
      // ajouter les td
      const cell = document.createElement("td");

      const cellText = document.createTextNode(
        Object.values(Admin[index])[element]
      );

      // console.log('test',Object.values(Admin[index])[element])
      // console.log(Admin[index].password);
      // Delete
      deleteButton.setAttribute("contactPhone", Admin[index].password);
      UpdateButton.setAttribute("Phone", Admin[index].password)
      buttonCell.appendChild(deleteButton);
      cell.appendChild(cellText);
      row.appendChild(cell);
      row.appendChild(buttonCell);
      row.appendChild(UpdateButton);
      row.setAttribute("id", Admin[index].password);

      // console.log( Object.keys(Admin[0]));
    }
    tblBody.appendChild(row);
  }
  table.appendChild(tblBody);
}

createTable();

let deleteButton = document.querySelectorAll(".delete-btn");
UpdateBtn = document.querySelectorAll(".modif-btn");

deleteButton.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log('Depuis Dom')
    const password = this.getAttribute("contactPhone");
    console.log(password);

    let row = document.getElementById(password);
    console.log(row)
    row.parentNode.removeChild(row);
    // enlever l'element supprimer
    let filteredAdmin = Admin.filter(
      (contact) => contact.password !== password
    );
    console.log(filteredAdmin);
    Admin = filteredAdmin;
    setCount(Admin.length);
    setAdmin(Admin);''
  });
});

UpdateBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    UpBtn.style.display ='block';
    addContactButton.style.display ='none'
    console.log(UpBtn)
    
    const password = this.getAttribute("phone");
   
    let filteredAdmin = Admin.filter(
      (contact) => contact.password === password
    );
    console.log(Admin)
    console.log(filteredAdmin);
    console.log(document.getElementById("name").value)
    document.getElementById("name").value = filteredAdmin[0].name
    document.getElementById("email").value = filteredAdmin[0].email
    document.getElementById("password").value = filteredAdmin[0].password
      


    console.log(addContactButton)

    UpBtn.addEventListener('click',function(){
      let form = document.querySelector(".form");
      form.addEventListener("submit", (e)=>{
        e.preventDefault();
      })
     
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      console.log(name)
      console.log('nam',name, 'email :',email, 'mdp:',password)

    })

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

// modal

// ajouter un contact

let addContactButton = document.querySelector(".addContactButton");


  addContactButton.onclick = function (event) {
    

  
  event.preventDefault();
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

  // ajouter un tr
  let row = document.createElement("tr");

  let cell0 = row.insertCell(0);
  const cell0Text = document.createTextNode(name);
  cell0.appendChild(cell0Text);
  row.appendChild(cell0);

  let cell1 = row.insertCell(1);
  const cell1Text = document.createTextNode(email);
  cell1.appendChild(cell1Text);
  row.appendChild(cell1);

  let cell2 = row.insertCell(2);
  const cell2Text = document.createTextNode(password);
  cell2.appendChild(cell2Text);
  row.appendChild(cell2);

  // creer le button de supression
  let buttonCell = document.createElement("td");
  let deleteButton = document.createElement("button");
  let buttonText = document.createTextNode("Supprimer");
  deleteButton.setAttribute("class", "delete-btn");
  deleteButton.setAttribute("contactPhone", password);
  deleteButton.appendChild(buttonText);
  // Ajouter Evenements

  // Modifier
  let UpdateCell = document.createElement("td");
  let UpdateButton = document.createElement("button");
  let UpdateText = document.createTextNode("Modifer");
  UpdateButton.setAttribute("class", "modif-btn");
  UpdateButton.setAttribute("Phone", password);
  UpdateButton.appendChild(UpdateText);
  console.log(deleteButton);
  console.log(UpdateButton);

  UpdateButton.addEventListener("click", function () {
    UpBtn.style.display ='block';
    addContactButton.style.display ='none'
    const password = this.getAttribute("phone");
   
    let filteredAdmin = Admin.filter(
      (contact) => contact.password === password
    );
    console.log(Admin)
    console.log(filteredAdmin);
    console.log(document.getElementById("name").value)
    document.getElementById("name").value = filteredAdmin[0].name
    document.getElementById("email").value = filteredAdmin[0].email
    document.getElementById("password").value = filteredAdmin[0].password
   




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
  deleteButton.addEventListener("click", function () {
        const password = this.getAttribute("contactPhone");
        console.log(password);
    
        let row = document.getElementById(password);
        console.log(row)
        row.parentNode.removeChild(row);
        // enlever l'element supprimer
        let filteredAdmin = Admin.filter(
          (contact) => contact.password !== password
        );
        console.log(filteredAdmin);
        Admin = filteredAdmin;
        setCount(Admin.length);
        setAdmin(Admin);
  });

  // Ajouter de UpdateButtton et deleteButton a td et Tr
  buttonCell.appendChild(deleteButton);
  UpdateCell.appendChild(UpdateButton)
  row.appendChild(buttonCell);
  row.appendChild(UpdateButton);
  row.setAttribute("id", password);
  tblBody.appendChild(row);
  table.appendChild(tblBody);

  // vider les inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  modal.style.display = "none";
};



setCount(Admin.length);

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
