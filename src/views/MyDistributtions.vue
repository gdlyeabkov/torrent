<template>
    <div>
    <Header />
    <div class="main">
        <div class="resultsInfo">
            <span class="resultsInfoHeader">
                Трекер
            </span>
            <span class="resultsInfoCountOfResults">
                Страницы:  1
            </span>
            <span>
                <span class="resultsInfoCountOfResults">
                    Результатов поиска: 13
                </span>
                 (max: 500) 
            </span>
        </div>
        <div class="searchByDistributions">
            <div class="searchByDistributionsHeader">
                <span>
                    Поиск по раздачам
                </span>
            </div>
            <div class="searchByDistributionsFilter">
                <div class="goToSection">
                    <span>
                        Перейти к разделу
                    </span>
                </div>
                <div class="sortBy">
                    <div class="sortByRowHeader">
                        <div>
                            <div class="sortByThem">
                                <span>
                                    Упорядочить по
                                </span>
                                <select v-model="sortBy">
                                    <option value="registered">зарегестрирован</option>
                                    <option value="nameOfTopic">название темы</option>
                                    <option value="countOfDownloads">количество скачиваний</option>
                                    <option value="countOfSeeds">количество сидов</option>
                                    <option value="countOfLeaches">количество личей</option>
                                    <option value="size">размер</option>
                                </select>
                            </div>
                            <div class="torrentFor">
                                <span>
                                    Торренты за
                                </span>
                                <select v-model="torrentsFor">
                                    <option value="allTime">за всё время</option>
                                    <option value="today">за сегодня</option>
                                    <option value="lastThreeDays">последние 3 дня</option>
                                    <option value="lastWeek">посл. неделю</option>
                                    <option value="lastTwoWeeks">посл. 2 недели</option>
                                    <option value="previousMonth">последний месяц</option>
                                </select>
                            </div>
                        </div>
                        <div class="showOnly">
                            Показывать только
                            <div>
                                <input type="checkbox" v-model="onlyOpenedDistributtions" />
                                <span>
                                    Только открытые раздачи 
                                </span>
                            </div>
                            <div>
                                <input type="checkbox" v-model="onlyOpenedDistributtions" />
                                <span>
                                    Новые с посл. посещения []
                                </span>
                            </div>
                            <div>
                                <input type="checkbox" v-model="onlyOpenedDistributtions" />
                                <span>
                                    Скрыть содержимое {...} 
                                </span>
                            </div>
                            <span>
                                Будущие закачки
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            Автор раздачи
                        </span>
                        <div>
                            <input type="text" />
                            <span>
                                Мои раздачи
                            </span>
                        </div>
                    </div>
                    <div>
                        <span>
                            Автор раздачи
                        </span>
                        <div>
                            <input type="text" />
                            <span>
                                Мои раздачи
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-light searchBtn">
                Поиск
            </button>
        </div>
        <div class="distributtionsList">
            <div class="distributtionsId">
                <span>
                    &nbsp;    
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <img width="10px" src="https://static.t-ru.org/templates/v1/images/icon_minipost_new.gif" />
                </div>
            </div>
            <div class="distributtionsCheck">
                <span>
                    &nbsp;
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        *
                    </span>
                </div>
            </div>
            <div class="distributtionsForum">
                <span>
                    Форум
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        {{ distributtion.forum }}
                    </span>
                </div>
            </div>
            <div class="distributtionsTopic">
                <span>
                    Тема
                </span>
                <div @click="$router.push({ name: 'Distribution', query: { distributtionid: distributtion._id } })" v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        {{ distributtion.theme }}
                    </span>
                </div>
            </div>
            <div class="distributtionsAuthor">
                <span>
                    Автор
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        {{ torrenter.name }}
                    </span>
                </div>
            </div>
            <div class="distributtionsSize">
                <span>
                    Размер
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        {{ distributtion.size }} GB ↓
                    </span>
                </div>
            </div>
            <div class="distributtionsSeeds">
                <span>
                    S
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        {{ distributtion.seeds }}
                    </span>
                </div>
            </div>
            <div class="distributtionsLeaches">
                <span>
                    L
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        {{ distributtion.leechs }}
                    </span>
                </div>
            </div>
            <div class="distributtionsDownloads">
                <span>
                    C
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        {{ distributtion.downloaded }}
                    </span>
                </div>
            </div>
            <div class="distributtionsAdd">
                <span>
                    Добавлен
                </span>
                <div v-for="distributtion in distributtions.filter((distributtion, distributtionIdx) => {
                    return distributtionIdx >= currentPage * distributtionsPerPage - distributtionsPerPage && distributtionIdx < currentPage * distributtionsPerPage 
                })" :key="distributtion._id">
                    <span>
                        {{ distributtion.added }}
                    </span>
                </div>
            </div>
        </div>
        <div class="distributtionsFooter">

        </div>
        <div class="pages">
            <span>
                Страница {{ currentPage }} из {{ distributtions.length >= distributtionsPerPage ? Math.floor(distributtions.length / distributtionsPerPage) : '1'}}
            </span>
            <span class="pagination">
                <span>
                    Страницы:
                </span>
                <div v-if="distributtions.length >= distributtionsPerPage">
                    <span v-for="distributtion in Math.floor(distributtions.length / distributtionsPerPage)" :key="distributtion._id" @click="currentPage = distributtion" :class="{ activePage: distributtion === currentPage }">
                        {{ distributtion }}
                    </span>
                </div>
                <div v-else>
                    <span :class="{ activePage: true }">
                        1
                    </span>
                </div>
                <span @click="currentPage < Math.floor(distributtions.length / distributtionsPerPage) ? currentPage++ : currentPage = currentPage">
                    След
                </span>
            </span>
        </div>
    </div>
    <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'MyDistributtions',
    data(){
        return {
            distributtions: [],
            distributtionsPerPage: 3,
            currentPage: 1,
            onlyOpenedDistributtions: false,
            sortBy: 'registered',
            torrentsFor: 'allTime',
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
                        this.distributtions = JSON.parse(result).distributtions
                    } else if(JSON.parse(result).status.includes('Error')){
                        
                    }
                })
            }
        })
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    .resultsInfo {
        display: flex;
        flex-direction: column;
        margin: 15px 0px;
    }

    .resultsInfoHeader {
        font-size: 24px;
    }
        
    .resultsInfoCountOfResults {
        font-weight: bolder;
    }

    .main {
        margin: auto;
        width: 98%;
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

    .searchByDistributions {
        display: flex;
        flex-direction: column;
    }

    .searchBtn {
        font-weight: bolder;
        border: 1px solid rgb(150, 150, 150);
        width: 125px;
        align-self: center;
    }

    .searchByDistributionsFilter {
        margin: 25px 0px;
        width: 75%;
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .goToSection, .sortBy {
        box-sizing: border-box;
        padding: 10px;
        margin: 15px;
        width: 50%;
        height: 350px;
        border: 1px solid rgb(150, 150, 150);
    }

    .goToSection {
        overflow-y: scroll;
    }

    .distributtionsId {
        display: flex;
        flex-direction: column;
        width: 2%;
    }
    
    .distributtionsCheck {
        display: flex;
        flex-direction: column;
        width: 2%;
    }

    .distributtionsForum {
        display: flex;
        flex-direction: column;
        width: 15%;
    }

    .distributtionsTopic {
        display: flex;
        flex-direction: column;
        width: 34%;
    }

    .distributtionsTopic > div > span {
        cursor: pointer;
    }

    .distributtionsAuthor {
        display: flex;
        flex-direction: column;
        width: 15%;
    }

    .distributtionsSize {
        display: flex;
        flex-direction: column;
        width: 10%;
    }

    .distributtionsSeeds {
        display: flex;
        flex-direction: column;
        width: 4%;
    }

    .distributtionsLeaches {
        display: flex;
        flex-direction: column;
        width: 4%;
    }

    .distributtionsDownloads {
        display: flex;
        flex-direction: column;
        width: 4%;
    }

    .distributtionsAdd {
        display: flex;
        flex-direction: column;
        width: 10%;
    }

    .distributtionsList {
        width: 100%;
        display: flex;
        margin: 30px 0px;
    }

    .distributtionsList > div > div {
        background-color: rgb(235, 235, 235);
        border: 1px solid rgb(215, 215, 215);
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .distributtionsList > div > span {
        background-color: rgb(200, 200, 200);
        border: 1px solid rgb(175, 175, 175);
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .distributtionsFooter {
        height: 50px;
        width: 100%;
        background-color: rgb(200, 200, 200);
    }

    .pages {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    .pagination {
        color: rgb(100, 100, 250);
        cursor: pointer;
        font-weight: bolder;
        font-size: 12px;
    }

    .pagination > span {
        margin: 0px 2px;
    }

    .activePage {
        color: rgb(200, 100, 0);
    }

    .distributtionsLeaches > div > span {
        color: rgb(215, 0, 0);
        font-weight: bolder;
    }

    .distributtionsSeeds > div > span {
        color: rgb(115, 150, 0);
        font-weight: bolder;
    }

    .distributtionsSize > div > span {
        color: rgb(0, 100, 150);
        font-weight: bolder;
    }

    .distributtionsAuthor > div > span, .distributtionsTopic > div > span, .distributtionsForum > div > span {
        color: rgb(0, 100, 150);
    }

    .sortByThem {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .torrentFor {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .sortByRowHeader {
        display: flex;
        justify-content: space-between;
    }

</style>