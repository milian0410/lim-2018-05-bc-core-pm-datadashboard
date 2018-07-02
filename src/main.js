

const countryAll = document.getElementById("listCountry");

let inarray = document.getElementById("prueba")
const selection = document.getElementById("listcohorts");
const selectionusers = document.getElementById("listusers");
const AllPercent_User=document.getElementById("General");
const AllPercent_User_exercise=document.getElementById("generalexercises");
const AllPercent_User_read=document.getElementById("generalreadings");
const AllPercent_User_quiz=document.getElementById("generalquiz");
const Qualification_User_quiz=document.getElementById("generalscore");

const Percent_User_U1=document.getElementById("unit1");
const Percent_User_U1_read=document.getElementById("1Unitreading");
const Percent_User_U1_quiz=document.getElementById("1Unitquiz");
const Qualification_User_U1_quiz=document.getElementById("1Uscore");

const Percent_User_U2=document.getElementById("unit2");
const Percent_User_U2_exercises=document.getElementById("2UnitExercises");
const Percent_User_U2_read=document.getElementById("2Unitreading");
const Percent_User_U2_quiz=document.getElementById("2Unitquiz");
const Qualification_User_U2_quiz=document.getElementById("2Uscore");

const Percent_User_U3=document.getElementById("unit3");
const Percent_User_U3_read=document.getElementById("3Unitreading");
const Percent_User_U3_quiz=document.getElementById("3Unitquiz");
const Qualification_User_U3_quiz=document.getElementById("3Uscore");


function validar(){
  var userName = document.getElementById("userName").value;
  var pass = document.getElementById("pass").value;
  if(userName == "Alejandra" && pass == "12345")
  {
 
 location.href= "http://127.0.0.1:5500/src/index.html";
}
else
{
  alert("Ingrese usuario y password");
}
}

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

  AllData((data)=>{
    console.log('main.js', 'data 67')
    console.log(data)
    

    let usersWithStats = processCohortData(data);
    console.log('main.js', 'usersWithStats 72')
    console.log(usersWithStats);


  })

countryAll.addEventListener("change", (event)=> {
    AllData( (data) =>
    {
      cohorts=data[0];
    
      let clean = "";
        for (let nameCohort of cohorts) 
        {
          const cohortId = nameCohort.id;
          const cohortSplit = cohortId.split("-");
          if(countryAll.value === cohortSplit[0])
          {
          //const total = cohortId;
          clean += "<option value=" + cohortId + " >" + cohortId + "</option>";
          }
        }  selection.innerHTML = clean;        
    })
})

