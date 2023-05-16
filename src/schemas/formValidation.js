import * as yup from "yup";

export const formValidation = yup.object({
    name: yup
        .string("Enter dish name")
        .min(2, "Dish name should be at least 2 letters")
        .required("Dish name is required"),
    preparation_time: yup
        .string("Enter preparation time")
        .required("Preparation time is required"),
    type: yup
        .string("Select type of dish")
        .required("Type of dish is required"),
    no_of_slices: yup
        .number("Enter number of slices")
        .moreThan(0, "Number of slices must be higher than 0")
        .lessThan(50, "50 is the max diameter"),
    diameter: yup
        .number("Enter diameter")
        .moreThan(20, "Diameter must be higher than 0")
        .lessThan(50, "50 is the maximum of the slices"),
    spiciness_scale: yup
        .number("Enter spiceness scale")
        .moreThan(0, "Spiceness scale must be higher than 0")
        .lessThan(10, "10 is the maximum of spiciness scale"),
    slices_of_bread: yup
        .number("Enter number of slices")
        .moreThan(0, "Number of slices must be higher than 0")
        .lessThan(50, "50 is the max diameter"),
});