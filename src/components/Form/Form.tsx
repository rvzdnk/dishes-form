import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { formSchema } from "../../schemas/formSchema";
import { useAddNewDishMutation } from "../../redux/slices/dishesApi";
import { TextField, Select, MenuItem, FormControl, InputLabel, InputAdornment, OutlinedInput, Slider, Typography, Button, FormHelperText } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import { Wrapper, DishForm} from  "./Form.styled";
import { DISH_TYPES } from "../../constants/dishTypes";
import { FormValues } from "../../interfaces/formValues";
import { PatternFormat } from "react-number-format";

const initialValues : FormValues = {
    name: "",
    preparation_time: "",
    type: "",
}

export const Form:React.FC = () => {

    const [addNewDish] = useAddNewDishMutation();

    const { handleSubmit, values, handleChange, resetForm, errors, touched } =
        useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
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
        });

 return (
    <Wrapper
        whileHover={{
            scale: [1.1],
            transition: { duration: .5 },
        }}
        whileTap={{ scale: 0.9 }}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:.5}}
    >
        <DishForm onSubmit={handleSubmit}>
            <Typography variant="h5" align="center">Create new dish</Typography>
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
                    helperText={touched.name && errors.name}
                />
                <PatternFormat
                    customInput={TextField}
                    fullWidth
                    required
                    placeholder="00:00:00"
                    format="##:##:##"
                    variant="outlined"
                    margin="dense"
                    id="preparation_time"
                    name="preparation_time"
                    label="Preparation Time"
                    value={values.preparation_time}
                    onChange={handleChange}
                    error={touched.preparation_time && Boolean(errors.preparation_time)}
                    helperText={touched.preparation_time && errors.preparation_time}
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
                        aria-describedby="helper-type"
                        >
                        {DISH_TYPES.map(({value, label}) => (
                            <MenuItem
                                key={value}
                                value={value}
                            >
                                {label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText id="helper-type">{touched.type && errors.type}</FormHelperText>
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
                            helperText={touched.no_of_slices && errors.no_of_slices}
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
                            variant="outlined"
                        >
                            <InputLabel htmlFor="diameter">
                                Diameter
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Diameter"
                                id="diameter"
                                name="diameter"
                                label="Diameter"
                                value={values.diameter || ""}
                                onChange={handleChange}
                                error={touched.diameter && Boolean(errors.diameter)}
                                aria-describedby="helper-diameter"
                                type="number"
                                endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                inputProps={{
                                    step: 0.10,
                                    min: 20,
                                    max: 50,
                                    }}
                            />
                            <FormHelperText id="helper-diameter">{touched.diameter && errors.diameter}</FormHelperText>
                        </FormControl>
                    </>
                }
                {values.type === "soup" &&
                    <FormControl
                        margin="dense"
                        required
                        error={touched.spiciness_scale && Boolean(errors.spiciness_scale)}
                    >
                        <Typography gutterBottom align="center">
                            Spiciness level: {values.spiciness_scale}
                        </Typography>
                        <Slider
                            id="spiciness_scale"
                            name="spiciness_scale"
                            aria-valuetext="Spiciness scale"
                            value={values.spiciness_scale || 5}
                            onChange={handleChange}
                            aria-describedby="helper-spiciness_scale"
                            valueLabelDisplay="on"
                            step={1}
                            marks
                            min={1}
                            max={10}
                        />
                        <FormHelperText 
                            id="helper-spiciness_scale"
                            error={touched.spiciness_scale && Boolean(errors.spiciness_scale)}>
                                {touched.spiciness_scale && errors.spiciness_scale}
                        </FormHelperText>
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
                            value={values.slices_of_bread||""}
                            onChange={handleChange}
                            error={touched.slices_of_bread && Boolean(errors.slices_of_bread)}
                            helperText={touched.slices_of_bread && errors.slices_of_bread}
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