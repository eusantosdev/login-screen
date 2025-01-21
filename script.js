document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const useremail = document.getElementById('useremail').value;
    const password = document.getElementById('password').value;
    const messageError = document.getElementById('messageerror');
    const message = document.getElementById('message');

    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (useremail === '' && password === '') {
        messageError.style.color = 'red';
        messageError.textContent = "Preencha os campos acima!";
    } else if (!emailPattern.test(useremail)) {
        messageError.style.color = 'red';
        messageError.textContent = 'Por favor, insira um e-mail valida!';
    } else if (password.length < 6) {
        messageError.style.color = 'red';
        messageError.textContent = 'A senha deve ter pelo menos 6 caracteres!';
    } else {
        messageError.style.color = 'green';
        messageError.textContent = 'Login realizado com sucesso!';
        
        setTimeout(() => {
            message.style.display = 'block';
            message.style.color = 'white';
            message.textContent = 'Enviado com sucesso!';
        }, 2000);
    }
});