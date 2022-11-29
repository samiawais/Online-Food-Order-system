let users=[];   

let user=function(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
}

let currUser;
currUser=new user("","","");

function signup(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let user1=new user(name,email,password);
    users.push(user1);
    console.log(users);
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("cpassword").value="";
    document.getElementById("signupsuccessfull").innerHTML="Account Successfully Created!<br>";
    document.getElementById("signupsuccessfull").style.color="green";
}

function loginU(){
    let email=document.getElementById("email1").value;
    let password=document.getElementById("password1").value;
    for(let i=0;i<users.length;i++){
        if(users[i].email==email && users[i].password==password){
            document.getElementById("loginsuccessfull").innerHTML="Login Successfull!";
            document.getElementById("loginsuccessfull").style.color="green";
            document.getElementById("loginerror").innerHTML="";
            currUser=users[i];
            // console.log(window.location.origin);
            // window.location.replace("/home");
            // document.getElementById("user").innerHTML = "Hello " + currUser.name;
            break;
        }
        else{
            document.getElementById("loginerror").innerHTML="Invalid Credentials!";
            document.getElementById("loginerror").style.color="red";
            document.getElementById("loginsuccessfull").innerHTML="";
        }
    }
}

console.log("Hello")