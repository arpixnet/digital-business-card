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
                    // contact: {
                    //     name: 'Contact',
                    //     to: '/contact',
                    //     icon: 'lucide:mail',
                    // },
                }
            default:
                return []
        }
    }
    const navigation = getNavigation('home') as Record<any, any>

    const route = useRoute()
    const localePath = useLocalePath()
    
    const addContact = () => {
        const contactData = {
            name: "Leonardo Vizcaya Savchenko",
            email: "lvizcaya@arpixnet.com",
            phone: "+593997003308",
            title: "Desarrollo de software - IA - Automatización",
            website: "https://arpixnet.com",
            address: "Quito, Ecuador",
            business: "Arpix Solutions"
        }

        const vcard = `BEGIN:VCARD
            VERSION:3.0
            FN:${contactData.name}
            TEL;TYPE=CELL:${contactData.phone}
            EMAIL:${contactData.email}
            TITLE:${contactData.title}
            URL:${contactData.website}
            ADR:${contactData.address}
            ORG:${contactData.business}
            END:VCARD
        `;
        
        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'leonardo-vizcaya.vcf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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

                    <button
                        id="add-contact"
                        aria-label="Add contact information"
                        @click="addContact"
                        class="flex items-center rounded-full border border-transparent px-6 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:!bg-zinc-800/30 hover:backdrop-blur-3xl !text-gray-500 hover:!text-white"
                    >
                        <Icon name="lucide:user-plus" class="size-6 font-light" />
                    </button>
                </nav>
            </div>
        </header>
    </div>
</template>
