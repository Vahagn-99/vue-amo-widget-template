// widgetSettings.js

// Import any necessary dependencies
import { reactive } from 'vue';

// Define the initial state and other module properties
const module = {
    namespaced: true,
    state: reactive({
        googleCalendarAuthorized: false,
    }),
    mutations: {
        setGoogleCalendarAuthorized(state, authorized) {
            state.googleCalendarAuthorized = authorized;
        },
    },
    actions: {
        authorizeGoogleCalendar({ commit }) {
            // Implement the authorization logic here
            // Once authorized, commit the mutation to update the state
            commit('setGoogleCalendarAuthorized', true);
        },
    },
    getters: {
        isGoogleCalendarAuthorized: (state) => state.googleCalendarAuthorized,
    },
};

export default module;
