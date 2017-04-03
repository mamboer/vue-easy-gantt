<template>
<div class="at-eg">
  <div class="at-eg-hd">
    <table cellpadding="0" cellspacing="0" border="0" class="at-eg-tb">
      <thead>
        <tr>
          <th class="at-eg-cell-first">
            <div v-show="isLoading" class="at-eg-spinner">
              <slot name="spinner">
                <i :class="'at-eg-spinner-' + spinner"></i>
              </slot>
            </div>
            <div v-show="!isLoading" class="at-eg-cell-first-inner">#</div>
          </th>
          <th v-for="date in dates">
            {{ date }}
          </th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="at-eg-bd">
    <table class="at-eg-tb at-eg-tasks">
      <tbody>
        <template v-for="(obj, idx) in egtasks">
          <user-tasks :user="obj.user" :tasks="obj.tasks" :dates="dates" :cls="idx % 2 === 0 ? 'at-eg-odd' : ''"></user-tasks>
        </template>
      </tbody>
    </table>
  </div>
</div>
</template>

<style lang="stylus" src="../styles/style.styl"></style>

<script>
import UserTasks from './UserTasks.vue'
import UserTaskParser from './UserTaskParser'
export default {
  data () {
    return {
      dates: [],
      isLoading: false
    }
  },
  props: {
    utasks: {
      type: Array,
      default: []
    },
    sdate: String,
    spinner: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    egtasks () {
      let items = []
      this.utasks.forEach((obj, idx) => {
        let utp = new UserTaskParser(obj.tasks, this.sdate)
        let data = {}
        data.user = obj
        data.tasks = utp.items
        data.total = utp.total
        this.dates = utp.dates
        items.push(data)
      })
      return items
    }
  },
  components: {
    UserTasks
  },
  created () {
    this.isLoading = true
  },
  updated () {
    this.isLoading = false
  }
}

</script>
