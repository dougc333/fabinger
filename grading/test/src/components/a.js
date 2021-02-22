//can iterate constructed w JS

var q1_a1="question 1 answer1"
var q1_a2="question 1 answer2"
var q2_a1="question 2 answer1"
var q2_a2="question 2 answer1"
var q2_a3="question 2 answer3"
var q4_a1="question 4 answer1"
var q4_a2="question 4 answer2"

var q1_ans = [q1_a1,q1_a2]
var q2_ans = [q2_a1,q2_a2,q2_a3]
var q4_ans = [q4_a1,q4_a2]

var questions ={w1_q1:[q1_a1,q2_a2],w1_q2:[q2_a1,q2_a2,q2_a3],w1_q4:[q4_a1,q4_a2]} 

console.log(typeof(questions));
console.log(Object.keys(questions));
console.log(typeof(Object.keys(questions)))
for (x of Object.keys(questions)){
   console.log(x);
   console.log(questions[x]);
}
