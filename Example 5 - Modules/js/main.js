Vue.use(Vuex)

const moduleA = {
    namespaced: true,
    state: {
        count: 3
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
      doubleCount (state) {
          return state.count * 2
      }
    },
    actions: {
        incrementIfOdd({state, commit}) {
            if (state.count % 2 === 1) {
                commit('increment');
            }
        }
    }
}

const moduleB = {
    namespaced: true,
    modules: {
        subModule: {
            namespaced: true,
            state: {
              count: 5
            },
            mutations: {
                login () {
                  console.log('Mutation Login');
                }
            },
            getters: {
              login () {
                console.log('Get Login');
              }
            },
            actions: {
              login () {
                console.log('Action Login');
              }
            }
        }
    },
    state: {
        count: 8
    },
    mutations: {

    },
    getters: {
        someGetter (state, getters, rootState, rootGetters) {
            console.log('Root Count '+rootState.count);
            console.log('Local Count '+state.count);

            getters.someOtherGetter;
            rootGetters.someOtherGetter;
        },
        someOtherGetter(state, getters){
          console.log('Local someOtherGetter');
        }
    },
    actions: {
        someAction({ dispatch, commit, getters, rootGetters }) {
            getters.someGetter;
            rootGetters.someGetter;

            dispatch('someOtherAction');
            dispatch({
              type:'someOtherAction',
              message: 'from child',
              root: true
            });

            // commit('someMutation');
            // commit('someMutation', null, { root: true });
        },
        someOtherAction(){
          console.log('Show message from local');
        }
    }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    },
    state: {
        count: 2
    },
    mutations: {

    },
    getters: {
      someOtherGetter(state, getters){
        console.log('Root someOtherGetter');
      }
    },
    actions: {
      someOtherAction({ message }){
        console.log('Show message ' + message);
      }
    }
})


new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: Vuex.mapState({
        a: state => state.a.count,
        b: state => state.b.count,
        s: state => state.b.subModule.count,
    })
});

// console.log(store.state.a.count);
// // console.log(store.state.b.count);
// store.commit('a/increment');
// console.log(store.state.a.count);

store.commit('b/subModule/login');
store.dispatch('b/subModule/login');
store.getters['b/subModule/login'];

store.dispatch('b/someAction');
store.getters['b/someGetter'];

// Nested Methods
// methods: mapActions('some/nested/module', [
//   'foo' // thisfoo()
// ])
