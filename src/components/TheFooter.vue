<template>
    <div>

        <div class="cdFooter py-5">
            <div class="container">
    
                <!-- Top footer -->
                <div class="row py-5 g-5 text-white">
    
                    <!-- First column -->
                    <div class="col-3 d-flex flex-column text-white">
                        <img src="../assets/img/mobile-light-pet-logo-2x.png" alt="Footer Logo" width="70%">
                        <p class="pt-4">
                            1234 Avada Avenue Avadaville<br>
                            info@your-company.com<br>
                            Call us: (1) 234 5678
                        </p>
                    </div>
    
                    <!-- Second column -->
                    <div class="col-3">
                        <h4 class="pb-4">Shop by brand</h4>
                        <a href="#" v-for="(item, i) in footerMenuShop" :key="i">
                            <p class="text-white">{{item}}</p>
                        </a>
                    </div>
    
                    <!-- Third column -->
                    <div class="col-3">
                        <h4 class="pb-4">Useful links</h4>
                        <a href="#" v-for="(item, i) in footerMenuLinks" :key="i">
                            <p class="text-white">{{item}}</p>
                        </a>
                    </div>
    
                    <!-- Fourth column -->
                    <div class="col-3">
                        <div class="cdFooterNewsletterBox d-flex flex-column justify-content-center">
                            <h4>Subscribe to our newsletter</h4>
                            <div class="input cdInputGroup py-3">
                                <input type="text" class="form-control cdInputGroupText" placeholder="Insert your email...*"
                                    aria-describedby="addon-wrapping">
                            </div>
                            <button type="button" class="btn btn-dark">Subscribe</button>
                        </div>
                    </div>
    
                </div>
    
                <!-- Bottom footer -->
                <div class="text-center text-white py-5">
                    <a href="#">
                        <span v-for="item in footerMenuNav" :key="item.name" class="pe-5" :class="item.isActive ? 'text-white' : 'text-white-50'">
                            {{item.name}}
                        </span>
                    </a>
                </div>
                <div class="text-center">
                    <a href="#" v-for="item in footerMenuSocial" :key="item.name">
                        <i class="fa-brands pe-4 text-white" :class="item.icon"></i>
                    </a>
                </div>
    
            </div>
        </div>

        <div class="cdCopyright py-3 text-center text-white">
            <span class="cdCopyrightText">
                © Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress
            </span>
        </div>

    </div>
</template>

<script>

// Import
import {state} from "../store";

// Export
export default {

    // Name
    name: "TheFooter",

    // Computed
    computed: {
        footerMenuShop(){
            return state.footerMenuShop;
        },
        footerMenuLinks(){
            return state.footerMenuLinks;
        },
        footerMenuNav(){
            return state.footerMenuNav;
        },
        footerMenuSocial(){
            return state.footerMenuSocial;
        }
    }

}
</script>

<style lang="scss" scoped>

@import "../assets/scss/variables";
@import "../assets/scss/footer";

</style>