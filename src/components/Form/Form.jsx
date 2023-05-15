import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useAddNewDish } from "../../redux/slices/dishesApi";
import { FormControl, TextField } from '@mui/material';
import { Wrapper, DishForm} from  "./From.styled";

export const Form = () => {

    const [addNewDish] = useAddNewDish();

    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: {
            name: "",
            prepation_time: "",
            type: "",
            diamater: "",
            no_of_slices: "",
            spiciness_scale: "",
            slices_of_bread: "",
        },
        onSubmit:
            async (values) => {
            await addNewDish(values)
                .unwrap()
                .then((id) => {
                    resetForm(id);
                    toast.success("Great, you add new dish!");
                })
                .catch((error) => {
                    toast.warn(error && `This is dish is already exist`);
                });
            },
        });

 return (
    <Wrapper>
        <DishForm onSubmit={handleSubmit}>
            <FormControl>
                <TextField 
                    fullWidth
                    required
                    variant="outlined"
                    margin="dense"
                    id="name"
                    name="name"
                    label="Dish name"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                />
                <TextField
                    fullWidth
                    required
                    variant="outlined"
                    margin="dense"
                    id="preparation_time"
                    name="preparation_time"
                    label="Dish name"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    type="number"
                    format="HH:mm:ss"
                />
            </FormControl>
        </DishForm>
    </Wrapper>

    );
};

export default Form;