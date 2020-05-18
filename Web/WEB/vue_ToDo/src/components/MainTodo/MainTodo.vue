<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="What you want to do"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="item in filterData"
      :key="item.id"
      :todo="item"
      @del="handleDeletItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clearCompleted="handleClearCompleted"
    ></todo-info>
  </div>
</template>

<script>
  let id = 0
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'
  export default {
    name: 'MainTodo',
    components: {
      TodoItem,
      TodoInfo
    },
    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: 'all'
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return
        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false
        })
        this.content = ''
      },
      handleDeletItem(id) {
        this.todoData.splice(
          this.todoData.findIndex(item => item.id === id),
          1
        )
      },
      handleToggleState(state) {
        this.filter = state
      },
      handleClearCompleted() {
        this.todoData = this.todoData.filter(item => item.completed == false)
      }
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            item => item.completed == false
          ).length
        }
      }
    },
    computed: {
      filterData() {
        console.log(this.filter)
        switch (this.filter) {
          case 'all':
            return this.todoData
            break
          case 'active':
            return this.todoData.filter(item => item.completed == false)
            break
          case 'completed':
            return this.todoData.filter(item => item.completed == true)
            break
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: #fff
    box-shadow: 0 0 5px #666

    .add-todo
      padding: 16px 16px 16px 36px
      width: 100%
      font-size: 24px
      font-family: inherit
      font-weight: inherit
      color: inherit
      border: none
      outline: none
      box-sizing: border-box
</style>