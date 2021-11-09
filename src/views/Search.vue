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
                            <span class="subSectionHeader">
                                Русские сериалы
                            </span>
                            <span>
                                | - Русские сериалы (HD Video)
                            </span>
                            <span>
                                | - Русские сериалы (DVD Video)
                            </span>
                            <span>
                                | - Возвращение Мухтара
                            </span>
                            <span>
                                | - Воронины
                            </span>
                            <span>
                                | - Чернобыль: Зона отчуждения
                            </span>
                            <span>
                                | - Кухня/ Отель Элеон
                            </span>
                            <span>
                                | - Универ/ Универ: Новая общага / СашаТаня
                            </span>
                            <span>
                                | - Ольга/ Физрук
                            </span>
                            <span>
                                | - След
                            </span>
                            <span>
                                | - Солдаты и пр.
                            </span>
                            <span>
                                | - Тайны следствия
                            </span>
                            <span class="subSectionHeader">
                                Зарубежные сериалы
                            </span>
                            <span>
                                | - Новинки и сериалы в стадии показа
                            </span>
                            <span>
                                | - Сериалы США и Канады
                            </span>
                            <span>
                                | - Сериалы Великобритании и Ирландии
                            </span>
                            <span>
                                | - Скандинавские сериалы
                            </span>
                            <span>
                                | - Испанские сериалы
                            </span>
                            <span>
                                | - Итальянские сериалы
                            </span>
                            <span>
                                | - Европейские сериалы
                            </span>
                            <span>
                                | - Сериалы стран Африки, Ближнего и Среднего Востока
                            </span>
                            <span>
                                | - Сериалы Австралии и Новой Зеландии
                            </span>
                            <span>
                                | - Сериалы Ближнего Зарубежья
                            </span>
                            <span>
                                | - Сериалы совместного производства нескольких стран
                            </span>
                            <span>
                                | - Веб-сериалы, Вебизоды к сериалам и Пилотные серии сериалов
                            </span>
                            <span>
                                | - Бесстыжие/ Shameless (US)
                            </span>
                            <span>
                                | - Викинги/ Vicings
                            </span>
                            <span>
                                | - Во все тяжкие/ Breaking Bad
                            </span>
                            <span>
                                | - Доктор Хаус/ Hose M. D.
                            </span>
                            <span>
                                | - Игра престолов/ Game of Thrones
                            </span>
                            <span>
                                | - Карточный домик/ House of Cards
                            </span>
                            <span>
                                | - Клан Сопрано/ The Sopranos
                            </span>
                            <span>
                                | - Сверхъестественное/ Supernatural
                            </span>
                            <span>
                                | - Секретные материалы/ The X-files
                            </span>
                            <span>
                                | - Твин пикс/ Twin Peaks
                            </span>
                            <span>
                                | - Теория взрыва + Детство Шелдона
                            </span>
                            <span>
                                | - Форс мажоры/ Костюмы в законе/ Suits
                            </span>
                            <span>
                                | - Ходячие мертвецы + Бойтесь ходячих мертвецоа
                            </span>
                            <span>
                                | - Черное зеркало/ Black Mirror
                            </span>
                            <span>
                                | - Для некондиционных раздач
                            </span>
                            <span class="subSectionHeader">
                                Сериалы Латинской Америки, Турции и Индии
                            </span>
                            <span>
                                | - Актёры и актрисы латиноамериканских сериалов
                            </span>
                            <span>
                                | - Сериалы Аргентины
                            </span>
                            <span>
                                | - Сериалы Бразилии
                            </span>
                            <span>
                                | - Сериалы Венесуэлы
                            </span>
                            <span>
                                | - Сериалы Индии
                            </span>
                            <span>
                                | - Сериалы Колумбии
                            </span>
                            <span>
                                | - Сериалы Латинской Америки с озвучкой (раздачи папками)
                            </span>
                            <span>
                                | - | - Сериалы Латинской Америки с субтитрами
                            </span>
                            <span>
                                | - Официальные краткие версии сериалов Латинской Америки
                            </span>
                            <span>
                                | - Сериалы Мексики
                            </span>
                            <span>
                                | - Сериалы Перу, Сальвадора, Чили и других стран
                            </span>
                            <span>
                                | - Сериалы совместного производства
                            </span>
                            <span>
                                | - Сериалы США (латиноамериканские)
                            </span>
                            <span>
                                | - Сериалы Турции
                            </span>
                            <span>
                                | - Для некондиционных раздач
                            </span>
                            <span class="subSectionHeader">
                                Азиатские Сериалы
                            </span>
                            <span>
                                | - Китайские Сериалы с субтитрами
                            </span>
                            <span>
                                | - Корейские Сериалы с озвучкой
                            </span>
                            <span>
                                | - Корейские Сериалы с субтитрами
                            </span>
                            <span>
                                | - Прочие азиатские сериалы с озвучкой
                            </span>
                            <span>
                                | - Тайваньские сериалы с субтитрами
                            </span>
                            <span>
                                | - Японские сериалы с субтитрами
                            </span>
                            <span>
                                | - Японские сериалы с озвучкой
                            </span>
                            <span>
                                | - VMV и др. ролики
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Документалистика и юмор
                        </span>
                        <div class="subSection">
                            <span class="subSectionHeader">
                                Вера и религия
                            </span>
                            <span>
                                | - [Видео религия] Христианство
                            </span>
                            <span>
                                | - [Видео религия] Ислам
                            </span>
                            <span>
                                | - [Видео религия] Религии Индии, Тибета и Восточной Азии
                            </span>
                            <span>
                                | - [Видео религия] Культы и новые религиозные движения
                            </span>
                            <span class="subSectionHeader">
                                Документальные фильмы и телепередачи
                            </span>
                            <span>
                                | - Документальные DVD
                            </span>
                            <span>
                                | - [Док] Биографии. Личности и кумиры
                            </span>
                            <span>
                                | - [Док] Кинематограф и мультипликация
                            </span>
                            <span>
                                | - [Док] Мастера искусств театра и кино
                            </span>
                            <span>
                                | - [Док] Искусство, истории искусств
                            </span>
                            <span>
                                | - [Док] Музыка
                            </span>
                            <span>
                                | - [Док] Криминальная документалистика
                            </span>
                            <span>
                                | - [Док] Тайны века/ Спецслужбы/ Теории заговоров
                            </span>
                            <span>
                                | - [Док] Военное дело
                            </span>
                            <span>
                                | - [Док] Вторая мировая война
                            </span>
                            <span>
                                | - [Док] Аварии/ Катастрофы/ Катаклизмы
                            </span>
                            <span>
                                | - [Док] Авиация
                            </span>
                            <span>
                                | - [Док] Космос
                            </span>
                            <span>
                                | - [Док] Научно-популярные фильмы
                            </span>
                            <span>
                                | - [Док] Флора и фауна
                            </span>
                            <span>
                                | - [Док] Путешествия и туризм
                            </span>
                            <span>
                                | - [Док] Медицина
                            </span>
                            <span>
                                | - [Док] Социальное ток-шоу
                            </span>
                            <span>
                                | - [Док] Информационно-аналитические и общественно-политические
                            </span>
                            <span>
                                | - [Док] Архитектура и строительство
                            </span>
                            <span>
                                | - [Док] Все о доме, быте и дизайне
                            </span>
                            <span>
                                | - [Док] ВВС
                            </span>
                            <span>
                                | - [Док] Discovery
                            </span>
                            <span>
                                | - [Док] National Geographic
                            </span>
                            <span>
                                | - [Док] История: Древний мир/ Античность/ Средневековье
                            </span>
                            <span>
                                | - [Док] История: Новое и Новейшее время
                            </span>
                            <span>
                                | - [Док] Эпоха СССР
                            </span>
                            <span>
                                | - [Док] Битва Экстрасенсов/ Теория невероятности/ Искатели/ Гали
                            </span>
                            <span>
                                | - [Док] Русские сенсации/ Программа максимум/ Профессия репортер
                            </span>
                            <span>
                                | - [Док] Паранормальные явления
                            </span>
                            <span>
                                | - [Док] Альтернативная история и наука
                            </span>
                            <span>
                                | - [Док] Внежанровая документалистика
                            </span>
                            <span>
                                | - [Док] Разное/ некондиция
                            </span>
                            <span class="subSectionHeader">
                                Документальные (HD Video)
                            </span>
                            <span>
                                | - Информационно-аналитические и общественно-политические
                            </span>
                            <span>
                                | - [Док] Биографии. Личности и кумиры
                            </span>
                            <span>
                                | - Биографии. Личности и кумиры (HD видео)
                            </span>
                            <span>
                                | - Военное дело (HD видео)
                            </span>
                            <span>
                                | - Естествознание, наука и техника (HD видео)
                            </span>
                            <span>
                                | - Путешествия и туризм (HD видео)
                            </span>
                            <span>
                                | - Флора и фауна (HD видео)
                            </span>
                            <span>
                                | - BBC, Discovery, National Geographic, History channel | - Документальнае криминалистика (HD видео)
                            </span>
                            <span>
                                | - Документальнае криминалистика (HD видео)
                            </span>
                            <span>
                                | - Некондиционное видео - Документальные (HD видео)
                            </span>
                            <span class="subSectionHeader">
                                | - [Видео юмор] Интелектуальные игры и викторины
                            </span>
                            <span>
                                | - [Видео юмор] Реалити и ток-шоу/ Номинации/ Показы
                            </span>
                            <span>
                                | - [Видео юмор] Детские телешоу
                            </span>
                            <span>
                                | - [Видео юмор] КВН
                            </span>
                            <span>
                                | - [Видео юмор] Пост КВН
                            </span>
                            <span>
                                | - [Видео юмор] Кривое зеркало/ Городок/ В городке
                            </span>
                            <span>
                                | - [Видео юмор] Ледовые шоу
                            </span>
                            <span>
                                | - [Видео юмор] Музыкальные шоу
                            </span>
                            <span>
                                | - [Видео юмор] Званный ужин
                            </span>
                            <span>
                                | - [Видео юмор] Хорошие шутки
                            </span>
                            <span>
                                | - [Видео юмор] Вечерний квартал
                            </span>
                            <span>
                                | - [Видео юмор] Фильмы со смешным переводом (пародии)
                            </span>
                            <span>
                                | - [Видео юмор] Stand-up comedy
                            </span>
                            <span>
                                | - [Видео юмор] Украинские шоу
                            </span>
                            <span>
                                | - [Видео юмор] Танцевальные шоу, концерты, выступления
                            </span>
                            <span>
                                | - [Видео юмор] Цирк
                            </span>
                            <span>
                                | - [Видео юмор] Школа злословия
                            </span>
                            <span>
                                | - [Видео юмор] Сатирики и юмористы
                            </span>
                            <span>
                                | - Юмористические аудиопередачи
                            </span>
                            <span>
                                | - Аудио и видео ролики (Приколы и Юмор)
                            </span>
                        </div>
                        <span class="sectionHeader">
                            Спорт
                        </span>
                        <div class="subSection">
                            <span class="subSectionHeader">
                                XXXII Летние Олимпийские игры 2020
                            </span>
                            <span>
                                | - Легкая атлетика
                            </span>
                            <span>
                                | - Плавание. Прыжки в воду. Синхронное плавание.
                            </span>
                            <span>
                                | - Спортивная гимнастика. Художественная гимнастика. Прыжки на батуте.
                            </span>
                            <span>
                                | - Велоспорт
                            </span>
                            <span>
                                | - Академическая гребля. Гребля на байдарках и каноэ
                            </span>
                            <span>
                                | - Бокс. Борьба Вольная и Греко-римская. Дзюдо. Каратэ. Кхэвондо
                            </span>
                            <span>
                                | - Футболл
                            </span>
                            <span>
                                | - Баскетболл . Воллейбол. Гандболл. Водное поло. Регби. Хоккей на траве
                            </span>
                            <span>
                                | - Теннис. Настольный теннис. Бадминтон
                            </span>
                            <span>
                                | - Фехтование. Стрельба. Стрельба из лука. Современное пятиборие.
                            </span>
                            <span>
                                | - Другие виды спортов.
                            </span>
                            <span>
                                | - Обзорные и аналитические программы.
                            </span>
                            <span class="subSectionHeader">
                                Зимние Олимпийские игры 2020
                            </span>
                            <span>
                                | - Биатлон
                            </span>
                            <span>
                                | - Лыжные горки.
                            </span>
                            <span>
                                | - Прыжки на лыжак с трамплина/ Лыжное двоеборие.
                            </span>
                            <span>
                                | - Горные прыжки/ Сноубординг/ Фристайл
                            </span>
                            <span>
                                | - Бобслэй/ Санный спорт/ Скелетон
                            </span>
                            <span>
                                | - Конькобежный спорт. Шорт-трэк
                            </span>
                            <span>
                                | - Фигурное катание
                            </span>
                            <span>
                                | - Хоккей
                            </span>
                            <span>
                                | - Керлинг
                            </span>
                            <span>
                                | - Обзорные и аналитические программы
                            </span>
                            <span class="subSectionHeader">
                                Спортивные турниры, фильмы и передачи
                            </span>
                            <span>
                                | - Автоспорт
                            </span>
                            <span>
                                | - Мотоспорт
                            </span>
                            <span>
                                | - Формула-1 (2021)
                            </span>
                            <span>
                                | - Формула-1 (2012 - 2020)
                            </span>
                            <span>
                                | - Формула-1 (до 2011 вкл.)
                            </span>
                            <span>
                                | - Велоспорт
                            </span>
                            <span>
                                | - Воллейбол/ Гандболл
                            </span>
                            <span>
                                | - Бильярд
                            </span>
                            <span>
                                | - Покер
                            </span>
                            <span>
                                | - Бодибилдинг/ Силовые виды спорта
                            </span>
                            <span>
                                | - Бокс
                            </span>
                            <span>
                                | - Класические единоборства
                            </span>
                            <span>
                                | - Смешанные единоборства
                            </span>
                            <span>
                                | - Американский футболл 
                            </span>
                            <span>
                                | - Рэгби
                            </span>
                            <span>
                                | - Бейсболл
                            </span>
                            <span>
                                | - Теннис
                            </span>
                            <span>
                                | - Бадминтон. Настольный теннис
                            </span>
                            <span>
                                | - Гимнастика/ Соревнования по танцам
                            </span>
                            <span>
                                | - Легкая атлетика/ Водные виды спорта
                            </span>
                            <span>
                                | - Зимние виды спорта
                            </span>
                            <span>
                                | - Фигурное катание
                            </span>
                            <span>
                                | - Биатлон
                            </span>
                            <span>
                                | - Экстрим
                            </span>
                            <span>
                                | - Спорт (Видео)
                            </span>
                            <span class="subSectionHeader">
                                Футболл
                            </span>
                            <span>
                                | - UHDTV
                            </span>
                            <span>
                                | - Чемпионат Европы 2020 [2021] (Финальный турнир)
                            </span>
                            <span>
                                | - Чемпионат Европы 2020 [2021] (отбор)
                            </span>
                            <span>
                                | - Лига наций
                            </span>
                            <span>
                                | - Чемпионат мира 2022 (отбор)
                            </span>
                            <span>
                                | - Чемпионат мира 2018 (игры)
                            </span>
                            <span>
                                | - Чемпионат мира 2018 (обзорные передачи, документалистика)
                            </span>
                            <span>
                                | - Чемпионаты мира
                            </span>
                            <span>
                                | - Россия 2021-2022
                            </span>
                            <span>
                                | - Россия 2020-2021
                            </span>
                            <span>
                                | - Россия/ СССР
                            </span>
                            <span>
                                | - Англия
                            </span>
                            <span>
                                | - Испания
                            </span>
                            <span>
                                | - Италия 
                            </span>
                            <span>
                                | - Германия
                            </span>
                            <span>
                                | - Франция
                            </span>
                            <span>
                                | - Украина
                            </span>
                            <span>
                                | - Другие национальные чемпионаты и кубки.
                            </span>
                            <span>
                                | - Международные турниры
                            </span>
                            <span>
                                | - Еврокубки 2021-2022
                            </span>
                            <span>
                                | - Еврокубки 2020-2021
                            </span>
                            <span>
                                | - Еврокубки 2011-2020
                            </span>
                            <span>
                                | - Еврокубки
                            </span>
                            <span>
                                | - Чемпионаты Европы
                            </span>
                            <span>
                                | - Товарищеские турниры и матчи
                            </span>
                            <span>
                                | - Обзорные и аналитические передачи 2018-2021
                            </span>
                            <span>
                                | - Обзорные и аналитические передачи
                            </span>
                            <span>
                                | - Документальные фильмы (футболл)
                            </span>
                            <span>
                                | - Мини футболл/ Пляжный футболл
                            </span>
                            <span class="subSectionHeader">
                                Баскетболл
                            </span>
                            <span>
                                | - Международные соревнования
                            </span>
                            <span>
                                | - NBA/ NCAA (до 2000 г.)
                            </span>
                            <span>
                                | - NBA/ NCAA (2000-2010 гг.)
                            </span>
                            <span>
                                | - NBA/ NCAA (2010-2022 гг.)
                            </span>
                            <span>
                                Европейский клубный баскетболл
                            </span>
                            <span class="subSectionHeader">
                                Хоккей
                            </span>
                            <span>
                                | - Хоккей с мячом/ Бенди
                            </span>
                            <span>
                                | - Чемпионат Мира по хоккею 2021
                            </span>
                            <span>
                                | - Международные турниры
                            </span>
                            <span>
                                | - КХЛ
                            </span>
                            <span>
                                | - НХЛ (до 2011/12)
                            </span>
                            <span>
                                | - НХЛ (с 2013)
                            </span>
                            <span>
                                | - СССР - Канада
                            </span>
                            <span>
                                | - Документальные фильмы и аналитика
                            </span>
                            <span class="subSectionHeader">
                                Рестлинг
                            </span>
                            <span>
                                | - Professional Wrestling
                            </span>
                            <span>
                                | -  Independent Wrestling
                            </span>
                            <span>
                                | - International Wrestling
                            </span>
                            <span>
                                | - Oldschool Wrestling
                            </span>
                            <span>
                                | - Documentary Wrestling
                            </span>
                            <span>
                                Для дооформления задач
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