

window.data = 
{
     computeUsersStats:(users, progress, courses)=>
     {
        if(selection.value==="lim-2018-03-pre-core-pw"){
            for(let i=0; i<data.length; i++)
            {
              let one =(data[i].name);
              selectionusers.innerHTML+="<option value="+i+">"+one+"</option>";
              document.getElementById("prueba").innerHTML="Aquí van porcentajes";
            }  
         
        } else if(selection.value!=="lim-2018-03-pre-core-pw")
        {
        
        document.getElementById("prueba").innerHTML="Aún no hay datos";
        
        } 
      else{
         
        }
      
     
        
     },
     sortUsers:(users, orderBy, orderDirection)=>
     {

     },


}
