<script setup lang="ts">

</script>

<template>
    <div class="w-full h-full min-h-screen">
        <LayoutNavBar />
        <div class="container mx-auto px-4">
            <slot></slot>
        </div>
        <LayoutFooter />

        <LayoutScrollToTop />
    </div>
</template>

<style lang="css" scoped>

</style>
