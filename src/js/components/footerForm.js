// Функция для валидации формы
function validateForm(event) {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const submitButton = document.getElementById("submit");
  const nameErrorMessage = document.querySelector(
    ".error-message[data-input='name']"
  );
  const emailErrorMessage = document.querySelector(
    ".error-message[data-input='email']"
  );
  const phoneErrorMessage = document.querySelector(
    ".error-message[data-input='phone']"
  );

  // Проверяем, заполнены ли обязательные поля
  if (!nameInput.value || !emailInput.value || !phoneInput.value) {
    event.preventDefault(); // Отменяем отправку формы
    // Изменяем стили полей и кнопки
    nameInput.style.border = "1px solid #7E1D3E";
    emailInput.style.border = "1px solid #7E1D3E";
    phoneInput.style.border = "1px solid #7E1D3E";
    submitButton.style.backgroundColor = "#191919";
    submitButton.style.transition = "none"; // Убираем transition
    submitButton.style.color = "#fff"; // Сохраняем цвет текста как унаследованный
    submitButton.style.border = "1px solid transparent";
    //submitButton.classList.add("hide-after");
  }

  // Валидация имени (только буквы)

  const namePattern = /^[A-Za-zА-Яа-яЁё]+$/;
  if (namePattern.test(nameInput.value)) {
    nameInput.style.border = "1px solid #1D7E33";
    nameErrorMessage.style.display = "none";
    nameInput.style.color = "#191919";
  } else {
    event.preventDefault();
    nameInput.style.color = "#7E1D3E";
    nameInput.style.border = "1px solid #7E1D3E";

    nameErrorMessage.style.display = "block";
  }

  // Валидация email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(emailInput.value)) {
    emailInput.style.border = "1px solid #1D7E33";
    emailErrorMessage.style.display = "none";
    emailInput.style.color = "#191919";
  } else {
    event.preventDefault();
    emailInput.style.color = "#7E1D3E";
    emailErrorMessage.style.display = "block";
    emailInput.style.border = "1px solid #7E1D3E";
  }

  //============================================================
  const phonePattern = /^\+?\d+$/;
  if (phonePattern.test(phoneInput.value)) {
    if (phoneInput.value.length === 13) {
      phoneInput.style.border = "1px solid #1D7E33";
      phoneErrorMessage.style.display = "none";
      phoneInput.style.color = "#191919";
    } else {
      phoneInput.style.border = "1px solid #81b18c";
      phoneErrorMessage.style.display = "none";
      phoneInput.style.color = "#191919";
    }
  } else {
    event.preventDefault();
    phoneInput.style.color = "#7E1D3E";
    phoneErrorMessage.style.display = "block";
    phoneInput.style.border = "1px solid #7E1D3E";
  }
}
//=================================================================

// Добавляем слушателя события отправки формы
const form = document.getElementById("form");
form.addEventListener("submit", validateForm);
form.addEventListener("submit", function (event) {
  const phoneInput = document.getElementById("phone");

  if (phoneInput.value.length !== 13) {
    // Если количество символов в поле телефона не равно 13
    event.preventDefault(); // Отменяем отправку формы
    const phoneErrorMessage = document.querySelector(
      ".error-message[data-input='phone']"
    );
    phoneInput.style.border = "1px solid #7E1D3E";
    phoneErrorMessage.style.display = "block";
    phoneInput.style.color = "#7E1D3E"; // Выводим ошибку
  }
});

// Добавляем слушателей событий для полей ввода
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const submitButton = document.getElementById("submit");
const nameErrorMessage = document.querySelector(
  ".error-message[data-input='name']"
);
const emailErrorMessage = document.querySelector(
  ".error-message[data-input='email']"
);
const phoneErrorMessage = document.querySelector(
  ".error-message[data-input='phone']"
);

nameInput.addEventListener("input", function () {
  // Удаляем стили ошибки и текст ошибки при изменении поля
  nameInput.style.border = "1px solid #81b18c";
  nameErrorMessage.style.display = "none";
  submitButton.style.backgroundColor = "#1d7e33";
  nameInput.style.color = "#191919";

  // Валидация поля имени
  const namePattern = /^[A-Za-zА-Яа-яЁё]+$/;
  if (namePattern.test(nameInput.value)) {
    nameInput.style.border = "1px solid #1D7E33"; // Устанавливаем цвет бордера
    nameErrorMessage.style.display = "none";
  }
});

emailInput.addEventListener("input", function () {
  // Удаляем стили ошибки и текст ошибки при изменении поля
  emailInput.style.border = "1px solid #81b18c";
  emailErrorMessage.style.display = "none";
  submitButton.style.backgroundColor = "#1d7e33";
  emailInput.style.color = "#191919";

  // Валидация поля email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(emailInput.value)) {
    emailInput.style.border = "1px solid #1D7E33"; // Устанавливаем цвет бордера
    emailErrorMessage.style.display = "none";
  }
});

// Добавляем слушателя события фокуса на поле ввода телефона
phoneInput.addEventListener("focus", function () {
  phoneInput.value = "+38"; // При фокусе добавляем "+38"
});

// Добавляем слушателя события ввода на поле телефона
phoneInput.addEventListener("input", function () {
  const phoneValue = phoneInput.value.replace("+38", ""); // Удаляем "+38" из значения
  const phonePattern = /^\+?\d+$/;

  if (phoneValue.length === 10 && phonePattern.test(phoneValue)) {
    // Если введено ровно 10 цифр после удаления "+38"
    phoneInput.style.border = "1px solid #1D7E33";
    phoneErrorMessage.style.display = "none";
    phoneInput.style.color = "#191919";
  } else if (phoneInput.value.length > 13) {
    // Если введено более 13 символов
    phoneInput.style.border = "1px solid #7E1D3E";
    phoneErrorMessage.style.display = "block";
    phoneInput.style.color = "#7E1D3E";
  } else {
    phoneInput.style.border = "1px solid #81b18c";
    phoneErrorMessage.style.display = "none";
    phoneInput.style.color = "#191919";
  }
});

// Добавляем слушателя события потери фокуса на поле телефона
phoneInput.addEventListener("blur", function () {
  if (phoneInput.value === "+38") {
    phoneInput.value = ""; // Если поле содержит только "+38", очищаем его
  }
});
