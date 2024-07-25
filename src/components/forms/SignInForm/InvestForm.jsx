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
  Investment: 14,
  expectedReturn: "",
};

const validationSchema = Yup.object().shape({
  Purpose: Yup.string().required("Purpose is required"),
  Term: Yup.number("Term must be a number").required("Term is required"),
  Investment: Yup.number("Investment must be a number").required(
    "Investment is required"
  ),
  expectedReturn: Yup.number("Expected Return must be a number").required(
    "Expected Return is required"
  ),
});

export default function InvestForm({ isLoading, onSubmitHandler }) {
  const [sliderCount, setSliderCount] = useState(14);

  const handleSignInSubmit = async (values) => {
    console.log("Sign in form values", values);
    sessionStorage.setItem("fixedRate", sliderCount);
    onSubmitHandler();
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleBlur = () => {
    if (sliderCount < 0) {
      setSliderCount(1);
    } else if (sliderCount > 200) {
      setSliderCount(200);
    }
  };

  function estimateMonthlyInterest(monthlyAmount, termYears,targetAmount) {
    // Convert term in years to months
    let termMonths = termYears * 12;

    // Initial guess for monthly interest rate (assuming linear approximation)
    let monthlyRateGuess = (targetAmount - monthlyAmount * termMonths) / (monthlyAmount * termMonths);

    // Function to calculate remaining balance
    function remainingBalance(monthlyRate) {
        let balance = 0;
        let currentAmount = monthlyAmount;
        for (let i = 0; i < termMonths; i++) {
            balance += currentAmount;
            balance *= (1 + monthlyRate);
        }
        return balance - targetAmount;
    }

    // Iterative approach to refine the monthly interest rate using Newton's method
    let tolerance = 0.0001; // Adjust as needed
    let rate = monthlyRateGuess;
    let increment = 1;
    let tries = 0;
    while (Math.abs(remainingBalance(rate)) > tolerance && tries < 1000) {
        let balance = remainingBalance(rate);
        if (balance > 0) {
            rate += increment;
        } else {
            rate -= increment;
            increment /= 2;
        }
        tries++;
    }

    // Return the monthly interest rate (as a decimal)
    return rate;
  }

  return (
    <Formik
      sx={{ mt: 1 }}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSignInSubmit}
    >
      {(props) => (
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
            type="number"
            helperText={<ErrorMessage name="Term" />}
          />
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="expectedReturn"
            label="Expected Return Amount"
            id="expectedReturn"
            type="number"
            helperText={<ErrorMessage name="expectedReturn" />}
          />
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="Investment"
            label="Investment Amount"
            id="Investment"
            onChange={(e) => {
              props.handleChange(e);
              // si = ptr / 100
              // expectedReturn = (investment * term * rate) / 100;
              // rate = ((expectedReturn * 100) / investment) * term;
              // investment = (expectedReturn * 100) / (term * rate);
              // const rate =
              //   (Number(props.values.expectedReturn) * 100) /
              //   (Number(props.values.Investment) * Number(props.values.Term));
              const rate = estimateMonthlyInterest(
                props.values.Investment,
                props.values.Term,
                props.values.expectedReturn
              );
              setSliderCount((rate * 100).toFixed(2));
            }}
            helperText={<ErrorMessage name="Investment" />}
          />

          <Typography>Percentage of amount growth</Typography>
          <Stack spacing={1} direction="row" alignItems={"center"}>
            <IconButton
              onClick={() => {
                setSliderCount((present) => present - 1);
                const investment =
                  (Number(props.values.expectedReturn) * 100) /
                  (Number(props.values.Term) * Number(sliderCount));
                props.setFieldValue("Investment", Number(investment));
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
                // investment =  (expectedReturn * 100 ) / (term * rate)
                const investment =
                  (Number(props.values.expectedReturn) * 100) /
                  (Number(props.values.Term) * Number(newValue));
                props.setFieldValue("Investment", Number(investment));
              }}
              min={1}
              max={200}
              value={sliderCount}
            />
            <IconButton
              onClick={() => {
                setSliderCount((present) => present + 1);
                const investment =
                  (Number(props.values.expectedReturn) * 100) /
                  (Number(props.values.Term) * Number(sliderCount));
                props.setFieldValue("Investment", Number(investment));
              }}
            >
              <AddIcon />
            </IconButton>
            <Input
              value={sliderCount}
              size="small"
              onBlur={handleBlur}
              onChange={(event) => {
                if (Number(event.target.value) <= 0) {
                  setSliderCount(Number(1));
                  console.log("event.target.value");
                } else if (Number(event.target.value) > 200) {
                  setSliderCount(200);
                } else {
                  setSliderCount(Number(event.target.value));
                }
                const investment =
                  (Number(props.values.expectedReturn) * 100) /
                  (Number(props.values.Term) * Number(sliderCount));
                props.setFieldValue("Investment", Number(investment));
              }}
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
