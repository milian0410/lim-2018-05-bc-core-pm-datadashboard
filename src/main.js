 
 let name="";
 let inarray="";
 const selection=document.getElementById("listcohorts");
 const selectionusers=document.getElementById("listusers");
 
  fetch('http://127.0.0.1:5500/data/cohorts.json')
    .then(function(response)
      {
      return response.json();
      })
    .then(function(data) 
      {
      for(let i=0; i<data.length; i++)
      {
      name =(data[i].id);
      selection.innerHTML+="<option value="+name+" >"+name+"</option>";
      document.getElementsByTagName("option");
      }     
  })    
  
  selection.addEventListener("change", (event)=>

  {
    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
        .then(function(response)
         {
          return response.json();
         })        
        .then(function(infousers)
         { 
           let student = data.computeUsersStats(infousers, progress, courses);
           if(selection.value==="lim-2018-03-pre-core-pw"){
            selectionusers.innerHTML="<option value="+name+" >"+student+"</option>";
           } 
           else if(selection.value!=="lim-2018-03-pre-core-pw")
        {
        
        document.getElementById("prueba").innerHTML="Aún no hay datos";
        
        } 
      else{
        
      } 
         })
    
        
            /*for(let i=0; i<users.length; i++)
            {
              name =(users[i].name);
              selectionusers.innerHTML+="<option value="+i+">"+one+"</option>";
              document.getElementById("prueba").innerHTML="Aquí van porcentajes";
            } */ 
         
       
   
       
  }) 
  selectionusers.addEventListener("change", (event)=>{
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

  })
  
  
  
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
  


 