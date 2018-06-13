 let one="";
fetch('http://127.0.0.1:5500/data/cohorts.json')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    console.log(data[0].id);
    console.log(data[1].id);
    
    document.getElementById("items").innerHTML+="<form>";
    for(let i=0; i<data.length; i++){
      console.log(data[i].id)
      let one =(data[i].id);
      document.getElementById("items").innerHTML+="<option >"+one+"</option>";
    }
    document.getElementById("items").innerHTML+="</form>";


    
  })    
  
  
  
  
  