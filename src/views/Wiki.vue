<template>
    <div>
        <WikiHeader />
        <div class="main">
            <div class="aside">
                <div class="asideItem">
                    <div @click="activeAsideItem = 'Представиться системе'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="loginLinkDescription linkDescription">
                            Войти
                        </span>
                    </div>
                </div>
                <div class="asideItem">
                    <span class="asideItemHeader">
                        Навигация
                    </span>
                    <hr />
                    <div @click="activeAsideItem = 'Заглавная страница'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Заглавная страница
                        </span>
                    </div>
                    <div @click="activeAsideItem = 'Справка'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Справка
                        </span>
                    </div>
                    <div @click="activeAsideItem = 'Свежие правки'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Свежие правки
                        </span>
                    </div>
                    <div @click="activeAsideItem = 'Как начать раздачу. Клиент µTorrent'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Случайная статья
                        </span>
                    </div>
                    <div @click="activeAsideItem = 'Все страницы'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Все статьи
                        </span>
                    </div>
                </div>
                <div class="asideItem">
                    <span class="asideItemHeader">
                        Инструменты
                    </span>
                    <hr />
                    <div @click="activeAsideItem = 'Ссылки сюда'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Ссылки сюда
                        </span>
                    </div>
                    <div @click="activeAsideItem = 'Связанные правки'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Связанные правки
                        </span>
                    </div>
                    <div @click="activeAsideItem = 'Спецстраницы'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Спецстраницы
                        </span>
                    </div>
                    <div @click="activeAsideItem = 'Версия для печати'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Версия для печати
                        </span>
                    </div>
                    <div @click="activeAsideItem = 'Постоянная ссылка'">
                        <span class="linkMarker material-icons">
                            keyboard_double_arrow_right
                        </span>
                        <span class="linkDescription">
                            Постоянная ссылка
                        </span>
                    </div>
                </div>
            </div>
            <div class="article">
                <h4 class="categoryHeader">
                    {{ activeAsideItem }}
                </h4>
                <div class="articleContent" v-if="activeAsideItem.includes('Заглавная страница')">
                    <span class="welcome">
                        Добро пожаловать на страницы 
                        <span class="welcomeRu">ru</span>
                        <span class="welcomeTracker">tracker</span>
                        <span class="welcomeStar material-icons">
                            star
                        </span>
                        <span class="welcomeWiki">wiki</span>
                        <span class="welcomeBang">!</span>
                    </span>
                    <span class="rules">
                        Здесь вы сможете найти правила, инструкции, ответы на часто задаваемые вопросы (FAQ), а также другую необходимую, полезную и интересную информацию. Мы делаем все возможное, чтобы поиск был быстрым и удобным, а сама информация - полной, актуальной и доступной для каждого пользователя.
                    </span>
                    <div class="rubric">
                        <span>
                            Правила rutracker.org
                        </span>
                    </div>
                    <div class="rubric">
                        <span>
                            Самый простой и безопасный способ получить доступ на Рутрекер
                        </span>
                    </div>
                    <div class="rubric">
                        <span>
                            Что делать, если вам заблокирован доступ на rutracker.org
                        </span>
                    </div>
                    <div class="theme">
                        <div class="themeHeader">
                            <span>
                                Общие и ознакомительные сведения
                            </span>
                        </div>
                        <div class="themeContent">
                            <span>
                                Что такое BitTorrent (БитТоррент-трекер, DHT и т.п.)
                            </span>
                            <span>
                                Терминология BitTorrent
                            </span>
                            <span>
                                Интернет-сленг
                            </span>
                            <span>
                                Кому задать вопрос?
                            </span>
                            <span>
                                Что делать, если вас обидели на форуме?
                            </span>
                            <span>
                                Как правильно писать на форуме! (кириллица, транслит, раскладка клавиатуры)
                            </span>
                            <span>
                                Что такое BBCode?
                            </span>
                            <span>
                                Лычки, звания и прочая атрибутика на Rutracker.org
                            </span>
                        </div>
                    </div>
                    <div class="theme">
                        <div class="themeHeader">
                            <span>
                                FAQ'и и Инструкции
                            </span>
                        </div>
                        <div class="themeContent">
                            <span>
                                Создание и оформление раздач
                            </span>
                            <span>
                                Сборник видеоуроков "Учимся работать с торрентами" для новичков
                            </span>
                            <span>
                                Как залить картинку на бесплатный хост
                            </span>
                            <span>
                                Как сделать скриншот
                            </span>
                            <span>
                                Как тут качать? С чего начать? ( Информация для новичков )
                            </span>
                            <span>
                                Как докачать пропущенные файлы торрента?
                            </span>
                            <span>
                                Как скачать отдельный файл из раздачи?
                            </span>
                            <span>
                                Выбор торрент-клиента
                            </span>
                            <span>
                                Несовместимые и нерекомендуемые торрент-клиенты на rutracker.org
                            </span>
                            <span>
                                Как пользоваться поиском по форуму и трекеру
                            </span>
                            <span>
                                FAQ по общим вопросам по форуму и трекеру
                            </span>
                            <span>
                                FAQ по учёту статистики
                            </span>
                            <span>
                                FAQ по скорости скачивания и отдачи
                            </span>
                            <span>
                                Хеш-сумма и магнет-ссылки
                            </span>
                        </div>
                    </div>
                    <div class="theme">
                        <div class="themeHeader">
                            <span>
                                Прочие страницы WIKI
                            </span>
                        </div>
                        <div class="themeContent">
                            <span>
                                Инструкции, руководства, обзоры в музыкальных категориях форума
                            </span>
                            <span>
                                BitTorrent клиенты
                            </span>
                            <span>
                                Настройки роутеров и файерволлов
                            </span>
                            <span>
                                Проблемы с компьютерами и их решения
                            </span>
                            <span>
                                Каталоги раздач rutracker.org
                            </span>
                            <span>
                                FAQ по деятельности правообладателей
                            </span>
                            <span>
                                Что конкретно хранится на трекере/форуме? ( Вопрос о безопасности )
                            </span>
                            <span>
                                Информация по локальному ретрекеру http://retracker.local
                            </span>
                            <span>
                                Vnimanie.gif Вопросы, обсуждение, предложения по wiki - здесь. Vnimanie.gif
                            </span>
                        </div>
                    </div>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Справка')">
                    <span>
                        (перенаправлено с «
                        <span class="helpLink">
                            Справка:Справка
                        </span>
                        »)
                    </span>
                    <span>
                        <span class="helpHeader">
                            Содержание
                        </span>
                         [
                        <span class="helpLink">
                            убрать
                        </span>
                            ] 
                    </span>
                    <span class="helpLink">
                        1 Редактирование
                    </span>
                    <span class="helpLink">
                        2 Инструменты
                    </span>
                    <span class="helpLink">
                        3 Конверторы
                    </span>
                    <span class="helpLink">
                        4 Прочее
                    </span>
                    <span class="helpHeader">
                        Редактирование
                    </span>
                    <hr/>
                    <span class="helpLink">
                        Как править статьи
                    </span>
                    <hr />
                    <span class="helpLink">
                        Размещение изображений на страницах статей
                    </span>
                    <hr />
                    <span class="helpLink">
                        Как делать таблицы
                    </span>
                    <hr />
                    <span class="helpLink">
                        Переменные
                    </span>
                    <hr />
                    <span>
                        {{ "Спойлеры: \{\{\#tag\:spoiler\|Скрытое сообщение\}\}" }}
                    </span>
                    <span>
                        Скрытый текст
                    </span>
                    <span>
                        {{ "Спойлеры с названием: \{\{\#tag\:spoiler\|Скрытое сообщение\|text=Название спойлера\}\}" }}
                    </span>
                    <span>
                        Название спойлера
                    </span>
                    <span>
                        {{ "Спойлеры можно вкладывать друг в друга. \{\{\#tag:spoiler\|Скрытое сообщение \{\{\#tag:spoiler|Вложенное скрытое сообщение\|text=Вложенный спойлер\}\} продолжение...\|text=Название спойлера\}\}" }}
                    </span>
                    <span>
                        Название спойлера
                    </span>
                    <span>
                        Альтернативный вариант (не рекомендуется для создания вложенных спойлеров): <spoiler>Скрытое сообщение</spoiler> или <spoiler text="Название спойлера">Скрытое сообщение</spoiler>
                    </span>
                    <span class="helpHeader">
                        Инструменты
                    </span>
                    <hr/>
                    <span class="helpLink">
                        wikEd (русского пока нет)
                    </span>
                    <span>
                        Поддерживается: Mozilla, Firefox, SeaMonkey, Safari, Chrome.
                    </span>
                    <span>
                        Для Firefox:
                    </span>
                    <span>
                        Устанавливаем дополнение 
                        <span class="helpLink">
                            Greasemonkey
                        </span>
                         и перезапускаем Firefox.
                    </span>
                    <span>
                        Открываем этот файл и соглашаемся на установку: 
                        <span class="helpLink">
                            wikEd
                        </span>
                    </span>
                    <span>
                        При редактировании статьи в правом верхнем углу появится значок со стрелкой. Нажав на него, откроется панель инструментов.
                    </span>
                    <span class="helpHeader">
                        Конверторы
                    </span>
                    <hr/>
                    <span class="helpLink">
                        HTML-to-wiki конвертер
                    </span>
                    <span>
                        Указываем пункт Wiki dialect = mediawiki
                    </span>
                    <span>
                        Ставим галочку Escape HTML entities
                    </span>
                    <hr/>
                    <span class="helpLink">
                        Wikipedia and Google Code Converter
                    </span>
                    <hr/>
                    <span class="helpLink">
                        HTML to Wiki syntax converter
                    </span>
                    <hr/>
                    <span class="helpLink">
                        HTML to Wiki конвертер - таблицы
                    </span>
                    <hr/>
                    <span class="helpLink">
                        HTML to Wiki Converter
                    </span>
                    <hr/>
                    <span class="helpLink">
                        CSV Converter
                    </span>
                    <span class="helpHeader">
                        Прочее
                    </span>
                    <hr/>
                    <span class="helpLink">
                        Основы html и css 
                    </span>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Свежие правки')">
                    <span>
                        Ниже в хронологическом порядке перечислены последние изменения на страницах WikiTorrents.
                    </span>
                    <span>
                        Настройки свежих правок
                    </span>
                    <span>
                        Легенда:
                    </span>
                    <span>
                        Н
                    </span>
                    <span>
                        Этой правкой была создана новая страница. (см. также список новых страниц)
                    </span>
                    <span>
                        м
                    </span>
                    <span>
                        Это незначительное изменение
                    </span>
                    <span>
                        б
                    </span>
                    <span>
                        Эта правка сделана ботом
                    </span>
                    <span>
                        (±123)
                    </span>
                    <span>
                        Размер страницы изменился на данное количество байт
                    </span>
                    <span>
                        Показать последние 50 | 100 | 250 | 500 изменений за 1 | 3 | 7 | 14 | 30 дней
                    </span>
                    <span>
                        Скрыть малые правки | Показать ботов | Скрыть непредставившихся | Скрыть представившихся участников | Скрыть свои правки | Скрыть проверенные правки
                    </span>
                    <span>
                        Показать изменения с 08:08, 5 ноября 2021.
                    </span>
                    <span>
                        Пространство имён:
                    </span>
                    <span>
                        Обратить выбранное  Связанное пространство
                    </span>
                    <span>
                        Изменений в указанный период, соответствующих указанным условиям, нет.
                    </span>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Как начать раздачу. Клиент µTorrent')">
                    <span>
                        Как начать раздачу. Клиент µTorrent
                    </span>
                    <span>
                        Как начать раздачу (на примере клиента µTorrent 1.8.2)
                    </span>
                    <span>
                        Содержание [убрать] 
                    </span>
                    <span>
                            1 Шаг 1.
                    </span>
                    <span>
                        2 Шаг 2.
                    </span>
                    <span>
                            3 Шаг 3 и 4.
                    </span>
                    <span>
                            4 Шаг 5.
                    </span>
                    <span>
                            5 Шаг 6.
                    </span>
                    <span>
                            6 Шаг 7.
                    </span>
                    <span>
                            7 Шаг 8.
                    </span>
                    <span>
                            8 Шаг 9.
                    </span>
                    <span>
                            9 Шаг 10.
                    </span>
                    <span>
                            10 Шаг 11.
                    </span>
                    <span>
                            11 Шаг 12.
                    </span>
                    <span>
                        Шаг 1. TinyURLВнутренняя ссылка
                    </span>
                    <span>
                        Шаг 1.
                    </span>
                    <span>
                        Когда раздача оформлена, заполнены все необходимые поля, добавлен торрент-файл - нажимаем клавишу «Отправить».
                    </span>
                    <span>
                        Postanovka na razdachy1.jpg
                    </span>
                    <span>
                        Шаг 2. TinyURLВнутренняя ссылка
                    </span>
                    <span>    
                        Шаг 2.
                    </span>
                    <span>
                        И появляется вот такое окно→
                    </span>
                    <span>
                        Postanovka na razdachy 2.jpg
                    </span>
                    <span>
                        Теперь скачиваем торрент-файл.
                    </span>
                    <span>
                        Шаг 3 и 4.
                    </span>
                    <span>
                        Для сохранения торрент-файлов, необходимых для постановки на раздачу, рекомендуется создать на HDD отдельную папку. Называем торрент-файл как Вам удобно и сохраняем его.
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 3.png
                    </span>
                    <span>
                        Шаг 5.
                    </span>
                    <span>
                        Открываем в клиенте торрент-файл, скачанный с трекера. Обратите свое внимание, что этот торрент отличается от того, который был залит на трекер. К нему добавился пасскей, по которому Вас будет узнавать трекер.
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 4.png
                    </span>
                    <span>
                        Примечание: Если при создании торрента Вы поставили галку на Запустить раздачу - появится предложение добавить трекеры в список - соглашайтесь. После этого можно перейти сразу к Шагу 10. Возможно потребуется запустить раздачу, если она остановлена.
                    </span>
                    <span>
                        Шаг 6.
                    </span>
                    <span>
                        Затем нажимаем на «открыть папку», чтобы указать путь к раздаваемому файлу.
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 5.png
                    </span>
                    <span>
                        Если это окно не отображается
                    </span>
                    <span>
                        Шаг 7.
                    </span>
                    <span>
                        Вот здесь главное не ошибиться. В этом окне указываем путь к файлу / папке с которого был сделан торрент.
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 6.png
                    </span>
                    <span>
                        Шаг 8.
                    </span>
                    <span>
                        Выбираем его (в нашем случае файл, но например может быть папка, если раздается несколько файлов). Нажимаем сохранить.
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 7.png
                    </span>
                    <span>
                        Примечание!
                    </span>
                    <span>
                        Внимание! Указание пути для раздачи папкой в версиях uTorrent 3.x
                    </span>
                    <span>
                        Шаг 9.
                    </span>
                    <span>
                        Далее ставите галку на «Запустить торрент». Обратите внимание на отсутствие галки в графе «Не проверять хэш». После чего нажимаете ОК.
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 8.png
                    </span>
                    <span>
                        Шаг 10.
                    </span>
                    <span>
                        Если всё сделали правильно, после того как хэш проверится, увидите следующее:
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 9.png
                    </span>
                    <span>
                        Шаг 11.
                    </span>
                    <span>
                        Если у вас есть ограничения на количество активных торрентов и закачек, то: правой кнопкой мыши, щелкаем на загруженном файле и нажимаем «Запустить принудительно» (это старт задания, при котором игнорируются лимиты на максимальное количество активных торрентов и закачек в настройках клиента, на вкладке «Очерёдность». Более подробно можно прочитать тут )
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 10.png
                    </span>
                    <span>
                        Если все получилось, то в клиенте будет отображаться стрелочка зеленого цвета направленная вверх, рядом будет надпись «Раздается / [П] Раздается».
                    </span>
                    <span>
                        Postanovka na razdachy utorrent 11.png
                    </span>
                    <span>
                        Шаг 12.
                    </span>
                    <span>
                        После всего выше сказаного Вы должны оказаться в сидах на трекере. Проверить это легко: Вы должны зайти на форум и в своей теме увидеть Сиды: 1 и свою раздачу в своем профиле среди сидируемых раздач.
                    </span>
                    <span>
                        Внимание:
                    </span>
                    <span>
                        Если в профиле раздачи нет, а в клиенте статус Раздаётся - проверьте статус трекера.
                    </span>
                    <span>
                        Где посмотреть статус трекера
                    </span>
                    <span>
                        Если статус отличается от Работает, ищите эту ошибку там - http://rutracker.wiki/Ошибки_µTorrent
                    </span>
                    <span>
                        Примечание: Если адрес трекера не bt*.t-ru.org, а bt*.rutracker.cc - не пугайтесь, это старый адрес нашего трекера, но тем не менее он все еще работает и статистика по нему учитывается.
                    </span>
                    <span>
                        Вернуться. 
                    </span>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Свежие правки')">
                    <span>
                        Ниже в хронологическом порядке перечислены последние изменения на страницах WikiTorrents.
                    </span>
                    <span>
                        Настройки свежих правок
                    </span>
                    <span>
                        Легенда:
                    </span>
                    <span>
                        Н
                    </span>
                    <span>
                        Этой правкой была создана новая страница. (см. также список новых страниц)
                    </span>
                    <span>
                        м
                    </span>
                    <span>
                        Это незначительное изменение
                    </span>
                    <span>
                        б
                    </span>
                    <span>
                        Эта правка сделана ботом
                    </span>
                    <span>
                        (±123)
                    </span>
                    <span>
                        Размер страницы изменился на данное количество байт
                    </span>
                    <span>
                        Показать последние 50 | 100 | 250 | 500 изменений за 1 | 3 | 7 | 14 | 30 дней
                    </span>
                    <span>
                        Скрыть малые правки | Показать ботов | Скрыть непредставившихся | Скрыть представившихся участников | Скрыть свои правки | Скрыть проверенные правки
                    </span>
                    <span>
                        Показать изменения с 08:08, 5 ноября 2021.
                    </span>
                    <span>
                        Пространство имён:
                    </span>
                    <span>
                        Обратить выбранное  Связанное пространство
                    </span>
                    <span>
                        Изменений в указанный период, соответствующих указанным условиям, нет.
                    </span>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Все страницы')">
                    <button class="allPagesBtn btn btn-light">
                        Все страницы
                    </button>
                    <div class="allPagesItemInput">
                        <span>
                            Вывести страницы, начинающиеся на:		
                        </span>
                        <input type="text" v-model="printPagesStartsWith">
                    </div>
                    <div class="allPagesItemInput">
                        <span>
                            Остановить вывод на:		
                        </span>
                        <input type="text" v-model="printPagesStartsWith">
                    </div>
                    <div class="allPagesItemInput">
                        <span>
                            Пространство имён:	
                        </span>
                        <select class="form-select h-100 w-25" aria-label="Default select example">
                            <option value="основное">основное</option>
                            <option value="обсуждение">обсуждение</option>
                            <option value="Участник">Участник</option>
                            <option value="Обсуждение участника">Обсуждение участника</option>
                            <option value="Обсуждение Wiki torrents">Обсуждение Wiki torrents</option>
                            <option value="Wiki torrents">Wiki torrents</option>
                            <option value="Файл">Файл</option>
                            <option value="Обсуждение файла">Обсуждение файла</option>
                            <option value="Mediawiki">Mediawiki</option>
                            <option value="Обсуждение Mediawiki">Обсуждение Mediawiki</option>
                            <option value="Шаблон">Шаблон</option>
                            <option value="Обсуждение шаблона">Обсуждение шаблона</option>
                            <option value="Справка">Справка</option>
                            <option value="Справка">Обсуждение справки</option>
                            <option value="Категория">Категория</option>
                            <option value="Обсуждение категории">Обсуждение категории</option>
                        </select>
                        <input type="checkbox" v-model="hideRedirections">
                        <button @click="run()" class="allPagesBtn btn btn-light h-100">
                            Выполнить
                        </button>
                    </div>
                    <div class="links">
                        <div class="linksItem">
                            <span>
                                Azureus
                            </span>
                            <span>
                                BitComet
                            </span>
                            <span>
                                BitTornado
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                BitTorrent (программа)
                            </span>
                            <span>
                                BitTorrent клиенты
                            </span>
                            <span>
                                Bittorrent/ПортBittorrent/Термины
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                FAQ по Настройкам BIOS Setup
                            </span>
                            <span>
                                FAQ по деятельности правообладателей
                            </span>
                            <span>
                                FAQ по красным стрелкам или ошибкам в статусе трекера в клиенте
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                FAQ по общим вопросам по форуму и трекеру
                            </span>
                            <span>
                                FAQ по рейтингу и учету статистики
                            </span>
                            <span>
                                FAQ по решению распространенных программных и аппаратных проблем
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                FAQ по скорости скачивания и отдачи
                            </span>
                            <span>
                                FAQ по учёту статистики
                            </span>
                            <span>
                                Flash Release (Программа для быстрого оформления раздач)
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                HijackThis
                            </span>
                            <span>
                                KTorrentMTorrent
                            </span>
                            <span>
                                Net-Worm/Kido
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Old
                            </span>
                            <span>
                                Заглавная страница
                            </span>
                            <span>
                                Peenemunde Project
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                PeerQRATOR HTTP 502
                            </span>
                            <span>
                                R Torrent
                            </span>
                            <span>
                                Retracker.local
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Rutracker
                            </span>
                            <span>
                                ProxyTrojan/Winlock
                            </span>
                            <span>
                                USB флешки
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                UTorrent
                            </span>
                            <span>
                                ΜTorrent
                            </span>
                            <span>
                                ΜTorrent и переустановленный Windows
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Анализ дампа памяти при BSOD или синих экранахБезопасность в интернете
                            </span>
                            <span>
                                Битторрент-сленг и интернет-сленг
                            </span>
                            <span>
                                Виды угроз и атак
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Вопрос о безопасности
                            </span>
                            <span>
                                Выбор торрент-клиента
                            </span>
                            <span>
                                Группа технической помощи
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Дополнительная проверка
                            </span>
                            <span>
                                Если твой компьютер не включился
                            </span>
                            <span>
                                Заглавная
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Заглавная страница
                            </span>
                            <span>
                                Заказ и закачка файлов через FilePost
                            </span>
                            <span>
                                Изменение порядка букв физических и логических дисковИнструкции, руководства, обзоры в музыкальных категориях форума
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Инструкция по отслеживанию обновления раздач
                            </span>
                            <span>
                                Интернет-сленг
                            </span>
                            <span>
                                Как включить Opera Turbo
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Как включить куки и JavaScript?
                            </span>
                            <span>
                                Как докачать пропущенные файлы торрента
                            </span>
                            <span>
                                Как залить картинку на бесплатный хост	Как защитить Ваш компьютер	Как найти информацию о фильме?Как начать раздачу. Клиент BitComet	Как начать раздачу. Клиент BitSpirit	Как начать раздачу. Клиент VuzeКак начать раздачу. Клиент µTorrent	Как отключить торрент-клиент в Opera	Как перезалить торрент-файл.Как подключиться к VPN Gate	Как поднять рейтинг?	Как получить информацию по видеофайлу?Как пользоваться поиском	Как правильно писать на форуме	Как присоединиться к раздачеКак работать с образами дисков	Как сделать скриншот	Как сделать скриншот игрыКак сделать скриншот книги	Как скачать отдельный файл	Как стать модератором rutracker.org?Как тут качать? С чего начать?	Как удалить с диска неиспользуемые торренты	Карт ридерыКаталог раздач учебной и методической литературы (школьная программа)	Каталоги раздач rutracker.org	Категория "Музыкальное видео"Категория «Apple»	Категория «Hi-Res форматы, оцифровки»	Категория «Авто и мото»Категория «Аудиокниги»	Категория «Вопросы по форуму и трекеру»	Категория «Все по авто и мото»Категория «Джазовая и Блюзовая музыка»	Категория «Документалистика и юмор»	Категория «Игры»Категория «Кино Видео и ТВ»	Категория «Книги и журналы»	Категория «Медицина и здоровье»Категория «Мобильные устройства»	Категория «Музыка»	Категория «Музыкальное видео»Категория «Новости»	Категория «ОБХОД БЛОКИРОВКИ»	Категория «Обсуждения встречи общение»Категория «Обучающее видео»	Категория «Обучение иностранным языкам»	Категория «Популярная музыка»Категория «Программы и Дизайн»	Категория «Разное»	Категория «Рок-музыка»Категория «Сериалы»	Категория «Спорт»	Категория «Электронная музыка»Клавиатуры	Классификация ноутбуков	Коврики для мышиКому задать вопрос?	Логотипы Rutracker.org	Ложные антивирусы
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Лычки и звания на rutracker.org	Маршрутизатор	Модератор
                            </span>
                            <span>
                                Мышки	НЕ МОГУ СКАЧАТЬ ТОРРЕНТ-ФАЙЛ	Настройка Google Chrome
                            </span>
                            <span>
                                Настройка клиента µtorrent	Настройка торрент-клиента на работу через Tor	Настройки роутеров и файерволлов
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Несовместимые и нерекомендуемые торрент-клиенты на rutracker.org	Обозначение качества видео	Обозначения переводов
                            </span>
                            <span>
                                Опрос (голосование) в теме	Оптимизация обмена битторрент траффиком в локальных сетях	Основные правила безопасной работы на компьютере
                            </span>
                            <span>
                                Отключение автозапуска для защиты от вредоносного ПО	Очистка кэша и удаление файлов cookie	Ошибка µTorrent 1
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Ошибка µTorrent 10	Ошибка µTorrent 11	Ошибка µTorrent 12
                            </span>
                            <span>
                                Ошибка µTorrent 13	Ошибка µTorrent 14	Ошибка µTorrent 15
                            </span>
                            <span>
                                Ошибка µTorrent 16	Ошибка µTorrent 17	Ошибка µTorrent 18
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Ошибка µTorrent 19	Ошибка µTorrent 2	Ошибка µTorrent 20
                            </span>
                            <span>
                                Ошибка µTorrent 21	Ошибка µTorrent 3	Ошибка µTorrent 4
                            </span>
                            <span>
                                Ошибка µTorrent 5	Ошибка µTorrent 6	Ошибка µTorrent 7
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Ошибка µTorrent 8	Ошибка µTorrent 9	Ошибки µTorrent
                            </span>
                            <span>
                                Паддинги	Перезагружается компьютер	Перемещение скачанных файлов в µTorrent
                            </span>
                            <span>
                                Пир
                                    Подключение внешней звуковой дорожки в VLC	Помощь в решении проблем с оптическими приводами CD-ROM (CD, DVD, Blu-ray)
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Порт	Порт/Firewall	Порт/Forwarding
                            </span>
                            <span>
                                Порт/NAT	Порт/Router	Порт/UPnP
                            </span>
                            <span>
                                Пошаговая инструкция по установке DNSCrypt в Windows	Пошаговая инструкция по установке Privoxy в Windows	Пошаговая инструкция по установке Tor Browser в Windows
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Пошаговая инструкция по установке Tor в Windows	Правила	Правила оформления раздач в категории «Apple»
                            </span>
                            <span>
                                Правила оформления раздач в категории «Аудиокниги»	Правила оформления раздач в категории «Все по авто и мото»	Правила оформления раздач в категории «Документалистика и юмор»
                            </span>
                            <span>
                                Правила оформления раздач в категории «Игры»	Правила оформления раздач в категории «Кино Видео и ТВ»	Правила оформления раздач в категории «Книги и журналы»
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Правила оформления раздач в категории «Медицина и здоровье»	Правила оформления раздач в категории «Мобильные устройства»	Правила оформления раздач в категории «Музыка»
                            </span>
                            <span>
                                Правила оформления раздач в категории «Обучающее видео»	Правила оформления раздач в категории «Обучение иностранным языкам»	Правила оформления раздач в категории «Программы и Дизайн»
                            </span>
                            <span>
                                Правила оформления раздач в категории «Разное»	Правила оформления раздач в категории «Рок-музыка»	Правила оформления раздач в категории «Сериалы»
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Правила оформления раздач в категории «Спорт»	Правила оформления раздач в категории «Электронная музыка»	Причины бана за читерство.
                            </span>
                            <span>
                                Проблемы с компьютерами и их решения	Путеводитель по литературе ЕГЭ и ГИА на трекере (Каталог)	Работа с Tor в Chrome, Firefox, Opera-12 и uTorrent
                            </span>
                            <span>
                                Работа с файлом HOSTS	Разрешенные логотипы	Рекомендуемые и нерекомендуемые антивирусные продукты
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Ретрекер
                            </span>
                            <span>
                                Руководство по оформлению раздач в разделе «Аниме»	Сборник видеоуроков
                            </span>
                            <span>
                                Сервис - Мой рутрекер	Сервис недоступен 503	Создание/редактирование статей на wiki
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Создание и оформление раздач	Создание торрента при помощи Azureus (Mac-OS)	Создание торрента при помощи BitComet
                            </span>
                            <span>
                                Создание торрента при помощи BitRocket (Mac-OS)	Создание торрента при помощи BitSpirit	Создание торрента при помощи Torrent Builder
                            </span>
                            <span>
                                Создание торрента при помощи Transmission (Mac-OS)	Создание торрента при помощи Vuze (Azureus)	Создание торрента при помощи uTorrent
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Соучастник
                            </span>
                            <span>
                                Список "проблемных" модемов и маршрутизаторов	Сравнение скриншотов
                            </span>
                            <span>
                                Тестирование компьютера	Универсальный tcpip.sys патч	Ускорение процесса оформления раздач. Описание шаблона с примерами.
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Флеш карты	Фрилич	Хеш-сумма и магнет-ссылки
                            </span>
                            <span>
                                ЧАДО по рейтингу	Что будет, если рейтинг упадёт Или Важная Информация Для Новичков	Что делать, если вам заблокирован доступ на rutracker.org
                            </span>
                            <span>
                                Что делать, если вам заблокируют/заблокирован доступ на rutracker.org
                            </span>
                        </div>
                        <div class="linksItem">
                            <span>
                                Что делать если вас обидели	Что такое BBCode?
                            </span>
                            <span>
                                Что такое BitTorrent (БитТоррент)	Что такое ISBN / ISSN	Что такое Passkey и способы его замены
                            </span>
                        </div>
                    </div>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Свежие правки')">
                    <span>
                        Ниже в хронологическом порядке перечислены последние изменения на страницах WikiTorrents.
                    </span>
                    <span>
                        Настройки свежих правок
                    </span>
                    <span>
                        Легенда:
                    </span>
                    <span>
                        Н
                    </span>
                    <span>
                        Этой правкой была создана новая страница. (см. также список новых страниц)
                    </span>
                    <span>
                        м
                    </span>
                    <span>
                        Это незначительное изменение
                    </span>
                    <span>
                        б
                    </span>
                    <span>
                        Эта правка сделана ботом
                    </span>
                    <span>
                        (±123)
                    </span>
                    <span>
                        Размер страницы изменился на данное количество байт
                    </span>
                    <span>
                        Показать последние 50 | 100 | 250 | 500 изменений за 1 | 3 | 7 | 14 | 30 дней
                    </span>
                    <span>
                        Скрыть малые правки | Показать ботов | Скрыть непредставившихся | Скрыть представившихся участников | Скрыть свои правки | Скрыть проверенные правки
                    </span>
                    <span>
                        Показать изменения с 08:08, 5 ноября 2021.
                    </span>
                    <span>
                        Пространство имён:
                    </span>
                    <span>
                        Обратить выбранное  Связанное пространство
                    </span>
                    <span>
                        Изменений в указанный период, соответствующих указанным условиям, нет.
                    </span>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Свежие правки')">
                    <span>
                        Ниже в хронологическом порядке перечислены последние изменения на страницах WikiTorrents.
                    </span>
                    <span>
                        Настройки свежих правок
                    </span>
                    <span>
                        Легенда:
                    </span>
                    <span>
                        Н
                    </span>
                    <span>
                        Этой правкой была создана новая страница. (см. также список новых страниц)
                    </span>
                    <span>
                        м
                    </span>
                    <span>
                        Это незначительное изменение
                    </span>
                    <span>
                        б
                    </span>
                    <span>
                        Эта правка сделана ботом
                    </span>
                    <span>
                        (±123)
                    </span>
                    <span>
                        Размер страницы изменился на данное количество байт
                    </span>
                    <span>
                        Показать последние 50 | 100 | 250 | 500 изменений за 1 | 3 | 7 | 14 | 30 дней
                    </span>
                    <span>
                        Скрыть малые правки | Показать ботов | Скрыть непредставившихся | Скрыть представившихся участников | Скрыть свои правки | Скрыть проверенные правки
                    </span>
                    <span>
                        Показать изменения с 08:08, 5 ноября 2021.
                    </span>
                    <span>
                        Пространство имён:
                    </span>
                    <span>
                        Обратить выбранное  Связанное пространство
                    </span>
                    <span>
                        Изменений в указанный период, соответствующих указанным условиям, нет.
                    </span>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Свежие правки')">
                    <span>
                        Ниже в хронологическом порядке перечислены последние изменения на страницах WikiTorrents.
                    </span>
                    <span>
                        Настройки свежих правок
                    </span>
                    <span>
                        Легенда:
                    </span>
                    <span>
                        Н
                    </span>
                    <span>
                        Этой правкой была создана новая страница. (см. также список новых страниц)
                    </span>
                    <span>
                        м
                    </span>
                    <span>
                        Это незначительное изменение
                    </span>
                    <span>
                        б
                    </span>
                    <span>
                        Эта правка сделана ботом
                    </span>
                    <span>
                        (±123)
                    </span>
                    <span>
                        Размер страницы изменился на данное количество байт
                    </span>
                    <span>
                        Показать последние 50 | 100 | 250 | 500 изменений за 1 | 3 | 7 | 14 | 30 дней
                    </span>
                    <span>
                        Скрыть малые правки | Показать ботов | Скрыть непредставившихся | Скрыть представившихся участников | Скрыть свои правки | Скрыть проверенные правки
                    </span>
                    <span>
                        Показать изменения с 08:08, 5 ноября 2021.
                    </span>
                    <span>
                        Пространство имён:
                    </span>
                    <span>
                        Обратить выбранное  Связанное пространство
                    </span>
                    <span>
                        Изменений в указанный период, соответствующих указанным условиям, нет.
                    </span>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Свежие правки')">
                    <span>
                        Ниже в хронологическом порядке перечислены последние изменения на страницах WikiTorrents.
                    </span>
                    <span>
                        Настройки свежих правок
                    </span>
                    <span>
                        Легенда:
                    </span>
                    <span>
                        Н
                    </span>
                    <span>
                        Этой правкой была создана новая страница. (см. также список новых страниц)
                    </span>
                    <span>
                        м
                    </span>
                    <span>
                        Это незначительное изменение
                    </span>
                    <span>
                        б
                    </span>
                    <span>
                        Эта правка сделана ботом
                    </span>
                    <span>
                        (±123)
                    </span>
                    <span>
                        Размер страницы изменился на данное количество байт
                    </span>
                    <span>
                        Показать последние 50 | 100 | 250 | 500 изменений за 1 | 3 | 7 | 14 | 30 дней
                    </span>
                    <span>
                        Скрыть малые правки | Показать ботов | Скрыть непредставившихся | Скрыть представившихся участников | Скрыть свои правки | Скрыть проверенные правки
                    </span>
                    <span>
                        Показать изменения с 08:08, 5 ноября 2021.
                    </span>
                    <span>
                        Пространство имён:
                    </span>
                    <span>
                        Обратить выбранное  Связанное пространство
                    </span>
                    <span>
                        Изменений в указанный период, соответствующих указанным условиям, нет.
                    </span>
                </div>
                <div  class="articleContent" v-else-if="activeAsideItem.includes('Свежие правки')">
                    <span>
                        Ниже в хронологическом порядке перечислены последние изменения на страницах WikiTorrents.
                    </span>
                    <span>
                        Настройки свежих правок
                    </span>
                    <span>
                        Легенда:
                    </span>
                    <span>
                        Н
                    </span>
                    <span>
                        Этой правкой была создана новая страница. (см. также список новых страниц)
                    </span>
                    <span>
                        м
                    </span>
                    <span>
                        Это незначительное изменение
                    </span>
                    <span>
                        б
                    </span>
                    <span>
                        Эта правка сделана ботом
                    </span>
                    <span>
                        (±123)
                    </span>
                    <span>
                        Размер страницы изменился на данное количество байт
                    </span>
                    <span>
                        Показать последние 50 | 100 | 250 | 500 изменений за 1 | 3 | 7 | 14 | 30 дней
                    </span>
                    <span>
                        Скрыть малые правки | Показать ботов | Скрыть непредставившихся | Скрыть представившихся участников | Скрыть свои правки | Скрыть проверенные правки
                    </span>
                    <span>
                        Показать изменения с 08:08, 5 ноября 2021.
                    </span>
                    <span>
                        Пространство имён:
                    </span>
                    <span>
                        Обратить выбранное  Связанное пространство
                    </span>
                    <span>
                        Изменений в указанный период, соответствующих указанным условиям, нет.
                    </span>
                </div>
                <div class="articleContent loginArticleContent" v-else-if="activeAsideItem.includes('Представиться системе')">
                    <div>
                        <span>
                            Имя учётной записи
                        </span>
                        <input type="text" v-model="name" />
                    </div>
                    <div>
                        <span>
                            Пароль 
                            <span class="help">
                                Сбросить ваш пароль?
                            </span>
                        </span>
                        <input type="text" v-model="password" />
                    </div>
                    <div>
                        <input type="checkbox" v-model="beInSystem" />
                        <span>
                            Оставаться в системе
                        </span>
                    </div>
                    <button>
                        Вход
                    </button>
                    <div>
                        <span class="help">
                            Помощь по входу
                        </span>
                        <span class="material-icons">
                            lock
                        </span>
                    </div>
                </div>
                <div class="articleContent" v-else-if="activeAsideItem.includes('WikiTorrents:Политика конфиденциальности')">
                    <span>
                        В настоящее время на этой странице нет текста. Вы можете найти упоминание данного названия на других страницах, или найти соответствующие записи журналов. У вас нет разрешения создать данную страницу.
                    </span>
                </div>
                <div class="articleContent" v-else-if="activeAsideItem.includes('WikiTorrents:Описание')">
                    <span>
                        В настоящее время на этой странице нет текста. Вы можете найти упоминание данного названия на других страницах, или найти соответствующие записи журналов. У вас нет разрешения создать данную страницу.
                    </span>
                </div>
                <div class="articleContent" v-else-if="activeAsideItem.includes('Кому задать вопрос?')">
                    <span>
                        В настоящее время на этой странице нет текста. Вы можете найти упоминание данного названия на других страницах, или найти соответствующие записи журналов. У вас нет разрешения создать данную страницу.
                    </span>
                </div>
                        

            </div>
        </div>
        <WikiFooter @changeActiveAsideItem="changeActiveAsideItemHandler" />
    </div>
