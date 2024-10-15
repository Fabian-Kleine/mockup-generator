<template>
      <div class="px-6 py-8 md:px-12 lg:px-20 w-screen">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">X (Twitter) tweet</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">
                                <img src="/x-mockup.png" alt="Mockup" class="mb-4 w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/x" />
                        </div>
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-500/30 rounded-border min-w-10 w-10 h-10">
                            <i class="pi pi-twitter text-blue-500 dark:text-blue-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">YouTube Video</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">
                                <img src="/youtube-mockup.png" alt="Mockup" class="mb-4 w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/youtube" />
                        </div>
                        <div class="flex items-center justify-center bg-red-100 dark:bg-red-400/30 rounded-border min-w-10 w-10 h-10">
                            <i class="pi pi-youtube text-red-500 dark:text-red-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Customers</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">28441</div>
                        </div>
                        <div class="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-400/30 rounded-border">
                            <i class="pi pi-whatsapp text-green-500 dark:text-green-200 !text-xl" />
                        </div>
                    </div>
                    <span class="text-green-500 font-medium">520 </span>
                    <span class="text-surface-500 dark:text-surface-300">newly registered</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Comments</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">152 Unread</div>
                        </div>
                        <div class="w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-400/30 rounded-border">
                            <i class="pi pi-discord text-purple-500 dark:text-purple-200 !text-xl" />
                        </div>
                    </div>
                    <span class="text-green-500 font-medium">85 </span>
                    <span class="text-surface-500 dark:text-surface-300">responded</span>
                </div>
            </div>
        </div>
    </div>
</template>