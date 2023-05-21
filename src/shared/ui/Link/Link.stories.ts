import { StoryFn } from '@storybook/vue'

import Link, { type LinkProps } from './Link.vue'

export default {
    title: 'Shared/Link',
    component: Link,
    argTypes: {},
}

const Template: StoryFn<LinkProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Link },
    methods: {},
    template: `<Link v-bind="$props">Link</Link>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
