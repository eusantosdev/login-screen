document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

    const userEmailInput = document.getElementById('useremail');
    const userPasswordInput = document.getElementById('password');

    const useremail = document.getElementById('useremail').value;
    const password = document.getElementById('password').value;

    const errorMessage = document.getElementById('errormessage');
    const rightMessage = document.getElementById('rightmessage');

    if (useremail === '' && password === '') {
        errorMessage.style.color = 'red';
        errorMessage.textContent = "Preencha os campos acima!";
    } else if (!emailPattern.test(useremail) && !passwordPattern.test(password)) {
        userEmailInput.style.borderColor = 'red';
        userPasswordInput.style.borderColor = 'red';
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Insira e-mail e uma senha valida!';
    } else if (password.length < 6) {
        userPasswordInput.style.borderColor = '2px solid red';
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres!';
    } else {
        userEmailInput.style.borderColor = 'green';
        userPasswordInput.style.borderColor = 'green';

        setTimeout(() => {
            rightMessage.style.display = 'block';
            rightMessage.style.color = 'white';
            rightMessage.textContent = 'Enviado com sucesso!';

            console.table(useremail, password);
        }, 2000);
    }
});