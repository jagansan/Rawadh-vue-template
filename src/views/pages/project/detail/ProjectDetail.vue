<script setup lang="ts">
    import '../Project.css'
    import Breadcrumb from '../Breadcrumb.vue';
    import CameraDetail from '../detail/CameraDetail.vue';
    import RelatedProjectSlider from './RelatedProjectSlider.vue';
</script>

<template>
    <div class="project_detail_element">
        <Breadcrumb />
        <CameraDetail />
        <div class="related__wrap__element">
            <div class="title__wrap">
                <h2>Related Project</h2>
            </div>
            <RelatedProjectSlider />
        </div>
    </div>
</template>