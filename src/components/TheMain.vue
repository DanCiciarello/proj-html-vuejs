<template>
    <div>

        <!-- Hero -->
        <JumboHero />

        <!-- Browse by category -->
        <BrowseCategory />

        <!-- ShopCards -->
        <ShopCards />

        <!-- New Arrivals Weekly -->
        <NewArrivalsWeekly />

        <!-- All-time best sellers -->
        <AllTimeBestSellers />

        <!-- Users Testimonials -->
        <UsersTestimonials />

        <!-- Join our newsletter -->
        <JoinNewsletter />

        <!-- Recent articles -->
        <RecentArticles />

        <!-- Shop Boxes -->
        <ShopBoxes />

        <!-- Shop USPs -->
        <ShopUSPs />

        <!-- New Products -->
        <NewProducts />

    </div>
</template>

<script>

// Import
import JumboHero from './JumboHero.vue';
import BrowseCategory from './BrowseCategory.vue';
import ShopCards from './ShopCards.vue';
import NewArrivalsWeekly from './NewArrivalsWeekly.vue';
import AllTimeBestSellers from './AllTimeBestSellers.vue';
import UsersTestimonials from './UsersTestimonials.vue';
import JoinNewsletter from './JoinNewsletter.vue';
import RecentArticles from './RecentArticles.vue';
import ShopBoxes from './ShopBoxes.vue';
import ShopUSPs from './ShopUSPs.vue';
import NewProducts from './NewProducts.vue';

// Export
export default {
    
    // Name
    name: "TheMain",

    // Components
    components: { JumboHero, BrowseCategory, ShopCards, NewArrivalsWeekly, AllTimeBestSellers, UsersTestimonials, JoinNewsletter, RecentArticles, ShopBoxes, ShopUSPs, NewProducts },

}
</script>

<style lang="scss">

</style>