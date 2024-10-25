<script setup lang="js">
const props = defineProps({
    title: String,
    image: String,
    to: String,
})
</script>

<template>
    <div class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
            <div class="flex justify-between mb-4 h-full">
                <div class="flex flex-col h-full">
                    <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">{{ props.title }}</span>
                    <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                        <img :src="props.image" alt="Mockup" class="rounded-md w-[90%]">
                    </div>
                    <Button class="mt-auto" as="router-link" label="Edit Mockup" :to="props.to" />
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>