</template>

<script>
import WikiHeader from '@/components/WikiHeader.vue'
import WikiFooter from '@/components/WikiFooter.vue'

export default {
    data(){
        return {
            activeAsideItem: 'Заглавная страница',
            token: window.localStorage.getItem('torrentiotoken')
        }
    },
    mounted(){
        if(this.$route.query.question !== null && this.$route.query.question !== undefined)
        this.activeAsideItem = this.$route.query.question
    },
    methods: {
        changeActiveAsideItemHandler(newActiveAsideItem){
            this.activeAsideItem = newActiveAsideItem
        }
    },
    components: {
        WikiHeader,
        WikiFooter
    }
}
</script>

<style scoped>
    
    .categoryHeader {
        color: rgb(150, 100, 0);
        text-align: center;
    }

    .main {
        display: flex;
        width: 95%;
        border-radius: 8px;
        margin: auto;
        box-sizing: border-box;
        padding: 15px;
        box-shadow: inset 0px 0px 5px rgb(200, 200, 200);
    }

    .aside {
        width: 25%;        
    }

    .asideItem > div {
        display: flex;
    }

    .asideItem {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 5px 15px;
        border-radius: 8px;
        box-shadow: 0px 0px 5px rgb(150, 150, 150);
        margin: 15px 0px;
    }

    .asideItemHeader {
        color: rgb(0, 0, 255);
        font-weight: bolder;
    }

    .article {
        margin: 0px 25px;
        width: 70%;
    }

    .articleContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 15px;
        box-shadow: inset 0px 0px 5px rgb(200, 200, 200);
    }

    .linkDescription:hover {
        color: rgb(200, 100, 0);
        text-decoration: underline;
    }

    .loginLinkDescription {
        font-weight: bolder;
    }

    .help {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .loginArticleContent {
        align-items: center;
    }

    .loginArticleContent > * {
        margin: 5px 0px;
    }

    .theme {
        border-radius: 8px;
        width: 85%;
        border: 1px solid rgb(0, 100, 100);
        margin: 15px 0px;
    }

    .themeHeader {
        box-sizing: border-box;
        padding: 15px;
        height: 15px;
        border-radius: 7px 7px 0px 0px;
        background-color: rgb(200, 200, 250);
        font-weight: bolder;
        display: flex;
        align-items: center;
    }

    .themeContent {
        box-sizing: border-box;
        padding: 15px;
    }

    .rules {
        font-weight: bolder;
    }

    .welcome {
        font-size: 24px;
        font-weight: bolder;
        color: rgb(150, 100, 0);
        display: flex;
        align-items: center;
    }

    .welcomeRu {
        color: rgb(255, 0, 0);
        margin-left: 15px;
    }

    .welcomeTracker {
        color: rgb(0, 150, 0);
    }

    .welcomeStar {
        color: rgb(0, 100, 200);
    }

    .welcomeWiki {
        color: rgb(255, 0, 0);
    }

    .welcomeBang {
        font-weight: bolder;
    }

    .rubric {
        margin: 15px 0px;
        border: 2px solid rgb(150, 50, 0);
        background-color: rgb(255, 255, 150);
        color: rgb(0, 0, 200);
        font-size: 24px;
        border-radius: 8px;
        height: 50px;
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .helpHeader {
        font-weight: bolder;
        font-size: 24px;
    }

    .helpLink {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .allPagesBtn {
        border: 1px solid rgb(200, 200, 200);
        align-self: flex-start;
    }

    .allPagesItemInput {
        height: 32px;
        display: flex;
        margin: 5px 0px;
        align-items: center;
    }
    
    .allPagesItemInput > span {
        width: 325px;
        text-align: right;
    }

    .allPagesItemInput > * {
        margin: 0px 10px;
    }

    .links {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
    }

    .linksItem {
        width: 100%;
        display: flex;
        justify-content:center;
        margin: 5px 0px;
    }

    .linksItem > * {
        width: 33%;
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

</style>