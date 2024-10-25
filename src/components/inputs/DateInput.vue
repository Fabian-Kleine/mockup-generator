<script setup lang="js">
    import IftaLabel from 'primevue/iftalabel';
    import DatePicker from 'primevue/datepicker';

    import { ref, watch } from 'vue';

    const emit = defineEmits(['update:date']);

    const date = ref(new Date(Date.now()));

    watch(() => date.value, (newVal) => {
        emit('update:date', newVal);
    });
</script>

<template>
    <IftaLabel>
        <DatePicker v-model="date" fluid inputId="date" showIcon iconDisplay="input" variant="filled"
            dateFormat="M dd, yy" />
        <label for="date">Date</label>
    </IftaLabel>
</template>