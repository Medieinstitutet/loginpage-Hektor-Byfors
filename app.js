let username = document.querySelector(".username");
let password = document.querySelector(".password");
let mainPara = document.querySelector(".mainPara");
let button = document.querySelector(".loginButton");
let inputField = document.querySelector(".inputField");
let welcomeText = document.querySelector("#welcomeText");

let contentPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let users = [
    {
        name: "janne",
        pass: "test"
    },{
        name: "Hektor",
        pass: "123"
    },{
        name: "Anders",
        pass: "456"
    }
];

const login = () => {
    let loggedIn = false;
    
    for(let i = 0; i < users.length; i++){
        if(username.value == users[i].name && password.value == users[i].pass){
            mainPara.innerHTML = contentPara;
            username.classList.add("hide");
            password.classList.add("hide");
            welcomeText.classList.remove("hide");
            welcomeText.classList.add("show");
            welcomeText.innerHTML += `${users[i].name}`;
            button.innerHTML = "Log out";
            loggedIn = true;
        }
    }
}

button.addEventListener("click", login);