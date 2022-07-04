<template>
    <div>

        <div class="container py-5">
            <div class="row py-5">
                <div class="col-6 offset-3 text-center">
                    <h2 class="pb-3">Browse by category</h2>
                    <p>Augue purus et, tincidunt condimentum mauris. At nibh rutrum mi in. Nisi, vitae interdum eleifend dui, consequat nulla rhoncus dictum. Viverra.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3" v-for="(item, i) in categoryList" :key="i">
                    <CategoryCard   :category-name="categoryList[i].name"
                                    :category-quantity="categoryList[i].quantity"
                                    :category-img="categoryList[i].img"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

// Import
import CategoryCard from './CategoryCard.vue';
import {state} from "../store";

// Export
export default {
    // Name
    name: "BrowseCategory",

    // Components
    components: { CategoryCard },

    // Computed
    computed: {
        categoryList(){
            return state.categoryList;
        }
    },

}

</script>

<style lang="scss" scoped>

@import "../assets/scss/variables";
    
    h2 {
        color: $primary;
    }

</style>