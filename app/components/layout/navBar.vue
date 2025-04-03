<script setup lang="ts">
    const getNavigation = (where: any): any => {
        switch (where) {
            case 'home':
                return {
                    home: {
                        name: 'Home',
                        to: '/',
                        icon: 'lucide:house',
                    },
                    business: {
                        name: 'Business',
                        to: '/business',
                        icon: 'lucide:briefcase',
                    },
                    // blog: {
                    //     name: 'Blog',
                    //     to: '/blog',
                    //     icon: 'lucide:library',
                    // },
                    contact: {
                        name: 'Contact',
                        to: '/contact',
                        icon: 'lucide:mail',
                    },
                }
            default:
                return []
        }
    }
    const navigation = getNavigation('home') as Record<any, any>

    const route = useRoute()
    const localePath = useLocalePath()
</script>

<template>
    <div class="mx-auto my-2 flex w-full items-center justify-center z-20 fixed md:relative bottom-0 md:top-0">
        <header class="rounded-full">
            <div class="border border-white/10 !bg-zinc-900/80 backdrop-blur-md rounded-full">
                <nav
                    class="flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out h-[45px] hover:gap-4">
                    <NuxtLink v-for="item in navigation" :id="item.name.toLowerCase()" :key="item.name"
                        :aria-label="item.name + ' navigation link'" :class="[
                            localePath(item.to) === route.path
                                ? 'border border-white/5 !bg-zinc-800/50 !text-white backdrop-blur-3xl'
                                : '!text-gray-500',
                        ]" :to="localePath(item.to)"
                        class="flex items-center rounded-full border border-transparent px-6 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:!bg-zinc-800/30 hover:backdrop-blur-3xl">
                        <Icon :name="item.icon" class="size-6 font-light" />
                    </NuxtLink>
                </nav>
            </div>
        </header>
    </div>
</template>
