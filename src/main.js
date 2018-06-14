 let one="";
 let selection=document.getElementById("listcohorts");
 
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
      document.getElementById("listcohorts").innerHTML+="<option value="+i+" >"+one+"</option>";
      document.getElementsByTagName("option");
    }     
   })  
  
  selection.addEventListener("change", (event)=>
  {
     
    document.getElementById("prueba").innerHTML+=
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
              document.getElementById("listusers").innerHTML+="<option value="+i+">"+one+"</option>";
            }  
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
    


    
  })    
  
  */

 