
const computeUsersStats = (users, progress, courses) =>
{
  usersWithStats=
  [{
    stats:
          {
            percent:0,
            exercises:{
                        total:0,
                        completed:0,
                        percent: 0,
                      },
            reads:{
                   total:0,
                   completed:0,
                   percent: 0,
                  },   
            quizzes:{
                      total:0,
                      completed:0,
                      percent: 0,
                      scoreSum:0,
                      scoreAvg:0,
                    }
                      
          }
   
  }]


  return usersWithStats
  }

const processCohortData = (options) => {
  courses=options[0].coursesIndex;
  users=options[1];
  progress=options[2];
 
  let compudetdata= computeUsersStats (users, progress, courses) ;
  
 console.log(compudetdata);
 return compudetdata
  
  
}

const sortUsers = (users, orderBy, orderDirection) => {
}
const filterUsers = (users, search) => {
}



  window.computeUsersStats = computeUsersStats;
  window.sortUsers = sortUsers;
  window.processCohortData = processCohortData;
  window.filterUsers = filterUsers;
  