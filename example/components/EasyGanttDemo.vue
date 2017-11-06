<template>
  <div class="demo">
    <easy-gantt :sdate="sdate" :utasks="utasks" ref="easyGantt"></easy-gantt>
  </div>
</template>

<script>
import moment from 'moment'
import EasyGantt from '@/components/EasyGantt'
import demoData from '../assets/data.json'

export default {
  data () {
    return {
      sdate: null,
      utasks: []
    }
  },
  name: 'demo',
  components: {
    EasyGantt
  },
  mounted () {
    this.$http.get('http://next.json-generator.com/api/json/get/NJDAlJKhf').then(res => {
      // set data on vm
      this.utasks = res.body.items
      this.sdate = res.body.sdate
      
    }, res => {
      //error
      this.utasks = demoData.items
      this.sdate = demoData.sdate
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .demo
    margin-bottom 50px
    margin-left auto
    margin-right auto
    max-width 1440px
    padding 2em 1em
    overflow auto
</style>
