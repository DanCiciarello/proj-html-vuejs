<template>
    <div>
        
        <div class="cdShopCard d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-white">{{shopCardName}}</h2>
            <span class="cdShopCardDescription">{{shopCardDescription}}</span>
            <img :src="shopCardImg" :alt="shopCardName" class="cdShopCardImg py-4">
            <button type="button" class="btn btn-dark">{{shopCardBtnCta}}</button>
        </div>

    </div>
</template>

<script>
export default {

    // Name
    name: "ShopCardsItem.vue",

    // Props
    props: {
        shopCardName: String,
        shopCardDescription: String,
        shopCardImg: String,
        shopCardBtnCta: String,
    }

}
</script>

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/shopcard";

</style>