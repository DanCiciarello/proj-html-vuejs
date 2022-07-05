<template>
    <div>

        <div class="container my-5">
            <div class="cdNewArrivalsWeekly">
                <div class="cdOverlay d-flex flex-column align-items-center justify-content-center text-white">
                    <h6>Find the best animal supplies</h6>
                    <h1 class="pt-2 pb-4">New arrivals weekly</h1>
                    <button type="button" class="btn btn-light">Learn more about us</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    // Name
    name: "NewArrivalsWeekly",

}
</script>

<style lang="scss" scoped>

@import "../assets/scss/variables";

.cdNewArrivalsWeekly {
    width: 100%;
    aspect-ratio: 1/.4;
    background-image: url('@/assets/img/banner-3-2x-scaled.jpg');
    background-size: cover;
}

</style>