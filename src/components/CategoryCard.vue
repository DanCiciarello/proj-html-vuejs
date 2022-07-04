<template>
    <div>

        {{categoryName}}
        {{categoryQuantity}}

    </div>
</template>

<script>

export default {

    // Name
    name: "CategoryCard",

    // Props
    props: {
        categoryName: String,
        categoryQuantity: Number,
    },

}

</script>

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/categorycard";

</style>