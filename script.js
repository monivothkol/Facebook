const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('login')
const errorElement  = document.getElementById('error')



form.addEventListener('submit', (e) => {
    let message = []
    if (username.value == '' || username.value == null){
        message.push('Name is required')
    }
    if(password.value.length <= 6){
        message.push('Password must be longer than 6 character')
    }
    if(message.length > 0){
        e.preventDefault()
        errorElement.innerText = message.join(' and ')
    }

}
)

document.querySelector("#create").onclick = function(){
    const create = document.querySelector('#signup');
    create.style.display = "flex";
    // create.style.transition = "4s ease-in-out 1s";
}
document.querySelector("#close_signup").onclick = function(){
    const create = document.querySelector('#signup');
    create.style.display = "none";
}