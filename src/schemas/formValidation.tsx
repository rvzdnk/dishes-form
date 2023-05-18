// import * as yup from "yup";
import { ObjectSchema, object, number, string } from "yup";
import { FormValues } from "../interfaces/formValues";

const nameRules =/^[a-zA-Z ]*$/;
const preparationTimeRules = /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]:?[0-5][0-9]+$))/;



export let formSchema: ObjectSchema<FormValues> = object({
    name:
        string()
        .min(2, "Dish name should be at least 2 letters")
        .max(20, "Dish name should be shorter than 20 letters")
        .matches(nameRules, {message: "Name can be only characters A-Z"})
        .required("Dish name is required"),
    preparation_time:
        string()
        .matches(preparationTimeRules, {message: "Please enter valid preparation time in format (HH(0-23):SS(0:59):MM(0:59))"})
        .required("Preparation time is required"),
    type:
        string()
        .oneOf(['pizza', 'soup', 'sandwich'] as const)
        .required("Type of dish is required"),
    no_of_slices:
        number()
        .when('type', {
            is: (type) => type==="pizza",
            then: (no_of_slices) => no_of_slices
                .required('Number of slices is required')
                .moreThan(0, "Number of slices must be higher than 0")
                .lessThan(50, "50 is the max diameter"),
          }),
    diameter:
        number()
        .when('type', {
            is: (type) => type==="pizza",
            then: (diameter) => diameter
                .required('Diameter is required')
                .moreThan(19.9, "Diameter must be higher than 20")
                .lessThan(50, "50 is the maximum of the slices"),
          }),
    spiciness_scale:
        number()
        .when('type', {
            is: (type) => type==="soup",
            then: (spiciness_scale) => spiciness_scale
                .required('Spiciness scale is required')
                .moreThan(0, "Spiceness scale must be higher than 0")
                .lessThan(10, "10 is the maximum of spiciness scale"),
          }),
    slices_of_bread:
        number()
        .when('type', {
            is: (type) => type==="sandwich",
            then: (slices_of_bread) => slices_of_bread
                .required('Slices of bread is required')
                .moreThan(0, "Number of slices must be higher than 0")
                .lessThan(50, "50 is the max number of slices"),
          }),
});
