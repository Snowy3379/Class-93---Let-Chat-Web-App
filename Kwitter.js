function addUser() {
    var usernameInput = document.getElementById("user_name").value

    localStorage.setItem("user_name", usernameInput)
    console.log(usernameInput)
    
    window.location = "Kwitter_room.html"
}