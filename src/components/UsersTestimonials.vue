<template>
    <div>
        
        <div class="cdUsersTestimonials text-center">

            <div class="container">

                <!-- Section title -->
                <h2 class="text-white mb-5">Users testimonials</h2>
    
                <!-- Testimonials quotes list -->
                <div class="row">
                    <div class="col-4 g-5" v-for="(testimonial, i) in usersTestimonials" :key="i">
                        <UsersTestimonialsItem  :testimonial-quote="testimonial.quote"
                                                :testimonial-name="testimonial.name"
                                                :testimonial-img="testimonial.img"
                        />
                    </div>
                </div>
                
            </div>

        </div>

    </div>
</template>

<script>

// Import
import {state} from "../store";
import UsersTestimonialsItem from "./UsersTestimonialsItem.vue";

// Export
export default {

    // Name
    name: "UsersTestimonials",

    // Components
    components: { UsersTestimonialsItem },
    
    // Computed
    computed: {
        usersTestimonials() {
            return state.usersTestimonials;
        }
    },

}
</script>

<style lang="scss" scoped>

@import "../assets/scss/variables";

.cdUsersTestimonials {
    background-color: $primary;
    background-image: url('@/assets/img/bg-transparent-3.png');
    background-repeat: repeat-x;
    padding: 100px 0 200px 0;
}

</style>