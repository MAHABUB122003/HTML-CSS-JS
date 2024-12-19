
let mahabub=document.getElementById('registrationForm');
mahabub.addEventListener('submit', function(e) {
e.preventDefault();

// document.getElementById('nameError').textContent='';
document.getElementById('nameError').textContent = '';
document.getElementById('emailError').textContent = '';
document.getElementById('passwordError').textContent = '';

const name=document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const password=document.getElementById('password').value.trim();



let valid =true;

if(name===''){

    document.getElementById('nameError').textContent='Name is required.';
valid = false;

}
if(email===''){
    document.getElementById('emailError').textContent='Email is required.';
    valid=false;
}
 else if(!/\S+@\S+\.\S+/.test(email)){
    document.getElementById('emailError').textContent='Email is invalid';
    valid=false;

}     
if(password===''){
    document.getElementById('passwordError').textContent='password is required.';
    valid =false;
    }else if(password.length<6){
        document.getElementById('passwordError').textContent='password must be at least six charecter.'
    }


if(valid){
    
    
    // alert('SuccessFull your form')
    // document.getElementById('registrationForm').reset()
}



});