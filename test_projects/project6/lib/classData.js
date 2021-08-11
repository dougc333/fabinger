"use strict";
/* jshint node: true */
/*
 * Model data for CS142 Project #5 - the photo sharing site.
 * This module returns an object called cs142Models with the following functions:
 *
 * cs142Models.userListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * cs142Models.userModel - A function that returns the info of the specified user. Called
 * with an user ID (id), the function returns n object containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * cs142Models.photoOfUserModel - A function that returns the photos belong to
 * the specified user. Called  with an user ID (id), the function returns an object containing:
 *   _id  (string) - The ID of the photo
 *   date_time (date) - he date and time the picture was taken in ISO format.
 *   file_name (string) - The file name in the image directory of the picture.
 *   user_id (string) - The user id of the picture's owner.
 *   comments: {array of objects} - An array of comment objects containing the properties:
 *        _id  (string) - The ID of the comment.
 *        date_time (date) - The date the comment was made in ISO format.
 *        comment (string) - The text of the comment.
 *        user: {object} The user info (see userMode for format) who made the comment
 *        photo_id: (string) - The ID of the photo the comment belongs to.
 *
 * cs142Models.schemaModel - A function that returns the test info from the fake schema.
 *                           The function returns an object containing:
 *   _id (string) - The ID of the schema
 *   __v (number) - The version number
 *   load_date_time (date) - The date the schema was made in ISO format.
 *
 * 
 */
