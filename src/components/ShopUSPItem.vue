<template>
    <div class="text-white text-center py-5">

        <i class="fa-2xl" :class="shopUspItem.icon"></i>
        <p class="pt-3">{{shopUspItem.text}}</p>

    </div>
</template>

<!-- ----------------------------------------------------------------------------------- -->

<script>
export default {

    // Name
    name: "ShopUSPItem",

    // Props
    props: {
        shopUspItem: Object,
    }

}
</script>

<!-- ----------------------------------------------------------------------------------- -->

<style lang="scss">

</style>