<template>
  <div class="todo-info">
    <span class="total">{{total}} items left</span>
    <div class="tabs">
      <a
        :class="['btn','primary','border', state==item? 'active':'']"
        v-for="(item,index) in statics"
        :key="index"
        @click="toggleState(item)"
      >{{item}}</a>
    </div>
    <button class="btn info" @click="clearCompleted">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    props: {
      total: Number
    },
    data() {
      return {
        statics: ['all', 'active', 'completed'],
        state: 'all'
      }
    },
    methods: {
      toggleState(state) {
        this.state = state
        this.$emit('toggleState', state)
      },
      clearCompleted() {
        this.$emit('clearCompleted')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    font-weight: 400px
    padding: 5px 10px
    line-height: 30px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    .total
      color: $red
      padding: 0 5px

    .tabs
      display: flex
      justify-content: space-between
      width: 200px

      .btn.primary.btn
        primaryBorderBtn()

        &.active
          primaryBtn()

    .btn.info
      infoBtn()
</style>