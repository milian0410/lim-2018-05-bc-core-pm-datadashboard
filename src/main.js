/* let name = "";
let inarray = document.getElementById("prueba")
const selection = document.getElementById("listcohorts");
const selectionusers = document.getElementById("listusers");

/* const countryAll = document.getElementById("countryAll");
const cohortLima = '../lim-2018-03-pre-core-pw/progress.json';
const cohortObj= JSON.parse(cohortLima);
//console.log(cohortObj); */





/* countryAll.addEventListener(change, ()=>{
  if (countryAll=) */
fetch('http://127.0.0.1:5500/data/cohorts.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      name = (data[i].id);
      selection.innerHTML += "<option value=" + name + " >" + name + "</option>";
      document.getElementsByTagName("option");
      //console.log(name);
      const divisiones = name.split("-", 1);
    const expresion = /lim a*/;
      const hallado = name.match(divisiones);

      console.log(hallado);
    }
  })


selection.addEventListener("change", (event) => {
  fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //let options = {};
      //let students = processCohortData(options);
      //console.log(students);
      for (let i = 0; i < data.length; i++) {
        let users="";
        users= (data[i].name);
      //console.log(users)
      if (selection.value === "lim-2018-03-pre-core-pw") {
        selectionusers.innerHTML += "<option value=" + users + " >" + users + "</option>";
      }
      else if (selection.value !== "lim-2018-03-pre-core-pw") {
        document.getElementById("prueba").innerHTML = "Aún no hay datos";
      }      
    }
    })  
})
  
  /* selectionusers.addEventListener("change", (event)=>{
    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
    .then(function(response)
     {
      return response.json();
     })        
    .then(function(progress)
     { 
      let inarray=Object.values(progress)
      //console.log(inarray)        
      })
  });
  */
  function validar(){
    var userName = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;
    if(userName == "Alejandra" && pass == "12345")
    {
   
   location.href= "http://127.0.0.1:5500/src/index.html";
  }
  else
  {
    alert("Ingrese usuario y password");
  }
}





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



