<template lang="pug">

#app
    nav
        router-view

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    mounted() {
        console.log(this.$device)
    }
}
</script>

<style lang="scss">
@import './styles/reset.scss';
</style>
