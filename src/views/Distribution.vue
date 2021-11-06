<template>
    <div>
        <Header />
        <div class="main">
            <span class="">
                PSPaudioware - PSP Plugins Bundle 2021.9 VST, VST3, AAX x64 [09.2021]
            </span>
            <div class="socialsMedia searchByDistributionsHeader">
                <img src="https://static.t-ru.org/templates/v1/images/soc_sprite.png" alt="">
            </div>
            <div class="distributtion">
                <div class="distributtionAuthor">
                    <span class="authorName">
                        {{ distributtion.authorName }}
                    </span>
                    <img width="75px" src="https://static.t-ru.org/ranks/s_topseed_7.gif" alt="">
                    <img width="85px" :src="`http://localhost:4000/avatars/getavatar/?torrentername=${distributtionTorrenter.name}`" ref="avatar" @error="$refs.avatar.src='https://static.t-ru.org/avatars/0/79/3992479.jpg'" alt="">
                    <span class="authorMeta">
                        Стаж: {{ age }}
                    </span>
                    <span class="authorMeta">
                        Сообщений: {{ distributtionTorrenter.messages }}
                    </span>
                    <img v-if="distributtionTorrenter.where.includes('Россия')" class="authorCountry" src="../assets/flag.png" alt="" />
                    <img v-else-if="distributtionTorrenter.where.includes('Украина')" class="authorCountry" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png" alt="" />
                    <img v-else-if="distributtionTorrenter.where.includes('Беларусь')" class="authorCountry" src="data:image/png;base64,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" alt="" />
                    <div class="postAuthorFooter">
                        <span>
                            [
                            <span class="postQuote">    
                                Профиль
                            </span>
                            ]
                            [
                            <span class="postQuote">
                                ЛС
                            </span>
                            ]
                        </span>
                    </div>
                </div>
                <div class="postContent">
                    <div class="postContentHeader">
                        <div>
                            <span class="postDate">
                                {{ `${distributtion.added.split('T')[0].split('-')[2]}-${monthNames[distributtion.added.split('T')[0].split('-')[1]]}-${distributtion.added.split('T')[0].split('-')[0]} ${distributtion.added.split('T')[1].split(':')[0]}:${distributtion.added.split('T')[1].split(':')[1]}` }}
                            </span>
                            <span>
                                <!-- (спустя 13 мин.)  -->
                            </span>
                        </div>
                        <div>
                            <span>
                                [
                                <span class="postQuote">
                                    Код
                                </span>
                                ]
                            </span>
                        </div>
                    </div>
                    <!-- <p class="distributionHeader">
                        {{ distributtion.theme }}
                    </p>
                    <div class="distributionContent">
                        <div class="distributionContentAside">
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Год/Дата Выпуска:
                                </span>
                                 09.2021
                            </span>
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Версия:
                                </span>
                                2021.9                                
                            </span>
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Разработчик:
                                </span>
                                 PSPaudioware
                            </span>
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Сайт разработчика:
                                </span>
                                 pspaudioware
                            </span>
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Формат:
                                </span>
                                 VST, VST3, AAX
                            </span>
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Разрядность:
                                </span>
                                 64bit
                            </span>
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Таблэтка:
                                </span>
                                 вылечено (поставь и работай) | R2R
                            </span>
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Системные требования:
                                </span>
                                 • Windows 10
                            </span>
                            <span>
                            • VST, VST3 compatible application
                            </span>
                            <span>
                                <span class="distributionContentAsideHeader">
                                    Описание:
                                </span>
                                 Плагин сет от копании PSPaudioware:
                            </span>
                            <span>
                                PSPaudioware.PSP.2445.EMT.v1.3.8
                            </span>
                            <span>
                                PSPaudioware.PSP.E27.v1.7.1
                            </span>
                            <span>
                                PSPaudioware.PSP.InfiniStrip.v1.2.1
                            </span>
                            <span>
                                PSPaudioware.PSP.PianoVerb2.v2.5.1
                            </span>
                            <span>
                                PSPaudioware.PSP.VintageWarmer2.v2.9.0 
                            </span>
                        </div>
                        <img class="distributionContentPicture" src="https://i115.fastpic.org/big/2021/0913/e0/1c1629dfc23fe397380265260aeb4fe0.jpg?r=1" alt="">
                    </div>
                    <div class="toggleList">
                        <button class="toggleListBtn">
                            +
                        </button>
                        <span class="lastThanksgivers">
                            Скриншоты
                        </span>
                    </div>
                    <div class="toggleList">
                        <button class="toggleListBtn">
                            +
                        </button>
                        <span class="lastThanksgivers">
                            Скриншоты окна About
                        </span>
                    </div> -->

                    <div v-for="(rowMarkup, line) in distributtion.markup.split('\@').length" :key="rowMarkup">
                        <p v-if="distributtion.markup.split('\@')[line].match(/^\[size=(.*)$/)" :style="`font-size: ${distributtion.markup.split('\@')[line].replace(/\[size=/, '').replace(/\].*\[\/size\]/, '')}px;`">
                            {{ distributtion.markup.split('\@')[line].replace(/(\[size=(.{1,2})\])/, '').replace(/(\[\/size\])/, '') }}
                        </p>
                        <div v-else-if="distributtion.markup.split('\@')[line].match(/^\[img=.*$/)" :style="`display: flex; justify-content: ${distributtion.markup.split('\@')[line].replace(/\[img=/, '').replace(/\].*\[\/img\]/, '').includes('right') ? 'flex-end;' : 'flex-start;'}`">
                            <img :title="distributtion.markup.split('\@')[line].replace(/\[img=/, '').replace(/\].*\[\/img\]/, '')" :src="distributtion.markup.split('\@')[line].replace(/(\[img=(.{4,5})\])/, '').replace(/\[\/img\]/, '')" :alt="distributtion.markup.split('\@')[line].replace(/(\[img=.....\])/, '').replace(/\[\/img\]/, '')" width="250px" />
                        </div>
                        <div v-else-if="distributtion.markup.split('\@')[line].match(/^\[b.*$/)">
                            <b>
                                {{ distributtion.markup.split('\@')[line].replace(/(\[b\])/, '').replace(/(\[\/b\].*)/, '') }}
                            </b>
                            <span>
                                {{
                                    distributtion.markup.split('\@')[line].replace(/.*\[\/b\]/, '')
                                }}
                            </span>
                        </div>
                        <Spoiler v-else-if="distributtion.markup.split('\@')[line].match(/^\[spoiler=.*$/)" :markup="distributtion.markup.split('\@')[line]" />
                    </div>

                    <div class="distributtionDownload">
                        <div class="distributtionDownloadMeta distributtionDownloadMetaHeader">
                            Как качать FAQ Покраснели раздачи?
                        </div>
                        <table class="distributtionDownloadTable">
                            <tr>
                                <td>
                                    Зарегистрирован: 	
                                </td>
                                <td>
                                    {{ `${distributtion.added.split('T')[0].split('-')[2]}-${monthNames[distributtion.added.split('T')[0].split('-')[1]]}-${distributtion.added.split('T')[0].split('-')[0]} ${distributtion.added.split('T')[1].split(':')[0]}:${distributtion.added.split('T')[1].split(':')[1]}` }} Скачан: {{ distributtion.downloaded }} раза 
                                </td>
                                <td rowspan="4">
                                    <div class="downloadCell">
                                        <div @click="downloadDistributtion()" class="downloadTorrent">
                                            <img src="https://static.t-ru.org/templates/v1/images/attach_big.gif" alt="">
                                            <span class="">
                                                Скачать .torrent
                                            </span>
                                        </div>
                                        <span>
                                            {{ distributtion.size }} КB
                                        </span>
                                        <button @click="showListOfFiles = !showListOfFiles">
                                            Список файлов
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Тип:
                                </td>
                                <td>
                                    обычная
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Статус:
                                </td>
                                <td>
                                    * {{
                                        distributtion.checked ?
                                            'проверено'
                                        :
                                            'не проверено'
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Размер:
                                </td>
                                <td>
                                    {{ distributtion.size }} MB 
                                    <img width="15px" src="https://static.t-ru.org/templates/v1/images/magnet_1.svg" alt="">
                                    Скачать по magnet-ссылке
                                </td>
                            </tr>
                        </table>
                        <div class="distributtionDownloadMeta distributtionDownloadMetaFooter">
                            Аудит юзабилити вашего сайта, тест на уязвимости и анализ текстов   
                        </div>
                    </div>
                    <div class="listOfFiles" v-if="showListOfFiles">
                        <div class="listOfFilesHeader">
                            <div>
                                <span>
                                    Свернуть
                                </span>
                                <span>
                                    Развернуть
                                </span>
                                <span>
                                    Переключить
                                </span>
                            </div>
                            <div>
                                <span>
                                    Имя
                                </span>
                                <span>
                                    Размер
                                </span>
                                <span>
                                    Сравнить с др. раздачей
                                </span>
                                <span>
                                    Увел./умен. окно
                                </span>
                            </div>
                        </div>
                        <div class="files">
                            <div class="file">
                                <span class="material-icons">
                                    arrow_drop_down
                                </span>
                                <span class="folder material-icons">
                                    folder
                                </span>
                                <span class="fileName">
                                    ./PSPaudioware PSP Plugins Bundle 2021.9
                                </span>
                                <span class="fileSize">
                                    91.69 MB
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="thanksBtnContainer">
                        <button class="btn btn-light thanksBtn">
                            Сказать "Cпасибо"
                        </button>
                    </div>
                    <div class="toggleList">
                        <button class="toggleListBtn">
                            +
                        </button>
                        <span class="lastThanksgivers">
                            Последние поблагодарившие
                        </span>
                    </div>
                    <hr />
                    <p>
                        Нажимая на "Скачать .torrent", вы соглашаетесь с положением, что с этого момента вам никто ничего здесь не должен.
                    </p>
                </div>
            </div>
            <div class="ads">
                <img src="https://cdn.admitad-connect.com/public/bs/2021/05/06/728x90_img_F_Dortmund.cc7f.jpg" alt="">
            </div>
            <!-- <div class="post firstPost">
                <div class="postAuthor">
                    <span class="authorName">
                        alexpober
                    </span>
                    <img width="85px" src="https://static.t-ru.org/avatars/0/79/3992479.jpg" alt="">
                    <span class="authorMeta">
                        Стаж: 13 лет 4 месяца
                    </span>
                    <span class="authorMeta">
                        Сообщений: 118
                    </span>
                    <img class="authorCountry" src="../assets/flag.png" alt="" />
                    <div class="postAuthorFooter">
                        <span>
                            [
                            <span class="postQuote">    
                                Профиль
                            </span>
                            ]
                            [
                            <span class="postQuote">
                                ЛС
                            </span>
                            ]
                        </span>
                    </div>
                </div>
                <div class="postContent">
                    <div class="postContentHeader">
                        <div>
                            <span class="postDate">
                                13-Сен-21 15:03
                            </span>
                            <span>
                                (спустя 13 мин.) 
                            </span>
                        </div>
                        <div>
                            <span>
                                [
                                <span class="postQuote">
                                    Цитировать
                                </span>
                                ]
                            </span>
                        </div>
                    </div>
                    <div class="postMessage">
                        <span>
                            МЕГАМОЩЬ! 
                        </span>
                    </div>
                </div>
            </div>
            <div class="post secondPost">
                <div class="postAuthor">
                    <span class="authorName">
                        alexpober
                    </span>
                    <img width="85px" src="https://static.t-ru.org/avatars/0/79/3992479.jpg" alt="">
                    <span class="authorMeta">
                        Стаж: 13 лет 4 месяца
                    </span>
                    <span class="authorMeta">
                        Сообщений: 118
                    </span>
                    <img class="authorCountry" src="../assets/flag.png" alt="" />
                    <div class="postAuthorFooter">
                        <span>
                            [
                            <span class="postQuote">    
                                Профиль
                            </span>
                            ]
                            [
                            <span class="postQuote">
                                ЛС
                            </span>
                            ]
                        </span>
                    </div>
                </div>
                <div class="postContent">
                    <div class="postContentHeader">
                        <div>
                            <span class="postDate">
                                13-Сен-21 15:03
                            </span>
                            <span>
                                (спустя 13 мин.) 
                            </span>
                        </div>
                        <div>
                            <span>
                                [
                                <span class="postQuote">
                                    Цитировать
                                </span>
                                ]
                            </span>
                        </div>
                    </div>
                    <div class="postMessage">
                        <span>
                            МЕГАМОЩЬ! 
                        </span>
                    </div>
                </div>
            </div> -->

            <div v-for="(post, postIdx) in distributtion.posts.filter((post, postIdx) => {
                return true
            })" :key="post" :class="`post ${(postIdx + 1) % 2 === 0 ? 'secondPost' : 'firstPost'}`">
                <div class="postAuthor">
                    <span class="authorName">
                        {{ post.author }}
                    </span>
                    <img width="85px" src="https://static.t-ru.org/avatars/0/79/3992479.jpg" alt="">
                    <span class="authorMeta">
                        Стаж: 13 лет 4 месяца
                    </span>
                    <span class="authorMeta">
                        Сообщений: 118
                    </span>
                    <img class="authorCountry" src="../assets/flag.png" alt="" />
                    <div class="postAuthorFooter">
                        <span>
                            [
                            <span class="postQuote">    
                                Профиль
                            </span>
                            ]
                            [
                            <span class="postQuote">
                                ЛС
                            </span>
                            ]
                        </span>
                    </div>
                </div>
                <div class="postContent">
                    <div class="postContentHeader">
                        <div>
                            <span class="postDate">
                                {{ post.date }}
                            </span>
                            <span>
                                (спустя 13 мин.) 
                            </span>
                        </div>
                        <div>
                            <span>
                                [
                                <span class="postQuote">
                                    Цитировать
                                </span>
                                ]
                            </span>
                        </div>
                    </div>
                    <div class="postMessage">
                        <span>
                            {{ post.message }}
                        </span>
                    </div>
                </div>
            </div>
            <!-- <div v-for="post in distributtion.posts.filter((post, postIdx) => {
                return postIdx % 2 !== 0
            })" :key="post" class="post secondPost">
                <div class="postAuthor">
                    <span class="authorName">
                        {{ post.author }}
                    </span>
                    <img width="85px" src="https://static.t-ru.org/avatars/0/79/3992479.jpg" alt="">
                    <span class="authorMeta">
                        Стаж: 13 лет 4 месяца
                    </span>
                    <span class="authorMeta">
                        Сообщений: 118
                    </span>
                    <img class="authorCountry" src="../assets/flag.png" alt="" />
                    <div class="postAuthorFooter">
                        <span>
                            [
                            <span class="postQuote">    
                                Профиль
                            </span>
                            ]
                            [
                            <span class="postQuote">
                                ЛС
                            </span>
                            ]
                        </span>
                    </div>
                </div>
                <div class="postContent">
                    <div class="postContentHeader">
                        <div>
                            <span class="postDate">
                                {{ post.date }}
                            </span>
                            <span>
                                (спустя 13 мин.) 
                            </span>
                        </div>
                        <div>
                            <span>
                                [
                                <span class="postQuote">
                                    Цитировать
                                </span>
                                ]
                            </span>
                        </div>
                    </div>
                    <div class="postMessage">
                        <span>
                            {{ post.message }}
                        </span>
                    </div>
                </div>
            </div> -->

            <div class="searchByDistributionsHeader">
                <span>
                    Быстрый ответ
                </span>
            </div>
            <textarea v-model="message" name="" id="" cols="30" rows="10">

            </textarea>
            <div class="distributtionActions">
                <span @click="sendMessage()">
                    Ответить
                </span>
                <span>
                    Главная »
                </span>
                <span>
                    Программы и Дизайн » 
                </span>
                <span>
                    Программы для работы с мультимедиа и 3D » 
                </span>
                <span>
                    Плагины для обработки звука
                </span>
            </div>
            <div class="selectForum">
                <select class="form-select h-75 w-25" aria-label="Default select example">
                    <option selected>Браузерные и клиентские онлайн-игры</option>
                </select>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Spoiler from '@/components/Spoiler.vue'

