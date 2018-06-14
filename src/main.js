let one="";
let selectionOption = document.getElementById("listcohorts");


fetch('http://127.0.0.1:5500/data/cohorts.json')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    console.log(data[0].id);
    console.log(data[1].id);
    
    for(let i=0; i<data.length; i++){
      console.log(data[i].id)
      let one =(data[i].id);
      document.getElementById("listcohorts").innerHTML+="<option>"+one+"</option>";

      
    }     
  })    
  
  selectionOption.setAttribute("value","listcohorts[i]");
 // console.log(listcohorts.value);
  selectionOption.addEventListener("change", (event)=>{
  //  console.log(event.target.value);
   })
   let listLima = document.getElementById("list");
   if(e.target.value === "lim-2018-03-pre-core-pw"){
   listLima.innerHTML+= 'http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json'


/*  fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    console.log(data[0].name);
    console.log(data[1].name);
    
    
    for(let i=0; i<data.length; i++){
      console.log(data[i].name)
      let one =(data[i].name);
      document.getElementById("listusers").innerHTML+="<option >"+one+"</option>";
    }
  })   */ 
  
  
  
  
  