import { StoryFn } from '@storybook/vue'

import Button, { type ButtonProps } from './Button.vue'

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: {},
}

const Template: StoryFn<ButtonProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Button },
    methods: {},
    template: `<Button v-bind="$props">Button</Button>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
