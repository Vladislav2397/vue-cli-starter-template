<template lang="pug">

.b-home
    .__container
        h1 Home page
        p {{ counter }}
        button-component.__button(
            @click="onClick"
        ) button

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui/Button'

export type HomeProps = {
    //
}

@Component({
    components: {
        'button-component': Button,
    },
})
export default class Home extends Vue {
    counter = 0

    onClick() {
        this.counter++
        console.log('button click')
    }
}
</script>

<!-- <style lang="scss" src="./Home.critical.scss" /> -->
<!-- <style lang="scss" src="./Home.main.scss" /> -->
