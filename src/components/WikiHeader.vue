<template>
    <div class="header">
        <img src="http://rutracker.wiki/skins/common/images/wiki.tor.png" alt="" />
        <div class="search">
            <input class="form-control" type="text" />
            <button>
                Перейти
            </button>
            <button>
                Найти
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 15px;
    }

    .search {
        border-radius: 8px;
        box-sizing: border-box;
        padding: 5px;
        border: 1px solid rgb(0, 0, 0);
        width: 725px;
        display: flex;
        justify-content: space-between;
        height: 40px;
    }

    .search > input {
        width: 80%;
    }

</style>