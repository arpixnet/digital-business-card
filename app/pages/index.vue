<script setup lang="ts">
    definePageMeta({
        colorMode: 'dark',
    })
</script>

<template>
    <div class="container mx-auto mt-8">
        <div class="flex flex-col gap-10 items-center">
            <div
                class="w-40 h-40 mt-4 rounded-full bg-primary-800 flex items-center justify-center p-[2px] overflow-hidden">
                <NuxtImg src="/images/avatar.jpg" alt="Fotografía"
                    class="w-full h-full object-top object-cover rounded-full" loading="lazy" format="webp" />
            </div>

            <div class="flex flex-col gap-8 md:gap-2 items-center">
                <h1 class="text-4xl font-semibold text-center text-slate-300">
                    Leonardo Vizcaya Savchenko
                </h1>
                <h2 class="text-slate-400 text-md text-center">Desarrollo de software - Inteligencia Artificial -
                    Automatización</h2>
                <p class="text-2xl text-slate-500 text-center">
                    "Transformo tecnología en valor para tu empresa."
                </p>
            </div>

            <div class="flex flex-wrap gap-6 justify-center text-slate-500">
                <NuxtLink to="https://www.linkedin.com/in/lvizcaya/" target="_blank"
                    class="hover:text-slate-200 cursor-pointer">
                    <Icon name="garden:linkedin-fill-16" size="26" />
                </NuxtLink>

                <NuxtLink to="https://github.com/arpixnet" target="_blank" class="hover:text-slate-200 cursor-pointer">
                    <Icon name="garden:github-fill-16" size="26" />
                </NuxtLink>

                <NuxtLink to="https://x.com/leonardovizcaya" target="_blank"
                    class="hover:text-slate-200 cursor-pointer">
                    <Icon name="garden:twitter-stroke-16" size="26" />
                </NuxtLink>

                <NuxtLink to="https://api.whatsapp.com/send?phone=593997003308" target="_blank"
                    class="hover:text-slate-200 cursor-pointer">
                    <Icon name="garden:whatsapp-stroke-16" size="26" />
                </NuxtLink>

                <NuxtLink to="https://medium.com/@leonardovizcaya" target="_blank"
                    class="hover:text-slate-200 cursor-pointer">
                    <Icon name="formkit:medium" size="26" />
                </NuxtLink>
            </div>

            <div class="flex flex-col md:flex-row gap-6 justify-center">
                <SpotlightButton severity="secondary">
                    <NuxtLink to="https://calendly.com/arpix" target="_blank"
                        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                        <span class="text-slate-300">Agenda una reunión</span>
                        <Icon name="heroicons:calendar-days" class="size-6 text-slate-300" />
                    </NuxtLink>
                </SpotlightButton>

                <SpotlightButton severity="secondary" class="">
                    <NuxtLink to="tel:+593997003308" target="_blank"
                        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                        <span class="text-slate-300">Llámame</span>
                        <Icon name="heroicons:phone" class="size-5 text-slate-300" />
                    </NuxtLink>
                </SpotlightButton>
            </div>
        </div>
    </div>
</template>
