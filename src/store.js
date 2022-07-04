// Import Vue
import Vue from "vue";

// Data
export const state = Vue.observable({
    categoryList: [
        {
            name: "Bed",
            quantity: 6,
            img: require("@/assets/img/product-9-500x500.jpg"),
        },
        {
            name: "Food",
            quantity: 3,
            img: require("@/assets/img/product-3-500x500.jpg"),
        },
        {
            name: "Toys",
            quantity: 12,
            img: require("@/assets/img/product-2-500x500.jpg"),
        },
        {
            name: "Transport",
            quantity: 10,
            img: require("@/assets/img/product-4-500x500.jpg"),
        }
    ],
    shopCardsList: [
        {
            name: "Kibble",
            description: "Dry dog food",
            img: require("@/assets/img/food-transparent-18.png"),
            btnCta: "Shop dry food",
        },
        {
            name: "Moist",
            description: "Canned dog food",
            img: require("@/assets/img/food-transparent-17.png"),
            btnCta: "Shop moist food",
        },
        {
            name: "Frozen",
            description: "Freeze-Dried dog food",
            img: require("@/assets/img/food-transparent-16.png"),
            btnCta: "Shop frozen food",
        },
    ],
    bestSellersList: [
        {
            name: "Transport cage",
            discount: null,
            price: "$25.00",
            img: require("@/assets/img/product-21.jpg"),
        },
        {
            name: "Dog leash",
            discount: null,
            price: "$25.00",
            img: require("@/assets/img/product-20.jpg"),
        },
        {
            name: "Animal transport cage",
            discount: "$35.00",
            price: "$25.00",
            img: require("@/assets/img/product-16.jpg"),
        },
        {
            name: "Colorful cat leash",
            discount: null,
            price: "$12.00",
            img: require("@/assets/img/product-11.jpg"),
        },
    ],
    usersTestimonials: [
        {
            quote: "Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.",
            name: "Lisa Smith, ThemeFusion",
            img: require("@/assets/img/avatar-3-200x200.jpg"),
        },
        {
            quote: "Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.",
            name: "Melissa Green, ThemeFusion",
            img: require("@/assets/img/avatar-1-200x200.jpg"),
        },
        {
            quote: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.",
            name: "Sam Lewis, ThemeFusion",
            img: require("@/assets/img/avatar-4-200x200.jpg"),
        },
    ],
    newProductsList: [
        {
            name: "Colored pet bed",
            discount: null,
            price: "$18.00 - $26.00",
            img: require("@/assets/img/product-8.jpg"),
        },
        {
            name: "Colorful ball set",
            discount: null,
            price: "$29.00",
            img: require("@/assets/img/product-2.jpg"),
        },
        {
            name: "Dog bone",
            discount: "$29.00",
            price: "$18.00",
            img: require("@/assets/img/product-3.jpg"),
        },
        {
            name: "Animal transport bag",
            discount: null,
            price: "$29.00",
            img: require("@/assets/img/product-4.jpg"),
        },
        {
            name: "Animal transport cage",
            discount: null,
            price: "$35.00",
            img: require("@/assets/img/product-5.jpg"),
        },
        {
            name: "Closable cat litter",
            discount: null,
            price: "$16.00",
            img: require("@/assets/img/product-10.jpg"),
        },
    ],
})