<template>
    <div>
        <Header />
        <div class="main">
            <div class="forgotPasswordForm">
                <div class="forgotPasswordHeader">
                    <span>
                        Восстановление забытого пароля
                    </span>
                </div>
                <div>
                    <label for="">
                        E-mail
                    </label>
                    <input v-model="email" placeholder="Введите ваш email" type="email" class="form-control">
                </div>
                <div>
                    <label for="">
                        Код подтверждения
                    </label>
                    <div class="captcha">
                        <img width="125px" src="https://static.t-ru.org/captcha/b01157c04eaed6ab97a66368befeb155.jpg?507809225" alt="">
                        <input v-model="code" type="text" class="form-control">
                    </div>
                </div>
                <button class="btn btn-light sendBtn">
                    Отправить
                </button>
                <div class="forgotPasswordHeader">
                    <span>
                        
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
    name: 'ForgotPassword',
    data(){
        return {
            email: '',
            code: ''
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>

    .forgotPasswordForm {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main {
        margin: auto;
        width: 98%;
        display: flex;
        flex-direction: column;
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
        padding: 15px;
    }

    .captcha {
        display: flex;
        flex-direction: column;
    }

    .captcha > * {
        margin: 5px;
    }

    .sendBtn {
        font-weight: bolder;
        border: 1px solid rgb(150, 150, 150);
        width: 125px;
        align-self: center;
    }

    .forgotPasswordHeader {
        background-color: rgb(215, 215, 215);
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>