<template>
    <div>

        <div class="container py-5">

            <div class="text-center py-5">
                <h2>New products arrival</h2>
                <h5>Latest products</h5>
            </div>

            <div class="row">
                <div class="col-4" v-for="(item, i) in newProductsList" :key="i">
                    <ShopItem   :shop-item-img="item.img"
                                :shop-item-name="item.name"
                                :shop-item-price="item.price"
                                :shop-item-discount="item.discount"
                                />
                </div>
            </div>

        </div>

    </div>
</template>

<!-- ----------------------------------------------------------------------------------- -->

<script>

// Import
import ShopItem from './ShopItem.vue';
import {state} from "../store";

// Export
export default {

    // Name
    name: "NewProducts",

    // Components
    components: { ShopItem },

    // Computed
    computed: {
        newProductsList(){
            return state.newProductsList;
        }
    }
}
</script>

<!-- ----------------------------------------------------------------------------------- -->

<style lang="scss" scoped>

@import "../assets/scss/variables";

    h5 {
        color: $tertiary;
    }

</style>