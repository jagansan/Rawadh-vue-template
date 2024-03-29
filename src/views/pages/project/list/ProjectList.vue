<script setup lang="ts">
    import '../Project.css'
    import Breadcrumb from '../Breadcrumb.vue';
    import CameraList from '../list/CameraList.vue'
</script>

<template>
    <div class="project_list_element">
        <Breadcrumb />
        <div class="title__wrap">
            <h2>Project List</h2>
        </div>
        <CameraList />
    </div>
</template>