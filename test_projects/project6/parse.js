const fs = require('fs')

fs.readFile('/Users/dougchang/Desktop/fabinger/test_projects/project6/data/week3/week3_outline.txt','utf8',(err,data)=>{
  if (err){
    console.err("error",err)
  }
  console.log(data)
  console.log(typeof(data))
  const d = data.split('\n')
  console.log("d:",d)
  var arr=[]
  for (x in d){
    //console.log(x,d[x],d[x].length)
    if (d[x].length>0){
      arr.push(d[x])
    }
  }
  //console.log(arr)
})

const week3_outline=
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
    'Quiz 6 questions',
    'Propensity Scores',
    'Propensity Scores',
    'Propensity score matching',
    'Propensity score matching in R',
    'Quiz 5 questions',
    'Data Analysis Project 8 questions'
  ]
console.log("week3_outline:",week3_outline,typeof(week3_outline))
console.log("week3_outline[1]:",week3_outline[1])


fs.readFile('/Users/dougchang/Desktop/fabinger/test_projects/project6/data/week4/w4_outline.txt','utf8',(err,data)=>{
    if (err){
      console.log("error",err)
    }
    console.log(data)
    console.log(typeof(data))
    const d = data.split('\n')
    console.log("d:",d)
    var arr=[]
    for (x in d){
      //console.log(x,d[x],d[x].length)
      if (d[x].length>0){
        arr.push(d[x])
      }
    }
    //console.log(arr)
  })

  var week4_outline =
    [
        'Inverse Probability of Treatment Weighting (IPTW)',
        'intuition for IPTW',
        'more intuiton for IPTW',
        'Marginal Structural Models',
        'IPTW estimation',
        'Assessing balance',
        'Practice Quiz',
        'Distribuiton of Weights',
        'Remedies for large weights',
        'doubly robust estimators',
        'data example in R',
        'Quiz 9 questions'
    ]
  
    fs.readFile('/Users/dougchang/Desktop/fabinger/test_projects/project6/data/week5/w5_outline.txt','utf8',(err,data)=>{
        if (err){
          console.log("error",err)
        }
        console.log(data)
        console.log(typeof(data))
        const d = data.split('\n')
        console.log("d:",d)
        var arr=[]
        for (x in d){
          //console.log(x,d[x],d[x].length)
          if (d[x].length>0){
            arr.push(d[x])
          }
        }
        //console.log(arr)
      })

      var week5_outline=[
        'Instrumantal Vaiables Methods',
        'Intro to Instrumental Variables',
        'Randomized trials with noncompliance',
        'Compliance Classes',
        'Assumptions',
        'Quiz',
        'Causal Effect Identification and estimation',
        'IVs in observational studies',
        '2 stage least squares',
        'Weak instruments',
        'Quiz 2 questions',
        'IV analysis in R',
        'Instrumental Variables/Causal effects in randomized trials with non-compliance'
      ]
    