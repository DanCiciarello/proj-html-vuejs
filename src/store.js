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
})