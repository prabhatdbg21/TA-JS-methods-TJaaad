let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map ((person) =>
person.name
)

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map ((person) =>
person.grade
)

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map ((person) =>
person.sex
)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let nameJP = peopleName.filter ((person) => {
  return (person.charAt() == 'J' || person.charAt() == 'P')
} )
console.log (nameJP)

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let nameAC = []
peopleName.filter ((person) => {
  if (person.charAt() == 'A' || person.charAt() == 'C'){
    nameAC.push(person.length)
  }
} )
console.log (nameAC)

// Log all the filtered male ('M') in persons array
let personM = []
persons.filter((person) => {
if (person.sex == 'M'){
personM.push (person.name)
}
})
console.log (personM)

// Log all the filtered female ('F') in persons array
let personF = []
persons.filter((person) => {
if (person.sex == 'F'){
personF.push (person.name)
}
})
console.log (personF)

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let nameCJ = personF.filter ((person) => {
  return (person.charAt() == 'C' || person.charAt() == 'J')
} )
console.log (nameCJ)

// Log all the even numbers from peopleGrade array
let evenPeopleGrade = peopleGrade.filter ((grade) =>
{return grade % 2 == 0 }
)
console.log (evenPeopleGrade)

// Find the first name that starts with 'J' in persons array and log the object
let nameJ = []
persons.filter ((person) => 
{
  if (person.name.charAt() == 'J'){
    nameJ.push (person.name)
  }
}
)

// Find the first name that starts with 'P' in persons array and log the object
let nameP = []
persons.filter ((person) => 
{
  if (person.name.charAt() == 'P'){
    nameP.push (person.name)
  }
}
)

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let nameJGrade10F = []
persons.filter ((person) => 
{
  if (person.name.charAt() == 'J'){
    if (person.grade > 10){
      if (person.sex == 'F'){
        nameJGrade10F.push (person)
      }
    }
  }
}
)

// Filter all the female from persons array and store in femalePersons array
let femalePersons = []
persons.filter ((person) => {
  if (person.sex == 'F'){
    femalePersons.push (person)
  }
}
)

// Filter all the male from persons array and store in malePersons array
let malePersons = []
persons.filter ((person) => {
  if (person.sex == 'M'){
    malePersons.push (person)
  }
}
)

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce ((acc , num ) => {
  return acc + num ;
} , 0)

// Find the average grade
let average = gradeTotal / peopleGrade.length

// Find the average grade of male


let maleAverage =  malePersons.map (( person ) => person.grade ).reduce ((acc , num ) => {
  return acc + num ;
} , 0) / malePersons.length

// Find the average grade of female
let femaleAverage =  femalePersons.map (( person ) => person.grade ).reduce ((acc , num ) => {
  return acc + num ;
} , 0) / femalePersons.length

// Find the highest grade
let highestGrade = [...peopleGrade].sort ( (a , b) =>
a - b
).pop ()

// Find the highest grade in male
let highestGradeMale = malePersons.map (( person ) => person.grade ).sort ( (a , b) =>
a - b
).pop ()

// Find the highest grade in female
let highestGradeFemale = femalePersons.map (( person ) => person.grade ).sort ( (a , b) =>
a - b
).pop ()

// Find the highest grade for people whose name starts with 'J' or 'P'
persons.filter ((person) => {
  return (person.name.charAt() == 'J' || person.name.charAt() == 'P')
} )
.map (( person ) => person.grade )
.sort ( (a , b) =>
a - b
).pop ()

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let ascendingPeopleGrade = [...peopleGrade].sort ( (a , b) =>
a - b
)
// yes elements of peopleGrade got changed

// Sort the peopleGrade in descending order
let descendingPeopleGrade = peopleGrade.sort ( (a , b) =>
b - a
)

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let descendingPeopleGradeDontMutate = [...peopleGrade].sort ( (a , b) =>
b - a
)

// Sort the array peopelName in ascending `ABCD..Za....z`
let sortPeopleName = peopleName.sort ()

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let sortPeopleNameDontMutate = [...peopleName].sort ()