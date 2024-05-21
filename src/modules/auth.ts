import AuthServise from "@/services/auth";

const state = {
    isLoading : true,
}

const mutations = {
    setLoading(state: { isLoading: boolean; }) {
        state.isLoading = true
    }
}

const actions = {
    login(content: '', user: {}) {
        AuthServise.login(user)
    }
}

export default {
    state,
    mutations,
    actions
}