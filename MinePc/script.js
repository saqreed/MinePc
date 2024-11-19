const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Функция для открытия и закрытия меню
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('menu-open');
    hamburger.classList.toggle('menu-open');

    if (navbar.classList.contains('menu-open')) {
        navbar.style.display = 'block';
        setTimeout(() => {
            navbar.style.opacity = '1';
        }, 10);
    } else {
        navbar.style.opacity = '0';
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 500);
    }
});

// Плавная прокрутка и закрытие меню после клика на пункт меню
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Плавная прокрутка к секции
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Закрываем меню и возвращаем гамбургер
        navbar.classList.remove('menu-open');
        hamburger.classList.remove('menu-open');
        navbar.style.opacity = '0';
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 500);
    });
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !hamburger.contains(event.target) && navbar.classList.contains('menu-open')) {
        navbar.classList.remove('menu-open');
        hamburger.classList.remove('menu-open');
        navbar.style.opacity = '0';
        setTimeout(() => {
            navbar.style.display = 'none';
        }, 500);
    }
});



// Получаем элемент кнопки "стрелка вверх"
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Переменные для отслеживания положения прокрутки
let lastScrollTop = 0;

// Функция для отображения кнопки при прокрутке
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Логика отображения кнопки
    if (scrollTop > 100) {
        scrollToTopButton.classList.add('show'); // Показать кнопку
    } else {
        scrollToTopButton.classList.remove('show'); // Скрыть кнопку
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для мобильных устройств или при прокрутке вверх
}

// Функция для прокрутки страницы вверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
}

// Добавляем слушатели событий
window.addEventListener('scroll', handleScroll);
scrollToTopButton.addEventListener('click', scrollToTop);
