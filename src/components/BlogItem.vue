<template>
    <div>

        <div class="cdBlogItemImg">
            <img :src="blogItem.img" :alt="blogItem.title">
            <div class="cdBlogItemImgOverlay d-flex flex-column justify-content-center text-center">
                <a href="#">
                    <h5 class="text-white">{{blogItem.title}}</h5>
                    <span class="cdBlogItemCategory text-white">Tips & Tricks</span>
                </a>
            </div>
        </div>

        <div class="cdBlogItemInfo mt-4">
            <a href="#">
                <h5>{{blogItem.title}}</h5>
                <span class="cdBlogItemDate">{{blogItem.date}}</span>
            </a>
        </div>

    </div>
</template>

<script>
export default {

    // Name
    name: "BlogItem",

    // Props
    props: {
        blogItem: Object,
    }

}
</script>

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/blogitem";

</style>