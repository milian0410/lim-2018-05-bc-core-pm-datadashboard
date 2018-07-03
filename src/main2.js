//anidando data de js
const AllData = (Callback) => 
{
  fetch ('../data/cohorts.json')
      .then (function (responseC) 
      {
      fetch ('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
          .then (function (responseU) 
          { 
              fetch ('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
                  .then (function (responseP)
                   {
                      Promise.all([ responseC.json(), responseU.json(), responseP.json()])
                          .then(data => {
                            
                              Callback(data);
                          })
                  })
          })
  })
}


//anidando el de la forma de ordenar

const Select_ordenvalue = (Callback) => {
    
    Orderlist.addEventListener("change", (event)=>{
      const ordenvalue=Orderlist.value;
      console.log(ordenvalue);
      Callback(ordenvalue)
    })
    }
//anidando asc o desc

const Select_ASC_or_DESC = (Callback) => {
      Asd_des.addEventListener("change", (event)=>{
        const orderAsd_des=Asd_des.value;
        console.log(orderAsd_des);
        Callback(orderAsd_des)
      })
    }

// juntando toda la informacion del json con que quiere ordenar y si es asc o desc
const alldatawithorden = (Callback) =>{
    AllData((data)=>
    {
        Select_ordenvalue((ordenvalue)=>
        {
            Select_ASC_or_DESC((orderAsd_des)=>
            {
                let option =[{
                    cohort:data[0],
                    cohortData: 
                    {
                      users: data[1],
                      progress: data[2]
                    },
                    orderBy: ordenvalue,
                    orderDirection: orderAsd_des,
                  }] ;
             
             Callback(option)
              
            })
        })
    })
} 

 