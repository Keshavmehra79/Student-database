
        //LOGIN-SINGUP LOCALUSER

function fordata(){
    let LOCALUSER={
        name:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value,
        password:document.querySelector('#password').value
    }
    if(LOCALUSER.name==""){
        alert("Please Enter Your name")
        document.querySelector('#name').focus()
        return false
    }

        if(LOCALUSER.email==""){
        alert("Please Enter your email")
        document.querySelector('#email').focus()
        return false
    }
    if(!(LOCALUSER.email.includes('@gmail.com') || LOCALUSER.email.includes('@yahoo.com'))){
        alert("Please Enter your valid email")
        document.querySelector('#email').focus()
        return false
    }

    if(LOCALUSER.contact==""){
        alert("please Enter your contact number")
        document.querySelector('#contact').focus()
        return false
    }

    if(LOCALUSER.password==""){
        alert("Please Make your password")
        document.querySelector('#password').focus()
        return false 
    }

     if(!(LOCALUSER.password.match(/[!@#$%^&*]/))){
        alert('Please Make Strong Password (e.g-@abcd#')
        document.querySelector('#password').focus()
        return false
    }
    if(LOCALUSER.city==""){
        alert("Please Enter your city")
        document.querySelector('#city').focus()
        return false
    }
   localStorage.setItem('LOCALUSER',JSON.stringify(LOCALUSER))

}

function login(){
    let e1=document.querySelector('#logem').value
    let p1=document.querySelector('#logpass').value
    let pass=localStorage.getItem('password')
    let e=localStorage.getItem('Email')
    if(!(e1==e) ||!(p1==pass)){
        alert("User Not found!please Try Again")
        document.querySelector('#logem').focus()
        return false
    }
}
        //LOGIN-SIGNUP ADMIN
function admin(){
    let admindata={
        name:document.querySelector('#adminname').value,
        email:document.querySelector('#adminemail').value,
        city:document.querySelector('#admincity').value,
        contact:document.querySelector('#admincontact').value,
        password:document.querySelector('#adminpassword').value
    }
    if(admindata.name==""){
        alert("Please Your Name")
        document.querySelector('#adminname').focus()
        return false
    }
    else if(admindata.email==""){
        alert("Please enter your Email")
        document.querySelector('#adminemail').focus()
        return false
    }
    else if(!(admindata.email.includes('@gmail.com') || (admindata.email.includes('@yahoo.com')))){
        alert('Please enter your valid email')
        document.querySelector('#adminemail').focus()
        return false
    }
    else if(admindata.city==""){
        alert('Please Enter Your city')
        document.querySelector('#admincity').focus()
        return false
    }
    else if(admindata.contact==""){
        alert('Enter your contact number')
        document.querySelector('#admincontact').focus()
        return false
    }
    else if(admindata.contact.length!=10){
        alert('Please enter 10 digit contact')
        document.querySelector('#admincontact').focus()
        return false
    }
    else if(admindata.password==""){
        alert('Please make password')
        document.querySelector('#adminpassword').focus()
        return false
    }
    else if(!(admindata.password.match(/[!@#$%^&*]/))){
        alert('Plaese Make strong password')
        document.querySelector('#adminpassword').focus()
        return false
    }
    localStorage.setItem('Admindata',JSON.stringify(admindata))
      
      
}
   let data=localStorage.getItem('Admindata')
   console.log(data);
   


function loginadmin(){
    let data=JSON.parse(localStorage.getItem('Admindata'))
    let logemail=document.querySelector('#logadmin').value
    let logpass=document.querySelector('#passadmin').value
    if(logemail!=data.email || logpass!=data.password){
        alert('User not found!please try again')
        document.querySelector('#logadmin').focus()
        return false
    }


} 


