<template>
    <div>
        <div class="top">
            <div class="links">
                <span>
                    Главная
                </span>
                <span>
                    Трекер
                </span>
                <span>
                    Поиск
                </span>
                <span>
                    Группы
                </span>
                <span>
                    FAQ
                </span>
                <span class="rules">
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
            <div class="logo">

            </div>
            <div class="videoAds">

            </div>
        </div>
        <div class="bottom">
            <div class="bottomItem">
                <div class="bottomItemLeft">
                    <span class="clickable material-icons">
                        logout
                    </span>
                    <span class="clickable">
                        rodogleb
                    </span>
                </div>
                <div class="bottomItemCenter">
                    <input type="text" class="form-control h-75">
                    <select class="form-select h-75 w-25" aria-label="Default select example">
                        <option selected>раздачи</option>
                        <option value="1">все темы</option>
                        <option value="2">в google</option>
                        <option value="3">в duckdukgo</option>
                        <option value="4">в wiki</option>
                        <option value="5">по info_hash</option>
                    </select>
                    <button class="btn btn-light h-75">
                        Поиск
                    </button>
                </div>
                <div class="bottomItemRight">
                    <div>
                        <span>
                            ЛС ✉
                        </span>
                        <span class="material-icons">
                            expand_more
                        </span>
                    </div>
                    <div>
                        <span>
                            Профиль
                        </span>
                        <span class="material-icons">
                            expand_more
                        </span>
                    </div>
                    <div>
                        <span>
                            Мои сообщения
                        </span>
                        <span class="material-icons">
                            expand_more
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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

</style>