<script setup lang="ts">
    definePageMeta({
        colorMode: 'dark',
    })

    const companyInfo = {
        name: "Arpix Solutions",
        email: "contact@arpixnet.com",
        logoPath: "/images/arpix_logo.png",
        about: [
            "En Arpix Solutions, nos especializamos en el desarrollo de software empresarial, ofreciendo soluciones innovadoras y personalizadas que generan valor para su empresa a través de la tecnología.",
            "Nuestros servicios abarcan desarrollo de software de extremo a extremo, desde arquitecturas escalables hasta interfaces intuitivas, integrando inteligencia artificial generativa y modelos de lenguaje (LLM) para potenciar la automatización y toma de decisiones. Además, optimizamos la eficiencia operativa con automatización de flujos empresariales, integrando sistemas para reducir fricción y maximizar productividad.",
            "Trabajamos estrechamente con nuestros clientes para materializar sus ideas, brindando la asesoría tecnológica necesaria para llevar a cabo cada proyecto con éxito."
        ]
    }
</script>

<template>
    <div class="container mx-auto mt-8 mb-16">
        <div class="flex flex-col gap-10 items-center">
            <!-- Logo and Title -->
            <div class="flex flex-col items-center gap-6">
                <div class="w-40 h-40 flex items-center justify-center overflow-hidden">
                    <NuxtLink to="https://arpixnet.com" target="_blank">
                        <NuxtImg :src="companyInfo.logoPath" :alt="companyInfo.name"
                            class="w-full h-full object-contain" loading="lazy" format="webp" />
                    </NuxtLink>
                </div>

                <h1 class="text-4xl font-semibold text-center text-slate-300">
                    <NuxtLink to="https://arpixnet.com" target="_blank"
                        class="hover:text-primary-500 transition-colors">
                        {{ companyInfo.name }}
                    </NuxtLink>
                </h1>

                <div class="flex items-center gap-4 text-slate-400">
                    <div class="flex items-center gap-2">
                        <Icon name="lucide:globe" class="size-5" />
                        <NuxtLink to="https://arpixnet.com" target="_blank"
                            class="hover:text-primary-500 transition-colors">
                            arpixnet.com
                        </NuxtLink>
                    </div>

                    <div class="flex items-center gap-2">
                        <Icon name="lucide:mail" class="size-5" />
                        <a :href="`mailto:${companyInfo.email}`" class="hover:text-primary-500 transition-colors">
                            {{ companyInfo.email }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <div class="w-24 h-1 bg-primary-500 rounded-full"></div>

            <!-- About Us -->
            <div class="flex flex-col gap-6 max-w-3xl">
                <h2 class="text-2xl font-medium text-slate-300 text-center">Sobre Nosotros</h2>

                <div class="flex flex-col gap-4">
                    <p v-for="(paragraph, index) in companyInfo.about" :key="index"
                        class="text-slate-400 text-lg leading-relaxed">
                        {{ paragraph }}
                    </p>
                </div>
            </div>

            <!-- Services -->
            <div class="w-full max-w-3xl mt-8">
                <h2 class="text-2xl font-medium text-slate-300 text-center mb-8">Nuestros Servicios</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Service 1 -->
                    <div
                        class="bg-zinc-900/50 border border-white/5 rounded-lg p-6 backdrop-blur-sm hover:border-white/15 transition-all">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-fit h-fit bg-primary-500/20 p-3 rounded-lg flex items-center justify-center">
                                <Icon name="lucide:code" class="size-6 text-primary-500" />
                            </div>
                            <h3 class="text-xl font-medium text-slate-300">Desarrollo de Software</h3>
                        </div>
                        <p class="text-slate-400">Soluciones de software personalizadas, desde arquitecturas escalables
                            hasta interfaces intuitivas.</p>
                    </div>

                    <!-- Service 2 -->
                    <div
                        class="bg-zinc-900/50 border border-white/5 rounded-lg p-6 backdrop-blur-sm hover:border-white/15 transition-all">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-fit h-fit bg-primary-500/20 p-3 rounded-lg flex items-center justify-center">
                                <Icon name="lucide:brain" class="size-6 text-primary-500" />
                            </div>
                            <h3 class="text-xl font-medium text-slate-300">Inteligencia Artificial</h3>
                        </div>
                        <p class="text-slate-400">Integración de IA generativa y modelos de lenguaje (LLM) para
                            potenciar la automatización y toma de decisiones.</p>
                    </div>

                    <!-- Service 3 -->
                    <div
                        class="bg-zinc-900/50 border border-white/5 rounded-lg p-6 backdrop-blur-sm hover:border-white/15 transition-all">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-fit h-fit bg-primary-500/20 p-3 rounded-lg flex items-center justify-center">
                                <Icon name="lucide:settings" class="size-6 text-primary-500" />
                            </div>
                            <h3 class="text-xl font-medium text-slate-300">Automatización</h3>
                        </div>
                        <p class="text-slate-400">Optimización de la eficiencia operativa con automatización de flujos
                            empresariales.</p>
                    </div>

                    <!-- Service 4 -->
                    <div
                        class="bg-zinc-900/50 border border-white/5 rounded-lg p-6 backdrop-blur-sm hover:border-white/15 transition-all">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-fit h-fit bg-primary-500/20 p-3 rounded-lg flex items-center justify-center">
                                <Icon name="lucide:lightbulb" class="size-6 text-primary-500" />
                            </div>
                            <h3 class="text-xl font-medium text-slate-300">Asesoría Tecnológica</h3>
                        </div>
                        <p class="text-slate-400">Acompañamiento experto para materializar ideas y llevar a cabo
                            proyectos tecnológicos con éxito.</p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="mt-8">
                <SpotlightButton severity="secondary">
                    <NuxtLink to="https://calendly.com/arpix" target="_blank"
                        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                        <span class="text-slate-300">Agenda una consulta gratuita</span>
                        <Icon name="heroicons:calendar-days" class="size-10 md:size-6 text-slate-300" />
                    </NuxtLink>
                </SpotlightButton>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .container {
        animation: fadeIn 0.8s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
