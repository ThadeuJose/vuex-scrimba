Vue.use(Vuex)


const store = new Vuex.Store({
    strict: true, // Only for development
    state: {
        message1: 'Hello Vuex',
        message2: 'Hello Vuex again',
    },
    mutations: {
        updateMessage (state, message1) {
            state.message1 = message1
        },
        updateMessage2 (state, message2) {
            state.message2 = message2
        }
    }
})


new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: {
        message1 () {
            return this.$store.state.message1;
        },
        message2: {
            get () {
                return this.$store.state.message2
            },
            set (value) {
                this.$store.commit('updateMessage2', value)
            }
        }
    },
    methods: {
        updateMessage (e) {
            this.$store.commit('updateMessage', e.target.value)
        }
    }
});
