<template>
    <div class="widget-settings amo-widget">
        <h2 class="settings__header">Settings</h2>

        <div class="settings__form">
            <label class="form__label">Google Calendar</label>
            <div class="form__group">
                <button class="devio-btn-primary" @click="authorizeGoogle" :disabled="isGoogleAuthorized">
                    {{ isGoogleAuthorized ? 'Authorized' : 'Authorize' }}
                </button>
                <p class="form__status">
                    {{ isGoogleAuthorized ? 'Google Calendar is connected.' : 'Connect your Google Calendar.' }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isGoogleAuthorized = computed(() => store.getters['widgetSettings/isGoogleCalendarAuthorized']);

const authorizeGoogle = () => {
    store.dispatch('widgetSettings/authorizeGoogleCalendar');
}

</script>

<style scoped>
.amo-widget {
    /* Add the necessary AmoCRM style classes */
    /* For example: */
    background-color: #f2f2f2;
    border: 1px solid #e4e4e4;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    /* Add more styles as needed */
}

.widget-settings {
    /* Apply your AmoCRM style classes */
}

.settings__header {
    /* Apply your AmoCRM style classes */
    font-size: 24px;
    margin-bottom: 16px;
}

.settings__form {
    /* Apply your AmoCRM style classes */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.form__label {
    /* Apply your AmoCRM style classes */
    font-size: 16px;
    margin-bottom: 8px;
}

.form__group {
    /* Apply your AmoCRM style classes */
    margin-bottom: 16px;
}

.form__button {
    /* Apply your AmoCRM style classes */
    padding: 8px 16px;
    font-size: 14px;
    background-color: #0091EA;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.form__status {
    /* Apply your AmoCRM style classes */
    font-size: 14px;
}

.form__status--authorized {
    color: green;
}

.form__status--unauthorized {
    color: red;
}
</style>
