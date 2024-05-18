function adddata(){
    var name=document.getElementById("name").Value
var email=document.getElementById("email").Value
var submit=document.getElementById("submit").value

    

 if (name && email) {
    users[index] = { name, email };
    localStorage.setItem('users', JSON.stringify(users));
    renderTable();
    document.getElementById('update_form').style.display = 'none';
    document.getElementById('create_form').style.display = 'block';
    document.getElementById('update_form').reset();
} else {
    alert('Please fill out all fields');
}

 function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    render();
}
}
 `

