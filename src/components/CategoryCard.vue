<template>
    <div>

        <a href="#">
            <div class="cdCategoryCard d-flex justify-content-center align-items-center">
                <img :src="categoryImg" alt="Img">
            </div>
        </a>
        <div class="cdCategoryCardInfo text-center pt-4">
            <a href="#">
                <h4>
                    {{categoryName}} ({{categoryQuantity}})
                </h4>
            </a>
        </div>

    </div>
</template>

<!-- ----------------------------------------------------------------------------------- -->

<script>

export default {

    // Name
    name: "CategoryCard",

    // Props
    props: {
        categoryName: String,
        categoryQuantity: Number,
        categoryImg: String,
    },

}

</script>

<!-- ----------------------------------------------------------------------------------- -->

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/categorycard";

</style>