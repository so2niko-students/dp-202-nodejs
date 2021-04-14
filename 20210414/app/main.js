const inputs = {
    login : document.querySelector('.inp-login'),
    password : document.querySelector('.inp-pwd')
};

document.querySelector('.form-reg').addEventListener('submit', (ev) => {
    ev.preventDefault();

    const login = inputs.login.value;
    const password = inputs.password.value;

    fetch(`http://localhost:8080?type=registration&login=${ login }&password=${ password }`)
        .then(res => res.text())
        .then(console.log);
})