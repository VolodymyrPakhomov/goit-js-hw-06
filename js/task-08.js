const form = document.querySelector('.login-form ');

form.addEventListener('submit', (event)=> {
event.preventDefault();
const{
    elements: {email,password}
} = event.currentTarget;

if (email.value === '' || password.value === '') {
    alert('Всі поля повинні бути заповнені');
}
const objktImp {
    Email: email.value,
    Password: password.value};
    console.log(objktImp)
    form.reset();
});