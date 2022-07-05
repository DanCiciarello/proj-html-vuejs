<template>
    <div class="cdBestSellers">

        <div class="container py-5">

            <!-- Section title -->
            <div class="d-flex justify-content-between">
                <div>
                    <h5>All-time best sellers</h5>
                    <h2>Items everyone loves</h2>
                </div>
                <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-dark">View all products</button>
                </div>
            </div>

            <!-- Card list -->
            <div class="row py-5">
                <div class="col-3" v-for="(item, i) in bestSellersList" :key="i">
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

<script>

// Import
import ShopItem from './ShopItem.vue';
import {state} from "../store";

// Export
export default {
    // Name
    name: "AllTimeBestSellers",

    // Components
    components: { ShopItem },

    // Computed
    computed: {
        bestSellersList(){
            return state.bestSellersList;
        }
    }

}
</script>

<style lang="scss" scoped>

@import "../assets/scss/variables";

.cdBestSellers {

    h5 {
        color: $tertiary;
    }
}

</style>