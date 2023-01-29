let Resume = {

    Name : 'Anbu',
    Age : 20,
    DOB : '23-01-2003',
    Email : "developer.raghavan@gmail.com",
    Phone : "+919942502245",
    Education : {
        SSCL : [
            School = ' Jaya Matriculation Higher Secondary School',
            Year = 2018,
            Location = 'Nagapattinam'
        ],
        HSL : [
            School = ' Jaya Matriculation Higher Secondary School',
            Year = 2020,
            Location = 'Nagapattinam'
        ]
    },
    Skills : {
        1 : 'Communication Skills',
        2 : 'Effective Time Management',
        3 : 'Ability to Work underpressure',
        4 : 'Creative Writing'
    },
    Languages : {
        1 : 'English',
        2 : 'Tamil'
    }
}




const json = JSON.stringify(Resume);
console.log(json);