import EasyGantt from './components/EasyGantt'

export default EasyGantt

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('easy-gantt', EasyGantt)
}
