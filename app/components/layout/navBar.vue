<script setup lang="ts">
    const { t } = useI18n()
    const route = useRoute()
    const config = useRuntimeConfig()
    const localePath = useLocalePath()

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

    const contactData = ref({
        name: config.public.me.fullName,
        email: config.public.me.email,
        phone: config.public.me.phone,
        title: t('index.title'),
        website: config.public.company.website,
        address: config.public.me.address,
        business: config.public.me.business,
        photo: `/images/avatar.jpg`
    })

    const convertImageToBase64 = async (url: string): Promise<string> => {
        try {
            const response = await fetch(url)
            const blob = await response.blob()
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result?.toString().split(',')[1] || '')
                reader.onerror = reject
                reader.readAsDataURL(blob)
            })
        } catch (error) {
            console.error('Error converting image:', error)
            return ''
        }
    }
    
    const generateVCard = async () => {
        if (import.meta.client) {
            try {
                const photoBase64 = await convertImageToBase64(contactData.value.photo)
                // The vcard must be kept without blank spaces.
                const vCardContent = `
BEGIN:VCARD
VERSION:3.0
N:${contactData.value.name.split(' ').reverse().join(';')}
FN:${contactData.value.name}
ORG:${contactData.value.business}
TITLE:${contactData.value.title}
${photoBase64 ? `PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}` : ''}
TEL;TYPE=WORK,VOICE:${contactData.value.phone}
ADR;TYPE=WORK:;;${contactData.value.address}
EMAIL;TYPE=WORK:${contactData.value.email}
URL:${contactData.value.website}
REV:${new Date().toISOString()}
END:VCARD`.trim()

                const blob = new Blob([vCardContent], { type: 'text/vcard' })
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.download = `${contactData.value.name.replace(/\s+/g, '_')}.vcf`
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                window.URL.revokeObjectURL(url)
            } catch (error) {
                console.error('Error generating vCard:', error)
            }
        }
    }
</script>

<template>
    <div class="mx-auto my-2 flex w-full items-center justify-center z-20 sticky top-[11px]">
        <header class="rounded-full">
            <div class="border border-primary-600/25 !bg-zinc-900/80 backdrop-blur-md rounded-full">
                <nav
                    class="flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out h-[45px] hover:gap-4">
                    <NuxtLink v-for="item in navigation" :id="item.name.toLowerCase()" :key="item.name"
                        :aria-label="item.name + ' navigation link'" :class="[
                            localePath(item.to) === route.path
                                ? 'border border-white/5 !bg-zinc-800/50 !text-primary-600 backdrop-blur-3xl'
                                : '!text-gray-500',
                        ]" :to="localePath(item.to)"
                        class="flex items-center rounded-full border border-transparent px-6 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:!bg-zinc-800/30 hover:backdrop-blur-3xl">
                        <Icon :name="item.icon" class="size-6 font-light" />
                    </NuxtLink>

                    <button
                        id="add-contact"
                        :aria-label="t('navigation.add_contact')"
                        @click="generateVCard"
                        class="flex items-center rounded-full border border-transparent px-6 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:!bg-zinc-800/30 hover:backdrop-blur-3xl !text-gray-500 hover:!text-white"
                    >
                        <Icon name="lucide:user-plus" class="size-6 font-light" />
                    </button>
                </nav>
            </div>
        </header>
    </div>
</template>
