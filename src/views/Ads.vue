<template>
    <div class="main">
        <div class="agreement">
            <p>
                ИНФОРМАЦИЯ ДЛЯ РЕКЛАМОДАТЕЛЕЙ
            </p>
            <textarea class="form-control" disabled>
                Размещение рекламы на rutracker.org
                По вопросам размещения пишите по адресу adv@rutracker.org. Просьба не обращаться с предложениями о рекламе финансовых пирамид, а также сайтов других файлообменных сетей. В письме обязательно указывайте ссылку на ресурс, предназначенный для рекламы.
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ads'
}
</script>

<style scoped>
    
    .agreement {
        margin: auto;
        width: 75%;
    }

    .agreement > p {
        color: rgb(50, 50, 150);
        font-weight: bolder;
    }

    .agreement > textarea {
        height: 500px;
        margin: 15px 0px;
    }

    .agreement > textarea:disabled {
        background-color: rgb(255, 255, 255);
    }

    .main {
        margin: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
        padding: 15px;
    }

</style>