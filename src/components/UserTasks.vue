<template>
<tr class="at-eg-row" :class="cls">
  <td class="at-eg-cell-a">
    <div class="at-eg-user">
      <div class="at-eg-user-inner">
        <img :src="user.avatar" :alt="user.name" class="at-eg-avatar"/>
        <p class="at-eg-name">{{user.name}}</p>
      </div>
    </div>
  </td>
  <td class="at-eg-cell-b" v-for="(date, idx) in dates" :data-date="date" :class="'at-eg-cell-' + idx">
    <div class="at-eg-tgroup" :class="'at-eg-tall-' + tallSize">
      <template v-for="(obj, idx1) in tasks">
        <task-item :task="task" :floor-index="idx1" v-if="task = obj[date]"></task-item>
      </template>
    </div>
  </td>
</tr>
</template>

<script>
import TaskItem from './TaskItem.vue'
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    dates: {
      type: Array,
      required: true
    },
    tasks: {
      type: Array,
      required: true
    },
    cls: {
      type: String
    }
  },
  computed: {
    tallSize () {
      return this.tasks.length
    }
  },
  components: {
    TaskItem
  }
}

</script>
