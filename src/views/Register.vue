<template>
    <div>
        <Header />
        <div class="main">
            <h4>
                Регистрация
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
                                Пароль: *
                            </span>
                        </div>
                        <div class="emailField">
                            <span>
                                E-mail: *
                            </span>
                        </div>
                        <div class="codeVerificationField">
                            <span>
                                Код подтверждения: *
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
                    </div>
                    <div class="inputFields">
                        <div class="nameField">
                            <input v-model="name" type="text" class="form-control w-25">
                            <p>
                                Пользователь с таким именем уже существует
                            </p>
                        </div>
                        <div class="passwordField">
                            <div class="passwordInputRow">
                                <input v-model="password" ref="password" type="password" class="form-control w-25">
                                <span>
                                    (максимум: 20 символов)
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
                        <div class="codeVerificationField">
                            <img class="code" :src="captchaSource" alt="">
                            <input v-model="code" type="text" class="form-control w-25">
                        </div>
                        <div class="whereField">
                            <select v-model="where">
                                <option value="Россия">Россия</option>
                                <option value="Украина">Украина</option>
                                <option value="Беларусь">Беларусь</option>
                            </select>
                            <div class="passwordInputRow">
                                <span>
                                    Россия
                                </span>
                                <span>
                                    Украина
                                </span>
                                <span>
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
                    </div>
                </div>
            </div>
            <div class="agreement">
                <p>
                    Для продолжения регистрации
                </p>
                <textarea class="form-control" disabled>
                    ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ

                    О САЙТЕ

                    Интернет - ресурс (сайт) RUTRACKER.ORG (в дальнейшем - Ресурс) является интернет-сайтом, позволяющим пользователям обмениваться друг с другом информацией по протоколу бит-торрент, а также в свободной форме, и предоставляющим средства для контроля целостности передаваемой информации (посредством hash-файлов).

                    1. О ПОЛЬЗОВАТЕЛЬСКОМ СОГЛАШЕНИИ

                    Настоящее ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ вступает в силу после нажатия кнопки "согласен" внизу страницы и действует все время использования Пользователем Ресурса. ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ может быть изменено Администрацией без какого-либо уведомления пользователей. Новая версия ПС вступает в силу по истечении 3 (трех) дней с момента ее размещения, если иное не предусмотрено новой редакцией ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ.

                    2. УСЛОВИЯ ОГРАНИЧЕНИЯ ОТВЕТСТВЕННОСТИ

                    Пользователь прямо соглашается c тем, что использует Ресурс на свой собственный риск.

                    Пользователь знает, и согласен с тем, что Ресурс имеет дело с материалами и данными, созданными третьими лицами и размещенными ими в сети Интернет на своих компьютерах и (или) серверах. Содержание и безопасность этих материалов не могут быть проконтролированы Администрацией Ресурса, поэтому последняя не несет ответственности:

                    - за содержание материалов, полученных Пользователем в результате использования данных с Ресурса, их возможное несоответствие действующему законодательству или оскорбительный характер;

                    - за последствия применения, использования или неиспользования полученной информации;

                    - за возможное несоответствие результатов, полученных при использовании Ресурса, ожиданиям Пользователя;

                    - за какие-либо повреждения оборудования или программного обеспечения Пользователя, возникшие в результате использовании Ресурса;

                    - за отсутствие возможности использования Ресурса по каким-либо причинам;

                    - за последствия, которые может повлечь распространение нелегального либо нелицензионного программного обеспечения и аудио-/видеопродукции, а также иных материалов либо данных, затрагивающих права третьих лиц.

                    Ни при каких обстоятельствах Ресурс не несет перед Пользователем, либо третьими лицами ответственности за ущерб, убытки или расходы, возникшие в связи с настоящим Ресурсом, его использованием или невозможностью использования, включая упущенную либо недополученную прибыль.

                    Пользователь обязуется не передавать другим лицами свои персональные данные полученные при регистрации (логин и пароль) для входа/идентификации на ресурс и несет полную ответственность за утерю, пропажу, исчезновение или передачу иными способами персональных данных, а также за последствия связанные с данным деянием. Администрация Ресурса не несёт ответственности за действия третьих лиц, воспользовавшихся персональными данными Пользователя.

                    Пользователь информируется, что неиспользуемые в течение длительного времени аккаунты удаляются и восстановлению не подлежат.

                    Администрация Ресурса не несет никаких обязательств по обеспечению конфиденциальности в отношении информации, предоставляемой его Пользователям, хотя принимает все возможные меры к этому, если не имеется договоренности об обратном или соответствующих требований действующего законодательства.

                    В обязанности Ресурса НЕ ВХОДИТ контроль легальности или нелегальности передаваемой информации (любой, включая, но не ограничиваясь, информацией передаваемой между пользователями по протоколу бит-торрент, внутренней пересылки информации в виде различных ссылок, текстов или архивов), определение прав собственности или законности передачи, приема или использования этой информации.

                    3. ОГРАНИЧЕНИЯ НА ИСПОЛЬЗОВАНИЕ РЕСУРСА ПОЛЬЗОВАТЕЛЕМ.

                    При использовании данного Ресурса, ПОЛЬЗОВАТЕЛЬ не имеет права, и соглашается с этим:

                    - размещать hash-файлы(торренты) данных, содержащие вирусы или другие компьютерные программы заведомо вредоносного действия, файлы или программы, предназначенные для нарушения, уничтожения либо ограничения функциональности любого компьютерного или телекоммуникационного оборудования или программ, для осуществления несанкционированного доступа, а также серийные номера к коммерческим программным продуктам и программы для их генерации, логины, пароли и прочие средства для получения несанкционированного доступа к платным ресурсам в Интернете, а также размещать ссылки на вышеуказанную информацию;

                    - размещать hash-файлы(торренты) любых сообщений, данных или программ, использование которых затрагивает какой-либо патент, торговую марку, коммерческую тайну, копирайт или прочие права собственности и/или авторские и смежные с ним права третьих лиц;

                    - отправлять на адреса электронной почты, указанные на сайте, несанкционированные почтовые сообщения рекламного типа (junk mail, spam);

                    - копировать и использовать в коммерческих целях любую информацию, получаемую посредством данного ресурса, нарушающую права других Пользователей или могущую нанести им прямой материальный или моральный ущерб;

                    - размещать ссылки на ресурсы Сети;

                    - заниматься коммерцией при помощи форума; проявлять расовую, национальную и религиозную неприязнь, призывать к самоубийству, пропагандировать терроризм, экстремизм, наркотики и прочие темы, несовместимые с общепринятыми законами морали и приличия;

                    - выдавать себя за другого человека или за представителя организации и/или сообщества без достаточных на то прав, в том числе за сотрудников Aдминистрации, за владельца Ресурса.

                    4. ГАРАНТИИ РАБОТОСПОСОБНОСТИ

                    Доступ к Ресурсу предоставляются по принципу «как есть» («as is») без гарантий любого рода, как прямых, так и косвенных.

                    В частности Администрация Ресурса не гарантирует работоспособность как сайта и его отдельных разделов, так и работоспособность и достоверность ссылок, размещенных на нем его Пользователями.

                    Ресурс не несет ответственности за любые прямые или непрямые убытки, произошедшие из-за: использования либо невозможности использования службы; несанкционированного доступа к Вашим коммуникациям.

                    5. ПРАВА АДМИНИСТРАЦИИ РЕСУРСА.

                    Администрация Ресурса вправе отказать в доступе к Ресурсу любому Пользователю, или группе Пользователей без объяснения причин своих действий и предварительного уведомления.

                    Администрация Ресурса вправе изменять либо удалять ссылки на информацию, hash-файлы (торренты), графические, звуковые и прочие данные, размещенные Пользователями на Ресурсе, без предварительного уведомления и объяснения причин своих действий.

                    6. ОТВЕТСТВЕННОСТЬ СТОРОН.

                    Пользователь соглашается с тем, что все возможные споры по поводу СОГЛАШЕНИЯ ОБ ИСПОЛЬЗОВАНИИ будут разрешаться по нормам российского права.

                    Пользователь соглашается с тем, что нормы и законы о защите прав потребителей не могут быть применимы к использованию им Ресурса, поскольку он не оказывает возмездных услуг.

                    Ресурс не устанавливает с пользователями агентских отношений, отношений товарищества, отношений по совместной деятельности, отношений личного найма, а также каких-то иных отношений, прямо не описанных в СОГЛАШЕНИИ ОБ ИСПОЛЬЗОВАНИИ.

                    Бездействие со стороны Ресурса в случае нарушения Пользователем, либо группой Пользователей ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ не означает того, что Ресурс содействует Пользователю, либо группе Пользователей в таковых действиях.

                    Бездействие со стороны Ресурса в случае нарушения Пользователем либо группой Пользователей ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ не лишает Ресурс права предпринять соответствующие действия в защиту своих интересов позднее.

                    7. СОГЛАСИЕ С ПОЛЬЗОВАТЕЛЬСКИМ СОГЛАШЕНИЕМ.

                    ЕСЛИ ВЫ НЕ СОГЛАСНЫ СO ВСЕМИ ВЫШЕУКАЗАННЫМИ УСЛОВИЯМИ, ВЫ НЕ ИМЕЕТЕ ПРАВА ПОСЕЩАТЬ РЕСУРС КАК В ЦЕЛОМ, ТАК И ЛЮБУЮ ЕГО ЧАСТЬ, КРОМЕ СТРАНИЦЫ С ПОЛЬЗОВАТЕЛЬСКИМ СОГЛАШЕНИЕМ, ПОЛУЧАТЬ И/ИЛИ ИСПОЛЬЗОВАТЬ СОДЕРЖИМОЕ НАСТОЯЩЕГО РЕСУРСА ЛЮБЫМИ ДРУГИМИ СПОСОБАМИ КАК В ЦЕЛОМ ТАК И В ЛЮБОЙ ЕГО ЧАСТИ!

                    ЕСЛИ ВЫ НЕ СОГЛАСНЫ С ПОЛЬЗОВАТЕЛЬСКИМ СОГЛАШЕНИЕМ ИЛИ ВАМ ЕЩЕ НЕ ИСПОЛНИЛОСЬ 18 ЛЕТ, ВЫ ДОЛЖНЫ НЕМЕДЛЕННО ПОКИНУТЬ РЕСУРС.

                </textarea>
            </div>
            <div class="agreeBtnContainer">
                <button @click="createTorrenter()" class="btn btn-light agreeBtn">
                    Я согласен с условиями
                </button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'
const captcha = require("nodejs-captcha")

export default {
    name: 'Register',
    data(){
        return {
            name: '',
            password: '',
            email: '',
            where: 'Россия',
            gmt: 'gmt+3',
            gender: 'secret',
            code: '',
            captchaSource: '',
            captchaCode: '',
            token: ''
        }
    },
    mounted() {
        let result = captcha()
        this.captchaSource = result.image
        this.captchaCode = result.value
    },
    methods: {
        createTorrenter(){
            if(this.captchaCode === this.code) {
                fetch(`http://localhost:4000/api/torrenters/create/?torrentername=${this.name}&torrenterpassword=${this.password}&torrenteremail=${this.email}&torrentergender=${this.gender}&torrentergmt=${this.gmt}&torrenterwhere=${this.where}`, {
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
                    //     this.token = jwt.sign({
                    //         torrenter: this.name
                    //     }, 'torentiosecret', { expiresIn: '5m' })
                    //     localStorage.setItem('torrentiotoken', this.token)
                        this.$router.push({ name: 'Home' } )
                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Не удаётся создать пользователя')
                    }
                });
            } else {
                alert('Неправильно введён код')
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

    .code {
        width: 125px;
        margin: 5px;
    }

</style>