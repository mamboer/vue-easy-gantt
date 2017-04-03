<template>
  <div class="hello">
    <h1>{{ name }} - v{{version}}</h1>
    <p class="desc">{{msg}}</p>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://faso.me/easygantt" target="_blank">Docs</a></li>
      <li><a href="https://github.com/mamboer/vue-easy-gantt" target="_blank">Github</a></li>
    </ul>
  </div>
</template>

<script>
import pkg from '../../package.json'
export default {
  name: 'hello',
  data () {
    return {
      version: pkg.version,
      msg: pkg.description,
      name: pkg.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a
  color: #fff
  text-decoration none
  &:hover
    text-decoration underline

</style>
