<template>
    <div>

        <div class="container py-5">
            <div class="row">
                <div class="col-4" v-for="(card, i) in shopCardsList" :key="i">
                    <ShopCardsItem  :shop-card-name="shopCardsList[i].name"
                                    :shop-card-description="shopCardsList[i].description"
                                    :shop-card-img="shopCardsList[i].img"
                                    :shop-card-btn-cta="shopCardsList[i].btnCta" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>

// Import
import ShopCardsItem from './ShopCardsItem.vue';
import {state} from "../store";

// Export
export default {

    // Name
    name: "ShopCards",

    // Components
    components: { ShopCardsItem },

    // Computed
    computed: {
        shopCardsList(){
            return state.shopCardsList;
        }
    }

}
</script>

<style lang="scss">

</style>