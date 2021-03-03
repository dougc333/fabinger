var week3_outline_obj=
     [
         'Matching',
         'Observational Studies',
         'Overview of Matching',
         'Practice Quiz',
         'Greedy (nearest neighbor) matching',
         'Optimal matching',
         'Assessing balance',
         'Analyzing data after matching',
         'Practice Quiz',
         'Sensitivty Analysis',
         'Data example in R',
         'Quiz (6 questions)',
         'Propensity Scores',
         'Propensity Scores',
         'Propensity score matching',
         'Propensity score matching in R',
         'Quiz (5 questions)',
         'Data Analysis Project (8 questions)'
       ]
arr=[]
obj={}
for (let x in week3_outline_obj){
  console.log(week3_outline_obj[x])
  console.log(typeof(x),"name"+x)
  obj['lecture_topic_'+String(parseInt(x)+1)]=week3_outline_obj[x]
}
console.log(obj)
