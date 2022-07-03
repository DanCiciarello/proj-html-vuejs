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
                <div class="container">
                    <div class="row">
                        <div class="col-6">
                            <div class="cdHeroWrapper d-flex flex-column justify-content-center align-items-start text-white">
                                <h6>Find the best animal supplies</h6>
                                <h1 class="mt-4 mb-5">We know animals are a part of your family, let us help take care of them.</h1>
                                <button type="button" class="btn btn-light">Learn more about us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hero CTA -->
        <div class="cdHeroCta">
            <div class="container d-flex justify-content-center">
                <div>
                    <img src="../assets/img/food-transparent-5.png" alt="Dog Food">
                </div>
                <div class="d-flex align-items-center">
                    <span>
                        Get $25 OFF your first purchase of our homemade pet food!
                        <a href="#" class="text-white ps-4">Visit the shop</a>
                    </span>
                </div>
            </div>
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