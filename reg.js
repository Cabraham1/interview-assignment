document.querySelector('#signup').addEventListener('click', function(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    alert (name +' '+email +' '+phone)
})