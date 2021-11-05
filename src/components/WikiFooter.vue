<template>
    <div class="footer">
        <div>
            <span @click="$emit('changeActiveAsideItem', 'WikiTorrents:Политика конфиденциальности')">
                Политика конфиденциальности
            </span>
            <span @click="$emit('changeActiveAsideItem', 'WikiTorrents:Описание')">
                Описание WikiTorrents
            </span>
            <span @click="$emit('changeActiveAsideItem', 'Отказ от ответственности')">
                Отказ от ответственности
            </span>
            <span @click="openLink('https://www.mediawiki.org/wiki/MediaWiki')">
                MediaWiki
            </span>
            <span @click="openLink('https://www.paulgu.com/w/index.php?title=Home')">
                Paul Gu
            </span>
            <span @click="openLink('https://rutracker.org/forum/profile.php?mode=viewprofile&u=574158')">
                Earth
            </span>
        </div>
        <span>
            Последнее изменение этой страницы: 11:21, 1 декабря 2020. К этой странице обращались 13 230 977 раз.
        </span>
        <span>
            You IP address is: 156.146.59.28 
        </span>
    </div>
</template>

<script>
export default {
    name: 'WikiFooter',
    methods: {
        openLink(link){
            window.open(link)
        }
    },
    emits: [
        'changeActiveAsideItem'
    ]
}
</script>

<style scoped>
    
    .footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: rgb(175, 175, 175);   
    }

    .footer > div > span {
        cursor: pointer;
    }

    .footer > div > span:hover {
        color: rgb(0, 0, 0);
    }

</style>