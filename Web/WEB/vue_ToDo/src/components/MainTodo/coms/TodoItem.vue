<template>
  <div :class="['todo-item', todo.completed ? 'completed':'']">
    <input type="checkbox" v-model="todo.completed" />
    <label>{{todo.content}}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
  export default {
    name: 'MainItem',
    props: {
      todo: Object
    },
    methods: {
      delItem() {
        this.$emit('del', this.todo.id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/theme.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    &.completed
      label
        color: #d9d9d9
        text-decoration: line-through

    &:hover
      button:after
        content: 'x'
        color: $lightred
        font-size: 24px

    input
      width: 50px
      height: 30px
      text-align: center
      cleanDefaultStyle()

      &:after
        content: url('~images/unChecked.svg')

      &:checked:after
        content: url('~images/checked.svg')

    button
      cleanDefaultStyle()
      width: 40px
      background-color: transparent
      cursor: pointer

    label
      transition: color 0.4s
      flex: 1
</style>