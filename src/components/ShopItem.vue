<template>
    <div>

        <!-- Product Image -->
        <div class="cdShopItemImage">
            <a href="#">
                <img :src="shopItemImg" :alt="shopItemName">
            </a>
            <div class="cdShopItemOverlay d-flex flex-column justify-content-center align-items-center">
                <div class="cdShopItemOverlayRound">
                    <a href="#">
                        <i class="fa-regular fa-circle-check fa-2xl text-white"></i>
                    </a>
                </div>
                <a href="#">
                    <h6 class="text-white pt-2">View cart</h6>
                </a>
            </div>
        </div>

        <!-- Product info -->
        <div class="cdShopItemInfo text-center pt-3">
            <a href="#"><h4>{{shopItemName}}</h4></a>
            <p>
                <span class="cdShopItemInfoDiscount pe-2 text-muted" v-if="shopItemDiscount !== null">
                    {{shopItemDiscount}}
                </span>
                {{shopItemPrice}}
            </p>
        </div>

    </div>
</template>

<!-- ----------------------------------------------------------------------------------- -->

<script>

// Export
export default {

    // Name
    name: "ShopItem",

    // Props
    props: {
        shopItemImg: String,
        shopItemName: String,
        shopItemPrice: String,
        shopItemDiscount: String,
    }

}

</script>

<!-- ----------------------------------------------------------------------------------- -->

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/shopitem";

</style>