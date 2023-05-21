import { shallowMount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Button)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
