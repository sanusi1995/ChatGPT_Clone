const header1 = document.getElementById('header1');
const header3 = document.getElementById('header3');
const password = document.getElementById('password');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

let passsword = function(){
    header3.style.display = 'block';
    password.style.display = 'block';
    header1.style.display = 'none';
    btn1.style.display = 'none';
    btn2.style.display = 'block';
}