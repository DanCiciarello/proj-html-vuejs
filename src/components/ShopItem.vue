<template>
    <div>

        <!-- Product Image -->
        <div class="cdShopItemImage">
            <a href="#">
                <img :src="shopItemImg" :alt="shopItemName">
            </a>
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

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/shopitem";

</style>