<template>
    <div>
        <div class="footerTop">
            <div>
                <span @click="$router.push({ name: 'ConditionUsability' })">
                    Условия использования
                </span>
                <span @click="$router.push({ name: 'Ads' })">
                    Реклама на сайте
                </span>
                <span @click="$router.push({ name: 'ForRights' })">
                    Для правообладателей
                </span>
                <span @click="$router.push({ name: 'ForPress' })">
                    Для прессы
                </span>
                <span @click="$router.push({ name: 'ForProviders' })">
                    Для провайдеров
                </span>
                <span @click="$router.push({ name: 'Wiki' })">
                    Торрентопедия
                </span>
            </div>
            <div>
                <span @click="$router.push({ name: 'Rules' })">
                    Правила
                </span>
                <span @click="$router.push({ name: 'Wiki', query: { question: ' Кому задать вопрос?' } })">
                    Кому задать вопрос
                </span>
                <span @click="$router.push({ name: 'Distributtions', query: { distributtionforum: 'Авторские раздачи' } })">
                    Авторские раздачи
                </span>
                <span @click="$router.push({ name: 'Concurs' })">
                    Конкурсы
                </span>
                <span @click="$router.push({ name: 'News' })">
                    Новости "Хранителей" и "Антикваров"
                </span>
                <span @click="$router.push({ name: 'Distributtion', query: { distributtionid: randomDistributtionId } })">
                    · Случайная раздача
                </span>
            </div>
        </div>
        <div class="footerBootom">
            <span @click="$router.push({ name: 'Admin' })">
                Администрация
            </span>
            <span @click="$router.push({ name: 'Moderators' })">
                Модераторы
            </span>
            <span @click="$router.push({ name: 'Support' })">
                Техническая помощь
            </span>
            <span @click="$router.push({ name: 'IRC' })">
                IRC канал
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            distributions: [],
            randomDistributtionId: 1
        }
    },
    mounted(){
        this.randomDistributtionId = Math.floor(Math.random() * this.distributions.length)
    }
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