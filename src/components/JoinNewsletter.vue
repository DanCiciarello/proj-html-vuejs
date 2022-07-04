<template>
    <div>

        <div class="container">
            <div class="cdJoinNewsletter">
                <!-- Overlay -->
                <div class="cdJoinNewsletterOverlay d-flex align-items-center">
                    <div class="cdJoinNewsletterText d-flex flex-column justify-content-center">
                        <h2>Join our newsletter</h2>
                        <p class="pt-3 pb-5">Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra vehicula nullam ut nisl.</p>
                            <div class="input d-flex cdInputGroup">
                                <input type="text" class="form-control cdInputGroupText" placeholder="Insert your email...*"
                                    aria-describedby="addon-wrapping">
                                <button type="button" class="btn btn-dark ms-3">Subscribe</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    // Name
    name: "JoinNewsletter",

}
</script>

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/joinnewsletter";

</style>