/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// document.querySelector('.promo__adv').remove(); // неверно, надо удалить только рекламные картинки
adv.forEach(item => item.remove());

// document.querySelector('.promo__genre').textContent = 'драма';// верно, но сделал без создания переменной
genre.textContent = 'драма';

// document.querySelector('.promo__bg').style.background = "url('../img/bg.jpg') center center/cover no-repeat"; // верно, но сделал без создания переменной
poster.style.backgroundImage = "url('img/bg.jpg')";

// movieDB.movies.sort();
// for (let i = 0; i < films.length; i++) {
//     films[i].innerHTML = i + 1 + '. ' + movieDB.movies[i] + '<div class="delete"></div>';
// } // неверно, если количестово фильмов в листе и в массиве не будет совпадать, то всё сломается

movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});