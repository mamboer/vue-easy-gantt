import Vue from 'vue'
import EasyGantt from '@/components/EasyGantt'
import data from '../data.js'

describe('EasyGantt.vue', () => {
  let vm

  // create new Vue instance for every test case
  beforeEach(() => {
    const Ctor = Vue.extend(EasyGantt)
    let propsData = {
      sdate: data.sdate,
      utasks: data.items.slice()
    }
    vm = new Ctor({propsData}).$mount()
  })

  afterEach(() => {
    vm.$destroy(true)
  })

  it('sets the correct default data', () => {
    expect(typeof EasyGantt.data).to.equal('function')
    const defaultData = EasyGantt.data()
    expect(defaultData.dates.length).to.equal(0)
  })

  it('should have a computed method name "egtasks"', () => {
    expect(typeof EasyGantt.computed.egtasks).to.equal('function')
  })

  it('should render correct numbers of rows', () => {
    expect(vm.$el.querySelectorAll('.at-eg-row').length).to.equal(data.items.length)
  })

  it('should render a basic template and update DOM after prop changes', done => {
    vm.utasks = data.items.slice(0, 1)
    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
      expect(vm.$el.className).to.equal('at-eg')
      expect(vm.$el.querySelectorAll('.at-eg-row').length).to.equal(1)
      done()
    })
  })
})
