const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
] 

var message = ", you are not allowed to enter because you are underage!"

for (let i = 0; i < nightClubRegister.length; i++) {

    if (nightClubRegister[i].age < 18) {
        if (nightClubRegister[i].gender === "male") {
            console.log("Sorry! Mr. " + nightClubRegister[i].lastname + message);
        }
        else {
            console.log("Welcome! Mr. " + nightClubRegister[i].lastname + " enjoy the night!")
        }
    }

    if (nightClubRegister[i].age < 18) {
        if (nightClubRegister[i].gender === "female") {
            console.log("Sorry! Ms. " + nightClubRegister[i].lastname + message)
        }
        else {
            console.log("Welcome! Ms./Mrs. " + nightClubRegister[i].lastname + " enjoy the night!")
        }
    }

}
