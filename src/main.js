let inarray = document.getElementById("prueba")
const selection = document.getElementById("listcohorts");
const selectionusers = document.getElementById("listusers");
const AllPercent_User=document.getElementById("General");
const AllPercent_User_exercise=document.getElementById("generalexercises");
const AllPercent_User_read=document.getElementById("generalreadings");
const AllPercent_User_quiz=document.getElementById("generalquiz");
const Percent_User_U1=document.getElementById("unit1");
const Percent_User_U1_read=document.getElementById("1Unitreading");
const Percent_User_U1_quiz=document.getElementById("1Unitquiz");
const Percent_User_U2=document.getElementById("unit2");
const Percent_User_U2_exercises=document.getElementById("2UnitExercises");
const Percent_User_U2_read=document.getElementById("2Unitreading");
const Percent_User_U2_quiz=document.getElementById("2Unitquiz");
const Percent_User_U3=document.getElementById("unit3");
const Percent_User_U3_read=document.getElementById("3Unitreading");
const Percent_User_U3_quiz=document.getElementById("3Unitquiz");

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
AllData( (data) =>
{
cohortdata=data[0];
  for (let i = 0; i < cohortdata.length; i++) 
  {
      namecohorts = (cohortdata[i].id);
      selection.innerHTML += "<option value=" + namecohorts+ " >" +namecohorts + "</option>";
  }    
      
})

