<template>
    <div>
        <Header />
        <div class="main">
            <div class="notification">
                <div class="notificationHeader">
                    <span>
                        Предв. просмотр
                    </span>
                </div>
                <div class="distributtionContent">
                    <div class="distributtionData">
                        <div class="distributtionInfo">
                            <span>
                                фыв
                            </span>
                            <span>
                                picРазрешение: ячс
                            </span>
                            <span>
                                Количество файлов: 2
                            </span>
                            <span>
                                Формат: йцу
                            </span>
                            <span>
                                Состав и описание раздачи: мак
                            </span>
                        </div>
                        <img width="250px" class="distributtionPoster" src="https://cdn.admitad-connect.com/public/bs/2021/05/07/240%D1%85400_YD_img_F_Mbappe_Scr_3.e7d0.jpg" />
                    </div>
                    <div class="toggleList">
                        <button class="toggleListBtn">
                            +
                        </button>
                        <span class="lastThanksgivers">
                            Превью примеров
                        </span>
                    </div>
                </div>
            </div>
            <div class="breadcrumbs">
                <p>
                    Главная » Картинки » фыв [ячс, 2]
                </p>
            </div>
            <div class="searchByDistributionsHeader">
                <span>
                    Начать новую тему
                </span>
            </div>
            <div class="post firstPost">
                <div class="postAuthor">
                    <span class="authorName">
                        Заголовок
                    </span>
                    <span class="authorMeta">
                        Сообщение
                    </span>
                    <div class="smilesRow">
                        <div class="smilesColumn">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                        </div>
                        <div class="smilesColumn">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                        </div>
                        <div class="smilesColumn">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                        </div>
                        <div class="smilesColumn">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                            <img width="20px" src="https://static.t-ru.org/smiles/icon_biggrin.gif" alt="">
                        </div>
                    </div>
                    <div class="postAuthorFooter" @click="openAuxSmiles()">
                        <span class="auxSmiles">
                            Дополнительные смайлики
                        </span>
                    </div>
                </div>
                <div class="postContent">
                    <div class="postContentHeader">
                        <input type="text" v-model="theme" class="form-control h-75">
                    </div>
                    <div class="postContentHeader">
                        <select v-model="font" class="form-select h-75" aria-label="Default select example">
                            <option value="Шрифт">Шрифт</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Palatino">Palatino</option>
                            <option value="Arial">Arial</option>
                            <option value="Trebuchet MS">Trebuchet MS</option>
                            <option value="Seqoe UI">Seqoe UI</option>
                            <option value="Monospaced">Monospaced</option>
                            <option value="Consolas">Consolas</option>
                            <option value="Comic sans MS">Comic sans MS</option>
                            <option value="Impact">Impact</option>
                        </select>
                        <select v-model="color" class="form-select h-75" aria-label="Default select example">
                            <option value="Цвет шрифта">Цвет шрифта</option>
                            <option value="Тёмно-красный">Тёмно-красный</option>
                            <option value="Коричневый">Коричневый</option>
                            <option value="Красный">Красный</option>
                            <option value="Фиолетовый">Фиолетовый</option>
                            <option value="Зелёный">Зелёный</option>
                            <option value="Тёмно-зелёный">Тёмно-зелёный</option>
                            <option value="Серый">Серый</option>
                            <option value="Оливковый">Оливковый</option>
                            <option value="Синий">Синий</option>
                            <option value="тёмно-красный">тёмно-красный</option>
                            <option value="Тёмно-синий">Тёмно-синий</option>
                            <option value="Индиго">Индиго</option>
                            <option value="Тёмно-красный">Тёмно-голубой</option>
                        </select>
                        <select v-model="size" class="form-select h-75" aria-label="Default select example">
                            <option value="Размер">Размер</option>
                            <option value="Маленький">Маленький</option>
                            <option value="size=11">size=11</option>
                            <option value="Обычный">Обычный</option>
                            <option value="size=14">size=14</option>
                            <option value="size=16">size=16</option>
                            <option value="Большой">Большой</option>
                            <option value="size=20">size=20</option>
                            <option value="size=22">size=22</option>
                            <option value="Огромный">Огромный</option>
                        </select>
                        <select v-model="alignment" class="form-select h-75" aria-label="Default select example">
                            <option value="Выравнивание">Выравнивание</option>
                            <option value="По левому краю">По левому краю</option>
                            <option value="По правому краю">По правому краю</option>
                            <option value="По центру">По центру</option>
                            <option value="По ширине">По ширине</option>
                        </select>
                        <select v-model="img" class="form-select h-75" aria-label="Default select example">
                            <option value="Картинка">Картинка</option>
                            <option value="Слева">Слева</option>
                            <option value="Слева">Слева</option>
                            <option value="10% экрана">10% экрана</option>
                            <option value="15%">15%</option>
                            <option value="20%">20%</option>
                            <option value="25%">25%</option>
                            <option value="30%">30%</option>
                            <option value="40%">40%</option>
                            <option value="50%">50%</option>
                            <option value="60%">60%</option>
                            <option value="По высоте строки">По высоте строки</option>
                        </select>
                        <button>
                            1-L
                        </button>
                        <button>
                            П
                        </button>
                        <button>
                            pre
                        </button>
                        <button>
                            box
                        </button>
                        <button>
                            nfo
                        </button>
                    </div>
                    <div class="postContentHeader">
                        <button>
                            B
                        </button>
                        <button>
                            i
                        </button>
                        <button>
                            U
                        </button>
                        <button>
                            S
                        </button>
                        <button>
                            Цитата
                        </button>
                        <button>
                            Картинка
                        </button>
                        <button>
                            Ссылка
                        </button>
                        <button>
                            Список
                        </button>
                        <button>
                            1.
                        </button>
                        <button>
                            -
                        </button>
                        <button>
                            Код
                        </button>
                        <button>
                            Спойлер
                        </button>
                        <button>
                            Цитир. выделен.
                        </button>
                        <button>
                            X
                        </button>
                    </div>
                    <div class="distributtionMarkupContainer">
                        <textarea v-model="markup" class="distributtionMarkup">
                            
                        </textarea>
                    </div>
                    <div class="uploadFile">
                        <img width="10px" height="13px" src="https://static.t-ru.org/templates/v1/images/icon_attach.gif" alt="">
                        <span>
                            загрузить файл
                        </span>
                    </div>
                    <span v-if="uploadFile" class="maxSize">
                        максимальный размер: 
                        <span class="warning">
                            3 MB
                        </span>
                         [
                        <span class="link">
                            Как уменьшить размер торрент-файла
                        </span>
                        ] , файлы: *
                        <span class="warning">
                            .torrent
                        </span>
                    </span>
                    <span v-else>
                        выберите нужный файл, он будет загружен автоматически при отправке сообщения
                    </span>
                    <div class="btns">
                        <button>
                            Загрузить картинку
                        </button>
                        <button>
                            Предв. просмотр
                        </button>
                        <button>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Favorite',
    data(){
        return {
            theme: 'фыв, [ячс, 2]',
            font: 'Шрифт',
            color: 'Цвет шрифта',
            size: 'Размер',
            alignment: 'Выравнивание',
            img: 'Картинка',
            markup: `[size=24]фыв[/size]\n[img=right]https://cdn.admitad-connect.com/public/bs/2021/05/07/240%D1%85400_YD_img_F_Mbappe_Scr_3.e7d0.jpg[/img]\n[b]Разрешение[/b]: ячс\n[b]Количество файлов[/b]: 2\n[b]Формат[/b]: йцу\n[b]Состав и описание раздачи[/b]: мак\n[spoiler="Превью примеров"]йфя[/spoiler]"`,
            uploadFile: true
        }
    },
    methods: {
        openAuxSmiles(){
            window.open('https://rutracker.org/forum/posting.php?mode=smilies')
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .main {
        margin: auto;
        width: 98%;
        display: flex;
        flex-direction: column;
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
        padding: 15px;
    }

    .notification {
        border-radius: 8px;
        border: 1px solid rgb(200, 200, 200);
        width: 100%;
        display: flex;
        flex-direction: column;
        
    }

    .notificationHeader {
        background-color: rgb(175, 175, 175);
        height: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .notificationContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(225, 225, 225);
        height: 75%;
    }

    .toMain {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .distributtionData {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 25px;
    }

    .distributtionInfo {
        display: flex;
        flex-direction: column;
    }

    .distributtionPoster {
        
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

    .breadcrumbs {
        color: rgb(0, 0, 255);   
    }

    .distributtionContent {
        display: flex;
        flex-direction: column;
    }

    .toggleList {
        border: 1px solid rgb(215, 215, 215);
        background-color: rgb(235, 235, 235);
        display: flex;
        align-items: center;
        width: 90%;
        margin: 15px auto;
        height: 20px;
    }

    .toggleListBtn {
        margin: 5px 20px;
        border: 1px solid rgb(150, 150, 150);
        max-width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

    .postContent {
        width: 100%;
    }

    .postContentHeader {
        box-sizing: border-box;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid rgb(150, 150, 150);
        border-left: none;
        height: 60px;
    }

    .post {
        display: flex;
    }

    .postAuthor {
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(150, 150, 150);
        width: 15%;
        box-sizing: border-box;
        padding-left: 5px;
        align-items: center;
    }

    .authorName {
        width: 100%;
        border-bottom: 1px solid rgb(150, 150, 150);
        font-weight: bolder;
        color: rgb(100, 100, 255);
        cursor: pointer;
    }

    .authorName:hover {
        text-decoration: underline;
    }

    .firstPost {
        background-color: rgb(215, 215, 215);
    }

    .smilesRow {
        display: flex;
    }

    .smilesColumn {
        display: flex;
        flex-direction: column;
    }

    .smilesColumn > img {
        margin: 2px;
    }

    .distributtionMarkupContainer {
        box-sizing: border-box;
        padding: 10px;
    }

    .distributtionMarkup {
        width: 100%;
        height: 500px;
    }

    .btns {
        display: flex;
        justify-content: center;
    }

    .btns > button {
        margin: 0px 5px;
    }

    .uploadFile {
        display: flex;
    }

    .uploadFile > * {
        margin: 0px 5px;
        color: rgb(0, 0, 255);
        cursor: pointer;
        font-weight: bolder;
    }

    .maxSize {
        font-size: 12px;
    }

    .warning {
        font-weight: bolder;
    }

    .link {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .auxSmiles {
        color: rgb(0, 0, 255);
        cursor: pointer;
        text-align: center;
        align-self: center;
    }

    .auxSmiles:hover {
        color: rgb(250, 100, 0);
        text-decoration: underline;
    }

    .postAuthorFooter {
        display: flex;
        justify-content: center;
    }

    .postContentHeader > select {
        width: 125px;
        font-size: 12px;
    }

</style>