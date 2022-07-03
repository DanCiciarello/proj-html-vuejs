<template>
    <div>

        <!-- Header USPs -->
        <div class="cdHeaderUsps">
            <div class="container">
                <div class="row">
                    <div class="col-4 text-center" v-for="(item, i) in headerUSPs" :key="i">
                        <i class="pe-3" :class="item.icon"></i>
                        <span>{{item.text}}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hero -->
        <div class="cdHero">
            <div class="cdHeroOverlay">
                <div class="container cdHeroWrapper d-flex align-items-center text-white">
                    <h6>Find the best animal supplies</h6>
                </div>
            </div>
        </div>

        <!-- Hero CTA -->
        <div>

        </div>

    </div>
</template>

<script>
export default {

    // Name
    name: "JumboHero",

    // Data
    data(){
        return {
            headerUSPs: [
                {
                    icon: "fa-regular fa-map",
                    text: "International Shipping Services"
                },
                {
                    icon: "fa-regular fa-clock",
                    text: "See our store hours and services"
                },
                {
                    icon: "fa-solid fa-check",
                    text: "We price match to give you the best deals"
                },
            ]
        }
    }

}
</script>

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/jumbohero";

</style>