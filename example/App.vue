<template>
  <div id="app" class="app">
    <div class="logo">
      <img src="./assets/logo.png" alt="Vue Easy Gantt">
    </div>
    <hello></hello>
    <demo></demo>
    <love></love>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Love from './components/MakeLove'
import Demo from './components/EasyGanttDemo'

export default {
  name: 'app',
  components: {
    Hello,
    Demo,
    Love
  }
}
</script>

<style lang="stylus">
@import '../src/styles/_vars.styl'
*, *::after, *::before
  box-sizing border-box

body
  background: -webkit-linear-gradient(left, #25c481, #25b7c4)
  background: linear-gradient(to right, #25c481, #25b7c4)

.app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #333
  margin-top: 60px

.logo
  vhc()
  margin-left auto
  margin-right auto
  width 240px
  height 240px
  border-radius 100%
  border 2px solid rgba(255,255,255,.8)

</style>