<template>
    <div>

        <div class="testimonialImg pb-4">
            <img :src="testimonialImg" alt="testimonialName">
        </div>

        <div class="testimonialInfo">
            <p class="text-white">{{testimonialQuote}}</p>
            <p class="text-white-50">{{testimonialName}}</p>
        </div>

    </div>
</template>

<!-- ----------------------------------------------------------------------------------- -->

<script>

export default {

    // Name
    name: "UsersTestimonialsItem",

    // Props
    props: {
        testimonialQuote: String,
        testimonialName: String,
        testimonialImg: String,
    }
    
}

</script>

<!-- ----------------------------------------------------------------------------------- -->

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/userstestimonialsitem";

</style>