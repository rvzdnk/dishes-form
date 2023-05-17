import * as yup from "yup";

const nameRules =/^[a-zA-Z ]*$/;
const preparationTimeRules = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]:?[0-5][0-9]+$))/;

export const formValidation = yup.object({
    name: yup
        .string("Enter dish name")
        .min(2, "Dish name should be at least 2 letters")
        .max(20, "Dish name should be shorter than 20 letters")
        .matches(nameRules, {message: "Name can be only characters A-Z"})
        .required("Dish name is required"),
    preparation_time: yup
        .string("Enter preparation time")
        .matches(preparationTimeRules, {message: "Please enter valid preparation time in format (HH(0-23):SS(0:59):MM(0:59))"})
        .required("Preparation time is required"),
    type: yup
        .string("Select type of dish")
        .required("Type of dish is required"),
    no_of_slices: yup
        .number("Enter number of slices")
        .moreThan(0, "Number of slices must be higher than 0")
        .lessThan(50, "50 is the max diameter"),
        // .required("No of slices is required"),
    diameter: yup
        .number("Enter diameter")
        .moreThan(19.9, "Diameter must be higher than 20")
        .lessThan(50, "50 is the maximum of the slices"),
        // .required("Diameter is required"),
    spiciness_scale: yup
        .number("Enter spiceness scale")
        .moreThan(0, "Spiceness scale must be higher than 0")
        .lessThan(10, "10 is the maximum of spiciness scale"),
        // .required("Spiciness scale is required"),
    slices_of_bread: yup
        .number("Enter number of slices")
        .moreThan(0, "Number of slices must be higher than 0")
        .lessThan(50, "50 is the max number of slices"),
        // .required("Slices of bread is required"),
});