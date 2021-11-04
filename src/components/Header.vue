<template>
    <div>
        <div class="top">
            <div class="links">
                <span @click="$router.push({ name: 'Home' })">
                    Главная
                </span>
                <span @click="$router.push({ name: 'Home' })">
                    Трекер
                </span>
                <span @click="$router.push({ name: 'Search' })">
                    Поиск
                </span>
                <span @click="$router.push({ name: 'Home' })">
                    Группы
                </span>
                <span @click="$router.push({ name: 'Home' })">
                    FAQ
                </span>
                <span @click="$router.push({ name: 'Rules' })" class="rules">
                    Правила 
                </span>
            </div>
            <div class="linkAds">
                <span>
                    FIFA Online 4 (2021)
                </span>
            </div>
        </div>
        <div class="middle">
            <div class="logo" @click="$router.push({ name: 'Home' })">

            </div>
            <div class="videoAds">

            </div>
        </div>
        <div class="bottom">
            <div class="bottomItem">
                <div v-if="isLogin" class="bottomItemLeft">
                    <span @click="logout()" class="clickable material-icons">
                        logout
                    </span>
                    <span class="clickable">
                        {{ torrenter.name }}
                    </span>
                </div>
                <div v-else class="bottomItemLeft">
                    <span @click="$router.push({ name: 'Agreement' })" class="clickable authLink">
                        Регистрация
                    </span>
                    <span @click="loginToggler = !loginToggler" class="clickable authLink">
                        Вход
                    </span>
                </div>
                <div class="bottomItemCenter">
                    <input v-if="!loginToggler" type="text" class="form-control h-75">
                    <div v-else class="authRow">
                        <input v-model="name" placeholder="имя" type="text" class="form-control h-75">
                        <input v-model="password" placeholder="пароль" type="password" class="form-control h-75">
                    </div>
                    <select v-if="isLogin" class="form-select h-75 w-25" aria-label="Default select example">
                        <option selected>раздачи</option>
                        <option value="1">все темы</option>
                        <option value="2">в google</option>
                        <option value="3">в duckdukgo</option>
                        <option value="4">в wiki</option>
                        <option value="5">по info_hash</option>
                    </select>
                    <button v-if="!loginToggler" class="btn btn-light h-75">
                        Поиск
                    </button>
                    <button @click="login()" v-else class="btn btn-light h-75">
                        Вход
                    </button>
                </div>
                <div v-if="isLogin" class="bottomItemRight">
                    <div @mouseenter="pmDialog = true">
                        <span>
                            ЛС ✉
                        </span>
                        <span class="material-icons">
                            expand_more
                        </span>
                    </div>
                    <div @mouseenter="profileDialog = true">
                        <span>
                            Профиль
                        </span>
                        <span class="material-icons">
                            expand_more
                        </span>
                    </div>
                    <div @mouseenter="messagesDialog = true">
                        <span>
                            Мои сообщения
                        </span>
                        <span class="material-icons">
                            expand_more
                        </span>
                    </div>
                </div>
                <div v-else class="bottomItemRight">
                    <div>
                        <span>
                            Забыли имя или пароль?
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="pmDialog" @mouseleave="pmDialog = false" class="pmDialog">
            <div @click="$router.push({ name: 'PM', query: { activetab: 'Входящие' } }); $emit('changeFolder', 'Входящие')">
                <span>
                    Входящие
                </span>
            </div>
            <div @click="$router.push({ name: 'PM', query: { activetab: 'Исходящие' } }); $emit('changeFolder', 'Исходящие')">
                <span>
                    Исходящие
                </span>
            </div>
            <div @click="$router.push({ name: 'PM', query: { activetab: 'Отправленные' } }); $emit('changeFolder', 'Отправленные')">
                <span>
                    Отправленные
                </span>
            </div>
            <div @click="$router.push({ name: 'PM', query: { activetab: 'Сохранённые' } }); $emit('changeFolder', 'Сохранённые')">
                <span>
                    Сохранённые
                </span>
            </div>
        </div>
        <div v-if="profileDialog" @mouseleave="profileDialog = false" class="profileDialog">
            <div @click="$router.push({ name: 'Settings' });">
                <span>
                    Настройки
                </span>
            </div>
            <div @click="$router.push({ name: 'Future' })">
                <span>
                    Будущие значки
                </span>
            </div>
            <div @click="$router.push({ name: 'Favorite' })">
                <span>
                    Избранное
                </span>
            </div>
        </div>
        <div v-if="messagesDialog" @mouseleave="messagesDialog = false" class="messagesDialog">
            <div @click="$router.push({ name: 'MyDistributtions' })">
                <span>
                    Мои раздачи
                </span>
            </div>
            <div @click="$router.push({ name: 'StartThemes' })">
                <span>
                    Начатые темы
                </span>
            </div>
            <div @click="$router.push({ name: 'Responses' })">
                <span>
                    Ответы в начатых темах
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import * as jwt from 'jsonwebtoken'

