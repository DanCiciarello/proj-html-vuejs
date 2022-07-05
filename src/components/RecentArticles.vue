<template>
    <div>

        <div class="container">

            <!-- Section title -->
            <div class="text-center pb-5">
                <h2 class="pb-2">Get the best tips & tricks</h2>
                <h5>Recent articles</h5>
            </div>

            <!-- Blog articles -->
            <div class="row">
                <div class="col-3" v-for="(item, i) in recentArticlesList" :key="i">
                    <BlogItem :blog-item="item"/>
                </div>
            </div>

            <div class="text-center py-5">
                <button type="button" class="btn btn-dark">Read all articles</button>
            </div>

        </div>

    </div>
</template>

<!-- ----------------------------------------------------------------------------------- -->

<script>

// Import
import BlogItem from './BlogItem.vue';
import {state} from "../store";

// Export
export default {
    
    // Name
    name: "RecentArticles",

    // Components
    components: { BlogItem },

    // Computed
    computed: {
        recentArticlesList(){
            return state.recentArticlesList;
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