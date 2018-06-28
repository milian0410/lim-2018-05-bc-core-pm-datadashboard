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


