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
          for (let i = 0; i <= users.length; i++)
          {
           
              let userid=users[i].id;
              let nameuser=users[i].name;
              selectionusers.innerHTML+= "<option value=" +users[i].id + " >" +nameuser + "</option>";
               
          }
      })
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
        let progress=data[2];
        
        for (let i = 0; i <= users.length; i++)
        {
        

            let useri=users[i];
           let userid=useri.id;
            let userinprogress=progress[userid];
            let introinprogress=userinprogress.intro;
            let generalprogress=introinprogress.percent;
            if(typeof(generalprogress)!=undefined){
            
            console.log(useri);
            
            console.log(userinprogress);
            console.log(userid);
            console.log(introinprogress);
            console.log(generalprogress);}
            
            
            
          
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