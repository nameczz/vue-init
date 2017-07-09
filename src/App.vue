<template>
    <div id="app">
        <admin v-if="login">

        </admin>
        <div v-else>
            <tab :fathers="fathers" :children="childrens"></tab>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import tab from 'components/tab'
import admin from 'components/admin/admin'

export default {
    name: 'app',
    data() {
        return {
            fathers: ['1', '2', '3'],
            childrens: [
                ['1', '2', '3'],
                ['1', '2', '3'],
                ['1', '2', '3']
            ],
            login: true
        }
    },
    components: {
        tab,
        admin
    }
}
</script>

<style>

</style>
