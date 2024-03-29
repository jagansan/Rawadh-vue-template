<script setup lang="ts">
    import sliderimage from '../../../../assets/images/pages/project/detail/project-img2.png'
</script>

<template>
    <div class="related__slider__element">
        <v-sheet class="mx-auto" elevation="1" >
            <v-slide-group class="pa-4" selected-class="bg-primary" show-arrows>
                <v-slide-group-item v-for="n in 20" :key="n" v-slot="{ toggle, selectedClass }">
                    <v-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="140" width="260" @click="toggle">
                        <div class="d-flex fill-height align-center justify-center">
                            <VImg :src="sliderimage" cover/>
                        </div>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>