

/*const computeUsersStats = (users, progress, courses) =>
{
  usersWithStats=
  [{
    stats=
    {
      percent:{
      }
      
    }
  }]
  
  for (i = 0; i < username.length; i++) 
  {
      
      
  } 
  return studentname
}
const sortUsers = (users, orderBy, orderDirection) => {
}
const filterUsers = (users, search) => {
}
const processCohortData = (options) => {
  courses=options[0].coursesIndex;
  users=options[1];
  progress=options[2];
 
  let compudetdata= computeUsersStats (users, progress, courses) ;
  
}*/
const generalstas=(users,progress)=>{
  const generalusers=users;
  const generalprogress=progress;
  let total="";
  let respuesta="";
  console.log("entre a la funcion");
  
     console.log( generalusers);
     console.log( generalprogress);
     
    for (i = 0; i < generalprogress.length; i++){
      total=progress[generalusers[i].id].intro.percent;
      respuesta+=parseInt(total);
    }console.log(respuesta);
    console.log(generalprogress[generalusers[i].id].intro.percent);
  
  return console.log(respuesta);
  console.log(generalprogress[generalusers[i].id].intro.percent);
  }
  /*window.computeUsersStats = computeUsersStats;
  window.sortUsers = sortUsers;
  window.processCohortData = processCohortData;
  window.filterUsers = filterUsers;*/
  window.generalstas=generalstas;
  