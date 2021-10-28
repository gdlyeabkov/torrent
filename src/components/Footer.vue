<template>
    <div>
        <div class="footerTop">
            <div>
                <span>
                    Условия использования
                </span>
                <span>
                    Реклама на сайте
                </span>
                <span>
                    Для правообладателей
                </span>
                <span>
                    Для прессы
                </span>
                <span>
                    Для провайдеров
                </span>
                <span>
                    Торрентопедия
                </span>
            </div>
            <div>
                <span>
                    Правила
                </span>
                <span>
                    Кому задать вопрос
                </span>
                <span>
                    Авторские раздачи
                </span>
                <span>
                    Конкурсы
                </span>
                <span>
                    Новости "Хранителей" и "Антикваров"
                </span>
                <span>
                    · Случайная раздача
                </span>
            </div>
        </div>
        <div class="footerBootom">
            <span>
                Администрация
            </span>
            <span>
                 Модераторы
            </span>
            <span>
                Техническая помощь
            </span>
            <span>
                IRC канал
            </span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .footerTop {
        width: 100%;
        margin: 50px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footerTop > div {
        display: flex;
    }

    .footerTop > div > span {
        margin: 0px 10px;
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
        text-decoration: underline;
    }

    .footerTop > div > span:hover {
        color: rgb(255, 100, 0);
    }

    .footerBootom {
        
    }

    .footerBootom > span {
        cursor: pointer;
        margin: 0px 10px;
        color: rgb(0, 100, 255);
    }

    .footerBootom > span:hover {
        text-decoration: underline;
        color: rgb(255, 100, 0);
    }

</style>