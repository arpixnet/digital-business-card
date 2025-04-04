<script setup lang="ts">
    defineProps({
        level: {
            type: Number,
            default: 0,
            validator: (value: number) => value >= 0 && value <= 9
        }
    })
</script>

<template>
    <div class="flex flex-col-reverse gap-[2px] h-full">
        <div v-for="i in 9" :key="i" class="w-3 h-0.5 rounded-sm transition-colors duration-300" :class="[
            i <= level ?
                (i <= 3 ? 'bg-red-500' :
                    i <= 6 ? 'bg-yellow-500' :
                        'bg-green-500') :
                'bg-gray-700'
        ]"></div>
    </div>
</template>
