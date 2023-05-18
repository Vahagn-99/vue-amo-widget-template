// import css
import './assets/amocrm.css';
// import vue componets
import { createApp } from 'vue';
import App from './App.vue';
import store from './stores/index';

// const app = createApp(App);
// app.use(store);
// app.mount('#app');


const Widget = {
    currnetArea: "",
    appElement: "",
    render() {
        const appElement = document.createElement('div');
        appElement.setAttribute('id', 'app');
        this.appElement = appElement;
        console.log('render callback');
        return true;
    },
    init(widget) {
        this.currnetArea = widget.system.area;
        console.log('init callback');
        return true;
    },
    bind_actions(widget) {
        console.log('bind_actions callback');
        return true;
    },
    settings(widget) {
        const container = $(".widget-settings .widget_settings_block");
        $(container).html(this.appElement);
        const app = createApp(App);
        app.use(store);
        window.vue = app;
        app.mount('#app');
        console.log('settings callback');
    },
    onSave(widget) {
        console.log("save");
    },
    destroy(widget) {
        console.log("destroy");
    },
    contacts_selected(widget) {
        console.log("conatct_selected");
    },
    leads_selected(widget) {
        console.log("lead_selected");
    },
    tasks_selected(widget) {
        console.log("task_selected");
    }
};

export default Widget;