(function() {
   // Create fake test Schema
   var schemaInfo = {
      load_date_time: "Mon Mar 1 2021 01:45:15 GMT-0700 (PDT)",
      __v: 0,
      _id: "57231f1b30e4351f4e9f4bf6"
   };

   // Create init users.

   var im = {_id: "57231f1a30e4351f4e9f4bd7", first_name: "Ian", last_name: "Malcolm", 
             location: "Austin, TX", description: "Should've stayed in the car.", occupation: "Mathematician"};
   var er = {_id: "57231f1a30e4351f4e9f4bd8", first_name: "Ellen", last_name: "Ripley", 
             location: "Nostromo", description: "Lvl 6 rating. Pilot.", occupation: "Warrant Officer"};
   var pt = {_id: "57231f1a30e4351f4e9f4bd9", first_name: "Peregrin", last_name: "Took", 
             location: "Gondor", description: "Home is behind, the world ahead... " + 
             "And there are many paths to tread. Through shadow, to the edge of night, " + 
             "until the stars are all alight... Mist and shadow, cloud and shade, " + 
             "all shall fade... all... shall... fade... ", occupation: "Thain"};
   var rk = {_id: "57231f1a30e4351f4e9f4bda", first_name: "Rey", last_name: "Kenobi", 
             location: "D'Qar", description: "Excited to be here!", occupation: "Rebel"};
   var al = {_id: "57231f1a30e4351f4e9f4bdb", first_name: "April", last_name: "Ludgate", 
             location: "Pawnee, IN", description: "Witch", occupation: "Animal Control"};
   var jo = {_id: "57231f1a30e4351f4e9f4bdc", first_name: "Boba", last_name: "Fett",
             location: "Starship", description: "Clone", occupation: "bounty hunter"};
   var mw = {_id: "57231f1a30e4351f4e9f4bdd", first_name: "Mace", last_name: "Windu",
   location: "Unknown", description: "Jedi Master", occupation: "teacher"};

   var users = [im, er, pt, rk, al, jo,mw];

   var class1 = {}

   // Create initial photos.
   // user_id doesnt really belong here? better to have userid with list of classes? 
   var class1 = {_id: "57231f1a30e4351f4e9f4bdd", date_time: "2012-08-30 10:44:23", class_name: "Computer Vision", user_id: jo._id};
   var class2 = {_id: "57231f1a30e4351f4e9f4bde", date_time: "2009-09-13 20:00:00", class_name: "Regression", user_id: im._id};
   var class3 = {_id: "57231f1a30e4351f4e9f4bdf", date_time: "2009-09-13 20:05:03", class_name: "Causal Inference.jpg", user_id: im._id};
   var class4 = {_id: "57231f1a30e4351f4e9f4be0", date_time: "2013-11-18 18:02:00", class_name: "NLP", user_id: er._id};
   var class5 = {_id: "57231f1a30e4351f4e9f4be1", date_time: "2013-09-20 17:30:00", class_name: "Basic Stats", user_id: er._id};
   var class6 = {_id: "57231f1a30e4351f4e9f4be2", date_time: "2009-07-10 16:02:49", class_name: "Advanced Stats", user_id: rk._id};
   
   var week1_outline=
   [
    'Welcome to a crash course in Causality',
    'Confusion over Causality',
    'Potential Outcomes and Counterfactuals', 
    'Hypothetical Interventions',
    'Causal Effects',
    'Quiz 1',
    'Causal Assumptions',
    'Stratification'
   ]

   var week2_outline=
   [
    'Confounding',
    'Causal Graphs',
    'Relationships between DAGS and probabilituy Distributions', 
    'Paths and Associations',
    'Conditional Independence',
    'Quiz 1',
    'Confounding Revisited',
    'Backdoor Path Criteria',
    'Disjunctive Cause Criteria',
    'Identify from DAGs sufficient sets of confounders',
    ]

   var week3_outline=
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
     //can create object from this?
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
     //should do these in loop. this is crappy. 
     var week4_outline_obj ={
      _id:'00000000000000000000040',titles:[
      week4_1_name,
      week4_2_name,
      week4_3_name, 
      week4_4_name, 
      week4_5_name, 
      week4_6_name, 
      week4_7_name, 
      week4_8_name, 
      week4_9_name, 
      week4_10_name,
      week4_11_name,
      week4_12_name,
     ]}

    //these objects can grow 
    var week4_1_name = {_id:'11111111111111111111111', name:'Inverse Probability of Treatment Weighting (IPTW)'}
    var week4_2_name = {_id:'11111111111111111111112', name:'intuition for IPTW'}
    var week4_3_name = {_id:'11111111111111111111113', name:'more intuiton for ITW'}
    var week4_4_name = {_id:'11111111111111111111114', name:'Marginal StructuralModels'}
    var week4_5_name = {_id:'11111111111111111111115', name:'IPTW estimation'}
    var week4_6_name = {_id:'11111111111111111111116', name:'Assessing balance'}
    var week4_7_name = {_id:'11111111111111111111117', name:'Practice Quiz'}
    var week4_8_name = {_id:'11111111111111111111118', name:'Distribuiton of Weihts'}
    var week4_9_name = {_id:'11111111111111111111119', name:'Remedies for large eights'}
    var week4_10_name = {_id:'1111111111111111111111a', name:'doubly robust estimators'}
    var week4_11_name = {_id:'1111111111111111111111b', name:'data example in R'}
    var week4_12_name = {_id:'1111111111111111111111c', name:'Quiz 9 questions'}

     var week5_outline=[
        'Instrumental Vaiables Methods',
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

   // Create initial comments.
   var comment1 = {
      _id: "57231f1a30e4351f4e9f4be9",
      date_time: "2012-09-02 14:01:00",
      comment: "Learning new programming languages is hard... " + 
      "it's so easy to forget a </div>!", user: jo, photo_id: photo1._id
   };

   var comment2 = {
      _id: "57231f1a30e4351f4e9f4bea",
      date_time: "2013-09-06 14:02:00",
      comment: "This is another comment, with a bit more text; " +
      "if the text gets long enough, does it wrap properly " +
      "from line to line?", user: jo, photo_id: photo1._id
   };

   var comment3 = {
      _id: "57231f1a30e4351f4e9f4beb",
      date_time: "2013-09-08 14:06:00",
      comment: "If you see this text in <b>boldface</b> " +
      "then HTML escaping isn't working properly.", user: jo, photo_id: photo1._id
   };

   var comment4 = {
      _id: "57231f1a30e4351f4e9f4bec",
      date_time: "2009-09-14 18:07:00",
      comment: "If there is one thing the history of evolution has" +
      " taught us it's that life will not be contained. Life breaks " +
      "free, it expands to new territories and crashes through " + 
      "barriers, painfully, maybe even dangerously, but, uh... well, " +
      "there it is. Life finds a way.", user: im, photo_id: photo2._id
   };

   var comment5 = {
      _id: "57231f1a30e4351f4e9f4bed",
      date_time: "2013-11-28 17:45:13",
      comment: "Back from my trip. Did IQs just... drop sharply while I was " +
      "away?", user: er, photo_id: photo5._id
   };

   var comment6 = {
      _id: "57231f1a30e4351f4e9f4bee",
      date_time: "2013-11-02 14:07:00",
      comment: "Hey Rey, great form. Love what " +
      "you do with the scavenged tech, got any tips?", user: er, photo_id: photo7._id
   };

   var comment7 = {
      _id: "57231f1a30e4351f4e9f4bef",
      date_time: "2013-11-02 14:07:00",
      comment: "Definitely! I love your work! I'm away on a trip at " +
      "the moment, but let's meet up when I get back! :)", user: rk, photo_id: photo7._id
   };

   var comment8 = {
      _id: "57231f1a30e4351f4e9f4bf0",
      date_time: "2010-09-06 13:59:33",
      comment: "Made a new friend today! Well, they followed me " + 
      "home, anyway.", user: rk, photo_id: photo8._id
   };

   var comment9 = {
      _id: "57231f1a30e4351f4e9f4bf1",
      date_time: "2008-10-16 18:04:55",
      comment: "Wouldn't get anywhere without this beauty! " +
      "Completely built from scraps by hand, but she goes at top " +
      "speeds that'll rival any First Order piece of junk.", user: rk, photo_id: photo12._id
   };

   var comment10 = {
      _id: "57231f1a30e4351f4e9f4bf2",
      date_time: "2013-12-04 13:12:00",
      comment: "What do you mean you haven't heard of second " + 
      "breakfast?", user: pt, photo_id: photo10._id
   };

   var comment11 = {
      _id: "57231f1a30e4351f4e9f4bf3",
      date_time: "2013-09-04 10:14:32",
      comment: "Beautiful yet cold and aloof. Loner. Does not obey, " + 
      "occasionally chooses to cooperate. ", user: al, photo_id: photo11._id
   };
   
   var comment12 = {
      _id: "57231f1a30e4351f4e9f4bf4",
      date_time: "2016-01-04 2:00:01",
      comment: "Which one are you?", user: al, photo_id: photo9._id
   };
   
   var comment13 = {
      _id: "57231f1a30e4351f4e9f4bf5",
      date_time: "2016-01-04 2:04:01",
      comment: "The tall one.", user: pt, photo_id: photo9._id
   };
   
   var comments = [comment1, comment2, comment3, comment4, comment5, comment6, comment7, 
   comment8, comment9, comment10, comment11, comment12, comment13];

   comments.forEach(function (comment) {
      var photo = photos.filter(function (photo) {
         return (photo._id === comment.photo_id);
      })[0]; //only one match. return the content of the match inside the array

      if (!photo.comments) {
         photo.comments = [];
      }
      photo.comments.push(comment);
   });

   var userListModel = function() {
      return users;
   };

   var userModel = function(userId) {
      for (var i = 0; i < users.length; i++) {
         if (users[i]._id === userId) {
            return users[i];
         }
      }
      return null;
   };

   var photoOfUserModel = function(userId) {
      return photos.filter(function (photo) {
         return (photo.user_id === userId);
      });
   };

   var schemaModel = function() {
      return schemaInfo;
   };

   var cs142models =  {
      userListModel: userListModel,
      userModel: userModel,
      photoOfUserModel: photoOfUserModel,
      schemaInfo: schemaModel
   };

   if( typeof exports !== 'undefined' ) {
      // We're being loaded by the Node.js module loader ('require') so we use its
      // conventions of returning the object in exports.
      exports.cs142models = cs142models;
   } else {
      // We're not in the Note.js module loader so we assume we're being loaded
      // by the browser into the DOM.
      window.cs142models = cs142models;
   }
})();
