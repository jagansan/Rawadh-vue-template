<script setup lang="ts">
    import camera1 from '../../../../assets/images/pages/project/detail/camera-img.png'
</script>

<template>
    <div class="camera_detail">
        <VRow>
            <VCol cols="12" sm="6" md="12">
                <div class="camera__image">
                    <VCard>
                        <VImg :src="camera1" cover/>
                    </VCard>
                </div>
            </VCol>
        </VRow>
    </div>
</template>