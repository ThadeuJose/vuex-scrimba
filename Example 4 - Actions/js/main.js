Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        },
    },
    actions: {
       incrementAsync ({ commit }) {
           setTimeout(() => {
             commit('increment');
           }, 1000)
       }
   }
});

new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: Vuex.mapState([
      'count'
    ]),
    methods: {
      ...Vuex.mapMutations(['decrement']),
      ...Vuex.mapActions({
        add: 'incrementAsync'
      }),
    }
});

// dispatch({
//     type: 'incrementAsync',
//     payload: payload
// })


// Way to use actions with promises, async and await
// actionA ({ commit }) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             commit('someMutation')
//             resolve()
//         }, 1000)
//     })
// },
// actionB ({ dispatch, commit }) {
//     return dispatch('actionA').then(() => {
//         commit('someOtherMutation')
//     })
// },
// async actionC ({ commit }) {
//     commit('gotData', await getData())
// },
// async actionD ({ dispatch, commit} ) {
//     await dispatch('actionC')
//     commit('gotOtherData', await getOtherData())
// }
