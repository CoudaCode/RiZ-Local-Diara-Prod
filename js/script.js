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






  // Radio Plusieurs



<form action="" >
		<input name='broyeur' class="name" type="checkbox" value="broyeur">
		<input name='demo' class="name" type="checkbox" value="demo">
		<input name='droit' class="name" type="checkbox" value="droit">
	</form>



form = document.querySelector('form')

    form.addEventListener('change', ()=>{

    var elts = document.querySelectorAll(".name");
      let tab = []
      for(var i = 0; i < elts.length; i++){
         if(elts[i].checked === true){
            valeur = elts[i].value;
           tab.push(valeur)
         }
        
      }
      console.log(tab)
  })