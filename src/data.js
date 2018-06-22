
const computeUsersStats = (users, progress, courses) => {
  users.map(user => {
    let idUser = user.id
    let cohorUser = user.signupCohort
    let nameUser = user.name.toUpperCase()

    let percentUser = 0

    let numberQuiz = 0
    let completedQuiz = 0
    let percentQuiz = 0
    let scoreSum = 0
    let scoreAvg = 0

    let numberRead = 0
    let completedRead = 0
    let percentRead = 0

    let numberPractice = 0
    let completedPractice = 0
    let percentPractice = 0
  })
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

