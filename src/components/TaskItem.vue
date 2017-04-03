<template>
<div class="at-eg-task" :class="[classLength, classFloor]">
  <div class="at-eg-task-inner">
  {{task.title}}
  </div>
</div>
</template>

<script>

export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    floorIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classLength () {
      return 'at-eg-len-' + this.task.duration
    },
    classFloor () {
      return 'at-eg-floor-' + this.floorIndex
    }
  }
}

</script>
