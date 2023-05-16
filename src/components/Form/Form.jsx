import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { formValidation } from "../../schemas/formValidation";
import { useAddNewDishMutation } from "../../redux/slices/dishesApi";
import { TextField, Select, MenuItem, FormControl, InputLabel, InputAdornment, OutlinedInput, Slider, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Wrapper, DishForm} from  "./Form.styled";
import { PatternFormat } from 'react-number-format';



export const Form = () => {

    const dishType = ["pizza", "soup", "sandwich"]
    const [addNewDish] = useAddNewDishMutation();

    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: {
            name: "",
            preparation_time: "",
            type: "",
        },
        validationSchema:formValidation,
        onSubmit:
        async (values) => {
            await addNewDish(values)
                .unwrap()
                .then(() => {
                    resetForm();
                    toast.success("Great, you add new dish!");
                })
                .catch((error) => {
                    toast.warn(error && `Please make sure all fields are filled in correctly.`);
                });
            },
        enableReinitialze: true,
        });

 return (
    <Wrapper>
        <DishForm onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    required
                    placeholder="Name of the dish"
                    variant="outlined"
                    margin="dense"
                    id="name"
                    name="name"
                    label="Dish name"
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                />
                <PatternFormat
                    customInput={TextField}
                    fullWidth
                    required
                    placeholder="00:00:00"
                    variant="outlined"
                    margin="dense"
                    id="preparation_time"
                    name="preparation_time"
                    label="Preparation Time"
                    value={values.preparation_time}
                    onChange={handleChange}
                    format="##:##:##"
                    error={touched.preparation_time && Boolean(errors.preparation_time)}
                    />
                <FormControl
                    fullWidth
                    margin="dense"
                    required
                    >
                    <InputLabel id="type">
                        Dish Type
                    </InputLabel>
                    <Select
                        variant="outlined"
                        id="type"
                        labelId="type"
                        name="type"
                        label="Dish Type"
                        value={values.type}
                        onChange={handleChange}
                        error={touched.type && Boolean(errors.type)}
                        >
                        {dishType.map((type) => (
                            <MenuItem
                                key={type}
                                value={type}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {values.type === "pizza" &&
                    <>
                        <TextField
                            fullWidth
                            required
                            placeholder="Number of slices"
                            variant="outlined"
                            margin="dense"
                            id="no_of_slices"
                            name="no_of_slices"
                            label="Number of slices"
                            value={values.no_of_slices || ""}
                            onChange={handleChange}
                            error={touched.no_of_slices && Boolean(errors.no_of_slices)}
                            type="number"
                            inputProps={{
                                min: 1,
                                max: 50,
                                }}
                        />
                        <FormControl
                            fullWidth
                            margin="dense"
                            required
                        >
                            <InputLabel htmlFor="diameter">
                                Diameter
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Diameter"
                                variant="outlined"
                                id="diameter"
                                name="diameter"
                                label="Diameter"
                                value={values.diameter || ""}
                                onChange={handleChange}
                                error={touched.diameter && Boolean(errors.diameter)}
                                type="number"
                                endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                inputProps={{
                                    step: 0.10,
                                    min: 20,
                                    max: 50,
                                    }}
                            />
                        </FormControl>
                    </>
                }
                {values.type === "soup" &&
                    <FormControl fullWidth margin="dense" align="center">
                        <Typography gutterBottom>
                            Spiciness level: {values.spiciness_scale}
                        </Typography>
                        <Slider
                            id="spiciness_scale"
                            name="spiciness_scale"
                            required
                            defaultValue={1}
                            aria-valuetext="Spiciness scale"
                            value={Number(values.spiciness_scale) || Number()}
                            onChange={handleChange}
                            error={touched.spiciness_scale && Boolean(errors.spiciness_scale)}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                        />
                    </FormControl>
                }
                 {values.type === "sandwich" &&
                        <TextField
                            fullWidth
                            required
                            placeholder="Slices of bread"
                            variant="outlined"
                            margin="dense"
                            id="slices_of_bread"
                            name="slices_of_bread"
                            label="Slices of bread"
                            value={values.slices_of_bread || ""}
                            onChange={handleChange}
                            error={touched.slices_of_bread && Boolean(errors.slices_of_bread)}
                            type="number"
                            inputProps={{
                                min: 1,
                                max: 50,
                                }}
                        />
                    }
                <Button
                    size="large"
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                >
                    Submit
                </Button>
        </DishForm>
    </Wrapper>
    );
};

export default Form;