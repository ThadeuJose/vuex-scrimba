Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        incrementBy (state, payload) {
            state.count += payload.amount
        },
        decrement (state) {
            state.count--
        },
        decrementBy (state, payload) {
            state.count -= payload.amount
        }
    }
});

store.commit({
    type: 'incrementBy',
    amount: 40
});
store.commit({
    type: 'decrementBy',
    amount: 29
});
// store.commit('incrementBy', { amount: 29 });
console.log(store.state.count);

new Vue({
    el: '#app',
    store,
    data: {
        message: 'Hello world',
    },
    computed: Vuex.mapState([
      'count'
    ]),
    methods: Vuex.mapMutations([
      'increment', 'incrementBy','decrement', 'decrementBy'
    ])
});

// To make new properties
// This is not good or recommended
// Vue.set(obj, 'new prop', 123)
// state.obj = { ...state.obj, newProp: 123 }
