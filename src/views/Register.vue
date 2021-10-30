<template>
    <div>
        <Header />
        <div>
            <button @click="$router.push({ name: 'Register' })" class="btn btn-light agreeBtn">
                Я согласен с этими правилами
            </button>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Register',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

</style>