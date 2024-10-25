<script setup lang="js">
    import IftaLabel from 'primevue/iftalabel';
    import DatePicker from 'primevue/datepicker';

    import { ref, watch } from 'vue';

    const props = defineProps({
        hourFormat: {
            type: String,
            default: '12'
        }
    })

    const emit = defineEmits(['update:time']);

    const time = ref(new Date());
    time.value.setHours(11, 43, 0);
    emit('update:time', time.value);

    watch(() => time.value, (newVal) => {
        emit('update:time', newVal);
    });
</script>

<template>
    <IftaLabel>
        <DatePicker v-model="time" fluid inputId="time" showIcon iconDisplay="input" variant="filled" timeOnly
            :hourFormat="hourFormat">
            <template #inputicon="slotProps">
                <i class="pi pi-clock" @click="slotProps.clickCallback" />
            </template>
        </DatePicker>
        <label for="date">Time</label>
    </IftaLabel>
</template>