selection.addEventListener("change", (event) =>
{
/*creacion de lista de usuarios sin usar la funcion especificada en el readme*/ 
  if (selection.value === "lim-2018-03-pre-core-pw")
    {
      AllData( (data) =>
      {
          let users=data[1];
          let progress=data[2];
          for(let user_element of users) {
            let userid=user_element.id;
            let nameuser=user_element.name;
            selectionusers.innerHTML+= "<option value=" +userid +" >" +nameuser + "</option>";
  
          };
          
      })


    }
})
    
  selectionusers.addEventListener("change", (event)=>{
    const useriddata=selectionusers.value;
    AllData((data)=>{
      const user=data[1];
   
      const progress=data[2];
      user.forEach(element => {
         if ( element.hasOwnProperty('id') ) {        
        const IDuser=element.id          
        if(IDuser === useriddata){
         const nameuser = element.name;
         inarray.innerHTML=nameuser;
        }
      }});
      if (progress.hasOwnProperty(useriddata)) {
      const User_IDin_Progress=progress[useriddata];

        if(User_IDin_Progress.hasOwnProperty('intro')){

        const Itro_in_Progress=User_IDin_Progress.intro;
        const InUnit1 = Itro_in_Progress.units['01-introduction'];
        const InUnit2 = Itro_in_Progress.units['02-variables-and-data-types'];
        const InUnit3 = Itro_in_Progress.units['03-ux-design'];

        const ReadComplet_U1=InUnit1.parts["00-welcome-and-orientation"].completed+InUnit1.parts["03-your-first-website"].completed+InUnit1.parts["02-why-learn-to-code"].completed+InUnit1.parts["01-growth-mindset"].completed ;
        const ReadComplet_U2=InUnit2.parts["01-variables"].completed+InUnit2.parts["02-self-learning-MDN"].completed+InUnit2.parts["03-comments"].completed+InUnit2.parts["00-values-data-types-and-operators"].completed;
        const ReadComplet_U3=InUnit3.parts["00-development-team"].completed+InUnit3.parts["02-ux-design-vs-ui-design"].completed+InUnit3.parts["01-ux-design"].completed;

        const QuizComplet_U1=InUnit1.parts["04-quiz"].completed ;
        const QuizComplet_U2=InUnit2.parts["05-quiz"].completed ;
        const QuizComplet_U3=InUnit3.parts["03-quiz"].completed ;
       
        const QuizScore_U1=InUnit1.parts["04-quiz"].score ;
        const QuizScore_U2=InUnit2.parts["05-quiz"].score;
        const QuizScore_U3=InUnit3.parts["03-quiz"].score;
        
        const Exercises_Completd_U2=InUnit2.parts["06-exercises"].completed; 
        const Exercises_Completd_U2_2=InUnit2.parts["04-guided-exercises"].completed  ;     
          
            
            if(Itro_in_Progress.hasOwnProperty('percent'))
            {  
              const General_AllUnit_PERCENT=Itro_in_Progress.percent;
              const Percent_Unit1=InUnit1.percent;
              const Percent_Unit2=InUnit2.percent;
              const Percent_Unit3=InUnit3.percent;
              
              const Percent_Read_U1=(ReadComplet_U1/4)*100;
              const Percent_Read_U2=(ReadComplet_U2/4)*100;
              const Percent_Read_U3=(ReadComplet_U3/3)*100;   
              const General_AllREad_PERCENT=(Percent_Read_U1+Percent_Read_U2+Percent_Read_U3)/3;
              
              const Percent_Quiz_U1=QuizComplet_U1*100;
              const Percent_Quiz_U2=QuizComplet_U2*100;
              const Percent_Quiz_U3=QuizComplet_U3*100; 
              const General_AllQuiz_PERCENT=(Percent_Quiz_U1+Percent_Quiz_U2+Percent_Quiz_U3)/3;
              
              let Score_Quiz_U1=QuizScore_U1;
              let Score_Quiz_U2=QuizScore_U2;
              let Score_Quiz_U3=QuizScore_U3;
              let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;

              let General_ExercisesonlyU2_PERCENT=((Exercises_Completd_U2+Exercises_Completd_U2_2)/2)*100;

              AllPercent_User.innerHTML="<th>Porcentaje general: "+General_AllUnit_PERCENT+"% </th>";
              AllPercent_User_exercise.innerHTML="<th>Porcentaje general Ejercicios: "+General_ExercisesonlyU2_PERCENT+"% </td>"
              AllPercent_User_read.innerHTML="<th>Porcentaje general Lectura: "+General_AllREad_PERCENT+"% </td>";
              AllPercent_User_quiz.innerHTML="<th>Porcentaje general Quiz: Completo el "+General_AllQuiz_PERCENT+"% </td>";

              Percent_User_U1.innerHTML="<td>Porcentaje general Unidad 1: "+Percent_Unit1+"% </td>";
              Percent_User_U1_read.innerHTML="<td>Lecturas: "+Percent_Read_U1+"% </td>";
              Percent_User_U1_quiz.innerHTML="<td>Quiz: Completo el "+Percent_Quiz_U1+"% </td>";
            
            
              Percent_User_U2.innerHTML="<td>Porcentaje general Unidad 2: "+Percent_Unit2+"%</td>";
              Percent_User_U2_exercises.innerHTML="<td>Ejercicios: "+General_ExercisesonlyU2_PERCENT+"%</td>";
              Percent_User_U2_read.innerHTML="<td>Lecturas: "+Percent_Read_U2+"%</td>";
              Percent_User_U2_quiz.innerHTML="<td>Quiz: Completo el "+Percent_Quiz_U2+"%</td>";

              Percent_User_U3.innerHTML="<td>Porcentaje general Unidad 3: "+Percent_Unit3+"%</td>";
              Percent_User_U3_read.innerHTML="<td>Lecturas: "+Percent_Read_U3+"%</td>";
              Percent_User_U3_quiz.innerHTML="<td>Quiz: Completo el "+Percent_Quiz_U3+"%</td>";
              
               if(Percent_Quiz_U1 === 0 )
               {
                 Score_Quiz_U1=0; 
                 let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                 Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                 Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                 Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                 Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                }
                if(Percent_Quiz_U1 !== 0 )
                {
                  Score_Quiz_U1=Score_Quiz_U1; 
                  let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                  Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                  Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                  Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                  Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                 }
               
           
               if(Percent_Quiz_U2 === 0 )
               {
                 Score_Quiz_U2=0; 
                 let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                 Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                 Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                 Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                 Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                }
               
              if(Percent_Quiz_U2 !== 0 )
              {
                Score_Quiz_U2=Score_Quiz_U2; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                }
                
             
               if(Percent_Quiz_U3 === 0 )
              {
                Score_Quiz_U3=0; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
               }
               if(Percent_Quiz_U3 !== 0 )
              {
                Score_Quiz_U3=Score_Quiz_U3; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                }
                
           }
         }
        }
          
        
               
    })
    
   
  })
  
              /* let suma=0;
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