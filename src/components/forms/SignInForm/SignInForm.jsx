import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import signInUser from "../../../API/ApiCalls/sigiInuser";
import useUserContext from "../../../context/UserContext/useUserContext";

const initialValues = {
  customerId: "",
  password: "",
  rememberMe: false,
};

const validationSchema = Yup.object().shape({
  customerId: Yup.string().required("Customer Id is required"),
  password: Yup.string().required("Password is required"),
  rememberMe: Yup.boolean(),
});

export default function SignInForm() {
  const { userData, setUserData } = useUserContext();
  const navigate = useNavigate();

  const { isLoading, isError, mutate, isSuccess } = useMutation(signInUser, {
    onSuccess: (data) => {
      console.log(data.data.customerId);
      console.log(data.data.authentication);
      // setUserData();
      sessionStorage.setItem("customerId", data.data.customerId);
      // navigate("/home");
    },
  });

  const handleSignInSubmit = async (values) => {
    mutate(values);
  };

  if (isSuccess) {
    console.log("type of setUserData", setUserData);
    setUserData({
      isLoggedIn: true,
      firstName: "firstName",
      lastName: "lastName",
      authToken: "",
      userElevation: "",
      profileUrl: "",
    });
    navigate("/home");
  }

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
            id="customerId"
            label="Customer ID"
            name="customerId"
            autoComplete="customerId"
            helperText={<ErrorMessage name="customerId" />}
            autoFocus
          />
          <Field
            as={TextField}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={<ErrorMessage name="password" />}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox name="rememberMe" color="primary" onChange={() => {}} />
            }
            label="Remember me"
          />
          {isError && <Alert severity="error">Error message</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled:isLoading
          >
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Typography>sign in</Typography>
              {isLoading && <CircularProgress size={20} />}
            </Stack>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
