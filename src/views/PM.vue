<template>
    <div>
        <Header @changeFolder="changeFolderHandler" />
        <div class="main">
            <div class="btns">
                <div class="btnsGroup">
                    <div class="msgBtn">
                        <img src="https://static.t-ru.org/templates/v1/images/msg_inbox.gif" alt="">
                        <span @click="activeTab = 'Входящие'" :class="{ activeTab: activeTab.includes('Входящие') }">
                            Входящие
                        </span>
                    </div>
                    <div @click="activeTab = 'Отправленные'" class="msgBtn">
                        <img src="https://static.t-ru.org/templates/v1/images/msg_sentbox.gif" alt="">
                        <span :class="{ activeTab: activeTab.includes('Отправленные') }">
                            Отправленные
                        </span>
                    </div>
                </div>
                <div class="btnsGroup">
                    <div @click="activeTab = 'Исходящие'" class="msgBtn">
                        <img src="https://static.t-ru.org/templates/v1/images/msg_outbox.gif" alt="">
                        <span :class="{ activeTab: activeTab.includes('Исходящие') }">
                            Исходящие
                        </span>
                    </div>
                    <div @click="activeTab = 'Сохранённые'" class="msgBtn">
                        <img src="https://static.t-ru.org/templates/v1/images/msg_savebox.gif" alt="">
                        <span :class="{ activeTab: activeTab.includes('Сохранённые') }">
                            Сохранённые
                        </span>
                    </div>
                </div>
            </div>
            <div class="headerMenu">
                <div class="headerMenuLeft">
                    <img src="https://static.t-ru.org/templates/v1/images/pm_post_new.gif" alt="">
                    <span class="home">
                        Главная
                    </span>
                </div>
                <div class="headerMenuRight">
                    <span>
                        Срок хранения ЛС - 730 дней
                    </span>
                    <span class="deleteMarked">
                        Удалить отмеченное
                    </span>
                </div>
            </div>
            <div class="sortHeader">
                <div class="idSort">
                    <span>
                        &nbsp;
                    </span>
                </div>
                <div class="topicsSort">
                    <span>
                        Тема
                    </span>
                </div>
                <div class="fromSort">
                    <span>
                        От
                    </span>
                </div>
                <div class="dateSort">
                    <span>
                        Дата
                    </span>
                </div>
                <div class="checkboxSort">
                    <input type="checkbox">
                </div>
            </div>
            <div class="tableBody">
                <div class="notFoundMessages">
                    <span>
                        В этой папке нет сообщений 
                    </span>
                </div>
            </div>
            <div class="footerActions">
                <button>
                    Удалить все (очистить папку)
                </button>
                <button>
                    Удалить отмеченное
                </button>
            </div>

        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'PM',
    data(){
        return {
            activeTab: 'Входящие'
        }
    },
    mounted(){
        this.activeTab = this.$route.query.activetab
    },
    methods: {
        changeFolderHandler(folder){
            this.activeTab = folder
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    
    .main {
        margin: auto;
        width: 98%;
        display: flex;
        flex-direction: column;
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
        padding: 15px;
    }

    .sortHeader {
        background-color: rgb(200, 200, 200);
        height: 35px;
        display: flex;
    }

    .sortHeader > div {
        justify-content: center; 
        align-items: center;
        display: flex;
        border: 1px solid rgb(175, 175, 175);
    }

    .idSort {
        width: 5%;
    }

    .topicsSort {
        width: 55%;
    }

    .fromSort {
        width: 15%;
    }

    .dateSort {
        width: 15%;
    }

    .checkboxSort {
        width: 15%;
    }

    .tableBody {
        background-color: rgb(235, 235, 235);
        min-height: 50px;
    }

    .notFoundMessages {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
    }

    .notFoundMessages > span {
        align-self: center;
    }

    .footerActions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 10px 15px;
        background-color: rgb(215, 215, 215);
        height: 50px;
    }

    .deleteMarked, .home {
        cursor: pointer;
        color: rgb(0, 0, 200);
        font-weight: bolder;
    }

    .headerMenuLeft {
        display: flex;
        align-items: center;
    }

    .headerMenuLeft > * {
        margin: 0px 5px;
    }

    .headerMenuRight {
        display: flex;
        flex-direction: column;
    }

    .headerMenu {
        display: flex;
        justify-content: space-between;
    }
    
    .btns {
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    .btnsGroup {
        display: flex;
    }

    .msgBtn {
        display: flex;
        margin: 15px;
        cursor: pointer;
    }

    .msgBtn > * {
        margin: 5px;
    }

    .msgBtn > span {
        text-decoration: underline;
        color: rgb(0, 0, 255);
        font-size: 18px;
    }

    .activeTab {
        text-decoration: none !important;
        color: rgb(0, 0, 0) !important;
        font-size: 18px !important;
    }

</style>