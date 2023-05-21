import { shallowMount } from '@vue/test-utils'
import Link from './Link.vue'

describe('Link spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Link)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
