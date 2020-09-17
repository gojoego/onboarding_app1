console.log("I love coding");

const   wrapper = document.querySelector('.wrapper'),
form = wrapper.querySelectorAll('.form'),
submit = form[0].querySelector('input[type="submit"]');

function getData(){
    var formData = new FormData(form[0]);

    // make sure form is working 
    alert(formData.get('first-name') + '\n' + 
    formData.get('last-name') + '\n' + formData.get('employee-id'))

    console.log(fetch("http://localhost:8080/password/" + +(formData.get('employee-id'))));

    fetch("http://localhost:8080/password/" + formData.get('employee-id'))
        .then(response => response.json())  
        .then(obj => {
        getPassword(obj)});
};

function getPassword(data){
    document.getElementById('display').innerHTML = data.password
}

document.addEventListener('DOMContentLoaded', function (){
    submit.addEventListener('click', getData(), false);    
}, false);

