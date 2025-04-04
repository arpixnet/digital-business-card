<template>
    <div class="w-full h-full min-h-screen">
        <LayoutNavBar />
        
        <div class="container mx-auto px-4">
            <ToolsButton />
            <slot></slot>
        </div>
        <LayoutFooter />
    </div>
</template>
