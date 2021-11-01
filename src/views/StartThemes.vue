<template>
    <div>
        <Header />
        <div class="main">
            <div class="notification">
                <div class="notificationHeader">
                    <span>
                        Информация
                    </span>
                </div>
                <div class="notificationContent">
                    <span>
                        Подходящих тем или сообщений не найдено
                    </span>
                    <span @click="$router.push({ name: 'Search' })" class="toMain">
                        Вернуться на страницу поиска
                    </span>
                    <span @click="$router.push({ name: 'Home' })" class="toMain">
                        Вернуться на главную
                    </span>
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
        height: 125px;
    }

    .notificationHeader {
        background-color: rgb(175, 175, 175);
        height: 25%;
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

</style>