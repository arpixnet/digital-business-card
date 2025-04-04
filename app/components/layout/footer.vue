<script setup lang="ts">
    const { t } = useI18n()
</script>

<template>
    <div class="w-full px-4 md:px-0 py-[70px] flex flex-col md:flex-row justify-center items-center gap-0 md:gap-2 bg-slate-950">
        <div class="w-fit text-xs text-center">{{ new Date().getFullYear() }} © Leonardo Vizcaya - {{ t('footer.rights') }}</div> <span class="hidden md:block">|</span>
        <ArpixLogo />
    </div>
</template>
