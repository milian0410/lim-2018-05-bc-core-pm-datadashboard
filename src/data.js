
const computeUsersStats = (users, progress, courses) => {
const studentslist="";
bucle:
while (users.length >= 0) {
  break;
  console.log(users[0]);
}
  
}

const sortUsers = (users, orderBy, orderDirection) => {

}
const filterUsers = (users, search) => {

}

const processCohortData = (options) => {
  users=options[1];
  cohorts=options[0];
  progress=options[2];
  return users;
  console.log("primero usuarios"+users+"segunso grupo "+cohorts+"el progreso"+progress+"")
  computeUsersStats (users, progress, courses) 
  
}

window.computeUsersStats = computeUsersStats;
window.sortUsers = sortUsers;
window.processCohortData = processCohortData;
window.filterUsers = filterUsers;

