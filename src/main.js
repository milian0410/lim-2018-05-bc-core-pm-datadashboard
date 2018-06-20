let name = "";
let inarray = document.getElementById("prueba")
const selection = document.getElementById("listcohorts");
const selectionusers = document.getElementById("listusers");

const cohort = 'http://127.0.0.1:5500/data/cohorts.json';
const cohortUser = 'http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progress = 'http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/progress.json';


fetch(cohort)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      name = (data[i].id);
      selection.innerHTML += "<option value=" + name + " >" + name + "</option>";
      document.getElementsByTagName("option");
      //console.log(data);
    }
  })

selection.addEventListener("change", (event) => {
  fetch(cohortUser)
    .then(function (response) {
      return response.json();
    })
    .then(function (infousers) {
      let options = {};
      let students = processCohortData(options);
      //console.log(students);
      if (selection.value === "lim-2018-03-pre-core-pw") {
        selectionusers.innerHTML = "<option value=" + infousers[0].name + " >" + infousers[0].name + "</option>";
      }
      else if (selection.value !== "lim-2018-03-pre-core-pw") {
        document.getElementById("prueba").innerHTML = "Aún no hay datos";
      }
      
      else {
        //console.log(selectionusers);
      }
    })
  })
  
  selectionusers.addEventListener("change", (event)=>{
    fetch(progress)
    .then(function(response)
     {
      return response.json();
     })        
    .then(function(progress)
     { 
      let inarray=Object.values(progress)
      //console.log(inarray)        
      })
  })


  /* for (let i = 0; i < users.length; i++) {
    name = (users[i].name);
    selectionusers.innerHTML += "<option value=" + i + ">" + one + "</option>";
    document.getElementById("prueba").innerHTML = "Aquí van porcentajes";
  } */



 /*  selectionusers.addEventListener("change", (event)=>{
    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
    .then(function(response)
     {
      return response.json();
     })        
    .then(function(data)
     { 
      let inarray=Object.values(data)


          
          console.log(inarray);

          
      })

  }) */



   // console.log(data[i].name)
  // console.log(data[0].id);
    //console.log(data[1].id);

 // console.log(data[i].id)
//console.log(document.getElementsByTagName("option"));
  // console.log(data[0].name);
          //console.log(data[1].name);
   // console.log("me diste click somos value 31")

/*
  selectionOption.setAttrivute("value","listcohorts[i]");
    
  fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    console.log(data[0].name);
    console.log(data[1].name);
    
    
    for(let i=0; i<data.length; i++){
      console.log(data[i].name)
      let one =(data[i].name);
      document.getElementById("listusers").innerHTML+="<option value="+i+">"+one+"</option>";
    }
  })   */



