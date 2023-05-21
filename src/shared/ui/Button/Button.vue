<template lang="pug">

button.b-button(
    @click="$emit('click', $event)"
)
    slot

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type ButtonProps = {
    //
}

@Component
export default class Button extends Vue {
    @Prop({ default: 'm' }) readonly size!: 'm'
}
</script>

<!-- <style lang="scss" src="./Button.critical.scss" /> -->
<!-- <style lang="scss" src="./Button.main.scss" /> -->
