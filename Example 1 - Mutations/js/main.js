Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});

store.commit('increment');
console.log(store.state.count);

new Vue({
    el: '#app',
    store,
    data: {
        message: 'Hello world',
        localCount: 4,
    },
    computed: Vuex.mapState([
      'count'
    ])
});

// computed: Vuex.mapState({
//   count: (state) => state.count,
//   countAlias: 'count',
//   countPlusLocalCount (state){
//     return state.count + this.localCount;
//   }
// })
