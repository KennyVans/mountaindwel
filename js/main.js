// Получаем элементы
const callbackBtn = document.getElementById('callbackBtn');
const callbackModal = document.getElementById('callbackModal');
const closeBtn = document.getElementsByClassName('close')[0];
const submitPhone = document.getElementById('submitPhone');

// Открываем модальное окно при клике на кнопку
callbackBtn.onclick = function() {
  callbackModal.style.display = "block";
}

// Закрываем модальное окно при клике на крестик
closeBtn.onclick = function() {
  callbackModal.style.display = "none";
}

// Закрываем модальное окно при клике вне окна
window.onclick = function(event) {
  if (event.target == callbackModal) {
    callbackModal.style.display = "none";
  }
}

// Обработка отправки номера телефона
submitPhone.onclick = function() {
  const phoneNumber = document.getElementById('phoneNumber').value;
  if (phoneNumber) {
    alert(`Спасибо! Мы перезвоним вам на номер: ${phoneNumber}`);
    callbackModal.style.display = "none";  // Закрываем окно
  } else {
    alert("Пожалуйста, введите номер телефона.");
  }
}