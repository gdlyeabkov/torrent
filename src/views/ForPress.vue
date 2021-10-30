<template>
    <div class="main">
        <div class="agreement">
            <p>
                ДЛЯ ПРЕССЫ
            </p>
            <textarea class="form-control" disabled>
                Господа журналисты!

                Мы с удовольствием ответим на все интересующие вас вопросы.

                Присылайте их на pressa @ rutracker.org, и в течение 1-2 дней вы получите интересующие вас ответы.

                Спасибо.
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForPress'
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