 let one="";
fetch('http://127.0.0.1:5500/data/cohorts.json')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    console.log(data[0].id);
    console.log(data[1].id);
    
    document.getElementById("listcohorts").innerHTML+="<form>";
    for(let i=0; i<data.length; i++){
      console.log(data[i].id)
      let one =(data[i].id);
      document.getElementById("listcohorts").innerHTML+="<option >"+one+"</option>";
    }
    document.getElementById("listcohorts").innerHTML+="</form>";


    
  })    
  
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
      document.getElementById("listusers").innerHTML+="<option >"+one+"</option>";
    }
    


    
  })    
  
  
  
  
  