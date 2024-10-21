db.persons.aggregate([
  {
    $project: {
      _id: 0,
      gender: 1,
      fullName: {
        $concat: [
          { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
          {
            $substrCP: [
              '$name.first',
              1,
              { $subtract: [{ $strLenCP: '$name.first' }, 1] }
            ]
          },
          ' ',
          { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
          {
            $substrCP: [
              '$name.last',
              1,
              { $subtract: [{ $strLenCP: '$name.last' }, 1] }
            ]
          }
        ]
      }
    }
  }
]).pretty();


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

db.friends.aggregate([
  { $unwind: "$hobbies" }, 
  { $group: { _id: { age: "$age" }, allHobbies: { $addToSet: "$hobbies" } } }
]).pretty();


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

db.friends.aggregate([
  { $project: { _id: 0, numScores: { $size: "$examScores" } } }
]).pretty();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

db.friends.aggregate([
  {
    $project: {
      _id: 0,
      scores: { $filter: { input: '$examScores', as: 'sc', cond: { $gt: ["$$sc.score", 60] } } }
    }
  }
]).pretty();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

db.friends.aggregate([
  { $unwind: "$examScores" },
  { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" } },
  { $sort: { score: -1 } },
  { $group: { _id: "$_id", name: { $first: "$name" }, maxScore: { $max: "$score" } } },
  { $sort: { maxScore: -1 } }
]).pretty();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
