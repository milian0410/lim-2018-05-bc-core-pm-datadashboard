 let one="";
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
      let one =(data[i].id);
      selection.innerHTML+="<option value="+data[i].id+" >"+one+"</option>";
      document.getElementsByTagName("option");
      }     
  })    
  
  selection.addEventListener("change", (event)=>

  {
    console.log(selection.value);
    if(selection.value==="lim-2018-03-pre-core-pw"){
     
    

        fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
        .then(function(response)
         {
          return response.json();
         })        
        .then(function(data)
         { 
            for(let i=0; i<data.length; i++)
            {
              let one =(data[i].name);
              selectionusers.innerHTML+="<option value="+i+">"+one+"</option>";
              document.getElementById("prueba").innerHTML="Aquí van porcentajes";
            }  
         })
        } else if(selection.value!=="lim-2018-03-pre-core-pw")
        {
        
        document.getElementById("prueba").innerHTML="Aún no hay datos";
        
        } 
      else{
        
      } 
    
       
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
  


 