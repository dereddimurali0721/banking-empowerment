import {
  Button,
  CircularProgress,
  IconButton,
  Input,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const initialValues = {
  Purpose: "",
  Term: "",
  Investment: "",
};

const validationSchema = Yup.object().shape({
  Purpose: Yup.string().required("Purpose is required"),
  Term: Yup.number("Term must be a number").required("Term is required"),
  Investment: Yup.number("Investment must be a number").required(
    "Investment is required"
  ),
});

export default function InvestForm({ isLoading, onSubmitHandler }) {
  const [sliderCount, setSliderCount] = useState(14);

  const handleSignInSubmit = async (values) => {
    console.log("Sign in form values", values);

    onSubmitHandler();
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleBlur = () => {
    if (sliderCount < 0) {
      setSliderCount(0);
    } else if (sliderCount > 200) {
      setSliderCount(200);
    }
  };

  return (
    <Formik
      sx={{ mt: 1 }}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSignInSubmit}
    >
      {() => (
        <Form>
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            id="Purpose"
            label="Purpose of Goal."
            name="Purpose"
            helperText={<ErrorMessage name="Purpose" />}
            autoFocus
          />
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="Term"
            label="Term"
            id="Term"
            helperText={<ErrorMessage name="Term" />}
          />
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="Investment"
            label="Investment Amount"
            id="Investment"
            helperText={<ErrorMessage name="Investment" />}
          />
          {/* <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="Percentage"
            label="Percentage of amount growth"
            id="Percentage"
            helperText={<ErrorMessage name="Percentage" />}
            value={sliderCount}
          /> */}
          <Typography>Percentage of amount growth</Typography>
          <Stack spacing={1} direction="row" alignItems={"center"}>
            <IconButton
              onClick={() => {
                setSliderCount((present) => present - 1);
              }}
            >
              <RemoveIcon />
            </IconButton>
            <Slider
              aria-label="Always visible"
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              defaultValue={sliderCount}
              onChange={(event, newValue) => {
                setSliderCount(newValue);
              }}
              min={1}
              max={200}
              value={sliderCount}
            />
            <IconButton
              onClick={() => {
                setSliderCount((present) => present + 1);
              }}
            >
              <AddIcon />
            </IconButton>
            <Input
              value={sliderCount}
              size="small"
              onBlur={handleBlur}
              onChange={(event) => {
                setSliderCount(Number(event.target.value));
              }}
              // inputProps={{
              //   step: 10,
              //   min: 0,
              //   max: 200,
              //   type: "number",
              //   "aria-labelledby": "input-slider",
              // }}
            />
          </Stack>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography>Invest</Typography>
              {isLoading && <CircularProgress size={20} />}
            </Stack>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
