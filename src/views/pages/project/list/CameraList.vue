<script setup lang="ts">
    import '../Project.css'
    import cameraimg from '../../../../assets/images/pages/project/list/camera-img.png';
    import cctccamera from '../../../../assets/images/pages/project/list/cctv-camera-img.png';
    import projectlist2 from '../../../../assets/images/pages/project/list/project-img2.png';
</script>

<template>        
    <div class="camera_list">
        <VRow>
        <VCol cols="12" sm="6" md="3">
            <VCard class="card__template">
                <div class="card__image__element">
                    <VImg :src="projectlist2" cover/>
                    <div class="overlay__content">
                        <span class="camera__view"><VImg :src="cameraimg"/></span>
                        <span class="all__view">All</span>
                    </div>
                </div>
                <div class="card__body__element">
                    <VRow>
                        <VCol cols="12" sm="6" md="10">
                            <div class="project___short___detail">
                                <h4><a href="/project-detail" color="main-red">Project Name - 1</a></h4>
                                <h3><a href="/project-detail">Doha, Qatar</a></h3>
                            </div>
                        </VCol>
                        <VCol cols="12" sm="6" md="2">
                            <div class="cctc___camer">
                                <VImg :src="cctccamera" cover/>
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
        </VCol>
        <VCol cols="12" sm="6" md="3">
            <VCard class="card__template">
                <div class="card__image__element">
                    <VImg :src="projectlist2" cover/>
                    <div class="overlay__content">
                        <span class="camera__view"><VImg :src="cameraimg"/></span>
                        <span class="all__view">All</span>
                    </div>
                </div>
                <div class="card__body__element">
                    <VRow>
                        <VCol cols="12" sm="6" md="10">
                            <div class="project___short___detail">
                                <h4><a href="/project/project-detail">Project Name - 2</a></h4>
                                <h3><a href="/project/project-detail">Doha, Qatar</a></h3>
                            </div>
                        </VCol>
                        <VCol cols="12" sm="6" md="2">
                            <div class="cctc___camer">
                                <VImg :src="cctccamera" cover/>
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
        </VCol>
        <VCol cols="12" sm="6" md="3">
            <VCard class="card__template">
                <div class="card__image__element">
                    <VImg :src="projectlist2" cover/>
                    <div class="overlay__content">
                        <span class="camera__view"><VImg :src="cameraimg"/></span>
                        <span class="all__view">All</span>
                    </div>
                </div>
                <div class="card__body__element">
                    <VRow>
                        <VCol cols="12" sm="6" md="10">
                            <div class="project___short___detail">
                                <h4><a href="/project/project-detail">Project Name - 3</a></h4>
                                <h3><a href="/project/project-detail">Doha, Qatar</a></h3>
                            </div>
                        </VCol>
                        <VCol cols="12" sm="6" md="2">
                            <div class="cctc___camer">
                                <VImg :src="cctccamera" cover/>
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
        </VCol>
        <VCol cols="12" sm="6" md="3">
            <VCard class="card__template">
                <div class="card__image__element">
                    <VImg :src="projectlist2" cover/>
                    <div class="overlay__content">
                        <span class="camera__view"><VImg :src="cameraimg"/></span>
                        <span class="all__view">All</span>
                    </div>
                </div>
                <div class="card__body__element">
                    <VRow>
                        <VCol cols="12" sm="6" md="10">
                            <div class="project___short___detail">
                                <h4><a href="/project/project-detail">Project Name - 4</a></h4>
                                <h3><a href="/project/project-detail">Doha, Qatar</a></h3>
                            </div>
                        </VCol>
                        <VCol cols="12" sm="6" md="2">
                            <div class="cctc___camer">
                                <VImg :src="cctccamera" cover/>
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
        </VCol>

        <VCol cols="12" sm="6" md="3">
            <VCard class="card__template">
                <div class="card__image__element">
                    <VImg :src="projectlist2" cover/>
                    <div class="overlay__content">
                        <span class="camera__view"><VImg :src="cameraimg"/></span>
                        <span class="all__view">All</span>
                    </div>
                </div>
                <div class="card__body__element">
                    <VRow>
                        <VCol cols="12" sm="6" md="10">
                            <div class="project___short___detail">
                                <h4><a href="/project/project-detail">Project Name - 5</a></h4>
                                <h3><a href="/project/project-detail">Doha, Qatar</a></h3>
                            </div>
                        </VCol>
                        <VCol cols="12" sm="6" md="2">
                            <div class="cctc___camer">
                                <VImg :src="cctccamera" cover/>
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
        </VCol>
        <VCol cols="12" sm="6" md="3">
            <VCard class="card__template">
                <div class="card__image__element">
                    <VImg :src="projectlist2" cover/>
                    <div class="overlay__content">
                        <span class="camera__view"><VImg :src="cameraimg"/></span>
                        <span class="all__view">All</span>
                    </div>
                </div>
                <div class="card__body__element">
                    <VRow>
                        <VCol cols="12" sm="6" md="10">
                            <div class="project___short___detail">
                                <h4><a href="/project/project-detail">Project Name - 6</a></h4>
                                <h3><a href="/project/project-detail">Doha, Qatar</a></h3>
                            </div>
                        </VCol>
                        <VCol cols="12" sm="6" md="2">
                            <div class="cctc___camer">
                                <VImg :src="cctccamera" cover/>
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
        </VCol>
        <VCol cols="12" sm="6" md="3">
            <VCard class="card__template">
                <div class="card__image__element">
                    <VImg :src="projectlist2" cover/>
                    <div class="overlay__content">
                        <span class="camera__view"><VImg :src="cameraimg"/></span>
                        <span class="all__view">All</span>
                    </div>
                </div>
                <div class="card__body__element">
                    <VRow>
                        <VCol cols="12" sm="6" md="10">
                            <div class="project___short___detail">
                                <h4><a href="/project/project-detail">Project Name - 7</a></h4>
                                <h3><a href="/project/project-detail">Doha, Qatar</a></h3>
                            </div>
                        </VCol>
                        <VCol cols="12" sm="6" md="2">
                            <div class="cctc___camer">
                                <VImg :src="cctccamera" cover/>
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
        </VCol>
        <VCol cols="12" sm="6" md="3">
            <VCard class="card__template">
                <div class="card__image__element">
                    <VImg :src="projectlist2" cover/>
                    <div class="overlay__content">
                        <span class="camera__view"><VImg :src="cameraimg"/></span>
                        <span class="all__view">All</span>
                    </div>
                </div>
                <div class="card__body__element">
                    <VRow>
                        <VCol cols="12" sm="6" md="10">
                            <div class="project___short___detail">
                                <h4><a href="/project/projectdetail">Project Name - 8</a></h4>
                                <h3><a href="/project/projectdetail">Doha, Qatar</a></h3>
                            </div>
                        </VCol>
                        <VCol cols="12" sm="6" md="2">
                            <div class="cctc___camer">
                                <VImg :src="cctccamera" cover/>
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </VCard>
        </VCol>
    </VRow>
    </div>
</template>




