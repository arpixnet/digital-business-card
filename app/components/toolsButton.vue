<script setup lang="ts">
    const { t } = useI18n()
    const config = useRuntimeConfig()
    const currentUrl = ref(config.public.me.website)

    const shareUrl = () => {
        if (navigator.share) {
            navigator.share({
                title: config.public.me.fullName,
                text: t('navigation.bcard'),
                url: currentUrl.value
            })
            .catch(error => console.error('Error al compartir:', error))
        }
    }

    // const addToGoogleWallet = () => {
        
    // }

    // const addToAppleWallet = () => {
        
    // }

    const items = ref([
        {
            label: t('navigation.qr'),
            icon: 'qr',
            command: () => {}
        },
        {
            label: t('navigation.share'),
            icon: 'lucide:share',
            command: shareUrl
        },
        // {
        //     label: 'Google Wallet',
        //     icon: 'lineicons:google-wallet',
        //     command: addToGoogleWallet
        // },
        // {
        //     label: 'Apple Wallet',
        //     icon: 'fa6-brands:apple-pay',
        //     command: addToAppleWallet
        // }
    ])
</script>

<template>
    <div class="fixed bottom-32 md:bottom-24 right-3 z-40">
        <SpeedDial
            :model="items"
            ariaLabel="Tools"
            direction="right"
            type="semi-circle"
            :radius="60"
            buttonClass="p-button-secondary p-button-rounded"
            :style="{ position: 'fixed', left: '10px', top: '170px' }"
        >
            <template #item="{ item, toggleCallback }">
                <div 
                    v-if="item.icon !== 'qr'"
                    class="w-[46px] h-[46px] flex items-center justify-center rounded-full bg-zinc-900 border border-white/15 hover:bg-zinc-800 cursor-pointer"
                    @click="toggleCallback"
                    v-tooltip="{ value: item.label, showDelay: 400, hideDelay: 0 }"
                >
                    <Icon v-if="item.icon === 'fa6-brands:apple-pay'" :name="item.icon" class="size-7 text-slate-300" />
                    <Icon v-else :name="item.icon" class="size-5 text-slate-300" />
                </div>

                <div
                    v-else
                    class="w-[46px] h-[46px] flex items-center justify-center rounded-full bg-zinc-900 border border-white/15 hover:bg-zinc-800 cursor-pointer"
                    v-tooltip="{ value: item.label, showDelay: 400, hideDelay: 0 }"
                >
                    <ArpixQrModal  type="text" :value="currentUrl" :isModal="true" />
                </div>
            </template>
        </SpeedDial>
    </div>
</template>

<style scoped lang="css">
    :deep(.p-speeddial-button) {
        width: 46px !important;
        height: 46px !important;
    }
</style>
