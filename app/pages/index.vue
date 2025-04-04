<script setup lang="ts">
    definePageMeta({
        colorMode: 'dark',
    })

    const phrases = [
        "Transformo tecnología en valor para tu empresa.",
        "Desarrollo soluciones que impulsan tu negocio.",
        "Automatizo procesos para maximizar tu eficiencia."
    ]
    const currentPhrase = ref(phrases[0])
    const phraseIndex = ref(0)

    onMounted(() => {
        const interval = setInterval(() => {
            phraseIndex.value = (phraseIndex.value + 1) % phrases.length
            currentPhrase.value = phrases[phraseIndex.value]
        }, 5000)

        return () => clearInterval(interval)
    })
</script>

<template>
    <div class="container mx-auto mt-8 mb-16">
        <div class="flex flex-col gap-10 items-center">
            <div
                class="w-40 h-40 mt-4 rounded-full bg-primary-500 flex items-center justify-center p-[2px] overflow-hidden">
                <NuxtImg src="/images/avatar.jpg" alt="Fotografía"
                    class="w-full h-full object-top object-cover rounded-full" loading="lazy" format="webp" />
            </div>

            <!-- Información personal con animaciones -->
            <div class="flex flex-col gap-8 md:gap-2 items-center">
                <h1 class="text-4xl font-semibold text-center text-slate-300 animate-fade-in">
                    Leonardo Vizcaya Savchenko
                </h1>
                <h2 class="text-slate-400 text-md text-center animate-fade-in-delay-1">
                    <span class="text-primary-500">Desarrollo de software</span> -
                    <span class="text-primary-400">Inteligencia Artificial</span> -
                    <span class="text-primary-300">Automatización</span>
                </h2>
                <p
                    class="h-16 text-2xl text-slate-500 text-center animate-fade-in-delay-2 flex items-center justify-center">
                    "{{ currentPhrase }}"
                </p>
            </div>

            <!-- Redes sociales con efectos hover -->
            <div class="flex flex-wrap gap-6 justify-center text-slate-300">
                <NuxtLink v-for="(link, index) in [
                    { url: 'https://www.linkedin.com/in/lvizcaya/', icon: 'garden:linkedin-fill-16' },
                    { url: 'https://github.com/arpixnet', icon: 'garden:github-fill-16' },
                    { url: 'https://x.com/leonardovizcaya', icon: 'garden:twitter-stroke-16' },
                    { url: 'https://api.whatsapp.com/send?phone=593997003308', icon: 'garden:whatsapp-stroke-16' },
                    { url: 'https://medium.com/@leonardovizcaya', icon: 'formkit:medium' }
                ]" :key="index" :to="link.url" target="_blank" class="hover:text-primary-100 cursor-pointer shadow">
                    <Icon :name="link.icon" size="26" />
                </NuxtLink>
            </div>

            <!-- Botones de acción con efectos mejorados -->
            <div class="flex flex-col md:flex-row gap-6 justify-center mt-4">
                <SpotlightButton severity="secondary" animate>
                    <NuxtLink to="https://calendly.com/arpix" target="_blank"
                        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                        <span class="text-slate-300">Agenda una reunión</span>
                        <Icon name="heroicons:calendar-days" class="size-6 text-slate-300" />
                    </NuxtLink>
                </SpotlightButton>

                <SpotlightButton severity="secondary" animate>
                    <NuxtLink to="tel:+593997003308" target="_blank"
                        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                        <span class="text-slate-300">Llámame</span>
                        <Icon name="heroicons:phone" class="size-5 text-slate-300" />
                    </NuxtLink>
                </SpotlightButton>
            </div>

            <!-- Sección de habilidades -->
            <div class="w-full max-w-2xl mt-8">
                <h3 class="text-2xl font-medium text-slate-300 text-center mb-6">Habilidades</h3>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div v-for="(skill, index) in [
                        { name: 'Frontend', icon: 'lucide:layout', color: 'from-blue-500 to-cyan-400' },
                        { name: 'Backend', icon: 'lucide:server', color: 'from-emerald-500 to-green-400' },
                        { name: 'IA', icon: 'lucide:brain', color: 'from-purple-500 to-violet-400' },
                        { name: 'DevOps', icon: 'lucide:git-branch', color: 'from-orange-500 to-amber-400' },
                        { name: 'Cloud', icon: 'lucide:cloud', color: 'from-sky-500 to-blue-400' },
                        { name: 'Automatización', icon: 'lucide:settings', color: 'from-red-500 to-rose-400' }
                    ]" :key="index"
                        class="bg-zinc-900/50 border border-white/5 rounded-lg p-4 backdrop-blur-sm hover:border-white/15 transition-all hover:transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex items-center gap-3">
                            <div class="w-fit h-fit p-3 rounded-lg flex items-center justify-center"
                                :class="`bg-gradient-to-br ${skill.color} bg-opacity-20`">
                                <Icon :name="skill.icon" class="size-5 text-white" />
                            </div>
                            <h4 class="text-lg font-medium text-slate-300">{{ skill.name }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
    .animate-fade-in {
        animation: fadeIn 0.8s ease-in-out;
    }

    .animate-fade-in-delay-1 {
        animation: fadeIn 0.8s ease-in-out 0.2s both;
    }

    .animate-fade-in-delay-2 {
        animation: fadeIn 0.8s ease-in-out 0.4s both;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .social-icon-link {
        @apply relative flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/50 border border-white/5 transition-all duration-300;
    }

    .social-icon-link:hover {
        @apply text-slate-200 border-primary-500/50 transform -translate-y-1 shadow-lg shadow-primary-500/20;
    }

    .social-icon-container {
        @apply flex items-center justify-center w-full h-full;
    }

    .social-icon-link:hover .social-icon-container {
        animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }
</style>
