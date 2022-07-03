<template>
    <nav>

        <!-- User Nav -->
        <div class="cdUserNav">
            <div class="container">
                <div class="row">

                    <!-- Logo -->
                    <div class="col-2 d-flex align-items-center">
                        <a href="#"><img src="../assets/img/dark-pet-logo-2x.png" alt="Nav Logo" width="200"></a>
                    </div>

                    <!-- Search bar -->
                    <div class="col-4 d-flex align-items-center justify-content-end">
                        <div class="input-group flex-nowrap cdInputGroup">
                            <span class="input-group-text cdInputGroupIcon" id="addon-wrapping"><i
                                    class="fa-solid fa-magnifying-glass"></i></span>
                            <input type="text" class="form-control cdInputGroupText" placeholder="Search..."
                                aria-describedby="addon-wrapping">
                        </div>
                    </div>

                    <!-- CTA number -->
                    <div class="col-4 d-flex align-items-center justify-content-center">
                        <span><strong>Questions?</strong> Call us: 1.800.123.4567</span>
                    </div>

                    <!-- User Menu Icons -->
                    <div class="col-2 d-flex align-items-center justify-content-end">
                        <i class="fa-solid fa-bag-shopping pe-3"></i>
                        <i class="fa-regular fa-user"></i>
                    </div>

                </div>
            </div>
        </div>

        <!-- Menu Nav -->
        <div class="cdMenuNav">
            <div class="navbar navbar-expand-lg bg-white">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown pe-4">
                                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                                    Home
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown pe-4">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                </ul>
                            </li>
                            <li class="nav-item pe-4">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item pe-4">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item pe-4">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item dropdown pe-4">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop by brand
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                    <li><a class="dropdown-item" href="#">Sub-page</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>

<script>
export default {

    // Name
    name: "TheHeader",

}
</script>

<style lang="scss">

@import "../assets/scss/variables";
@import "../assets/scss/theheader";

</style>