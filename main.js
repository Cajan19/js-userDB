//Init add buttons
import {getSearchValue} from "./utils/matchFinder.js";
import {addUser, findUserUsingFilterMethod, searchDB, undoLastAddedUser} from "./database/databaseInteractions.js";


const addUserButton = document.getElementById("addSomeone");
addUserButton.addEventListener("click", () => addUser());

const undoUserButton = document.getElementById("undoUser");
undoUserButton.addEventListener("click", () => undoLastAddedUser());

const findUserButton = document.getElementById("findUserName");
findUserButton.addEventListener("click", () => findUserUsingFilterMethod((getSearchValue())));

const searchDbButton = document.getElementById("searchDB");
searchDbButton.addEventListener("click", () => searchDB((getSearchValue())));








