let inarray = document.getElementById("prueba")
const selection = document.getElementById("listcohorts");
const selectionusers = document.getElementById("listusers");


 const AllData = (Callback) => 
  {
    fetch ('../data/cohorts.json')
        .then (function (responseC) 
        {
        fetch ('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
            .then (function (responseU) 
            { 
                fetch ('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
                    .then (function (responseP)
                     {
                        Promise.all([ responseC.json(), responseU.json(), responseP.json()])
                            .then(data => {
                              
                                Callback(data);
                            })
                    })
            })
    })
}
AllData( (data) =>
{
cohortdata=data[0];
  for (let i = 0; i < cohortdata.length; i++) 
  {
      namecohorts = (cohortdata[i].id);
      selection.innerHTML += "<option value=" + namecohorts+ " >" +namecohorts + "</option>";
  }    
      
})

selection.addEventListener("change", (event) =>
{
/*creacion de lista de usuarios sin usar la funcion especificada en el readme*/ 
  if (selection.value === "lim-2018-03-pre-core-pw")
    {
      AllData( (data) =>
      {
          let users=data[1];
          let progress=(data[2]);
          users.forEach(function(user_element) {
            let userid=user_element.id;
            let nameuser=user_element.name;
            selectionusers.innerHTML+= "<option value=" +userid + " >" +nameuser + "</option>";
  
          });
          
      })
      AllData((data)=>{
        const users=data[1];
        const progress=data[2];
        for(i=0;i<=data[1].length;i++){
          IDinUSER=data[1][i].id;
          if (progress.hasOwnProperty(IDinUSER)) {
            IDofUSERinPROGRESS=data[2][IDinUSER];
            if(IDofUSERinPROGRESS.hasOwnProperty('intro')){
              INTROinPROGRESS=IDofUSERinPROGRESS.intro;
               if(INTROinPROGRESS.hasOwnProperty('percent')){
                   GeneralPERCENT=INTROinPROGRESS.percent;
                  console.log(data[1][i].id);
                  console.log(GeneralPERCENT);}
            }
          }
         
         
        
      }
        

    })
    }
})


    
  selectionusers.addEventListener("change", (event)=>{
    
   
  })


  /* selection.addEventListener("change", (event) =>
 {
      if (selection.value === "lim-2018-03-pre-core-pw")
       {
        AllData( (data) =>
        {
         courses=data[0].coursesIndex;
         users=data[1];
         progress=data[2];
         if(users.role="student")
            {
              studentname =processCohortData (data);
              selectionusers.innerHTML += "<option value=" + studentname+ " >" +studentname + "</option>";
            }
        })
          
        }
      
      
    })*/
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