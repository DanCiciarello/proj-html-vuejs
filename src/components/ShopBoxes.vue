<template>
    <div>

        <div class="d-flex mt-5">
            <div class="cdShopBox cdShopBoxLeft">
                <div class="cdOverlay text-white d-flex flex-column justify-content-center align-items-center">
                    <h6>{{shopBoxList[0].subtitle}}</h6>
                    <h2 class="pt-3 pb-5">{{shopBoxList[0].title}}</h2>
                    <button type="button" class="btn btn-light">{{shopBoxList[0].btnCta}}</button>
                </div>
            </div>

            <div class="cdShopBox cdShopBoxRight">
                <div class="cdOverlay text-white d-flex flex-column justify-content-center align-items-center">
                    <h6>{{shopBoxList[1].subtitle}}</h6>
                    <h2 class="pt-3 pb-5">{{shopBoxList[1].title}}</h2>
                    <button type="button" class="btn btn-light">{{shopBoxList[1].btnCta}}</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

// Import
import {state} from "../store";

// Export
export default {

    // Name
    name: "ShopBoxes",

    // Computed
    computed: {
        shopBoxList(){
            return state.shopBoxList;
        }
    }

}
</script>

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/shopbox";

</style>