<template>
    <div>
        <div class="toggleList">
            <button @click="opened = !opened" class="toggleListBtn">
                +
            </button>
            <span class="lastThanksgivers">
                {{ markup.replace(/\[spoiler=\"/, '').replace(/\"\].*\[\/.*\]/, '') }}
            </span>
        </div>
        <div v-if="opened">
            <img :src="markup.replace(/(\[spoiler=.*\]h)/, 'h').replace(/(\[\/spoiler\])/, '')" :alt="markup.replace(/(\[spoiler=.*\]h)/, 'h').replace(/(\[\/spoiler\])/, '')" width="100px" />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Favorite',
        data(){
            return {
                opened: false
            }
        },
        props: [
            'markup'
        ]
    }
</script>
<style scoped>
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
</style>