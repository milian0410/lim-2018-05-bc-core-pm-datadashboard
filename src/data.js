
const computeUsersStats = (users, progress, courses) => {
  let name = "";
  for (let i = 0; i < users.length; i++) {
    name = (users[i].name);
    progress = (users[i].id);
  }
  return name
}

const sortUsers = (users, orderBy, orderDirection) => {

}
const filterUsers = (users, search) => {

}

const processCohortData = (options) => {
  return [3,1,3];
}

window.computeUsersStats = computeUsersStats;
window.sortUsers = sortUsers;
window.processCohortData = processCohortData;
window.filterUsers = filterUsers;


function validar(){
    const userName = document.getElementById("userName").value;
    const pass=document.getElementById("pass").value;
  if(userName == "Alejandra" && pass== "12345"){
   location.href = "http://127.0.0.1:5500/src/index.html";
  }
  else{
    alert("Ingrese usuario y password");
  }
}