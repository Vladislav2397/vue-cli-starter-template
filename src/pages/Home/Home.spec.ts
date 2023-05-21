import { shallowMount } from '@vue/test-utils'
import Home from './Home.vue'

describe('Home spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Home)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
