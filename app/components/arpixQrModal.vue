<script setup lang='ts'>
    import VueQrcode from '@chenfengyuan/vue-qrcode';

    const props = defineProps({
        type: {
            type: String,
            required: false,
            default: "text"
        },
        value: {
            type: String,
            required: true
        },
        isModal: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    const { type, value } = toRefs(props)

    let qrShow = ref(false)
    let qrValue = ref('')

    switch (type.value) {
        case 'email':
            qrValue.value = `mailto:${value.value}`
        break;
        case 'phone':
        case 'tel':
            qrValue.value = `tel:${value.value}`
        break;
        case 'text':
            qrValue.value = value.value
        break;
        case 'whatsapp':
            qrValue.value = `https://wa.me/${ value.value }`
        break;
    }

    // #####  qrModal  #####
    const qrModal = () => {
        qrShow.value = true
    }
</script>

<template>
    <div>
        <Icon v-if="isModal" class="cursor-pointer" name="cil:qr-code" @click="qrModal()" />
        <div v-else class="w-full flex justify-center p-2 bg-white shadow-md rounded-lg">
            <vue-qrcode :value="qrValue" :options="{ width: 110, margin: 0 }"></vue-qrcode>
        </div>

        <!-- #####  QR Modal ##### -->
        <Dialog v-model:visible="qrShow" modal>
            <template #container="{ closeCallback }">
                <div class="w-full flex justify-center p-3">
                    <vue-qrcode :value="qrValue" :options="{ width: 200, margin: 0 }"></vue-qrcode>
                </div>
            </template>
        </Dialog>
    </div>
</template>
