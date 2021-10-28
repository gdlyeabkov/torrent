<template>
    <div>
        <Header />
        <div class="main">
            <span class="resultsInfoHeader">
                Профиль пользователя: 
                <span class="me">
                    {{ torrenter }}
                </span>
                 [ 
                <span class="setting">
                    Настройки / Изменить профиль
                </span>
                 ]
            </span>
            <span class="profileLink resultsInfoCountOfResults">
                Главная
            </span>
            <div class="searchByDistributionsHeader">
                <span>
                    Профиль пользователя
                </span>
            </div>
            <div class="profileData">
                <div class="profileDataLeft">
                    <span>
                        Аватар: нет
                    </span>
                    <span>
                        Звание: нет
                    </span>
                    <div class="contacts">
                        <span>
                            Контакты
                        </span>
                    </div>
                    <div>
                        <span>
                            Личное сообщ.:
                        </span>
                        <span>
                            Отправить
                        </span>
                        <span>
                            Вход.
                        </span>
                        <span>
                            Отправл.
                        </span>
                    </div>
                </div>
                <div class="profileDataRight">
                    <div>
                        <span>
                            Сессии:
                        </span>
                        <span class="profileLink">
                            Выйти из всех устройств
                        </span>
                    </div>
                    <div>
                        <span>
                            Роль:
                        </span>
                        <span>
                            Пользователь
                        </span>
                    </div>
                    <div>
                        <span>
                            Стаж:
                        </span>
                        <span>
                            10 лет 11 месяцев
                        </span>
                    </div>
                    <div>
                        <span>
                            Зарегистрирован:
                        </span>
                        <span>
                            2010-11-02
                        </span>
                    </div>
                    <div>
                        <span>
                            Сообщения:
                        </span>
                        <div>
                            <span class="profileLink">
                                1 сообщение
                            </span>
                            <span class="profileLink">
                                Ответы    
                            </span>
                            <span class="profileLink">
                                Начатые темы
                            </span>
                            <span class="profileLink">
                                Ответы в начатых темах
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            Откуда:
                        </span>
                        <img width="25px" src="../assets/flag.png" alt="">
                    </div>
                    <div>
                        <span>
                            Статистика отключена:
                        </span>
                        <span class="profileLink">
                            как включить
                        </span>
                    </div>
                    <div>
                        <span>
                            Дополнительно:
                        </span>
                        <span class="profileLink">
                            Разрегистрированные раздачи 
                        </span>
                    </div>
                </div>
            </div>
            <span class="futureDownloads">
                Будущие закачки
            </span>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Profile',
    data(){
        return {
            torrenter: {
                name: 'rodogleb'
            }
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
        display: flex;
        flex-direction: column;
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

    .profileData {
        background-color: rgb(235, 235, 235);
        display: flex;
    }

    .profileData > div {
        border: 1px solid rgb(150, 150, 150);
        box-sizing: border-box;
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .profileDataLeft {
        width: 40%;
    }

    .profileDataRight {
        width: 60%;
    }

    .profileDataRight > div {
        display: flex;
        align-items: center;
    }

    .contacts {
        font-weight: bolder;
        text-align: center;
        border: 1px solid rgb(150, 150, 150);
        background-color: rgb(220, 220, 220);
        width: 100%;
        box-sizing: border-box;
        padding: 5px;
    }

    .profileLink {
        cursor: pointer;
        font-size: 12px;
        margin: 0px 2px;
        color: rgb(100, 100, 255);
    }

    .profileLink:hover {
        color: rgb(255, 100, 0);
        text-decoration: underline;
    }

    .futureDownloads {
        text-align: center;
        color: rgb(100, 100, 255);
        cursor: pointer;
        font-size: 12px;
        margin: 15px 0px;
    }

    .futureDownloads:hover {
        color: rgb(255, 100, 0);
        text-decoration: underline;
    }

    .setting {
        cursor: pointer;
        color: rgb(100, 100, 255);
    }

    .setting:hover {
        color: rgb(255, 100, 0);
        text-decoration: underline;
    }

    .me {
        font-weight: bolder;
    }

</style>