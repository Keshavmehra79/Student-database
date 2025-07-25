
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

//!!!!!!!!!!!!!!!!!!!JSON-Operations
                    //for localuser

                    //fetch
async function fetchData() {
    let data=await fetch('http://localhost:3000/userdata')
    let res=await data.json()
    
    let finalData=res.map((item)=>`
       <tr>
       <td>${item.id}</td>
       <td>${item.name}</td>
       <td>${item.father}</td>
       <td>${item.email}</td>
       <td>${item.contact}</td>
       <td>${item.institute}</td>
       <td><button onclick="todelete('${item.id}')" id="deletebtn">delete</button></td>
       
       
       </tr>
    `).join(" ")
    document.querySelector('#savedata').innerHTML=finalData
}
fetchData()

                   //delete
function todelete(id){
    fetch(`http://localhost:3000/userdata/${id}`,{
        method:"DELETE"
    }).then(()=> alert("Deleted Succesfully"))

}

///////////////post
function topostdata(){
      let data={
        name:document.querySelector('#name').value,
        father:document.querySelector('#father').value,
        email:document.querySelector('#email').value,
        contact:document.querySelector('#contact').value,
        institute:document.querySelector('#institute').value
      }
      
      fetch('http://localhost:3000/userdata',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      }).then(alert('Succesfully registerd'))
    }
  
    ////////////////////EDITDATA

async function fetch2(){
    let fet=await fetch('http://localhost:3000/userdata')
    let filt=await fet.json()
    let showdata=filt.map((e)=>`
    <tr>
       <td>${e.id}</td>
       <td>${e.name}</td>
       <td>${e.father}</td>
       <td>${e.email}</td>
       <td>${e.contact}</td>
       <td>${e.institute}</td>
       <td><button onclick="myedit('${e.id}')" class="editbtn">Edit Details</button>
       </tr>
    `).join(" ")

    document.querySelector('#showdata').innerHTML=showdata
}
fetch2()

 async function myedit(id){
    let fet=await fetch(`http://localhost:3000/userdata/${id}`)
     let form=document.querySelector('#editform')
     form.removeAttribute('style')
    let data=await fet.json()
    let userinput=`<h1> Edit Your data</h1>
    <input type="text" value='${data.id}' readonly id="id1"><br><br>
    <input type="text" value='${data.name}' id="name1" ><br><br>
    <input type="text" value='${data.father}' id="father1"><br><br>
    <input type="text" value='${data.email}' id="email1" ><br><br>
    <input type="text" value='${data.contact}' id="contact1"><br><br>
    <input type="text" value='${data.institute}' id="institute1"><br><br>

    <input type="submit" onclick="finaledit('${data.id}')" ><br><br>


    `    
    document.querySelector('#editform').innerHTML=userinput
}

const finaledit= (id)=>{
    let fet2= fetch(`http://localhost:3000/userdata/${id}`)
    let newdata={
            id:document.querySelector('#id1').value,
            name:document.querySelector('#name1').value,
            father:document.querySelector('#father1').value,
            email:document.querySelector('#email1').value,
            contact:document.querySelector('#contact1').value,
            institute:document.querySelector('#institute1').value,

    }
    fetch(`http://localhost:3000/userdata/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newdata)
    }).then( alert("Edited Succefully!!!!!!!!!!"))
        
}