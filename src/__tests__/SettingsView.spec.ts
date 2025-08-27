import SettingsView from '@/views/SettingsView.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('SettingsView', () => {
  it('renders properly', () => {
    const wrapper = mount(SettingsView)
    expect(wrapper.text()).toContain('settings')
  })
})