export default {
    name: 'Header',
    data(){
        return {
            isLogin: false,
            loginToggler: false,
            name: '',
            password: '',
            torrenter: {},
            pmDialog: false,
            profileDialog: false,
            messagesDialog: false,
            token: window.localStorage.getItem("torrentiotoken")
        }
    },
    // props: {
    //     isLogin: {
    //         type: Boolean,
    //         default: false
    //     }
    // },
    mounted(){
        jwt.verify(this.token, 'torrentiosecret', (err, decoded) => {
            if (err) {
                this.loginToggler = true
                this.isLogin = false
            } else {
                fetch(`http://localhost:4000/api/torrenters/get/?torrenterid=${decoded.torrenter}`, {
                    mode: 'cors',
                    method: 'GET'
                }).then(response => response.body).then(rb  => {
                    const reader = rb.getReader()
                    return new ReadableStream({
                    start(controller) {
                        function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                    console.log('done', done);
                                    controller.close();
                                    return;
                                }
                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            })
                        }
                        push();
                    }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                    if(JSON.parse(result).status.includes('OK')){
                        alert('вошёл')
                        this.isLogin = true
                        this.loginToggler = false
                        this.torrenter = JSON.parse(result).torrenter
                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Не удаётся получить торрентера')
                    }
                })
            }
        })
    },
    methods: {
        logout(){
            this.token = jwt.sign({
              torrenter: 'admin'
            }, 'torrentiosecret', { expiresIn: 1 })
            window.localStorage.setItem("torrentiotoken", this.token)
            setTimeout(() => {
                this.$router.push({ name: "Home" })
            }, 1000)
        },
        login() {
            fetch(`http://localhost:4000/api/torrenters/check/?torrentername=${this.name}&torrenterpassword=${this.password}`, {
              mode: 'cors',
              method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                start(controller) {
                    function push() {
                        reader.read().then( ({done, value}) => {
                            if (done) {
                                console.log('done', done);
                                controller.close();
                                return;
                            }
                            controller.enqueue(value);
                            console.log(done, value);
                            push();
                        })
                    }
                    push();
                }
            });
        }).then(stream => {
            return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
          })
          .then(result => {
                if(JSON.parse(result).status.includes('OK')){
                    alert('вошёл')
                    this.isLogin = true
                    this.loginToggler = false
                    this.torrenter = JSON.parse(result).torrenter
                    this.token = jwt.sign({
                        torrenter: this.torrenter._id
                    }, 'torrentiosecret', { expiresIn: '5m' })
                    window.localStorage.setItem("torrentiotoken", this.token)
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Не удаётся войти')
                }
            });
        }
    }
}
</script>

<style scoped>
    
    .top {
        height: 35px;
        background-color: rgb(175, 175, 175);
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 15px;
    }

    .links {
        align-self: center;
    }

    .links > span {
        font-weight: bolder;
        margin: 0px 5px;
        color: rgb(75, 75, 75);
        cursor: pointer;
    }

    .links > span.rules {
        color: rgb(0, 0, 175);
    }

    .linkAds {
        align-self: center;
        font-weight: bolder;
    }

    .middle {
        height: 85px;
        display: flex;
        justify-content: space-around;
        margin: 15px 0px;
    }

    .logo {
        cursor: pointer;
        background-image: url('https://static.t-ru.org/logo/logo-3.svg');
        background-size: 100% 100%;
        width: 350px;
        height: 100%;
    }

    .videoAds {
        border: 1px solid rgb(0, 0, 0);
        width: 65%;
        height: 100%;
        background-color: rgb(255, 100, 0);
    }

    .bottom {
        margin: auto;
        height: 45px;
    }

    .bottomItem {
        box-sizing: border-box;
        padding: 0px 15px;
        background-color: rgb(200, 200, 200);
        border: 1px solid rgb(150, 150, 150);
        height: 100%;
        width: 98%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .bottomItemLeft {
        display: flex;
        align-items: center;
    }

    .bottomItemCenter {
        display: flex;
        align-items: center;
        width: 45%;
    }

    .bottomItemCenter > * {
        margin: 0px 2px;
        display: flex;
        align-items: center;
        border: 1px solid rgb(150, 150, 150);
    }

    .bottomItemRight {
        display: flex;
    }

    .bottomItemRight > div {
        display: flex;
        align-items: center;
        margin: 0px 5px;
    }

    .bottomItemRight > div > span {
        margin: 0px 2px;
        color: rgb(0, 100, 255);
        cursor: pointer;
    }

    .clickable {
        cursor: pointer;
        margin: 0px 5px;
    }

    .authLink {
        color: rgb(50, 50, 255);
        cursor: pointer;
        font-weight: bolder;
    }

    .authLink:hover {
        color: rgb(250, 150, 0);
        text-decoration: underline;
    }

    .authRow > input {
        margin: 0px 15px;
    }

    .pmDialog {
        width: 150px;
        height: 150px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(0, 0, 0);
        position: absolute;
        top: 200px;
        left: 900px;
        z-index: 10;
    }

    .pmDialog > div {
        margin: 2px;
        background-color: rgb(185, 185, 255);
        height: 50px;
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .profileDialog {
        width: 150px;
        height: 150px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(0, 0, 0);
        position: absolute;
        top: 200px;
        left: 1050px;
        z-index: 15;
    }

    .profileDialog > div {
        margin: 2px;
        background-color: rgb(185, 185, 255);
        height: 50px;
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .messagesDialog {
        width: 150px;
        height: 150px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(0, 0, 0);
        position: absolute;
        top: 200px;
        left: 1200px;
        z-index: 20;
    }

    .messagesDialog > div {
        margin: 2px;
        background-color: rgb(185, 185, 255);
        height: 50px;
        color: rgb(0, 100, 255);
        cursor: pointer;
        font-weight: bolder;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>