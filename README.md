Описание структуры приложения:
============================
- Папки:
    - view - содержит шаблоны, для вывода динамической информации из БД (Товары по разделам и в корзине), детализацию товаров.
    - model - содержит классы, для работы с базой данных. Классы называются так же, как таблицы в БД.
    - frontend - содержит объекты, для работы с определенным шаблоном или странице. Файл js назван, по семантике его работы.
    - details, category, basket - Страницы, в которых происходит вывод статической информации для страниц.
    - img - изображения сайта
- Файлы
    - index.php - корень сайта
    - header.php - шапка сайта(содерржит элементы: Меню), место для подключения внешних скриптов и самописных функций
    - footer.php - подменю, с выводом категорий и количеством товаров в каждой из них.
    - functions.php - самописные функции php
    - functions.js - самописные функции js
    - magazine_lesson.sql - выгрузка базы даных
    - style.css - скомпилированные стили сайта из scss
    - style.css.map - настройки для Live Sass Compiler - Visual Studio Marketplace
    - style.scss - стили сайта в формате SCSS

Схема архитектуры проекта Интернет магазин "SH"
=====================
![Image alt](https://github.com/AlexandrRumiantsev/NordicIT-Group-1-/blob/master/img/schem.png)

Навигатор по проекту.
=====================
1) Классы - ООП, папка model (В папке можно рассмотреть возможности классов и их применение на практтике)
2) SASS/SCSS - Файл style.scss
3) Объекты JS на практике, объекты каждой из страниц в папке frontend
4) controller.js - начиная с 37 строки, наследование у объектов JS
5) view/admin.php - Аутентификация пользователя, доступ к административной панели, толькоо для администратора.
6) model/goods.php: getCategory(), getItem() - Появление пагинации при выводе товаров из БД
7) Модель MVC - папки: model , view  и файл controller.php
8) Написание функций - function.php, function.js
9) Подтверждение авторизации пользователя на сайте, через переход по ссылке в письме, которое приходитт после регистрации - папка accept , а так же action в контроллерре - accept
10) sql запросы: delete , update , insert , select.
Все виды запросов, имеет класс User в папке model.

Сложные механизмы:

11) Корзина интернет магазина:
Отображение: view/basket.php
Механизмы интерфейса: frontend/basket.js
Работа корзины с БД: model/basket.php
12) Административная панель
Отображение: view/admin.php
Механизмы интерфейса: frontend/admin.js
#   m a g a z i n e - l e s s i o n  
 