<template>
<div class="made-with-love">
  Made with
  <i>♥</i> by
  <a target="_blank" :href="author.url">{{author.name}}</a>
</div>
</template>

<style lang="stylus" scoped>
/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: #fff;
}
.made-with-love i {
  font-style: normal;
  color: #F50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #fff;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}
</style>

<script>
import pkg from '../../package.json'
export default {
  name: 'love',
  data () {
    return {
      version: pkg.version,
      author: pkg.author,
      homepage: pkg.homepage
    }
  }
}
</script>