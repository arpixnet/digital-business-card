<script setup lang="ts">
    definePageMeta({
        colorMode: 'dark',
        layout: false
    })

    const { t } = useI18n()
    const config = useRuntimeConfig()

    const options = [
        {
            id: 'leonardo',
            title: t('home.options.leonardo.title'),
            subtitle: t('home.options.leonardo.subtitle'),
            description: t('home.options.leonardo.description'),
            icon: 'lucide:user',
            gradient: 'from-blue-500 to-blue-600',
            hoverGradient: 'from-blue-400 to-blue-500',
            action: () => navigateTo('/bc'),
            isExternal: false
        },
        {
            id: 'arpix',
            title: t('home.options.arpix.title'),
            subtitle: t('home.options.arpix.subtitle'),
            description: t('home.options.arpix.description'),
            icon: 'lucide:code',
            gradient: 'from-primary-500 to-primary-600',
            hoverGradient: 'from-primary-400 to-primary-500',
            action: () => window.open('https://arpixnet.com', '_blank'),
            isExternal: true
        },
        {
            id: 'estilo',
            title: t('home.options.estilo.title'),
            subtitle: t('home.options.estilo.subtitle'),
            description: t('home.options.estilo.description'),
            icon: 'lucide:shopping-bag',
            gradient: 'from-orange-500 to-orange-600',
            hoverGradient: 'from-orange-400 to-orange-500',
            action: () => window.open('https://estiloradical.co', '_blank'),
            isExternal: true
        }
    ]
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div class="w-full mx-auto px-8 py-16">
            <div class="flex flex-col gap-16 items-center">
                <!-- Header Section -->
                <div class="flex flex-col gap-8 items-center text-center max-w-4xl">
                    <h1 class="text-5xl md:text-6xl font-bold text-slate-200 animate-fade-in">
                        {{ t('home.welcome') }}
                    </h1>
                    <p class="text-xl text-slate-400 max-w-3xl animate-fade-in-delay-1">
                        {{ t('home.subtitle') }}
                    </p>
                </div>

                <!-- Options Grid -->
                <div class="w-full max-w-none grid grid-cols-1 lg:grid-cols-3 gap-8 px-0 md:px-8">
                    <div
                        v-for="(option, index) in options"
                        :key="option.id"
                        class="group relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/50 hover:shadow-2xl cursor-pointer"
                        :class="`animate-fade-in-delay-${index + 2}`"
                        @click="option.action()"
                    >
                        <!-- Gradient Background -->
                        <div class="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                             :class="option.gradient"></div>

                        <!-- Content -->
                        <div class="relative p-10 flex flex-col items-center text-center gap-8 min-h-[300px] justify-center">
                            <!-- Icon -->
                            <div class="w-20 h-20 rounded-full bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                 :class="option.gradient">
                                <Icon :name="option.icon" class="size-10 text-white" />
                            </div>

                            <!-- Title and Subtitle -->
                            <div class="flex flex-col gap-3">
                                <h3 class="text-3xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300">
                                    {{ option.title }}
                                </h3>
                                <p class="text-base font-semibold"
                                   :class="option.id === 'leonardo' ? 'text-blue-400' : option.id === 'arpix' ? 'text-primary-400' : 'text-orange-400'">
                                    {{ option.subtitle }}
                                </p>
                            </div>

                            <!-- Description -->
                            <p class="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300 max-w-sm">
                                {{ option.description }}
                            </p>

                            <!-- Action Button -->
                            <div class="mt-6 flex justify-center items-center gap-1 font-semibold transition-colors duration-300"
                                 :class="option.id === 'leonardo' ? 'text-blue-500 group-hover:text-blue-400' : option.id === 'arpix' ? 'text-primary-500 group-hover:text-primary-400' : 'text-orange-500 group-hover:text-orange-400'">
                                <span>{{ t('home.visit') }}</span>
                                <Icon :name="option.isExternal ? 'lucide:external-link' : 'lucide:arrow-right'"
                                      class="size-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </div>

                        <!-- Hover Effect -->
                        <div class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                             :class="option.hoverGradient"></div>
                    </div>
                </div>

                <!-- Footer Info -->
                <div class="text-center text-slate-500 text-base animate-fade-in-delay-5">
                    <p>{{ config.public.me.fullName }} - CTO & Full Stack Developer</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
    .animate-fade-in {
        animation: fadeIn 1s ease-out;
    }

    .animate-fade-in-delay-1 {
        animation: fadeIn 1s ease-out 0.3s both;
    }

    .animate-fade-in-delay-2 {
        animation: fadeIn 1s ease-out 0.6s both;
    }

    .animate-fade-in-delay-3 {
        animation: fadeIn 1s ease-out 0.9s both;
    }

    .animate-fade-in-delay-4 {
        animation: fadeIn 1s ease-out 1.2s both;
    }

    .animate-fade-in-delay-5 {
        animation: fadeIn 1s ease-out 1.5s both;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Hover effects for cards */
    .group:hover {
        transform: translateY(-8px);
    }

    /* Custom gradient background */
    .bg-gradient-to-br {
        background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }

    /* Smooth transitions for all interactive elements */
    * {
        transition-property: transform, opacity, color, background-color, border-color, box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    /* Enhanced shadow effects */
    .group:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
</style>
