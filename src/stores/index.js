import { createStore } from 'vuex';
import widgetSettings from './modules/widgetSettings';

const store = createStore({
    state() {
        return {
            status: {
                confirm: true,
                paid: false,
                demo: false
            },
            defaultCode: '+7',
            jsonConfig: {},
            stage: 'START'
        };
    },
    getters: {
        isBlocked(state) {
            return !state.status.confirm;
        },
        isConfirm(state) {
            return state.status.confirm;
        }
    },
    mutations: {
        changeConfirm(state) {
            state.status.confirm = !state.status.confirm;
        }
    },
    actions: {
        changeConfirm(context) {
            context.commit('changeConfirm');
        }
    },
    modules: {
        widgetSettings
    }
});

export default store;
