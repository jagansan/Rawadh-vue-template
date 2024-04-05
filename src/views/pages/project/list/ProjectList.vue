<script setup lang="ts">
    import '../../../../../assets/style/css/themevariable.scss'
    import '../../../../../assets/style/css/style.css'
    import Breadcrumb from '../Breadcrumb.vue';
    import CameraList from './CameraList.vue'
</script>

<template>
    <div class="project_list_element">
        <Breadcrumb />
        <div class="title__wrap primary">
            <h2 class="primary">Project List</h2>
        </div>
        <!-- <ImageCompareVue /> -->
        <CameraList />
    </div>
</template>