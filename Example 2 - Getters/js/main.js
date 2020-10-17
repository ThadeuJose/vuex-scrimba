Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      todos: [
         { id: 1, text: 'TODO are Boring', done: true },
         { id: 2, text: 'Make a Vuex Gallery', done: false },
     ]
    },
    getters: {
       doneTodos: state => {
           return state.todos.filter(todo => todo.done);
       },
       doneTodosCount: (state, getters) => {
           return getters.doneTodos.length
       },
       getTodoById: (state) => (id) => {
           return state.todos.find(todo => todo.id === id)
       }
   }
});


new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: {
        ...Vuex.mapState([
          'todos'
        ]),
        ...Vuex.mapGetters([
          'doneTodos', 'doneTodosCount', 'getTodoById'
        ]),
    }
});

console.log(store.getters.doneTodos)
console.log(store.getters.doneTodosCount)
console.log(store.getters.getTodoById(2))
