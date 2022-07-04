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
    recentArticlesList: [
        {
            img: require("@/assets/img/blog-1-800x800.jpg"),
            title: "How to 'loose leash walk' your dog",
            date: "April 21st, 2020",
        },
        {
            img: require("@/assets/img/blog-2-800x800.jpg"),
            title: "Stop cats from scratching furniture",
            date: "April 19th, 2020",
        },
        {
            img: require("@/assets/img/blog-3-800x800.jpg"),
            title: "Where to buy the best pet food",
            date: "April 18th, 2020",
        },
        {
            img: require("@/assets/img/blog-4-800x800.jpg"),
            title: "Proper care for your pet toys",
            date: "April 17th, 2020",
        },
    ],
    shopBoxList: [
        {
            subtitle: "Find the best animal supplies",
            title: "Popular accessories",
            btnCta: "View all toys accessories",
        },
        {
            subtitle: "Find the best food",
            title: "New food arrival",
            btnCta: "View all food products",
        },
    ],
    shopUspList: [
        {
            icon: "fa-solid fa-truck",
            text: "Free worldwide deliveries",
        },
        {
            icon: "fa-solid fa-map",
            text: "Find stores near you",
        },
        {
            icon: "fa-solid fa-dollar-sign",
            text: "Best prices guarranteed",
        },
        {
            icon: "fa-solid fa-credit-card",
            text: "All credit card accepted",
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