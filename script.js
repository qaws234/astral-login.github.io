document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Останавливаем стандартную отправку формы
    event.preventDefault();

    // Получаем значения из полей
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ссылка, куда перейдет пользователь (замените '#' на ваш домен)
    const targetUrl = "http://astral-main-page.p7z.ru/"; 

    // Проверка данных
    if (username === 'testtest!1' && password === 'test!1') {
        alert('Вход выполнен успешно!');
        window.location.href = targetUrl; // Перенаправление
    } else {
        alert('Неверный логин или пароль. Попробуйте снова.');
    }

});