import * as jwt from 'jsonwebtoken'
import calculateAge from 'calculate-age'

export default {
    name: 'Distribution',
    data(){
        return {
            showListOfFiles: false,
            torrenter: {},
            distributtion: {},
            message: '',
            distributtionTorrenter: {},
            age: '0',
            monthNames: {
                '1': 'Янв',
                '2': 'Фев',
                '3': 'Мар',
                '4': 'Апр',
                '5': 'Мая',
                '6': 'Июн',
                '7': 'Июл',
                '8': 'Авг',
                '9': 'Сен',
                '01': 'Янв',
                '02': 'Фев',
                '03': 'Мар',
                '04': 'Апр',
                '05': 'Мая',
                '06': 'Июн',
                '07': 'Июл',
                '08': 'Авг',
                '09': 'Сен',
                '10': 'Окт',
                '11': 'Ноя',
                '12': 'Дек',
            },
            token: window.localStorage.getItem("torrentiotoken")
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
                        this.torrenter = JSON.parse(result).torrenter

                        fetch(`http://localhost:4000/api/distributions/get/?distributionid=${this.$route.query.distributtionid}`, {
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
                               console.log("получаем раздачу")
                               this.distributtion = JSON.parse(result).distribution

                                fetch(`http://localhost:4000/api/torrenters/get/?torrenterid=${this.distributtion.author}`, {
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
                                    this.distributtionTorrenter = JSON.parse(result).torrenter
                                    console.log(`JSON.parse(result).torrenter: ${JSON.parse(result).torrenter}`)
                                    
                                    // this.age = `${new calculateAge(`${this.distributtionTorrenter.created.split('T')[0]}`, `${new Date().toLocaleDateString().split('-')[2]}-${new Date().toLocaleDateString().split('-')[1]}-${new Date().toLocaleDateString().split('-')[0]}`).getObject().years} лет ${new calculateAge(`${this.distributtionTorrenter.created.split('T')[0]}`, `${new Date().toLocaleDateString().split('-')[2]}-${new Date().toLocaleDateString().split('-')[1]}-${new Date().toLocaleDateString().split('-')[0]}`).getObject().months} месяц`
                                    let dateDifference = this.getDateDiff(`${new Date().toLocaleDateString().split('.')[2]}-${new Date().toLocaleDateString().split('.')[1]}-${new Date().toLocaleDateString().split('.')[0]}`, `${this.distributtionTorrenter.created.split('T')[0]}`)
                                    // let dateDifference = this.getDateDiff(`${new Date().toLocaleDateString().split('.')[2]}-${new Date().toLocaleDateString().split('.')[1]}-${new Date().toLocaleDateString().split('.')[0]}`, `2018-02-15`)
                                    this.age = `${dateDifference.years} лет ${dateDifference.months} месяцев`

                                }
                            })

                           } else if(JSON.parse(result).status.includes('Error')){

                           } 
                        })

                    } else if(JSON.parse(result).status.includes('Error')){
                        
                    }
                })
            }
        })
    },
    methods: {
        getDateDiff(time1, time2) {
            let str1 = time1.split('-')
            let str2 = time2.split('-')
            let t1 = new Date(str1)
            let t2 = new Date(str2)
            let diffMS = t1 - t2
            console.log(diffMS + ' ms')
            let diffS = diffMS / 1000
            console.log(diffS + ' ')
            let diffM = diffS / 60
            console.log(diffM + ' minutes')
            let diffH = diffM / 60
            console.log(diffH + ' hours')
            let diffD = diffH / 24
            console.log(diffD + ' days')
            let diffMonths = Math.floor(diffD / 30)
            console.log(diffMonths + ' months')
            let diffY = Math.floor(diffMonths / 12)
            console.log(diffY + ' years')
            if(diffMonths > 11) {
                diffMonths = diffMonths - diffY * 12
            }
            return {
                months: diffMonths,
                years: diffY
            }
        },
        sendMessage(){
            fetch(`http://localhost:4000/api/distributtions/posts/add/?distributtionid=${this.$route.query.distributtionid}&torrenter=${this.torrenter.name}&distributtionmessage=${this.message}`, {
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
                    this.$router.push({ name: 'Home' })
                } else if(JSON.parse(result).status.includes('Error')){

                } 
            })
        },
        downloadDistributtion(){
            window.location = `http://localhost:4000/api/distributtions/download/?distributtiontheme=${this.distributtion.theme}`
        }
    },
    components: {
        Header,
        Footer,
        Spoiler
    }
}
</script>

