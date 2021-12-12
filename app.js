let username = document.querySelector(".username");
let password = document.querySelector(".password");
let mainPara = document.querySelector(".mainPara");
let button = document.querySelector(".loginButton");
let logoutbutton = document.querySelector(".logoutButton");
let inputField = document.querySelector(".inputField");
let welcomeText = document.querySelector("#welcomeText");
let wrongInput = document.querySelector("#wrongInput");
let storedInput = localStorage.getItem("username:");

let contentPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let mainParaText = "You are not logged in, log in to view content.";
mainPara.innerHTML = mainParaText;

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
    for(let i = 0; i < users.length; i++){
        if(username.value == users[i].name && password.value == users[i].pass){
            localStorage.setItem("username:", users[i].name);
        }else{
            wrongInput.classList.remove("hide");
            wrongInput.classList.add("show");
        }
    }

    storedInput = localStorage.getItem("username:");
    
    if(storedInput){
        mainPara.innerHTML = contentPara;
        username.classList.add("hide");
        password.classList.add("hide");
        welcomeText.classList.remove("hide");
        welcomeText.classList.add("show");
        wrongInput.classList.add("hide");
        wrongInput.classList.remove("show");
        button.classList.add("hide");
        button.classList.remove("show");
        logoutbutton.classList.remove("hide");
        logoutbutton.classList.add("show");
        welcomeText.innerHTML = `Welcome ${storedInput}`;
    }
}

if(storedInput){
    mainPara.innerHTML = contentPara;
    username.classList.add("hide");
    password.classList.add("hide");
    welcomeText.classList.remove("hide");
    welcomeText.classList.add("show");
    wrongInput.classList.add("hide");
    wrongInput.classList.remove("show");
    button.classList.add("hide");
    button.classList.remove("show");
    logoutbutton.classList.remove("hide");
    logoutbutton.classList.add("show");
    welcomeText.innerHTML = `Welcome ${storedInput}`;
}

const logout = () => {
    mainPara.innerHTML = mainParaText;
    username.classList.remove("hide");
    password.classList.remove("hide");
    welcomeText.classList.add("hide");
    welcomeText.classList.remove("show");
    button.classList.remove("hide");
    button.classList.add("show");
    logoutbutton.classList.add("hide");
    logoutbutton.classList.remove("show");
    localStorage.removeItem("username:");
}

button.addEventListener("click", login);
logoutbutton.addEventListener("click", logout);