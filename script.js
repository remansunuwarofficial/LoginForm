const button = document.getElementById("Login");

let password = document.getElementById("password");
let userName = document.getElementById("userName");
let login = false;


function validate(){
    if(userName.value == "" || password.value == ""){
        console.log("Username OR Password5 is blank");
        login = false;
    }else{
    
        if(userName.value.includes("@") || userName.value.includes("#") || userName.value.includes("&")){
            console.log("the character [@,#,&] shouldn't be included." )
            login = false;
        }else{
            login = true;
        }

    }
    return login;
}
