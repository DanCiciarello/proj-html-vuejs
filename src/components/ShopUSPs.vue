<template>
    <div>

        <div class="cdShopUspContainer py-5">

            <div class="container">
                <div class="row">
                    <div class="col-3" v-for="(item,i) in shopUspList" :key="i">
                        <ShopUSPItem :shop-usp-item="item"/>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

// Import
import {state} from "../store";
import ShopUSPItem from "./ShopUSPItem.vue";

// Export
export default {
    
    // Name
    name: "ShopUSPs",
    
    // Computed
    computed: {
        shopUspList() {
            return state.shopUspList;
        }
    },

    // Components
    components: { ShopUSPItem }

}
</script>

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/shopusps";

</style>