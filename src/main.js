 let one="";
fetch('http://127.0.0.1:5500/data/cohorts.json')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    console.log(data[0].id);
    console.log(data[1].id)
    let one =(data[0].id);
    document.getElementById("test").innerHTML=one;
  })    
  
  
  
  document.getElementById("1").addEventListener("click",()=>
  {
    alert("diste click en lima");
  })
  