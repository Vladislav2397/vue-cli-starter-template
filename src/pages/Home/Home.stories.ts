import { StoryFn } from '@storybook/vue'

import Home, { type HomeProps } from './Home.vue'

export default {
    title: 'undefined-path/Home',
    component: Home,
    argTypes: {},
}

const Template: StoryFn<HomeProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Home },
    methods: {},
    template: `<Home v-bind="$props">Home</Home>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