<style scoped>
    
    .main {
        margin: auto;
        width: 98%;
        display: flex;
        flex-direction: column;
    }

    .searchByDistributionsHeader {
        height: 35px;
        background-color: rgb(0, 100, 255);
        font-weight: bolder;
        color: rgb(100, 200, 255);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .postContent {
        width: 100%;
    }

    .postContentHeader {
        display: flex;
        justify-content: space-between;
        border: 1px solid rgb(150, 150, 150);
        border-left: none;
        height: 35px;
    }

    .post {
        display: flex;
    }

    .postAuthor {
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(150, 150, 150);
        width: 15%;
        box-sizing: border-box;
        padding-left: 5px;
    }

    .authorName {
        font-weight: bolder;
        color: rgb(100, 100, 255);
        cursor: pointer;
    }

    .authorName:hover {
        text-decoration: underline;
    }

    .firstPost {
        background-color: rgb(215, 215, 215);
    }

    .secondPost {
        background-color: rgb(235, 235, 235);
    }

    .postAuthorFooter {
        border-top: 1px solid rgb(150, 150, 150);
    }

    .postMessage {
        border: 1px solid rgb(150, 150, 150);
        height: calc(100% - 35px);
        border-left: none;
        border-top: none;
    }

    .postContentHeader, .postMessage {
        box-sizing: border-box;
        padding: 0px 15px;
    }

    .authorMeta {
        font-size: 12px;
    }

    .postQuote, .postDate {
        color: rgb(100, 100, 255);
        cursor: pointer;
        font-size: 12px;
    }

    .authorCountry {
        width: 25px;
    }

    .secondPost > .postAuthor, .secondPost > .postContent > .postContentHeader {
        border-top: none;
    }

    .distributtion {
        display: flex;
        width: 100%;
        background-color: rgb(240, 240, 240);
    }

    .distributtionAuthor {
        display: flex;
        flex-direction: column;
        border: 1px solid rgb(150, 150, 150);
        width: 15%;
        box-sizing: border-box;
        padding-left: 5px;
        border-bottom: none;
    }

    .distributionHeader {
        font-weight: bolder;
        text-align: center;
        font-size: 24px;
    }

    .distributionContent {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px;
    }

    .distributionContentAside {
        display: flex;
        flex-direction: column;
    }

    .distributionContentPicture {
        width: 350px;
        height: 350px;
    }

    .lastThanksgivers {
        font-weight: bolder;
        font-size: 12px;
    }

    .toggleList {
        border: 1px solid rgb(215, 215, 215);
        background-color: rgb(235, 235, 235);
        display: flex;
        align-items: center;
        width: 90%;
        margin: 15px auto;
        height: 20px;
    }

    .toggleListBtn {
        margin: 5px 20px;
        border: 1px solid rgb(150, 150, 150);
        max-width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

    .thanksBtn {
        font-weight: bolder;
        border: 1px solid rgb(150, 150, 150);
        width: 175px;
        align-self: center;
    }

    .thanksBtnContainer {
        display: flex;
        justify-content: center;        
    }

    .distributtionDownloadMeta {
        background-color: rgb(215, 215, 255);
        height: 30px;
        color: rgb(125, 125, 255);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(185, 185, 185);
    }

    .distributtionDownload {
        display: flex;
        flex-direction: column;
        width: 85%;
        margin: 15px auto;
        text-align: center;
    }
    
    .distributtionDownloadMetaHeader {
        border-bottom: none;
    }

    .distributtionDownloadMetaFooter {
        font-weight: bolder;
        border-top: none;
    }

    .distributtionDownloadTable > tr > td {
        border: 1px solid rgb(185, 185, 185);
    }

    .downloadCell {
        display: flex;
        flex-direction: column;
    }

    .downloadCell > * {
        align-self: center;
    }

    .downloadTorrent {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .downloadTorrent > span {
        color: rgb(0, 100, 255);
        font-weight: bolder;
    }

    .downloadTorrent:hover, .downloadTorrent > span:hover {
        color: rgb(200, 100, 0) !important;
    }

    .downloadTorrent > * {
        align-self: center;
    }

    .distributionContentAsideHeader {
        font-weight: bolder;
    }

    .socialsMedia {
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        padding-right: 15px;
    }

    .ads {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(180, 180, 180);
        width: 100%;
        height: 115px;
        background-color: rgb(220, 220, 220);
        border-bottom: none;
    }

    .selectForum {
        display: flex;
        justify-content: flex-end;
    }

    .distributtionActions > span {
        color: rgb(50, 50, 255);
        font-weight: bolder;
        cursor: pointer;
    }

    .listOfFiles {
        margin: 20px auto;
        width: 85%;
    }

    .listOfFilesHeader {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 15px;
    }

    .listOfFilesHeader > div > span {
        color: rgb(50, 50, 255);
        margin: 0px 5px;
        font-size: 12px;
        cursor: pointer;
    }

    .listOfFilesHeader > div > span:hover {
        color: rgb(200, 75, 0);
    }

    .files {
        height: 250px;
        border: 1px solid rgb(225, 225, 225);
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        padding: 10px;
    }

    .file {
        display: flex;
        align-items: center;
    }

    .fileName {
        font-weight: bolder;
        margin: 0px 5px;
    }

    .fileSize {
        font-weight: bolder;
        color: rgb(215, 0, 0);
        margin: 0px 5px;
    }

    .folder {
        color: rgb(200, 200, 255);
    }

</style>
