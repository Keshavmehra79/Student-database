function fordata(){
    let name=document.querySelector('#name').value
    localStorage.setItem('Username',name)
    let email=document.querySelector('#email').value
    localStorage.setItem('Email',email)
    let contact=document.querySelector('#contact').value
    localStorage.setItem('Contact',contact)
    let password=document.querySelector('#password').value
    localStorage.setItem('password',password)
    let city=document.querySelector('#city').value
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

