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

                            </div>
                            <div class="torrentFor">
                                <span>
                                    Торренты за
                                </span>
                                <select class="form-select h-75 w-25" aria-label="Default select example">
                                    <option selected>за всё время</option>
                                </select>
                            </div>
                        </div>
                        <div class="showOnly">

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
                    
                </span>
            </div>
            <div class="distributtionsCheck">
                <span>
                    
                </span>
            </div>
            <div class="distributtionsForum">
                <span>
                    Форум
                </span>
            </div>
            <div class="distributtionsTopic">
                <span>
                    Тема
                </span>
            </div>
            <div class="distributtionsAuthour">
                <span>
                    Автор
                </span>
            </div>
            <div class="distributtionsSize">
                <span>
                    Размер
                </span>
            </div>
            <div class="distributtionsSeeds">
                <span>
                    S
                </span>
            </div>
            <div class="distributtionsLeaches">
                <span>
                    L
                </span>
            </div>
            <div class="distributtionsDownloads">
                <span>
                    C
                </span>
            </div>
            <div class="distributtionsAdd">
                <span>
                    Добавлен
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
    name: 'Search',
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
        width: 5%;
    }
    
    .distributtionsCheck {
        display: flex;
        flex-direction: column;
        width: 5%;
    }

    .distributtionsForum {
        display: flex;
        flex-direction: column;
        width: 15%;
    }

    .distributtionsTopic {
        display: flex;
        flex-direction: column;
        width: 25%;
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
        width: 5%;
    }

    .distributtionsLeaches {
        display: flex;
        flex-direction: column;
        width: 5%;
    }

    .distributtionsDownloads {
        display: flex;
        flex-direction: column;
        width: 5%;
    }

    .distributtionsAdd {
        display: flex;
        flex-direction: column;
        width: 10%;
    }

    .distributtionsList {
        width: 100%;
        display: flex;
    }

</style>