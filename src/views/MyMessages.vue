<template>
    <div>
        <Header />
        <div class="main">
            <div class="resultsInfo">
                <span class="resultsInfoHeader">
                    Поиск
                </span>
                <span class="resultsInfoCountOfResults">
                    Результатов поиска: 13
                </span>
                <span class="resultsInfoCountOfResults">
                    Страницы:  1
                </span>
            </div>
            <div class="editThemes">
                <span class="editTheme">
                    Редактировать
                </span>
                <span>
                    Отметить все темы как прочитанные
                </span>
            </div>
            <div class="table">
                <div class="headerTableRow">
                    <div class="tableCell firstTableCell ">
                        
                    </div>
                    <div class="tableCell secondTableCell ">
                        Форум
                    </div>
                    <div class="tableCell thirdTableCell ">
                        Тема
                    </div>
                    <div class="tableCell fourthTableCell ">
                        Автор
                    </div>
                    <div class="tableCell fifthTableCell ">
                        Отв.
                    </div>
                    <div class="tableCell sixthTableCell ">
                        Посл. сообщение
                    </div>
                </div>
                <div class="tableRow tableCellData">
                    <div class="tableCell firstTableCell ">
                        <span class="material-icons">
                            stars
                        </span>
                    </div>
                    <div class="tableCell secondTableCell ">
                        Файтинги
                    </div>
                    <div class="tableCell thirdTableCell tableCellName">
                        WWE 2K18 [P] [ENG + 5 / ENG] (2017, Файтинг) (1.0 + 4 DLC) [Scene] [ 1 .. 4, 5 ]	
                    </div>
                    <div class="tableCell fourthTableCell ">
                        Scene_Release
                    </div>
                    <div class="tableCell fifthTableCell ">
                        126
                    </div>
                    <div class="tableCell sixthTableCell ">
                        2020-06-03 03:09
                        Рэми	» 
                    </div>
                </div>
                <div class="headerTableRow">
                    <div class="headerTableCell">
                        <span>
                            Для удаления тем из списка нажмите на иконку слева от названия любого раздела
                        </span>
                    </div>
                </div>
                <div class="headerTableRow">
                    <div class="headerTableCell">
                        <span></span>
                    </div>
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
    name: 'MyMessages',
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

    .editThemes > span {
        color: rgb(100, 100, 255);
        cursor: pointer;
        font-size: 12px;
    }

    .editThemes > span:hover {
        color: rgb(200, 0, 0);
    }

    .editTheme {
        font-weight: bolder;
        margin-right: 10px;
    }

    .table {
        display: flex;
        flex-direction: column;
    }

    .headerTableRow {
        background-color: rgb(215, 215, 215);
        display: flex;
        height: 30px;
    }

    .headerTableRow > .tableCell {
        border-bottom: 0px solid transparent !important;
    }

    .headerTableCell {
        width: 100%;
        font-size: 12px;
        overflow: hidden;
        box-sizing: border-box;
        padding: 7px;
        border: 1px solid rgb(180, 180, 180);
        display: flex;
        align-items: center;
    }

    .tableRow {
        display: flex;
        height: 45px;
        background-color: rgb(235, 235, 235);
    }

    .tableCellData {
        color: rgb(0, 100, 255);
    }

    .tableCell {
        font-size: 12px;
        overflow: hidden;
        box-sizing: border-box;
        padding: 7px;
        border: 1px solid rgb(180, 180, 180);
        display: flex;
        align-items: center;
    }

    .firstTableCell {
        width: 3%;
    }

    .secondTableCell {
        width: 9%;
    }

    .thirdTableCell {
        width: 65%;
    }

    .fourthTableCell {
        width: 8%;
    }

    .fifthTableCell {
        width: 5%;
    }

    .sixthTableCell {
        width: 10%;
    }

    .tableCellName {
        font-weight: bolder;
    }

</style>