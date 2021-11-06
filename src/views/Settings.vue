<template>
    <div>
        <Header />
        <form method="POST" :action="`http://localhost:4000/api/torrenters/update/?torrentername=${torrenter.name}&torrenterpassword=${password}&torrenternewpassword=${newPassword}&torrenteremail=${email}&torrentercontacts=${contacts}&torrenterhobby=${hobby}&torrenterinterest=${interest}&torrentergender=${gender}&torrentergmt=${gmt}&torrenterwhere=${where}&torrentersubscription=${subscription}&torrenterdisablegetandsendpm=${disableGetAndSendPMField}&torrenterenableshowofactivedistributtions=${this.enableShowOfActiveDistributtionsField}&torrenterhidelistofactivedistributtions=${hideListOfActiveDistributtionsField}&torrenteraddretreckerintorrentfiles=${addRetreckerInTorrentFilesField}&torrenteraddnameofthemeinnamedownloadedetorrentfile=${addNameOfThemeInNameDownloadedTorrentFileField}&torrenterdisableanimationicons=${disableAnimationIconsField}&torrenterdomainname=${domainName}&torrenteravatar=${avatar}`" enctype="multipart/form-data">
            <div class="main">
                <h4>
                    Редактирование профиля
                </h4>
                <p>
                    Главная
                </p>
                <div class="userData">
                    <div class="registerInfo">
                        <span>
                            Регистрационная информация
                        </span>
                    </div>
                    <div class="requiredInfo">
                        <span>
                            Поля, отмеченные *, обязательны к заполнению
                        </span>
                    </div>
                    <div class="inputData">
                        <div class="inputLabels">
                            <div class="nameField">
                                <span>
                                    Имя: *
                                </span>
                            </div>
                            <div class="passwordField">
                                <span>
                                    Текущий пароль: *
                                </span>
                            </div>
                            <div class="passwordField">
                                <span>
                                    Новый пароль: *
                                </span>
                            </div>
                            <div class="emailField">
                                <span>
                                    E-mail: *
                                </span>
                            </div>
                            <div class="contactsField">
                                <span>
                                    Контакты:
                                </span>
                            </div>
                            <div class="hobbyField">
                                <span>
                                    Род занятий:
                                </span>
                            </div>
                            <div class="interestField">
                                <span>
                                    Интересы:
                                </span>
                            </div>
                            <div class="whereField">
                                <span>
                                    Откуда
                                </span>
                            </div>
                            <div class="gmtField">
                                <span>
                                    Часовой пояс
                                </span>
                            </div>
                            <div class="genderField">
                                <span>
                                    Пол
                                </span>
                            </div>
                            <div class="subscriptionField">
                                <span>
                                    Подпись:
                                    Макс. ШИРИНА×ВЫСОТА картинок: 750×80 px
                                    Макс. вес картинок: 150 KB
                                    Макс. длина текста: 750 символов

                                    Как отключить показ подписей 
                                </span>
                            </div>
                            <div class="disableGetAndSendPMField">
                                <span>
                                    Отключить получение и отправку ЛС:
                                </span>
                            </div>
                            <div class="enableShowOfActiveDistributtionsField">
                                <span>
                                    Включить показ активных раздач и учет отданного:
                                </span>
                            </div>
                            <div class="hideListOfActiveDistributtionsField">
                                <span>
                                    Скрывать список активных раздач:
                                </span>
                            </div>
                            <div class="addRetreckerInTorrentFilesField">
                                <span>
                                    Добавлять ретрекер в торрент-файлы:
                                </span>
                            </div>
                            <div class="addNameOfThemeInNameDownloadedTorrentFileField">
                                <span>
                                    Добавлять название темы в имя скачиваемого торрент-файла:
                                </span>
                            </div>
                            <div class="disableAnimationIconsField">
                                <span>
                                    Отключить анимацию иконок:
                                </span>
                            </div>
                            <div class="domainNameField">
                                <span>
                                    Доменное имя для трекера:
                                </span>
                            </div>
                            <div class="avatarField withPreview">
                                <div>
                                    <span>
                                        Изображение под вашим именем в сообщениях
                                        Максимальные ШИРИНА и ВЫСОТА: 100x100 пикселов
                                        Максимальный вес: 30 KB
                                        Подробнее об ограничениях...
                                        Загрузить аватару
                                    </span>
                                    <input type="file" name="myfile" />
                                </div>
                                <img width="75px" height="75px" :src="`http://localhost:4000/avatars/getavatar/?torrentername=${torrenter.name}`" :alt="torrenter.name" />
                            </div>
                        </div>
                        <div class="inputFields">
                            <div class="nameField">
                                <p>
                                    {{ torrenter.name }}
                                </p>
                            </div>
                            <div class="passwordField">
                                <div class="passwordInputRow">
                                    <input v-model="password" ref="password" type="password" class="form-control w-25">
                                    <span>
                                        Введите текущий пароль, если хотите изменить его или e-mail
                                    </span>
                                </div>
                                <p>
                                    Показать пароль
                                </p>
                            </div>
                            <div class="passwordField">
                                <div class="passwordInputRow">
                                    <input v-model="newPassword" ref="password" type="password" class="form-control w-25">
                                    <span>
                                        Введите новый пароль, если меняете текущий (максимум: 20 символов)
                                    </span>
                                </div>
                                <p>
                                    Показать пароль
                                </p>
                            </div>
                            <div class="emailField">
                                <div class="passwordInputRow">
                                    <input v-model="email" type="email" class="form-control w-25">
                                    <span>
                                        На этот адрес вам будет отправлено письмо для завершения регистрации
                                    </span>
                                </div>
                            </div>
                            <div class="contactsField">
                                <input v-model="contacts" type="text" class="form-control w-25" />
                            </div>
                            <div class="hobbyField">
                                <input v-model="hobby" type="text" class="form-control w-25">
                            </div>
                            <div class="interestField">
                                <input v-model="interest" type="text" class="form-control w-25">
                            </div>
                            <div class="whereField">
                                <select v-model="where">
                                    <option value="Россия">Россия</option>
                                    <option value="Украина">Украина</option>
                                    <option value="Беларусь">Беларусь</option>
                                </select>
                                <div class="passwordInputRow">
                                    <span @click="where='Россия'" class="whereLabel">
                                        Россия
                                    </span>
                                    <span @click="where='Украина'" class="whereLabel">
                                        Украина
                                    </span>
                                    <span @click="where='Беларусь'" class="whereLabel">
                                        Беларусь
                                    </span>
                                </div>
                            </div>
                            <div class="gmtField">
                                <select v-model="gmt">
                                    <option value="gmt-12">GMT-12</option>
                                    <option value="gmt-11">GMT-11</option>
                                    <option value="gmt-10">GMT-10</option>
                                    <option value="gmt-9">GMT-9</option>
                                    <option value="gmt-8">GMT-8</option>
                                    <option value="gmt-7">GMT-7</option>
                                    <option value="gmt-6">GMT-6</option>
                                    <option value="gmt-5">GMT-5</option>
                                    <option value="gmt-4">GMT-4</option>
                                    <option value="gmt-3:30">GMT-3:30</option>
                                    <option value="gmt-3">GMT-3</option>
                                    <option value="gmt-2">GMT-2</option>
                                    <option value="gmt-1">GMT-1</option>
                                    <option value="gmt">GMT (Время по гринвичу)</option>
                                    <option value="gmt+1">GMT+1</option>
                                    <option value="gmt+2">GMT+2</option>
                                    <option value="gmt+3">GMT+3</option>
                                    <option value="gmt+3:30">GMT+3:30</option>
                                    <option value="gmt+4">GMT+4</option>
                                    <option value="gmt+4:30">GMT+4:30</option>
                                    <option value="gmt+5">GMT+5</option>
                                    <option value="gmt+5:30">GMT+5:30</option>
                                    <option value="gmt+6">GMT+6</option>
                                    <option value="gmt+6:30">GMT+6:30</option>
                                    <option value="gmt+7">GMT+7</option>
                                    <option value="gmt+8">GMT+8</option>
                                    <option value="gmt+9">GMT+9</option>
                                    <option value="gmt+9:30">GMT+9:30</option>
                                    <option value="gmt+10">GMT+10</option>
                                    <option value="gmt+11">GMT+11</option>
                                    <option value="gmt+12">GMT+12</option>
                                    <option value="gmt+13">GMT+13</option>
                                </select>
                            </div>
                            <div class="genderField">
                                <select v-model="gender">
                                    <option value="secret">Засекречен</option>
                                    <option value="male">Мужской</option>
                                    <option value="female">Женский</option>
                                </select>
                            </div>
                            <div class="subscriptionField">
                                <textarea  v-model="subscription">

                                </textarea>
                            </div>
                            <div class="disableGetAndSendPMField">
                                <div>
                                    <input v-model="disableGetAndSendPMField" value="yes" name="disableGetAndSendPMField" type="radio" />
                                    <span>
                                        Да
                                    </span>
                                </div>
                                <div>
                                    <input v-model="disableGetAndSendPMField" value="no" name="disableGetAndSendPMField" type="radio" />
                                    <span>
                                        Нет
                                    </span>
                                </div>
                            </div>
                            <div class="enableShowOfActiveDistributtionsField">
                                <div>
                                    <input v-model="enableShowOfActiveDistributtionsField" value="yes" name="enableShowOfActiveDistributtionsField" type="radio" />
                                    <span>
                                        Да
                                    </span>
                                </div>
                                <div>
                                    <input v-model="enableShowOfActiveDistributtionsField" value="no" name="enableShowOfActiveDistributtionsField" type="radio" />
                                    <span>
                                        Нет
                                    </span>
                                </div>
                            </div>
                            <div class="hideListOfActiveDistributtionsField">
                                <div>
                                    <input v-model="hideListOfActiveDistributtionsField" value="yes" name="hideListOfActiveDistributtionsField" type="radio" />
                                    <span>
                                        Да
                                    </span>
                                </div>
                                <div>
                                    <input v-model="hideListOfActiveDistributtionsField" value="no" name="hideListOfActiveDistributtionsField" type="radio" />
                                    <span>
                                        Нет
                                    </span>
                                </div>
                            </div>
                            <div class="addRetreckerInTorrentFilesField">
                                <div>
                                    <input v-model="addRetreckerInTorrentFilesField" value="yes" name="addRetreckerInTorrentFilesField" type="radio" />
                                    <span>
                                        Да
                                    </span>
                                </div>
                                <div>
                                    <input v-model="addRetreckerInTorrentFilesField" value="no" name="addRetreckerInTorrentFilesField" type="radio" />
                                    <span>
                                        Нет
                                    </span>
                                </div>
                            </div>
                            <div class="addNameOfThemeInNameDownloadedTorrentFileField">
                                <div>
                                    <input v-model="addNameOfThemeInNameDownloadedTorrentFileField" value="yes" name="addNameOfThemeInNameDownloadedTorrentFileField" type="radio" />
                                    <span>
                                        Да
                                    </span>
                                </div>
                                <div>
                                    <input v-model="addNameOfThemeInNameDownloadedTorrentFileField" value="no" name="addNameOfThemeInNameDownloadedTorrentFileField" type="radio" />
                                    <span>
                                        Нет
                                    </span>
                                </div>
                            </div>
                            <div class="disableAnimationIconsField">
                                <div>
                                    <input v-model="disableAnimationIconsField" name="disableAnimationIconsField" value="yes" type="radio" />
                                    <span>
                                        Да
                                    </span>
                                </div>
                                <div>
                                    <input v-model="disableAnimationIconsField" name="disableAnimationIconsField" value="no" type="radio" />
                                    <span>
                                        Нет
                                    </span>
                                </div>
                            </div>
                            <div class="domainNameField">
                                <input v-model="domainName" type="text" name="" id="" />
                                <span>
                                    Не работает для magnet-ссылок. Оставьте поле пустым для домена по умолчанию.
                                </span>
                            </div>
                            <div class="avatarField">
                                <input v-model="avatar" type="checkbox" />
                                <span>
                                    Удалить изображение
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- <div class="agreeBtnContainer">
                    <button @click="updateTorrenter()" class="btn btn-light agreeBtn">
                        Отправить
                    </button>
                </div> -->
                <div class="agreeBtnContainer">
                    <button type="submit" class="btn btn-light agreeBtn">
                        Отправить
                    </button>
                </div>
            </div>
        </form>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Register',
    data(){
        return {
            torrenter: {},
            password: '',
            newPassword: '',
            email: '',
            contacts: '',
            hobby: '',
            interest: '',
            where: 'Россия',
            gmt: 'gmt+3',
            gender: 'secret',
            subscription: '',
            disableGetAndSendPMField: false,
            enableShowOfActiveDistributtionsField: false,
            hideListOfActiveDistributtionsField: false,
            addRetreckerInTorrentFilesField: true,
            addNameOfThemeInNameDownloadedTorrentFileField: true,
            disableAnimationIconsField: false,
            domainName: '',
            avatar: '',
            token: window.localStorage.getItem('torrentiotoken')
        }
    },
    mounted(){
        jwt.verify(this.token, 'torrentiosecret', (err, decoded) => {
        if (err) {
            this.$router.push({ name: 'Home' })
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
                        
                        console.log(`this.torrenter: ${this.torrenter}`)
                        this.torrenter = JSON.parse(result).torrenter

                        this.password = this.torrenter.password
                        // this.newPassword = this.torrenter.password
                        this.email = this.torrenter.email
                        this.contacts = this.torrenter.contacts
                        this.hobby = this.torrenter.hobby
                        this.interest = this.torrenter.interest
                        this.where = this.torrenter.where
                        this.gmt = this.torrenter.gmt
                        this.gender = this.torrenter.gender
                        this.subscription = this.torrenter.subscription
                        this.disableGetAndSendPMField = this.torrenter.disableGetAndSendPM
                        this.enableShowOfActiveDistributtionsField = this.torrenter.enableShowOfActiveDistributtions
                        this.hideListOfActiveDistributtionsField = this.torrenter.hideListOfActiveDistributtions
                        this.addRetreckerInTorrentFilesField = this.torrenter.addRetreckerInTorrentFiles
                        this.addNameOfThemeInNameDownloadedTorrentFileField = this.torrenter.addNameOfThemeInNameDownloadedTorrentFile
                        this.disableAnimationIconsField = this.torrenter.disableAnimationIcons
                        this.domainName = this.torrenter.domainName
                        this.avatar = this.torrenter.avatar

                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Не удаётся получить торрентера')
                    }
                })
            }
        })
    },
    methods: {
        updateTorrenter(){
            fetch(`http://localhost:4000/api/torrenters/update/?torrentername=${this.torrenter.name}&torrenterpassword=${this.password}&torrenternewpassword=${this.newPassword}&torrenteremail=${this.email}&torrentercontacts=${this.contacts}&torrenterhobby=${this.hobby}&torrenterinterest=${this.interest}&torrentergender=${this.gender}&torrentergmt=${this.gmt}&torrenterwhere=${this.where}&torrentersubscription=${this.subscription}&torrenterdisablegetandsendpm=${this.disableGetAndSendPMField}&torrenterenableshowofactivedistributtions=${this.enableShowOfActiveDistributtionsField}&torrenterhidelistofactivedistributtions=${this.hideListOfActiveDistributtionsField}&torrenteraddretreckerintorrentfiles=${this.addRetreckerInTorrentFilesField}&torrenteraddnameofthemeinnamedownloadedetorrentfile=${this.addNameOfThemeInNameDownloadedTorrentFileField}&torrenterdisableanimationicons=${this.disableAnimationIconsField}&torrenterdomainname=${this.domainName}&torrenteravatar=${this.avatar}`, {
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
                    this.$router.push({ name: 'Home' } )
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Не удаётся редактироваль профиль')
                }
            });
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .agreeBtnContainer {
        display: flex;
        justify-content: center;
    }

    .agreeBtn {
        font-weight: bolder;
        border: 1px solid rgb(150, 150, 150);
        width: 275px;
        align-self: center;
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

    .agreement {
        margin: auto;
        width: 75%;
    }

    .agreement > p {
        color: rgb(50, 50, 150);
        font-weight: bolder;
    }

    .agreement > textarea {
        height: 150px;
        margin: 15px 0px;
    }

    .agreement > textarea:disabled {
        background-color: rgb(255, 255, 255);
    }

    .registerInfo {
        height: 35px;
        background-color: rgb(215, 215, 215);
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .requiredInfo {
        height: 35px;
        background-color: rgb(235, 235, 235);
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inputData {
        display: flex;
    }

    .inputLabels {
        display: flex;
        flex-direction: column;
        width: 40%;
    }

    .inputLabels > div, .inputFields > div {
        border: 1px solid rgb(200, 200, 200);
        box-sizing: border-box;
        padding: 0 15px;
    }
    
    .inputLabels > div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .inputFields {
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    .inputFields > div > input, .inputFields > div > div > input {
        height: 25px;
    }

    .inputFields > div {
        border-left: none;
    }

    .passwordInputRow {
        display: flex;
    }

    .passwordInputRow > * {
        margin: 0px 5px;
    }

    .nameField {
        height: 50px;
    }

    .passwordField {
        height: 50px;
    }

    .emailField {
        height: 30px;
    }

    .codeVerificationField {
        height: 125px;
    }

    .whereField {
        height: 50px;
    }

    .gmtField {
        height: 30px;
    }

    .genderField {
        height: 30px;
    }

    .subscriptionField {
        height: 100px;
    }

    .disableGetAndSendPMField {
        height: 30px;
    }

    .enableShowOfActiveDistributtionsField {
        height: 30px;
    }

    .hideListOfActiveDistributtionsField {
        height: 30px;
    }

    .addRetreckerInTorrentFilesField {
        height: 30px;
    }

    .addNameOfThemeInNameDownloadedTorrentFileField {
        height: 30px;
    }

    .disableAnimationIconsField {
        height: 30px;
    }

    .domainNameField {
        height: 50px;
    }

    .avatarField {
        height: 250px;
    }

    .code {
        width: 125px;
        margin: 5px;
    }

    .disableGetAndSendPMField, .enableShowOfActiveDistributtionsField, .hideListOfActiveDistributtionsField, .addRetreckerInTorrentFilesField, .addNameOfThemeInNameDownloadedTorrentFileField, .disableAnimationIconsField {
        display: flex;
    }

    .disableGetAndSendPMField > div, .enableShowOfActiveDistributtionsField > div, .hideListOfActiveDistributtionsField > div, .addRetreckerInTorrentFilesField > div, .addNameOfThemeInNameDownloadedTorrentFileField > div, .disableAnimationIconsField > div {
        display: flex;
        align-items: center;
        margin: 0px 15px;
    }

    .contactsField, .hobbyField, .interestField {
        height: 50px;
    }

    .whereLabel {
        cursor: pointer;
    }

    .withPreview {
        display: flex;
        flex-direction: column;
        justify-content: space-around !important;
    }

</style>