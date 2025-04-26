<script setup lang="ts">
    definePageMeta({
        colorMode: 'dark',
    })

    const { t } = useI18n()

    const currentPhrase = ref(t('index.phrases.0'))
    const phraseIndex = ref(0)
    const config = useRuntimeConfig()

    onMounted(() => {
        const interval = setInterval(() => {
            phraseIndex.value = (phraseIndex.value + 1) % 3
            currentPhrase.value = t(`index.phrases[${phraseIndex.value}]`);
        }, 5000)

        return () => clearInterval(interval)
    })
</script>

<template>
    <div class="container mx-auto mt-8 mb-16">
        <div class="flex flex-col gap-10 items-center">
            <div
                class="w-40 h-40 mt-4 rounded-full bg-primary-500 flex items-center justify-center p-[2px] overflow-hidden">
                <NuxtImg src="/images/avatar.jpg" :alt="t('index.photo')" size="156x156" width="156" height="156" preload 
                    class="w-full h-full object-top object-cover rounded-full" loading="eager" format="webp" />
            </div>

            <!-- Personal information -->
            <div class="flex flex-col gap-8 md:gap-2 items-center">
                <h1 
                    class="text-3xl md:text-4xl font-semibold text-center text-slate-300 animate-fade-in"
                    style="content-visibility: auto; contain-intrinsic-size: 80px;"
                >
                    {{ config.public.me.fullName }}
                </h1>
                <h2 class="text-slate-400 text-md text-center animate-fade-in-delay-1">
                    <span class="text-primary-500">{{ t('index.title1') }}</span> -
                    <span class="text-primary-400">{{ t('index.title2') }}</span> -
                    <span class="text-primary-300">{{ t('index.title3') }}</span>
                </h2>
                <p
                    class="h-16 text-2xl text-slate-500 text-center animate-fade-in-delay-2 flex items-center justify-center">
                    "{{ currentPhrase }}"
                </p>
            </div>

            <!-- Social media icons -->
            <div class="flex flex-wrap gap-6 justify-center text-slate-300">
                <NuxtLink v-for="(link, index) in [
                    { url: 'https://www.linkedin.com/in/lvizcaya/', icon: 'garden:linkedin-fill-16', ariaLabel: 'LinkedIn' },
                    { url: 'https://github.com/arpixnet', icon: 'garden:github-fill-16', ariaLabel: 'GitHub' },
                    { url: 'https://x.com/leonardovizcaya', icon: 'garden:twitter-stroke-16', ariaLabel: 'Twitter' },
                    { url: `https://api.whatsapp.com/send?phone=${config.public.me.whatsapp}`, icon: 'garden:whatsapp-stroke-16', ariaLabel: 'WhatsApp' },
                    { url: 'https://medium.com/@leonardovizcaya', icon: 'formkit:medium', ariaLabel: 'Medium' }
                ]" :key="index" :to="link.url" target="_blank" class="hover:text-primary-100 cursor-pointer shadow" :aria-label="link.ariaLabel">
                    <Icon :name="link.icon" size="26" />
                </NuxtLink>
            </div>

            <!-- Action buttons -->
            <div class="flex flex-col md:flex-row gap-6 justify-center mt-4">
                <NuxtLink to="https://calendly.com/arpix" target="_blank"
                    class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                    <Button severity="secondary" animate class="h-10 border-slate-100/15">
                        <span class="text-slate-300">{{ t('index.schedule_meeting') }}</span>
                        <Icon name="heroicons:calendar-days" class="size-6 text-slate-300" />
                    </Button>
                </NuxtLink>

                <a :href="`tel://${config.public.me.phone}`" target="_blank"
                    class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                    <Button severity="secondary" animate class="h-10 border-slate-100/15">
                        <span class="text-slate-300">{{ t('index.call_me') }}</span>
                        <Icon name="heroicons:phone" class="size-5 text-slate-300" />
                    </Button>
                </a>
            </div>

            <!-- Skills section -->
            <div class="w-full max-w-4xl mt-12">
                <h3 class="text-2xl font-medium text-slate-300 text-center mb-8">{{ t('index.skills') }}</h3>

                <div class="relative mx-auto px-4 py-8 border border-zinc-800/50 rounded-xl bg-zinc-950/80 backdrop-blur-sm">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                        <div v-for="(skill, index) in [
                            { name: t('index.skill_names.frontend'), icon: 'lucide:layout', level: 9 },
                            { name: t('index.skill_names.backend'), icon: 'lucide:server', level: 9 },
                            { name: t('index.skill_names.ai'), icon: 'lucide:brain', level: 7 },
                            { name: t('index.skill_names.automation'), icon: 'lucide:settings', level: 8 },
                            { name: t('index.skill_names.it_management'), icon: 'lucide:briefcase', level: 8 },
                            { name: t('index.skill_names.leadership'), icon: 'lucide:users', level: 8 }
                        ]" :key="index"
                            class="relative border border-zinc-800/40 rounded-lg overflow-hidden bg-zinc-900/60 transition-all duration-300 hover:border-zinc-700/50 hover:shadow-lg"
                        >
                            <div class="flex items-center justify-between p-3">
                                <div class="flex items-center">
                                    <Icon :name="skill.icon" class="size-5 text-slate-400 mr-3" />
                                    <span class="text-primary-500 font-medium text-shadow-neon">{{ skill.name }}</span>
                                </div>

                                <SkillLevel :level="skill.level" />
                            </div>
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

    .text-shadow-neon {
        text-shadow: 0 0 5px rgba(255, 215, 0, 0.7), 0 0 10px rgba(255, 215, 0, 0.5);
    }
</style>
