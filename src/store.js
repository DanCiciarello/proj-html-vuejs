// Import Vue
import Vue from "vue";

// Data
export const state = Vue.observable({
    categoryList: [
        {
            name: "Bed",
            quantity: 6,
        },
        {
            name: "Food",
            quantity: 3,
        },
        {
            name: "Toys",
            quantity: 12,
        },
        {
            name: "Transport",
            quantity: 10,
        }
    ],
})