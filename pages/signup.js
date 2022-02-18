import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { Grid, Container, Typography, Button } from "@mui/material";
import Image from "next/image";

const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Nama harus di isi"),
  email: Yup.string().required("Email / NIK harus diisi"),
  password: Yup.string()
    .required("Password harus diisi")
    .min(8, "Password minimal 8 karakter"),
});

function Login() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        height: "2000px",
        padding: "25px",
      }}
    >
      <a href="/">
        <Image
          src="/__images/netflix.svg"
          height="45px"
          width="167px"
          layout="intrinsic"
          alt="Netflix logo"
        />
      </a>
      <Container>
        <Grid
          width="400px"
          margin="auto"
          backgroundColor="#efefefef"
          padding="32px"
          borderRadius="8px"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            Sign up
          </Typography>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
              login(values.email, values.password)
                .then(async (res) => {
                  const token = res.data?.token.access_token;
                  console.log(res);

                  localStorage.setItem("token", token);

                  router.push("/profile");
                })
                .catch((err) => {
                  notifError(err.response.data.message);
                });
            }}
          >
            {({ errors, touched }) => (
              <Form style={{ display: "grid", gap: "5px" }}>
                <Field
                  name="firstName"
                  placeholder="masukan nama"
                  style={{ padding: "8px", borderRadius: "5px" }}
                />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
                {errors.nama && touched.nama ? <div>{errors.nama}</div> : null}
                <Field
                  name="email"
                  type="email"
                  placeholder="masukan email"
                  style={{ padding: "8px", borderRadius: "5px" }}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Field
                  name="password"
                  placeholder="masukan password"
                  style={{ padding: "8px", borderRadius: "5px" }}
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <Button type="submit" variant="contained">
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
