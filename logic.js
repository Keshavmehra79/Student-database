function fordata(){
    let name=document.querySelector('#name').value
    if(name==""){
        alert("Please Enter Your name")
        document.querySelector('#name').focus()
        return false
    }
    localStorage.setItem('Username',name)

    let email=document.querySelector('#email').value;
        if(email==""){
        alert("Please Enter your email")
        document.querySelector('#email').focus()
        return false
    }
    if(!(email.includes('@gmail.com') || email.includes('@yahoo.com'))){
        alert("Please Enter your valid email")
        document.querySelector('#email').focus()
        return false
    }
    localStorage.setItem('Email',email)

    let contact=document.querySelector('#contact').value
    if(contact==""){
        alert("please Enter your contact number")
        document.querySelector('#contact').focus()
        return false
    }
    localStorage.setItem('Contact',contact)

    let password=document.querySelector('#password').value
    if(password==""){
        alert("Please Make your password")
        document.querySelector('#password').focus()
        return false 
    }

    else if(!(password.match(/[!@#$%^&*]/))){
        alert('Please Make Strong Password (e.g-@abcd#')
        document.querySelector('#password').focus()
        return false
    }
    localStorage.setItem('password',password)
    let city=document.querySelector('#city').value
    if(city==""){
        alert("Please Enter your city")
        document.querySelector('#city').focus()
        return false
    }
    localStorage.setItem('City',city)
   

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

function admin(){
    let admindata={
        name:document.querySelector('#adminname').value,
        email:document.querySelector('#adminemail').value,
        city:document.querySelector('#admincity').value,
        contact:document.querySelector('#admincontact').value,
        password:document.querySelector('#adminpassword').value
    }
    localStorage.setItem('Admindata',JSON.stringify(admindata))
   
    
    
    
}
 let adminstorage=JSON.parse(localStorage.getItem('Admindata'))
    console.log(adminstorage);
    let adminname=document.querySelector('#admin')
    adminname.textContent=adminstorage.name

