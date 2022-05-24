const age_1 = 30;
const age_2 = 18;
const age_3 = 60;

// if(age_1 < age_2){
//     console.log("You don't have access to this website cause your age is " + age_1 + ". It's less than " + age_2)
// }
// else if (age_1 >= age_2 && age_1 < age_3){
//     console.log("Welcome!")
// }
// else if (age_1 >= age_3){
//     console.log("Keep calm and watch Cultura channel")
// }
// else {
//     console.log ("Techwork")
// }


// const checkAge = function(age) {
// if(age < age_2){
//     console.log("You don't have access to this website cause your age is " + age + ". It's less than " + age_2)
// }
// else if (age >= age_2 && age < age_3){
//     console.log("Welcome!")
// }
// else if (age >= age_3){
//     console.log("Keep calm and watch Cultura channel")
// }
// else {
//     console.log("Techwork")
// }
// }

// checkAge(60)

// const checkAge = function(age) {
//     if (typeof age == 'number') {
//     if(age < age_2){
//         console.log("You don't have access to this website cause your age is " + age + ". It's less than " + age_2)
//     }
//     else if (age >= age_2 && age < age_3){
//         console.log("Welcome!")
//     }
//     else if (age >= age_3){
//         console.log("Keep calm and watch Cultura channel")
//     }
//     else {
//         console.log("Techwork")
//     }
// }
//     else {
//         console.log("Not integer value")
//     }
// }

// checkAge(60)


const checkAge = function(age) {

    // age = Number(age)
    // if(!isNaN(age)) {
        // if(Number(age)){
        if(+age){

    if(age < age_2){
        console.log("You don't have access to this website cause your age is " + age + ". It's less than " + age_2)
    }
    else if (age >= age_2 && age < age_3){
        console.log("Welcome!")
    }
    else if (age >= age_3){
        console.log("Keep calm and watch Cultura channel")
    }
    else {
        console.log("Techwork")
    }
}
    else {
        console.log("Not integer value")
    }
}

// checkAge(79)
// checkAge("18")
// checkAge("25sasd")

let agePrompt = prompt("Enter age")
checkAge(agePrompt)