selection.addEventListener("change", (event) =>
{
/*creacion de lista de usuarios sin usar la funcion especificada en el readme*/ 
  if (selection.value === "lim-2018-03-pre-core-pw")
    {
      AllData( (data) =>
      {
          let users=data[1];
          let progress=(data[2]);
          users.forEach(function(user_element) {
            let userid=user_element.id;
            let nameuser=user_element.name;
            selectionusers.innerHTML+= "<option value=" +userid +" >" +nameuser + "</option>";
  
          });
          
      })

    }
})
    
  selectionusers.addEventListener("change", (event)=>{
    const useriddata=selectionusers.value;
    console.log(useriddata);
    AllData((data)=>{
      const progress=data[2];
      if (progress.hasOwnProperty(useriddata)) {
      const IDofUSERinPROGRESS=progress[useriddata];

        if(IDofUSERinPROGRESS.hasOwnProperty('intro')){

        const INTROinPROGRESS=IDofUSERinPROGRESS.intro;
        const InUnit1 = INTROinPROGRESS.units['01-introduction'];
        const InUnit2 = INTROinPROGRESS.units['02-variables-and-data-types'];
        const InUnit3 = INTROinPROGRESS.units['03-ux-design'];

        const ReadComplet_U1=InUnit1.parts["00-welcome-and-orientation"].completed+InUnit1.parts["03-your-first-website"].completed+InUnit1.parts["02-why-learn-to-code"].completed+InUnit1.parts["01-growth-mindset"].completed ;
        const ReadComplet_U2=InUnit2.parts["01-variables"].completed+InUnit2.parts["02-self-learning-MDN"].completed+InUnit2.parts["03-comments"].completed+InUnit2.parts["00-values-data-types-and-operators"].completed+InUnit2.parts["04-guided-exercises"].completed;
        const ReadComplet_U3=InUnit3.parts["00-development-team"].completed+InUnit3.parts["02-ux-design-vs-ui-design"].completed+InUnit3.parts["01-ux-design"].completed;
        
        const QuizComplet_U1=InUnit1.parts["04-quiz"].completed ;
        const QuizComplet_U2=InUnit2.parts["05-quiz"].completed ;
        const QuizComplet_U3=InUnit3.parts["03-quiz"].completed ;
       
        const QuizScore_U1=InUnit1.parts["04-quiz"].score ;
        const QuizScore_U2=InUnit2.parts["05-quiz"].score;
        const QuizScore_U3=InUnit3.parts["03-quiz"].score;

        const Exercises_CompletdOnly_U2=(InUnit2.parts["06-exercises"].exercises["01-coin-convert"].completed+InUnit2.parts["06-exercises"].exercises["02-restaurant-bill"].completed);

           if(INTROinPROGRESS.hasOwnProperty('percent'))
           {
             const General_AllUnit_PERCENT=INTROinPROGRESS.percent;
             const Percent_Unit1=InUnit1.percent;
             const Percent_Unit2=InUnit2.percent;
             const Percent_Unit3=InUnit3.percent;
             
             const Percent_Read_U1=(ReadComplet_U1/4)*100;
             const Percent_Read_U2=(ReadComplet_U2/5)*100;
             const Percent_Read_U3=(ReadComplet_U3/3)*100;   
             const General_AllREad_PERCENT=(Percent_Read_U1+Percent_Read_U2+Percent_Read_U3)/3;
              
             const Percent_Quiz_U1=QuizComplet_U1*100;
             const Percent_Quiz_U2=QuizComplet_U2*100;
             const Percent_Quiz_U3=QuizComplet_U3*100; 
             const General_AllQuiz_PERCENT=(Percent_Quiz_U1+Percent_Quiz_U2+Percent_Quiz_U3)/3;
console.log(Percent_Quiz_U1);
console.log(Percent_Quiz_U2);
console.log(Percent_Quiz_U3);

             const Score_Quiz_U1=QuizScore_U1;
             const Score_Quiz_U2=QuizScore_U2;
             const Score_Quiz_U3=QuizScore_U3;
             const General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;

             const General_ExercisesonlyU2_PERCENT=(Exercises_CompletdOnly_U2/2)*100;

             AllPercent_User.innerHTML="<td>"+General_AllUnit_PERCENT+"%"+"</td>";
             AllPercent_User_exercise.innerHTML="<td>"+General_ExercisesonlyU2_PERCENT+"</td>"
             AllPercent_User_read.innerHTML="<td>"+General_AllREad_PERCENT+"</td>";
             AllPercent_User_quiz.innerHTML="<td>"+General_AllQuiz_PERCENT+"</td>";
             Percent_User_U1.innerHTML="<td>"+Percent_Unit1+"</td>";
             Percent_User_U1_read.innerHTML="<td>"+Percent_Read_U1+"</td>";
             Percent_User_U1_quiz.innerHTML="<td>"+Percent_Quiz_U1+"</td>";
             Percent_User_U2.innerHTML="<td>"+Percent_Unit2+"</td>";
             Percent_User_U2_exercises.innerHTML="<td>"+General_ExercisesonlyU2_PERCENT+"</td>";
             Percent_User_U2_read.innerHTML="<td>"+Percent_Read_U2+"</td>";
             Percent_User_U2_quiz.innerHTML="<td>"+Percent_Quiz_U2+"</td>";
             Percent_User_U3.innerHTML="<td>"+Percent_Unit3+"</td>";
             Percent_User_U3_read.innerHTML="<td>"+Percent_Read_U2+"</td>";
             Percent_User_U3_quiz.innerHTML="<td>"+Percent_Quiz_U3+"</td>";
          }
         }
        }
          
        
               
    })
    
   
  })
  /*      let suma=0;
      AllData((data)=>{
        const users=data[1];
        const progress=data[2];
        for(i=0;i<=data[1].length;i++){
          IDinUSER=data[1][i].id;
          if (progress.hasOwnProperty(IDinUSER)) {
            IDofUSERinPROGRESS=data[2][IDinUSER];
            if(IDofUSERinPROGRESS.hasOwnProperty('intro')){
              INTROinPROGRESS=IDofUSERinPROGRESS.intro;
               if(INTROinPROGRESS.hasOwnProperty('percent')){
                   GeneralPERCENT=INTROinPROGRESS.percent;
                   suma=(GeneralPERCENT+suma);

                  console.log(data[1][i].id);
                  console.log(suma);
                  
                  console.log(GeneralPERCENT);}
            }
          }
         
         
        
      }
        

    })*/


  /* selection.addEventListener("change", (event) =>
 {
      if (selection.value === "lim-2018-03-pre-core-pw")
       {
        AllData( (data) =>
        {
         courses=data[0].coursesIndex;
         users=data[1];
         progress=data[2];
         if(users.role="student")
            {
              studentname =processCohortData (data);
              selectionusers.innerHTML += "<option value=" + studentname+ " >" +studentname + "</option>";
            }
        })
          
        }
      
      
    })*/
  /* for (let i = 0; i < users.length; i++) {
    name = (users[i].name);
    selectionusers.innerHTML += "<option value=" + i + ">" + one + "</option>";
    document.getElementById("prueba").innerHTML = "Aquí van porcentajes";
  } */



 /*  selectionusers.addEventListener("change", (event)=>{
    fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
    .then(function(response)
     {
      return response.json();
     })        
    .then(function(data)
     { 
      let inarray=Object.values(data)
          
          console.log(inarray);
          
      })
  }) */



   // console.log(data[i].name)
  // console.log(data[0].id);
    //console.log(data[1].id);

 // console.log(data[i].id)
//console.log(document.getElementsByTagName("option"));
  // console.log(data[0].name);
          //console.log(data[1].name);
   // console.log("me diste click somos value 31")

/*
  selectionOption.setAttrivute("value","listcohorts[i]");
    
  fetch('http://127.0.0.1:5500/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    console.log(data[0].name);
    console.log(data[1].name);
    
    
    for(let i=0; i<data.length; i++){
      console.log(data[i].name)
      let one =(data[i].name);
      document.getElementById("listusers").innerHTML+="<option value="+i+">"+one+"</option>";
    }
  })   */