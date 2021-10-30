<template>
    <div class="main">
        <div class="agreement">
            <p>
                ИНФОРМАЦИЯ ДЛЯ ПРАВООБЛАДАТЕЛЕЙ
            </p>
            <textarea class="form-control" disabled>
                oops! :( 
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForRights'
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