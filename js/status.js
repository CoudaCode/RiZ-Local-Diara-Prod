tbody = document.createElement("tbody");
table = document.querySelector(".table");

function getTravailleurs() {
  return JSON.parse(localStorage.getItem("travailleurs"));
}

function setTravailleurs(travailleurs) {
  return localStorage.setItem("travailleurs", JSON.stringify(travailleurs));
}

function getBilan() {
  return JSON.parse(localStorage.getItem("bilan"));
}

function setBilan(bilan) {
  return localStorage.setItem("bilan", JSON.stringify(bilan));
}

let bilan = getBilan() || [];

console.log("test", bilan);
let travailleurs = getTravailleurs();

console;
travailleurs.forEach((elem) => {
  conten = `
        <tr id="${elem.email}">
            <td>${elem.name}</td>
            <td>${elem.telephone}</td>
            <td>${elem.Date}</td>
            <td>${elem.time}</td>
            <td>${elem.time}</td>
            <td>${elem.gain}</td>
            <td><button class="delete-btn" contactphone="${elem.email}">terminer</button></td>
        </tr>  
        `;

  tbody.innerHTML += conten;

  table.appendChild(tbody);
});
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

// Click pour supprimer un utilistateur

deletetbn = document.querySelectorAll(".delete-btn");

deletetbn.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    parentButom = e.target.closest("tr");

    tbody.removeChild(parentButom);
    // console.log(parentButom);
    veriF = travailleurs.filter((id) => id.email === parentButom.id);
    reste = travailleurs.filter((id) => id.email !== parentButom.id);

    // console.log(veriF);
    console.log(bilan);
    let dat = new Date();
    
      newinfo = {
      
      name: veriF[0].name,
      gain: veriF[0].gain,
      Tache: veriF[0].Tache,
      telephone: veriF[0].telephone,
      DateDefin: dat.toDateString(),
      
    };
    bilan.push(newinfo);
    setBilan(bilan);   


    setTravailleurs(reste);
  });
});

nameAdmin = document.querySelector(".adminUser h3");
DemoAdmin = document.querySelector(".adminUser h4");
session = JSON.parse(localStorage.getItem("SessionConnect"));

nameAdmin.textContent = session.name;
Adp = document.querySelector(".dp h1");
Adp.textContent = session.name[0].toUpperCase();

logout = document.querySelector(".logout a");

logout.addEventListener("click", () => {
  localStorage.removeItem("SessionConnect");
  console.log("c'est clear");
});
