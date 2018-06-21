
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
  return [1 , 3, 3];
}

window.computeUsersStats = computeUsersStats;
window.sortUsers = sortUsers;
window.processCohortData = processCohortData;
window.filterUsers = filterUsers;

fetch('http://127.0.0.1:5500/data/cohorts.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      name = (data[i].id);
      selection.innerHTML += "<option value=" + name + " >" + name + "</option>";
      document.getElementsByTagName("option");
      
    }
  })