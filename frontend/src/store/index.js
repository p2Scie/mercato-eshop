import { createStore } from 'vuex'
import { supabase } from "@/database/supabase";

// Create a new store instance.
const store = createStore({
    state () {
        return {
            userInfos: null,
            isAuthenticated: null
        }
    },
    getters: {
        getUserInfos(state) {
            return state.userInfos
        },
        isAuthenticated(state) {
            return state.connectedUser
        }
    },
    mutations: {
        setUser(state) {
            state.userInfos = supabase.auth.user();
        },

        isAuthenticated(state) {
            state.isAuthenticated = supabase.auth.session();
        }


    }
})


export default store