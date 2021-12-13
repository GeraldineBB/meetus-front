import * as React from "react";
import TextField from "@mui/material/TextField";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { login } from "../../../actions/user";

export default function LoginForm() {
  const navigate = useNavigate()
  const {logged} = useSelector(state => state.user)
  const handleVerify = () => {
    if(logged == true){
      console.log(logged)
      return navigate("/");
    }
    return navigate("/login");
  }
  handleVerify();
  const dispatch = useDispatch()
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Champ requis";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Adresse email invalide";
          } else if (!values.password) {
            errors.password = "Champ requis";
          } else if (
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(
              values.password
            )
          ) {
            errors.password = "Mot de passe incorrect";
          }
          return errors;
        }}
        onSubmit={(values) => {
          dispatch(login(values))
          console.log(values)
        }}

      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="login">
            <h2>Se connecter</h2>
            <Form onSubmit={handleSubmit} method="post" /*action={myApi}*/>
              <div className="login__form__email">
                <TextField
                  fullWidth
                  label="Email"
                  className="loginForm"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <div className="login__form__password">
                <TextField
                  fullWidth
                  label="Mot de passe"
                  className="loginForm"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red" }}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div></div>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to="/passwordForgot"
                  >
                    <span className="login__form__password__forgot">
                      Mot de passe oublié ?
                    </span>
                  </NavLink>
                </div>
              </div>

              <div className="login__form__button">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Se connecter
                </Button>
              </div>
              <NavLink style={{ textDecoration: "none", color: "black" }} to="">
                <span className="alreadyAccount">
                  Vous possédez déjà un compte ?
                </span>
              </NavLink>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
