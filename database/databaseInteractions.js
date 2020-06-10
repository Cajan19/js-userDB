import {valueMatchesSearchString} from "../utils/matchFinder.js";


// Array of users
export const userDB = [
    {
        id: 2929,
        name: "E.T.",
    },
    {
        id: 8202,
        name: "Barbie",
    },
    {
        id: 4208,
        name: "Xena",
    }
];


// Adding a new user to the db
export function addUser() {
    let newUser = {};
    newUser.id = Number(prompt("Enter ID number"));
    newUser.name = prompt("Enter username");
    userDB.push(newUser);
    console.log(userDB);

}

//Delete the last added user
export function undoLastAddedUser() {
    const deletedUser = userDB.pop();
    console.log("User has been deleted");
    console.log(deletedUser);
    console.log(userDB);
}


//how to find a user by name

// export function findUserByName(userName) {
//     console.log(userDB.find(userDbEntry => userDbEntry.name.toLowerCase()===userName));
//
// }

//find a User by typing some letters
export function findUserUsingFilterMethod(username) {
    console.log(userDB.filter(userDbEntry => userDbEntry.name.toLowerCase().includes(username.toLowerCase())));

}

//search the whole database
export function searchDB(searchValue) {
    const result = userDB.filter(userDbEntry => {
        const objectValues = Object.values(userDbEntry)
        return objectValues.find(value => valueMatchesSearchString(value, searchValue));
    });
    console.log("Result: ", result);

}

