<template>
    <div>
    <Header @getDistributtionsEvent="getDistributtions" />
    <div class="main">
        <div class="resultsInfo">
            <span class="resultsInfoHeader">
                Трекер
            </span>
            <span class="resultsInfoCountOfResults">
                Страницы:  1
            </span>
            <span>
                <span class="resultsInfoCountOfResults">
                    Результатов поиска: {{ distributtions.length }}
                </span>
                 (max: 500) 
            </span>
        </div>
        <div class="searchByDistributions">
            <div class="searchByDistributionsHeader">
                <span>
                    Поиск по раздачам
                </span>
            </div>
            <div class="searchByDistributionsFilter">
                <div class="goToSection">
                    <span>
                        Перейти к разделу
                    </span>
                    <div class="sections">
                        <span>
                            Все имеющиеся
                        </span>
                        <span class="sectionHeader">
                            Новости
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Кино, видео и ТВ
                        </span>
                        <div class="subSection">
                            <span class="subSectionHeader">
                                Наше кино
                            </span>
                            <span>
                                | - Кино СССР
                            </span>
                            <span>
                                | - Детские и отечественные фильмы
                            </span>
                            <span>
                                | - Авторские дебюты
                            </span>
                            <span class="subSectionHeader">
                                Зарубежное кино
                            </span>
                            <span>
                                Классика мирового кинематографа
                            </span>
                            <span>
                                | - Фильмы до 1990 года
                            </span>
                            <span>
                                | - Фильмы 1991-2000
                            </span>
                            <span>
                                | - Фильмы 2001-2005
                            </span>
                            <span>
                                | - Фильмы 2006-2010
                            </span>
                            <span>
                                | - Фильмы 2011-2015
                            </span>
                            <span>
                                | - Фильмы 2016-2020
                            </span>
                            <span>
                                | - Фильмы 2021
                            </span>
                            <span>
                                | - Фильмы ближнего зарубежья
                            </span>
                            <span>
                                | - Азиатские фильмы
                            </span>
                            <span>
                                | - Индийское кино
                            </span>
                            <span>
                                | - Сборники фильмов
                            </span>
                            <span>
                                | - Короткий метр
                            </span>
                            <span>
                                | - Грайндхаус
                            </span>
                            <span class="subSectionHeader">
                                Арт-хаус и авторское кино
                            </span>
                            <span>
                                | - Короткий метр (Арт-хаус и авторское кино)
                            </span>
                            <span>
                                | - Документальные фильмы (Арт-хаус и авторское кино)
                            </span>
                            <span>
                                | - Анимация (Арт-хаус и авторское кино)
                            </span>
                            <span class="subSectionHeader">
                                Театр
                            </span>
                            <span class="subSectionHeader">
                                DVD Video
                            </span>
                            <span>
                                | - Классика мирового кинематографа (DVD Video)
                            </span>
                            <span>
                                | - Зарубежное кино(DVD Video)
                            </span>
                            <span>
                                | - Наше кино(DVD Video)
                            </span>
                            <span>
                                | - Фильмы ближнего зарубежья (DVD Video)
                            </span>
                            <span>
                                | - Азиатские фильмы (DVD Video)
                            </span>
                            <span>
                                | - Арт-хаус и авторское кино(DVD Video)
                            </span>
                            <span>
                                | - Индийское кино (DVD Video)
                            </span>
                            <span>
                                | - Грайндхаус (DVD Video)
                            </span>
                            <span class="subSectionHeader">
                                HD Video
                            </span>
                            <span>
                                | - UHD Video
                            </span>
                            <span>
                                | - Классика мирового кинематографа (HD Video)
                            </span>
                            <span>
                                | - Зарубежное кино(HD Video)
                            </span>
                            <span>
                                | - Наше кино(HD Video)
                            </span>
                            <span>
                                | - Фильмы ближнего зарубежья (HD Video)
                            </span>
                            <span>
                                | - Азиатские фильмы (HD Video)
                            </span>
                            <span>
                                | - Арт-хаус и авторское кино(HD Video)
                            </span>
                            <span>
                                | - Индийское кино (HD Video)
                            </span>
                            <span>
                                | - Грайндхаус (HD Video)
                            </span>
                            <span class="subSectionHeader">
                                3D/Стерео кино, Видео, TV и Спорт
                            </span>
                            <span>
                                | - 3D Кинофильмы
                            </span>
                            <span>
                                | - 3D Мультфильмы
                            </span>
                            <span>
                                | - 3D Документальные фильмы
                            </span>
                            <span>
                                | - 3D Спорт
                            </span>
                            <span>
                                | - 3D ролики, Музыкалное видео, Трейлеры к фильмам
                            </span>
                            <span class="subSectionHeader">
                                Мультфильмы
                            </span>
                            <span>
                                | - Отечественные мультфильмы (HD Video)
                            </span>
                            <span>
                                | - Иностранные мультфильмы (HD Video)
                            </span>
                            <span>
                                | - Иностранные короткометражные мультфильмы (HD Video)
                            </span>
                            <span>
                                | - Отечественные мультфильмы (DVD)
                            </span>
                            <span>
                                | - Иностранные  мультфильмы (DVD)
                            </span>
                            <span>
                                | - Иностранные короткометражные мультфильмы (DVD)
                            </span>
                            <span>
                                | - Отечественные мультфильмы
                            </span>
                            <span>
                                | - Отечественные полнометражные мультфильмы
                            </span>
                            <span>
                                | - Иностранные мультфильмы
                            </span>
                            <span>
                                | - Иностранные короткометражные мультфильмы
                            </span>
                            <span>
                                | - Сбоники мультфильмов
                            </span>
                            <span class="subSectionHeader">
                                Мультсериалы
                            </span>
                            <span>
                                | - Мультсериалы (SD Video)
                            </span>
                            <span>
                                | - Мультсериалы (DVD Video)
                            </span>
                            <span>
                                | - Мультсериалы (HD Video)
                            </span>
                            <span class="subSectionHeader">
                                Аниме
                            </span>
                            <span>
                                | - Аниме (HD Video)
                            </span>
                            <span>
                                | - Аниме (DVD)
                            </span>
                            <span>
                                | - Аниме (основной подраздел)
                            </span>
                            <span>
                                | - Аниме (плеерный подраздел)
                            </span>
                            <span>
                                | - Аниме (QC раздел)
                            </span>
                            <span>
                                | - Ванпис
                            </span>
                            <span>
                                | - Гандам
                            </span>
                            <span>
                                | - Наруто
                            </span>
                            <span>
                                | - Покемоны
                            </span>
                            <span>
                                | - Японские мультфильмы
                            </span>
                            <span>
                                | - Звуковые дорожки (Аниме)
                            </span>
                            <span>
                                | - Артбуки и журналы (Аниме)
                            </span>
                            <span>
                                | - Обои, сканы, аватары, арт
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Сериалы
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Документалистика и юмор
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Спорт
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Книги и журналы
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Обучение иностранным языкам
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Обучающее видео
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Аудиокниги
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Авто и мото
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Музыка
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Популярная музыка
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Джазовая и Блюзовая музыка
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Рок-музыка
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Электронная музыка
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Hi-Res форматы, оцифровки
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Музыкальное видео
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Игры
                        </span>
                        <div class="subSection">
                            <span>
                                Generation.Torrent - Музыкальный конкурс
                            </span>
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Программы и Дизайн
                        </span>
                        <div class="subSection">
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Мобильные устройства
                        </span>
                        <div class="subSection">
                            <span class="subSectionHeader">
                                Rutracker Awards (мероприятия и конкурсы)
                            </span>
                            <span>
                                | - Конкурсы
                            </span>
                            <span>
                                | - Rutracker Awards (раздачи)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Apple
                        </span>
                        <div class="subSection">
                            <span class="subSectionHeader">
                                Apple Macintosh
                            </span>
                            <span>
                                | - Mac OS (для Macintosh)
                            </span>
                            <span>
                                | - Mac OS (для PC-Macintosh)
                            </span>
                            <span>
                                | - Программы для просмотра и обработки видео (MacOS)
                            </span>
                            <span>
                                | - Программы для создания и обработки графики (MacOS)
                            </span>
                            <span>
                                | - Плагины для программ компании Adobe (MacOS)
                            </span>
                            <span>
                                | - Аудио редакторы и конверторы (MacOS)
                            </span>
                            <span>
                                | - Системные программы (MacOS)
                            </span>
                            <span>
                                | - Офисные программы (MacOS)
                            </span>
                            <span>
                                | - Программы для интернета и сетей (MacOS)
                            </span>
                            <span>
                                | - Другие программы (MacOS)
                            </span>
                            <span class="subSectionHeader">
                                IOS
                            </span>
                            <span>
                                | - Программы для IOS
                            </span>
                            <span>
                                | - Игры для IOS
                            </span>
                            <span>
                                | - Разное для IOS
                            </span>
                            <span class="subSectionHeader">
                                Видео
                            </span>
                            <span>
                                | - Фильмы для iPod, iPhone, iPad
                            </span>
                            <span>
                                | - Сериалы для iPod, iPhone, iPad
                            </span>
                            <span>
                                | - Мультфильмы для iPod, iPhone, iPad
                            </span>
                            <span>
                                | - Аниме для iPod, iPhone, iPad
                            </span>
                            <span>
                                | - Музыкальное видео HD для iPod, iPhone, iPad
                            </span>
                            <span class="subSectionHeader">
                                Видео HD
                            </span>
                            <span>
                                | - Фильмы HD для Apple TV
                            </span>
                            <span>
                                | - Сериалы HD для Apple TV
                            </span>
                            <span>
                                | - Мультфильмы HD для Apple TV
                            </span>
                            <span>
                                | - Документальное видео HD для Apple TV
                            </span>
                            <span>
                                | - Музыкальное видео HD для Apple TV
                            </span>
                            <span class="subSectionHeader">
                                Аудио
                            </span>
                            <span>
                                | - Аудиокниги (AAC, ALAC)
                            </span>
                            <span>
                                | - Музыка lossless (ALAC)
                            </span>
                            <span>
                                | - Музыка Lossy (AAC-iTunes)
                            </span>
                            <span>
                                | - Музыка Lossy (AAC)
                            </span>
                            <span>
                                | - Музыка Lossy (AAC) (Singles, EPs)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Разное
                        </span>
                        <div class="subSection">
                            <span class="subSectionHeader">
                                Разное (раздачи)
                            </span>
                            <span>
                                | - Психоактивные аудиопрограммы
                            </span>
                            <span>
                                | - Аватары, Иконки, Смайлы
                            </span>
                            <span>
                                | - Живопись, графика, скульптура, digital art
                            </span>
                            <span>
                                | - Картинки
                            </span>
                            <span>
                                | - Любительские фотографии
                            </span>
                            <span>
                                | - Обои
                            </span>
                            <span>
                                | - Фото знаменитостей
                            </span>
                            <span>
                                | - Аудио
                            </span>
                            <span>
                                | - Музыка(Lossy)
                            </span>
                            <span>
                                | - Музыка(lossless)
                            </span>
                            <span>
                                | - Видео
                            </span>
                            <span>
                                | - Публикации и учебные материалы (тексты)
                            </span>
                            <span>
                                | - Трейлеры и дополнительные материалы к фильмам
                            </span>
                            <span>
                                | - Любительские видеоклипы
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Обсуждения, встречи, общение
                        </span>
                        <div class="subSection">
                            <span>
                                | - Отчеты о встречах
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Приватные форумы
                        </span>
                        <div class="subSection">
                            <span>
                                | - Классическая и современная академическая музыка
                            </span>
                            <span>
                                | - Рэп, Хип-хоп, R'n'B
                            </span>
                            <span>
                                | - Авторская песня, Шансон
                            </span>
                            <span>
                                | - Музыка разных жанров
                            </span>
                            <span>
                                | - Популярная музыка
                            </span>
                            <span>
                                | - Джазовая и блюзовая музыка
                            </span>
                            <span>
                                | - Рок, металл
                            </span>
                            <span>
                                | - Электронная музыка
                            </span>
                        </div>
                    </div>
                    <span>

                    </span>
                </div>
                <div class="sortBy">
                    <div class="sortByRowHeader">
                        <div>
                            <div class="sortByThem">
                                <span>
                                    Упорядочить по
                                </span>
                                <select v-model="sortBy">
                                    <option value="registered">зарегестрирован</option>
                                    <option value="nameOfTopic">название темы</option>
                                    <option value="countOfDownloads">количество скачиваний</option>
                                    <option value="countOfSeeds">количество сидов</option>
                                    <option value="countOfLeaches">количество личей</option>
                                    <option value="size">размер</option>
                                </select>
                            </div>
                            <div class="torrentFor">
                                <span>
                                    Торренты за
                                </span>
                                <select v-model="torrentsFor">
                                    <option value="allTime">за всё время</option>
                                    <option value="today">за сегодня</option>
                                    <option value="lastThreeDays">последние 3 дня</option>
                                    <option value="lastWeek">посл. неделю</option>
                                    <option value="lastTwoWeeks">посл. 2 недели</option>
                                    <option value="previousMonth">последний месяц</option>
                                </select>
                            </div>
                        </div>
                        <div class="showOnly">
                            Показывать только
                            <div>
                                <input type="checkbox" v-model="onlyOpenedDistributtions" />
                                <span>
                                    Только открытые раздачи 
                                </span>
                            </div>
                            <div>
                                <input type="checkbox" v-model="onlyOpenedDistributtions" />
                                <span>
                                    Новые с посл. посещения []
                                </span>
                            </div>
                            <div>
                                <input type="checkbox" v-model="onlyOpenedDistributtions" />
                                <span>
                                    Скрыть содержимое {...} 
                                </span>
                            </div>
                            <span>
                                Будущие закачки
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            Автор раздачи
                        </span>
                        <div>
                            <input type="text" />
                            <span>
                                Мои раздачи
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            Автор раздачи
                        </span>
                        <div>
                            <input type="text" />
                            <span>
                                Мои раздачи
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-light searchBtn">
                Поиск
            </button>
        </div>
        <div class="distributtionsList">
            <div class="distributtionsId">
                <span>
                    &nbsp;    
                </span>
                <!-- <div>
                    <img width="10px" src="https://static.t-ru.org/templates/v1/images/icon_minipost_new.gif" />
                </div>
                <div>
                    <img width="10px" src="https://static.t-ru.org/templates/v1/images/icon_minipost_new.gif" />
                </div>
                <div>
                    <img width="10px" src="https://static.t-ru.org/templates/v1/images/icon_minipost_new.gif" />
                </div>
                <div>
                    <img width="10px" src="https://static.t-ru.org/templates/v1/images/icon_minipost_new.gif" />
                </div>
                <div>
                    <img width="10px" src="https://static.t-ru.org/templates/v1/images/icon_minipost_new.gif" />
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <img width="10px" src="https://static.t-ru.org/templates/v1/images/icon_minipost_new.gif" />
                </div>
            </div>
            <div class="distributtionsCheck">
                <span>
                    &nbsp;
                </span>
                <!-- <div>
                    <span>
                        *
                    </span>
                </div>
                <div>
                    <span>
                        *
                    </span>
                </div>
                <div>
                    <span>
                        *
                    </span>
                </div>
                <div>
                    <span>
                        *
                    </span>
                </div>
                <div>
                    <span>
                        *
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <span>
                        *
                    </span>
                </div>
            </div>
            <div class="distributtionsForum">
                <span>
                    Форум
                </span>
                <!-- <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div>
                <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div>
                <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div>
                <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div>
                <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <span>
                        {{ distributtion.forum }}
                    </span>
                </div>
            </div>
            <div class="distributtionsTopic">
                <span>
                    Тема
                </span>
                <!-- <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div>
                <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div>
                <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div>
                <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div>
                <div>
                    <span>
                        Pop-Rock & Soft Rock (lossless)
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id" @click="$router.push({ name: 'Distribution', query: { distributtionid: distributtion._id } })">
                    <span>
                        {{ distributtion.theme }}
                    </span>
                </div>
            </div>
            <div class="distributtionsAuthor">
                <span>
                    Автор
                </span>
                <!-- <div>
                    <span>
                        Musicgate
                    </span>
                </div>
                <div>
                    <span>
                        Musicgate
                    </span>
                </div>
                <div>
                    <span>
                        Musicgate
                    </span>
                </div>
                <div>
                    <span>
                        Musicgate
                    </span>
                </div>
                <div>
                    <span>
                        Musicgate
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <span>
                        {{ distributtion.authorName }}
                    </span>
                </div>
            </div>
            <div class="distributtionsSize">
                <span>
                    Размер
                </span>
                <!-- <div>
                    <span>
                        8.53 GB ↓
                    </span>
                </div>
                <div>
                    <span>
                        8.53 GB ↓
                    </span>
                </div>
                <div>
                    <span>
                        8.53 GB ↓
                    </span>
                </div>
                <div>
                    <span>
                        8.53 GB ↓
                    </span>
                </div>
                <div>
                    <span>
                        8.53 GB ↓
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <span>
                        {{ distributtion.size }} GB ↓
                    </span>
                </div>
            </div>
            <div class="distributtionsSeeds">
                <span>
                    S
                </span>
                <!-- <div>
                    <span>
                        3
                    </span>
                </div>
                <div>
                    <span>
                        3
                    </span>
                </div>
                <div>
                    <span>
                        3
                    </span>
                </div>
                <div>
                    <span>
                        3
                    </span>
                </div>
                <div>
                    <span>
                        3
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <span>
                        {{ distributtion.seeds }}
                    </span>
                </div>
            </div>
            <div class="distributtionsLeaches">
                <span>
                    L
                </span>
                <!-- <div>
                    <span>
                        0
                    </span>
                </div>
                <div>
                    <span>
                        0
                    </span>
                </div>
                <div>
                    <span>
                        0
                    </span>
                </div>
                <div>
                    <span>
                        0
                    </span>
                </div>
                <div>
                    <span>
                        0
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <span>
                        {{ distributtion.leechs }}
                    </span>
                </div>
            </div>
            <div class="distributtionsDownloads">
                <span>
                    C
                </span>
                <!-- <div>
                    <span>
                        1
                    </span>
                </div>
                <div>
                    <span>
                        1
                    </span>
                </div>
                <div>
                    <span>
                        1
                    </span>
                </div>
                <div>
                    <span>
                        1
                    </span>
                </div>
                <div>
                    <span>
                        1
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <span>
                        {{ distributtion.downloaded }}
                    </span>
                </div>
            </div>
            <div class="distributtionsAdd">
                <span>
                    Добавлен
                </span>
                <!-- <div>
                    <span>
                        30-Окт-21 15:53
                    </span>
                </div>
                <div>
                    <span>
                        30-Окт-21 15:53
                    </span>
                </div>
                <div>
                    <span>
                        30-Окт-21 15:53
                    </span>
                </div>
                <div>
                    <span>
                        30-Окт-21 15:53
                    </span>
                </div>
                <div>
                    <span>
                        30-Окт-21 15:53
                    </span>
                </div> -->
                <div v-for="distributtion in distributtions" :key="distributtion._id">
                    <span>
                        {{ `${distributtion.added.split('T')[0].split('-')[2]}-${monthNames[distributtion.added.split('T')[0].split('-')[1]]}-${distributtion.added.split('T')[0].split('-')[0]} ${distributtion.added.split('T')[1].split(':')[0]}:${distributtion.added.split('T')[1].split(':')[1]}` }}
                    </span>
                </div>
            </div>
        </div>
        <div v-if="distributtions.length <= 0" class="notFound">
            <span>
                Не найдено
            </span>
        </div>
        <div class="distributtionsFooter">

        </div>
        <div class="pages">
            <span>
                Страница 1 из 10
            </span>
            <span class="pagination">
                Страницы:  1, 2, 3, 4, 5, 6, 7, 8, 9, 10  След
            </span>
        </div>
    </div>
    <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Search',
    data(){
        return {
            sortBy: 'registered',
            torrentsFor: 'allTime',
            onlyOpenedDistributtions: false, 
            distributtions: [],
            monthNames: {
                '1': 'Янв',
                '2': 'Фев',
                '3': 'Мар',
                '4': 'Апр',
                '5': 'Мая',
                '6': 'Июн',
                '7': 'Июл',
                '8': 'Авг',
                '9': 'Сен',
                '01': 'Янв',
                '02': 'Фев',
                '03': 'Мар',
                '04': 'Апр',
                '05': 'Мая',
                '06': 'Июн',
                '07': 'Июл',
                '08': 'Авг',
                '09': 'Сен',
                '10': 'Окт',
                '11': 'Ноя',
                '12': 'Дек',
            },
            token: window.localStorage.getItem("torrentiotoken")
        }
    },
    mounted(){
        jwt.verify(this.token, 'torrentiosecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: 'Home' })
            } else {
                fetch(`http://localhost:4000/api/torrenters/get/?torrenterid=${decoded.torrenter}`, {
                    mode: 'cors',
                    method: 'GET'
                }).then(response => response.body).then(rb  => {
                    const reader = rb.getReader()
                    return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    console.log('done', done);
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            })
                        }
                        push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                    if(JSON.parse(result).status.includes('OK')){
                        this.torrenter = JSON.parse(result).torrenter
                        
                        this.getDistributtions(this.$route.query.keywords)

                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Не удаётся получить торрентера')
                    }
                })
            }
        })
    },
    methods: {
        getDistributtions(keywords) {
            fetch(`http://localhost:4000/api/distributtions/all/`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    console.log('done', done);
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            })
                        }
                        push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                if(JSON.parse(result).status.includes('OK')){
                    this.distributtions = JSON.parse(result).distributtions
                    this.distributtions = this.distributtions.filter(distributtion => {
                        return distributtion.theme.toLowerCase().includes(keywords.toLowerCase())
                    })
                }
            })
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    .resultsInfo {
        display: flex;
        flex-direction: column;
        margin: 15px 0px;
    }

    .resultsInfoHeader {
        font-size: 24px;
    }
        
    .resultsInfoCountOfResults {
        font-weight: bolder;
    }

    .main {
        margin: auto;
        width: 98%;
    }

    .searchByDistributionsHeader {
        height: 35px;
        background-color: rgb(0, 100, 255);
        font-weight: bolder;
        color: rgb(100, 200, 255);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .searchByDistributions {
        display: flex;
        flex-direction: column;
    }

    .searchBtn {
        font-weight: bolder;
        border: 1px solid rgb(150, 150, 150);
        width: 125px;
        align-self: center;
    }

    .searchByDistributionsFilter {
        margin: 25px 0px;
        width: 75%;
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .goToSection, .sortBy {
        box-sizing: border-box;
        padding: 10px;
        margin: 15px;
        width: 50%;
        height: 350px;
        border: 1px solid rgb(150, 150, 150);
    }

    .goToSection {
        overflow-y: scroll;
    }

    .distributtionsId {
        display: flex;
        flex-direction: column;
        width: 2%;
    }
    
    .distributtionsCheck {
        display: flex;
        flex-direction: column;
        width: 2%;
    }

    .distributtionsForum {
        display: flex;
        flex-direction: column;
        width: 15%;
    }

    .distributtionsTopic {
        display: flex;
        flex-direction: column;
        width: 34%;
    }

    .distributtionsTopic > div > span {
        cursor: pointer;
    }

    .distributtionsAuthor {
        display: flex;
        flex-direction: column;
        width: 15%;
    }

    .distributtionsSize {
        display: flex;
        flex-direction: column;
        width: 10%;
    }

    .distributtionsSeeds {
        display: flex;
        flex-direction: column;
        width: 4%;
    }

    .distributtionsLeaches {
        display: flex;
        flex-direction: column;
        width: 4%;
    }

    .distributtionsDownloads {
        display: flex;
        flex-direction: column;
        width: 4%;
    }

    .distributtionsAdd {
        display: flex;
        flex-direction: column;
        width: 10%;
    }

    .distributtionsList {
        width: 100%;
        display: flex;
        margin: 30px 0px;
    }

    .distributtionsList > div > div {
        background-color: rgb(235, 235, 235);
        border: 1px solid rgb(215, 215, 215);
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .distributtionsList > div > span {
        background-color: rgb(200, 200, 200);
        border: 1px solid rgb(175, 175, 175);
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .distributtionsFooter {
        height: 50px;
        width: 100%;
        background-color: rgb(200, 200, 200);
    }

    .pages {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    .pagination {
        color: rgb(100, 100, 250);
        cursor: pointer;
        font-weight: bolder;
        font-size: 12px;
    }

    .distributtionsLeaches > div > span {
        color: rgb(215, 0, 0);
        font-weight: bolder;
    }

    .distributtionsSeeds > div > span {
        color: rgb(115, 150, 0);
        font-weight: bolder;
    }

    .distributtionsSize > div > span {
        color: rgb(0, 100, 150);
        font-weight: bolder;
    }

    .distributtionsAuthor > div > span, .distributtionsTopic > div > span, .distributtionsForum > div > span {
        color: rgb(0, 100, 150);
    }

    .sortByThem {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .torrentFor {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .sortByRowHeader {
        display: flex;
        justify-content: space-between;
    }

    .notFound {
        display: flex;
        justify-content: center;
    }

    .sections {
        display: flex;
        flex-direction: column;
    }

    .subSection {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
    }

    .sectionHeader {
        cursor: pointer;
        color: rgb(0, 0, 255);
        font-weight: bolder;
    }

    .subSectionHeader {
        cursor: pointer;
        font-weight: bolder;
    }

</style>